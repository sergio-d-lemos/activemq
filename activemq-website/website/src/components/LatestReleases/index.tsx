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
import styles from './styles.module.css';

type ReleaseItem = {
  title: string;
  shortDescription: string;
  releaseDate: string;
  url: string;
};

const releaseList: ReleaseItem[] = [
  {
    title: 'ActiveMQ 6.2.6 Release',
    shortDescription: 'Important maintenance release on the 6.2.x series.',
    releaseDate: 'May 31st, 2026',
    url: '/components/classic/download/classic-06-02-06',
  },
  {
    title: 'ActiveMQ 5.19.7 Release',
    shortDescription: 'Maintenance release on the 5.19.x series.',
    releaseDate: 'May 31st, 2026',
    url: '/components/classic/download/classic-05-19-07',
  },
  {
    title: 'ActiveMQ 6.2.5 Release',
    shortDescription: 'Maintenance release on the 6.2.x series.',
    releaseDate: 'Apr 23rd, 2026',
    url: '/components/classic/download/classic-06-02-05',
  },
];

function ReleaseCard({title, shortDescription, releaseDate, url}: ReleaseItem) {
  return (
    <div className={styles.releaseCard}>
      <h6><Link to={url}>{title}</Link></h6>
      <p>{shortDescription} <Link to={url}>...more</Link></p>
      <p className={styles.releaseDate}>{releaseDate}</p>
    </div>
  );
}

export default function LatestReleases(): JSX.Element {
  return (
    <section className={styles.latestReleases}>
      <div className="container">
        <div className={styles.releaseCards}>
          {releaseList.map((props, idx) => (
            <ReleaseCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
