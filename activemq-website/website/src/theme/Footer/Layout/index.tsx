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

import React from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/Footer/Layout';

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        <div className="footer__community text--center margin-bottom--lg">
          <p>
            Enjoy the benefits of open source by <a href="/contributing">contributing to a code-base</a>,
            asking a question on one of our <a href="/contact#mailing">mailing lists</a>,
            or <a href="/issues">reporting a bug or requesting a feature</a>.
            When you participate, we all win. That's the power of community. That's the power of open source.
          </p>
        </div>
        {links}
        <div className="footer__bottom">
          <div className="footer__row">
            <div className="footer__col">
              <div className="footer__logo">
                {logo}
              </div>
            </div>
            <div className="footer__col footer__col--copyright">
              {copyright}
            </div>
            <div className="footer__col footer__logo">
              <a href="https://www.apache.org">
                <img src="/img/Apache_PoweredBy.png" alt="Powered by Apache" className="footer__logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
