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
import {currentReleasePrefixes} from '../../data/currentReleases';

interface ClassicReleaseProps {
  version: string;
  releaseDate?: string;
  javaVersion?: string;
  releaseNotes?: string;
  children?: React.ReactNode;
}

function isCurrentRelease(version: string): boolean {
  return currentReleasePrefixes.some(prefix => version.startsWith(prefix));
}

export default function ClassicRelease({
  version,
  releaseDate,
  javaVersion,
  releaseNotes,
  children,
}: ClassicReleaseProps): JSX.Element {
  const isCurrent = isCurrentRelease(version);
  const baseUrl = isCurrent
    ? 'https://www.apache.org/dyn/closer.cgi?filename=/activemq/'
    : 'https://archive.apache.org/dist/activemq/';
  const verifyBaseUrl = isCurrent
    ? 'https://downloads.apache.org/activemq/'
    : 'https://archive.apache.org/dist/activemq/';

  const binZip = `apache-activemq-${version}-bin.zip`;
  const binTarGz = `apache-activemq-${version}-bin.tar.gz`;
  const srcZip = `activemq-parent-${version}-source-release.zip`;

  const binZipUrl = isCurrent
    ? `${baseUrl}${version}/${binZip}&action=download`
    : `${baseUrl}${version}/${binZip}`;
  const binTarGzUrl = isCurrent
    ? `${baseUrl}${version}/${binTarGz}&action=download`
    : `${baseUrl}${version}/${binTarGz}`;
  const srcZipUrl = isCurrent
    ? `${baseUrl}${version}/${srcZip}&action=download`
    : `${baseUrl}${version}/${srcZip}`;

  return (
    <Layout title={`ActiveMQ ${version} Release`}>
      <div className="container margin-vert--lg">
        <h1>ActiveMQ {version} Release</h1>

        {!isCurrent && (
          <div className="alert alert--warning margin-bottom--md">
            This is an older release. To get the current release, please see the{' '}
            <Link to="/components/classic/download">download page</Link>.
          </div>
        )}

        {children}

        <h3>Getting the Binary Distributions</h3>

        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Download Link</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Windows Distribution</td>
              <td><a href={binZipUrl}>{binZip}</a></td>
              <td>
                <a href={`${verifyBaseUrl}${version}/${binZip}.asc`}>ASC</a>,{' '}
                <a href={`${verifyBaseUrl}${version}/${binZip}.sha512`}>SHA512</a>
              </td>
            </tr>
            <tr>
              <td>Unix/Linux/Cygwin Distribution</td>
              <td><a href={binTarGzUrl}>{binTarGz}</a></td>
              <td>
                <a href={`${verifyBaseUrl}${version}/${binTarGz}.asc`}>ASC</a>,{' '}
                <a href={`${verifyBaseUrl}${version}/${binTarGz}.sha512`}>SHA512</a>
              </td>
            </tr>
          </tbody>
        </table>

        {javaVersion && (
          <p>Java compatibility: <strong>{javaVersion}</strong></p>
        )}

        <h3>Verify the Integrity of Downloads</h3>
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

        <h3>Getting the Binaries using Maven 3</h3>
        <p>
          To use this release in your maven project, the simplest dependency that you can use in your{' '}
          <a href="http://maven.apache.org/guides/introduction/introduction-to-the-pom.html">Maven POM</a> is:
        </p>
        <pre><code>{`<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-all</artifactId>
  <version>${version}</version>
</dependency>`}</code></pre>
        <p>
          If you need more fine grained control of your dependencies (activemq-all is an uber jar)
          pick and choose from the various components activemq-client, activemq-broker, activemq-xx-store etc.
        </p>

        <h3>Getting the Source Code</h3>
        <h4>Source Distributions</h4>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Download Link</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Source Release</td>
              <td><a href={srcZipUrl}>{srcZip}</a></td>
              <td>
                <a href={`${verifyBaseUrl}${version}/${srcZip}.asc`}>ASC</a>,{' '}
                <a href={`${verifyBaseUrl}${version}/${srcZip}.sha512`}>SHA512</a>
              </td>
            </tr>
          </tbody>
        </table>

        {releaseNotes && (
          <>
            <h3>Change Log</h3>
            <p>
              For a more detailed view of new features and bug fixes, see the{' '}
              <a href={releaseNotes}>release notes</a>.
            </p>
          </>
        )}
      </div>
    </Layout>
  );
}
