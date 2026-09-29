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
 * Collects every published release of every component from its source of
 * truth, so the news feed, the home page and the download pages are all
 * derived from the same data:
 *
 * - ActiveMQ Classic: the front matter of the release pages in
 *   src/data/releases/classic/, served below /components/classic/download.
 * - Apache.NMS.ActiveMQ: the front matter of the release pages in
 *   src/pages/components/nms/providers/activemq/downloads/.
 * - Apache.NMS.API and Apache.NMS.AMQP: src/data/nmsReleases.ts.
 *
 * Only pages declaring a `release_date` are releases; older pages without one
 * are kept for reference but are not announced, as on the original Jekyll site.
 */

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {
  nmsAmqpCurrentPrefixes,
  nmsAmqpReleases,
  nmsApiCurrentPrefixes,
  nmsApiReleases,
} from '../../src/data/nmsReleases.ts';
import {currentReleases} from '../../src/utils/releases.ts';

export const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const classicReleaseDir = path.join(siteDir, 'src/data/releases/classic');
const nmsActiveMqReleaseDir = path.join(siteDir, 'src/pages/components/nms/providers/activemq/downloads');

export type Component = 'classic' | 'nms';

export interface Release {
  component: Component;
  title: string;
  version: string;
  /** ISO `yyyy-mm-dd`. */
  releaseDate: string;
  /** One line summary; may use markdown emphasis. */
  summary?: string;
  /** Site path of the page describing the release. */
  url: string;
  releaseNotes?: string;
  javaVersion?: string;
  /** Path of the announcement below /news. */
  newsSlug: string;
}

/** Normalises a YAML date, which gray-matter parses into a Date, to `yyyy-mm-dd`. */
export function isoDate(value: unknown): string {
  const iso = value instanceof Date ? value.toISOString() : String(value);
  if (!/^\d{4}-\d{2}-\d{2}/.test(iso)) {
    throw new Error(`Invalid release date: ${String(value)}`);
  }
  return iso.slice(0, 10);
}

/** Compares dotted version numbers numerically, e.g. 5.19.10 > 5.19.9. */
export function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) {
      return diff;
    }
  }
  return 0;
}

/** Newest first; releases published the same day are ordered by version. */
export function compareReleases(a: Release, b: Release): number {
  return b.releaseDate.localeCompare(a.releaseDate) || compareVersions(b.version, a.version);
}

type PageFrontMatter = {
  title: string;
  version?: string;
  release_date?: unknown;
  release_notes?: string;
  java_version?: string | number;
  shortDescription?: string;
};

function readReleasePages(
  dir: string,
  extension: string,
): {slug: string; frontMatter: PageFrontMatter}[] {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(extension) && !file.startsWith('index.'))
    .map((file) => ({
      slug: path.basename(file, extension),
      frontMatter: matter(fs.readFileSync(path.join(dir, file), 'utf8')).data as PageFrontMatter,
    }))
    .filter(({frontMatter}) => frontMatter.release_date !== undefined)
    .map((page) => {
      if (!page.frontMatter.version) {
        throw new Error(`${path.join(dir, page.slug + extension)} has a release_date but no version`);
      }
      return page;
    });
}

function classicReleases(): Release[] {
  return readReleasePages(classicReleaseDir, '.mdx').map(({slug, frontMatter}) => ({
    component: 'classic',
    title: frontMatter.title,
    version: String(frontMatter.version),
    releaseDate: isoDate(frontMatter.release_date),
    summary: frontMatter.shortDescription,
    url: `/components/classic/download/${slug}`,
    releaseNotes: frontMatter.release_notes,
    javaVersion: frontMatter.java_version === undefined ? undefined : String(frontMatter.java_version),
    newsSlug: `releases/activemq-${frontMatter.version}`,
  }));
}

function nmsActiveMqReleases(): Release[] {
  return readReleasePages(nmsActiveMqReleaseDir, '.md').map(({slug, frontMatter}) => ({
    component: 'nms',
    title: frontMatter.title,
    version: String(frontMatter.version),
    releaseDate: isoDate(frontMatter.release_date),
    summary: frontMatter.shortDescription,
    url: `/components/nms/providers/activemq/downloads/${slug}`,
    releaseNotes: frontMatter.release_notes,
    newsSlug: `releases/nms-activemq-${frontMatter.version}`,
  }));
}

function nmsApiReleaseList(): Release[] {
  const current = new Set(
    currentReleases(nmsApiReleases, nmsApiCurrentPrefixes).map((release) => release.version),
  );
  return nmsApiReleases.map((release) => ({
    component: 'nms',
    title: `Apache.NMS.API ${release.version} Release`,
    version: release.version,
    releaseDate: release.releaseDate,
    summary: release.shortDescription,
    // The NMS API has no page per release, only the current and past release lists.
    url: current.has(release.version)
      ? '/components/nms/nms-api-downloads'
      : '/components/nms/nms-api-past-releases',
    releaseNotes: release.releaseNotes,
    newsSlug: `releases/nms-api-${release.version}`,
  }));
}

function nmsAmqpReleaseList(): Release[] {
  return nmsAmqpReleases.map((release) => ({
    component: 'nms',
    title: `Apache.NMS.AMQP ${release.version} Release`,
    version: release.version,
    releaseDate: release.releaseDate,
    summary: release.shortDescription,
    url: release.slug
      ? `/components/nms/providers/amqp/downloads/${release.slug}`
      : '/components/nms/providers/amqp/downloads',
    releaseNotes: release.releaseNotes,
    newsSlug: `releases/nms-amqp-${release.version}`,
  }));
}

/** Every announced release, newest first. */
export function collectReleases(): Release[] {
  return [
    ...classicReleases(),
    ...nmsActiveMqReleases(),
    ...nmsApiReleaseList(),
    ...nmsAmqpReleaseList(),
  ].sort(compareReleases);
}

/** Strips the markdown emphasis a summary may use, for plain text contexts. */
export function plainText(markdown: string): string {
  return markdown.replace(/(\*\*|__)(.*?)\1/g, '$2');
}
