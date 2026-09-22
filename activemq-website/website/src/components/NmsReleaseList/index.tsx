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

import Link from '@docusaurus/Link';
import NmsDownloadTable, {type NmsProduct} from '../NmsDownloadTable';
import {formatReleaseDate, type NmsRelease} from '../../data/nmsReleases';

interface NmsReleaseListProps {
  product: NmsProduct;
  releases: NmsRelease[];
  /** Heading prefix, e.g. "NMS API" or "NMS AMQP". */
  label: string;
  isCurrentRelease: boolean;
  /**
   * When the product publishes a page per release, the base path those pages live
   * under. Releases are then linked to their own page instead of being described
   * inline.
   */
  releasePageBase?: string;
}

/** Renders a list of NMS releases together with their download links. */
export default function NmsReleaseList({
  product,
  releases,
  label,
  isCurrentRelease,
  releasePageBase,
}: NmsReleaseListProps): JSX.Element {
  return (
    <>
      {releases.map((release) => (
        <div key={release.version}>
          <h4>
            {label} {release.version} ({formatReleaseDate(release.releaseDate)})
          </h4>
          {releasePageBase && release.slug ? (
            <p>
              <a href={release.releaseNotes}>Release Notes</a> |{' '}
              <Link to={`${releasePageBase}/${release.slug}`}>Release Page</Link>
            </p>
          ) : (
            <p>{release.shortDescription}</p>
          )}
          <NmsDownloadTable
            product={product}
            version={release.version}
            isCurrentRelease={isCurrentRelease}
          />
          {!releasePageBase && (
            <>
              <h6>Changelog</h6>
              <p>
                For a detailed view of new features and bug fixes, see the{' '}
                <a href={release.releaseNotes}>Release Notes</a>.
              </p>
            </>
          )}
        </div>
      ))}
    </>
  );
}
