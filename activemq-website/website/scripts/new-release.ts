/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Creates the page of a new release. The news post, the home page entry and
 * the download page tables are then derived from it at build time.
 *
 *   pnpm new-release classic 6.2.11 [--date yyyy-mm-dd] [--java 17+]
 *                                   [--summary "..."] [--dry-run] [--force]
 *
 * The release date defaults to today, the day the release is announced, and
 * the Java version to the one of the previous release of the same series. The
 * changes listed in the GitHub release are added to the page as a comment, to
 * pick the highlights from.
 */

import fs from 'node:fs';
import path from 'node:path';
import {parseArgs} from 'node:util';
import {
  classicReleaseDir,
  collectReleases,
  compareVersions,
  formatDate,
  siteDir,
} from './lib/releases.ts';
import {currentReleasePrefixes} from '../src/data/currentReleases.ts';

const USAGE =
  'Usage: pnpm new-release classic <version> [--date yyyy-mm-dd] [--java 17+] ' +
  '[--summary "..."] [--dry-run] [--force]';

function fail(message: string): never {
  console.error(`${message}\n\n${USAGE}`);
  process.exit(1);
}

const {values: options, positionals} = parseArgs({
  allowPositionals: true,
  options: {
    date: {type: 'string'},
    java: {type: 'string'},
    summary: {type: 'string'},
    'dry-run': {type: 'boolean', default: false},
    force: {type: 'boolean', default: false},
  },
});

const [component, version] = positionals;
if (component !== 'classic') {
  fail(component ? `Unsupported component "${component}", only "classic" is supported.` : 'Missing component.');
}
if (!version || !/^\d+\.\d+\.\d+$/.test(version)) {
  fail(`Invalid version "${version ?? ''}", expected major.minor.patch.`);
}

const today = new Date();
const releaseDate =
  options.date ??
  [today.getFullYear(), today.getMonth() + 1, today.getDate()]
    .map((part) => String(part).padStart(2, '0'))
    .join('-');
if (!/^\d{4}-\d{2}-\d{2}$/.test(releaseDate)) {
  fail(`Invalid date "${releaseDate}", expected yyyy-mm-dd.`);
}

const [major, minor, patch] = version.split('.').map(Number);
const series = `${major}.${minor}`;
const slug = `classic-${[major, minor, patch].map((part) => String(part).padStart(2, '0')).join('-')}`;
const file = path.join(classicReleaseDir, `${slug}.mdx`);
if (fs.existsSync(file) && !options.force) {
  fail(`${path.relative(siteDir, file)} already exists, use --force to overwrite it.`);
}

// The Java requirement rarely changes within a series, so default to the one of
// the newest earlier release of the series, or of any series for a new one.
const classicReleases = collectReleases().filter(
  (release) => release.component === 'classic' && compareVersions(release.version, version) < 0,
);
const previous =
  classicReleases.find((release) => release.version.startsWith(`${series}.`)) ?? classicReleases[0];
const javaVersion = options.java ?? previous?.javaVersion;
if (!javaVersion) {
  fail('Cannot infer the Java version, pass it with --java.');
}

const summary =
  options.summary ??
  (patch === 0
    ? `ActiveMQ ${version} is the first release, starting the ${series}.x series.`
    : `ActiveMQ ${version} is a maintenance release on the ${series}.x series.`);

const tag = `activemq-${version}`;
const releaseNotes = `https://github.com/apache/activemq/releases/tag/${tag}`;

/** The "What's Changed" entries of the GitHub release, as markdown list items. */
async function githubChanges(): Promise<string[]> {
  const headers: Record<string, string> = {Accept: 'application/vnd.github+json'};
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  try {
    const response = await fetch(
      `https://api.github.com/repos/apache/activemq/releases/tags/${tag}`,
      {headers},
    );
    if (!response.ok) {
      console.warn(`Warning: no GitHub release found for ${tag} (HTTP ${response.status}).`);
      return [];
    }
    const {body} = (await response.json()) as {body?: string};
    // Entries look like "* <title> by @<user> in https://github.com/apache/activemq/pull/<n>".
    return (body ?? '')
      .split(/\r?\n/)
      .map((line) => line.match(/^\* (.+?) by @\S+ in (https:\/\/\S+\/pull\/(\d+))$/))
      .filter((match) => match !== null)
      .map(([, title, url, number]) => `- ${title} ([#${number}](${url}))`);
  } catch (error) {
    console.warn(`Warning: could not fetch the GitHub release for ${tag}: ${String(error)}`);
    return [];
  }
}

const changes = await githubChanges();
const highlights = changes.length
  ? [
      '{/*',
      '  Pick the highlights of the release from its GitHub changes, list them',
      '  after an "It especially includes:" line and delete this comment.',
      '',
      // "*/" would end the MDX comment early.
      ...changes.map((change) => `  ${change.replaceAll('*/', '* /')}`),
      '*/}',
      '',
    ].join('\n')
  : '';

const frontMatter = [
  `title: ActiveMQ ${version} Release`,
  `version: ${version}`,
  `release_date: ${releaseDate}`,
  `java_version: ${javaVersion}`,
  `release_notes: ${releaseNotes}`,
  `shortDescription: ${JSON.stringify(summary)}`,
].join('\n');

const intro =
  patch === 0
    ? `This is a new milestone for the project, starting the ${series}.x series.`
    : `This is a maintenance release on the ${series}.x series.`;

const page = `---
${frontMatter}
---

import ClassicRelease from '@site/src/components/ClassicRelease';

<ClassicRelease frontMatter={frontMatter}>

Apache ActiveMQ ${version} was released on ${formatDate(releaseDate)}.

${intro}

${highlights}
You can find details on the [release notes](${releaseNotes}).

</ClassicRelease>
`;

if (options['dry-run']) {
  console.log(page);
  process.exit(0);
}

fs.writeFileSync(file, page);
console.log(`Created ${path.relative(siteDir, file)}.`);
console.log('Next steps:');
console.log('  - Review the page, and list the highlights of the release.');
if (!currentReleasePrefixes.includes(`${series}.`)) {
  console.log(
    `  - ${series}.x is a new series: add '${series}.' to src/data/currentReleases.ts, ` +
      'and remove the series it replaces.',
  );
}
console.log('  - Preview it with `pnpm start`: /news, the home page and the download page are updated.');
