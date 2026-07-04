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

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Apache ActiveMQ',
  tagline: 'Flexible & Powerful Open Source Multi-Protocol Messaging',
  favicon: 'img/favicon.png',

  url: 'https://activemq.apache.org/',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'md',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'components/classic/documentation',
          sidebarPath: './docs/sidebars.ts',
          editUrl: 'https://github.com/apache/activemq-website/tree/main/',
        },
        blog: {
          routeBasePath: 'news',
          blogSidebarTitle: 'News',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/activemq_logo_black.png',
    navbar: {
      logo: {
        alt: 'ActiveMQ Logo',
        src: 'img/activemq_logo_black_small.png',
      },
      items: [
        {to: '/news', label: 'News', position: 'right'},
        {
          type: 'dropdown',
          label: 'Components',
          position: 'right',
          items: [
            {
              label: 'ActiveMQ',
              to: '/components/classic',
            },
            {
              label: 'NMS Clients',
              to: '/components/nms',
            },
            {
              label: 'CMS Client',
              to: '/components/cms',
            },
            {
              label: 'Artemis',
              href: 'https://artemis.apache.org',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {
              label: 'Contact Us',
              to: '/contact',
            },
            {
              label: 'Contribute',
              to: '/contributing',
            },
            {
              label: 'Report Issues',
              to: '/issues',
            },
            {
              label: 'Get Support',
              to: '/support',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'ASF',
          position: 'right',
          items: [
            {
              label: 'The Apache Software Foundation',
              href: 'https://www.apache.org/',
            },
            {
              label: 'License',
              href: 'https://www.apache.org/licenses/',
            },
            {
              label: 'Sponsorship',
              href: 'https://www.apache.org/foundation/sponsorship.html',
            },
            {
              label: 'Thanks',
              href: 'https://www.apache.org/foundation/thanks.html',
            },
            {
              label: 'Security',
              to: '/security-advisories',
            },
            {
              label: 'Events',
              href: 'https://www.apache.org/events/current-event',
            },
            {
              label: 'PMC & Committers',
              href: 'https://people.apache.org/phonebook.html?pmc=activemq',
            },
            {
              label: 'Board Reports',
              href: 'https://whimsy.apache.org/board/minutes/ActiveMQ.html',
            },
            {
              label: 'Privacy Policy',
              href: 'https://privacy.apache.org/policies/privacy-policy-public.html',
            },
          ],
        },
        {
          href: 'https://github.com/apache/activemq',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      links: [],
      logo: {
        width: 200,
        src: '/img/activemq_logo_white_vertical_small.png',
        href: '/',
        alt: 'Apache ActiveMQ',
      },
      copyright: `<a href="https://www.apache.org/foundation/marks/list/">Apache, ActiveMQ, Apache ActiveMQ</a>, the Apache logo, and the Apache ActiveMQ project logo are trademarks of The Apache Software Foundation. Copyright &copy; ${new Date().getFullYear()}, The Apache Software Foundation. Licensed under <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'markup'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
