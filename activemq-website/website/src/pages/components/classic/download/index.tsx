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

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import releases from '@site/src/data/generated/releases.json';
import {formatNewsDate} from '@site/src/components/News';
import {currentReleasePrefixes} from '@site/src/data/currentReleases';

// Generated from the release pages by scripts/generate-release-news.ts, newest first.
const classicReleases = releases.filter((release) => release.component === 'classic');

/** The newest release of each current series, in the order they are declared. */
const currentReleases = currentReleasePrefixes
  .map((prefix) => classicReleases.find((release) => release.version.startsWith(prefix)))
  .filter((release) => release !== undefined);

type SeriesStatus = {
  series: string;
  latest: string;
  date: string;
  current: boolean;
};

// Series whose releases predate the release_date front matter, so cannot be
// derived from the release pages.
const legacySeries: SeriesStatus[] = [
  { series: '5.14.x', latest: '5.14.5', date: 'Apr 25th, 2017', current: false },
  { series: '5.13.x', latest: '5.13.5', date: 'Dec 16th, 2016', current: false },
  { series: '5.12.x', latest: '5.12.3', date: 'Feb 3rd, 2016', current: false },
  { series: '5.11.x', latest: '5.11.4', date: 'Feb 3rd, 2016', current: false },
];

function seriesOf(version: string): string {
  return version.split('.').slice(0, 2).join('.');
}

/** The newest release of every series, newest series first. */
const seriesStatus: SeriesStatus[] = [];
for (const release of classicReleases) {
  const series = `${seriesOf(release.version)}.x`;
  if (!seriesStatus.some((status) => status.series === series)) {
    seriesStatus.push({
      series,
      latest: release.version,
      date: formatNewsDate(release.releaseDate),
      current: currentReleasePrefixes.includes(`${seriesOf(release.version)}.`),
    });
  }
}
seriesStatus.sort((a, b) => compareSeries(b.series, a.series));
seriesStatus.push(...legacySeries);

function compareSeries(a: string, b: string): number {
  const [aMajor, aMinor] = a.split('.').map(Number);
  const [bMajor, bMinor] = b.split('.').map(Number);
  return aMajor - bMajor || aMinor - bMinor;
}

export default function DownloadPage(): JSX.Element {
  return (
    <Layout title="Download ActiveMQ">
      <div className="container margin-vert--lg">
        <h1>Download ActiveMQ</h1>
        <p>
          These are the current ActiveMQ releases. For prior releases, please see the{' '}
          <Link to="/components/classic/documentation/download-archives">past releases</Link> page.
        </p>
        <p>
          It is important to <a href="#verify-the-integrity-of-downloads">verify the integrity</a> of the files you download.
        </p>

        <h4>Summary Table of ActiveMQ Series Status</h4>
        <table>
          <thead>
            <tr>
              <th>Series</th>
              <th>Status</th>
              <th>Latest Patch Version</th>
              <th>Date of Release</th>
            </tr>
          </thead>
          <tbody>
            {seriesStatus.map((s) => (
              <tr key={s.series} style={{backgroundColor: s.current ? '#dff0d8' : '#f0f0f0'}}>
                <td>{s.series}</td>
                <td>{s.current ? <strong>Stable - Supported</strong> : <em>Deprecated</em>}</td>
                <td>{s.latest}</td>
                <td>{s.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h5>Status Descriptions</h5>
        <p><strong>Stable - Supported</strong>: Actively supported and recommended for production use. This version receives regular updates, including new features, security patches, and bug fixes.</p>
        <p><strong>Deprecated</strong>: Reached end-of-life and is no longer maintained. Deprecated versions do not receive updates. Not recommended for new deployments; users are encouraged to upgrade to a stable version for ongoing support.</p>

        {currentReleases.map((release) => (
          <div key={release.version}>
            <h4>ActiveMQ Classic {release.version} ({formatNewsDate(release.releaseDate)})</h4>
            <p>
              <a href={release.releaseNotes}>Release Notes</a> |{' '}
              <Link to={release.url}>Release Page</Link> |{' '}
              <Link to="/components/classic/documentation">Documentation</Link> |{' '}
              Java compatibility: <strong>{release.javaVersion}</strong>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Download</th>
                  <th>SHA512</th>
                  <th>Signature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows</td>
                  <td><a href={`https://www.apache.org/dyn/closer.cgi?filename=/activemq/${release.version}/apache-activemq-${release.version}-bin.zip&action=download`}>apache-activemq-{release.version}-bin.zip</a></td>
                  <td><a href={`https://downloads.apache.org/activemq/${release.version}/apache-activemq-${release.version}-bin.zip.sha512`}>SHA512</a></td>
                  <td><a href={`https://downloads.apache.org/activemq/${release.version}/apache-activemq-${release.version}-bin.zip.asc`}>ASC</a></td>
                </tr>
                <tr>
                  <td>Unix/Linux/Cygwin</td>
                  <td><a href={`https://www.apache.org/dyn/closer.cgi?filename=/activemq/${release.version}/apache-activemq-${release.version}-bin.tar.gz&action=download`}>apache-activemq-{release.version}-bin.tar.gz</a></td>
                  <td><a href={`https://downloads.apache.org/activemq/${release.version}/apache-activemq-${release.version}-bin.tar.gz.sha512`}>SHA512</a></td>
                  <td><a href={`https://downloads.apache.org/activemq/${release.version}/apache-activemq-${release.version}-bin.tar.gz.asc`}>ASC</a></td>
                </tr>
                <tr>
                  <td>Source</td>
                  <td><a href={`https://www.apache.org/dyn/closer.cgi?filename=/activemq/${release.version}/activemq-parent-${release.version}-source-release.zip&action=download`}>activemq-parent-{release.version}-source-release.zip</a></td>
                  <td><a href={`https://downloads.apache.org/activemq/${release.version}/activemq-parent-${release.version}-source-release.zip.sha512`}>SHA512</a></td>
                  <td><a href={`https://downloads.apache.org/activemq/${release.version}/activemq-parent-${release.version}-source-release.zip.asc`}>ASC</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}

        <hr />
        <h4 id="verify-the-integrity-of-downloads">Verify the Integrity of Downloads</h4>
        <p>
          It is essential that you verify the integrity of the downloaded files using the ASC signature or SHA checksum.
        </p>
        <p>The ASC signatures can be verified using PGP or GPG. Begin by following these steps:</p>
        <ol>
          <li>Download the <a href="https://downloads.apache.org/activemq/KEYS">KEYS</a> file.</li>
          <li>Download the <code>.asc</code> signature for the relevant distribution file.</li>
          <li>Verify the signature:
            <pre><code>{`$ gpg --import KEYS\n$ gpg --verify <file-name>.asc <file-name>`}</code></pre>
          </li>
        </ol>
        <p>Alternatively you can verify the SHA-512 checksum of the file:</p>
        <pre><code>$ sha512sum -c &lt;file-name&gt;.sha512</code></pre>
      </div>
    </Layout>
  );
}
