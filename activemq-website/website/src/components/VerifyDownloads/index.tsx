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

/**
 * The shared "Verify the Integrity of Downloads" instructions, replacing the
 * verify_download.md include of the original Jekyll site.
 */
export default function VerifyDownloads(): JSX.Element {
  return (
    <>
      <p>
        It is essential that you verify the integrity of the downloaded files using the
        ASC signature or SHA checksum.
      </p>
      <p>The ASC signatures can be verified using PGP or GPG. Begin by following these steps:</p>
      <ol>
        <li>
          Download the <a href="https://downloads.apache.org/activemq/KEYS">KEYS</a> file.
        </li>
        <li>
          Download the <code>.asc</code> signature for the relevant distribution file.
        </li>
        <li>
          Verify the signature.
          <ul>
            <li>
              If using GPG:
              <pre>
                <code>{'$ gpg --import KEYS\n$ gpg --verify <file-name>.asc <file-name>'}</code>
              </pre>
            </li>
            <li>
              If using PGP:
              <pre>
                <code>{'$ pgp -ka KEYS\n$ pgp <file-name>.asc'}</code>
              </pre>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Alternatively you can [also] verify the SHA-512 checksum of the file. For example,
        using the <code>sha512sum</code> command:
      </p>
      <pre>
        <code>{'$ sha512sum -c <file-name>.sha512'}</code>
      </pre>
    </>
  );
}
