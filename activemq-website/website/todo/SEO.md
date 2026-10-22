# SEO Improvement Suggestions

Pending items only, most important first. Already done: redirects for the old URLs (`static/.htaccess`, see `htaccess.md`), an explicit `trailingSlash: false`, site search (Pagefind), and the Artemis 301s.

## High impact

1. **Fail the build on broken links.** Switch `onBrokenLinks: 'warn'` to `'throw'` in `docusaurus.config.ts`. First fix the broken links: the build currently reports them on 131 source pages, plus broken anchors on 10 pages. `docs/classic/broken_links.txt` lists 113 of them.

2. **Write meta descriptions.** 0 of the 540 doc pages set `description:` in their frontmatter. Docusaurus falls back to the first paragraph, which gives descriptions like *"…why its so interesting to work on (smile)"*. That `(smile)` is a leftover Confluence emoticon code, and 11 files still contain these. Start with the pages that get the most traffic: getting started, configuration, transports, persistence, and security.

3. **Fix the homepage metadata.**
   - The page title is `Welcome | Apache ActiveMQ`. Something like `Apache ActiveMQ – Open Source Multi-Protocol Java Message Broker` would rank better.
   - There's no `<meta name="description">` at all. Pass `description=` to `<Layout>` in `src/pages/index.tsx`.

4. **Fix duplicate and placeholder titles.** 4 pages are literally titled `"Title"`: `legacy-documentation/chat.md` and the Apollo `user-manual`, `verification` and `stomp-manual` pages. 13 titles appear twice, including `AMQP`, `MQTT`, `Configuring Transports` and the JBoss integration page, plus `Hello World`, `Installation` and others shared with the hidden ActiveMQ 4 pages. Give each page a distinct, descriptive title, e.g. "MQTT Protocol Support in ActiveMQ Classic" rather than just "MQTT". Duplicate titles also show up as duplicate Pagefind results.

## Medium impact

5. **Keep legacy docs out of search results.** All 23 pages under `legacy-documentation/` (Apollo, LevelDB, 3.x docs, 2008 board reports) are in the sitemap and compete with current docs. Mark them `unlisted`, add a `noindex` meta tag, or drop them from the sitemap with the sitemap plugin's `ignorePatterns`. Consider excluding them from the Pagefind index too.

6. **Handle the Javadocs in `static/`.** The Maven apidocs are about 15k static HTML files (469 MB under `static/components`) that aren't in the sitemap. Either add a canonical/`noindex` for older versions, or disallow them in `robots.txt` so crawlers spend their time on the real docs.

7. **Add a `robots.txt`.** There isn't one in `static/`. A minimal one that points to `https://activemq.apache.org/sitemap.xml` is enough.

8. **Add structured data (JSON-LD)** through `themeConfig.metadata` or `headTags`:
   - `SoftwareApplication` on the homepage and component pages, with name, version, license and download URL.
   - `Organization` for the ASF.
   - `NewsArticle` for release and CVE posts.

9. **Fix the social preview image.** `og:image` is `activemq_logo_black.png` (682×242) with `twitter:card=summary_large_image`. A proper 1200×630 card with the logo and tagline would look much better when links are shared.

10. **Switch internal links to HTTPS.** There are 581 `http://…apache.org` links in `docs/` and 609 in `src/` and `blog/`. Moving them to `https://` avoids redirect hops.

## Lower impact / hygiene

11. **Alt text:** 46 images use empty `![]()` alt text. Add descriptions, especially for diagrams like `BrokerTopology` and `amqstore`. Also rename files and folders with spaces: `static/img/Core Library Usage.JPG`, `static/img/BrokerSession Library Usage.JPG` and `docs/classic/overview/faq/developing activemq`.
12. **Image weight:** `static/img` is 7.1 MB. The desktop background PNGs, `web_console.png` and `customers/UBS-LOGO-WHITE.png` are over 300 KB each. Convert them to WebP or compress them to improve Core Web Vitals.
13. **Keywords and headings:** doc pages usually repeat the title as their H1. Adding terms like "ActiveMQ Classic" and "JMS broker" to H1s and intros helps with long-tail searches.
14. **External redirects:** follow the 6 external redirects in `.htaccess` (Artemis, Camel) to confirm the destinations exist (also tracked in `htaccess.md`).
15. **Download page:** `src/pages/download.md` is thin (just three links) and has a typo: "you wish you download". Add a sentence or two about each component so it isn't treated as a thin page.

#2–#4 are next. #1 needs to be done before the build can enforce link checking.
