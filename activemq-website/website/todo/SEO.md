# SEO Improvement Suggestions

Pending items only, most important first. Already done: redirects for the old URLs (`static/.htaccess`, see `htaccess.md`), an explicit `trailingSlash: false`, site search (Pagefind), the Artemis 301s, failing the build on broken links and anchors (`onBrokenLinks`/`onBrokenAnchors: 'throw'`), and the homepage title and meta description.

## High impact

1. **Write meta descriptions.** 76 of the 540 doc pages now set `description:`: getting started, everything under `using-activemq-classic/` (configuration and transports), persistence and security. The Confluence emoticons are gone. Of the remaining 464 pages, 280 fall back to a description under 70 characters (e.g. `*   Overview`, or empty), and 45 pages share 15 identical descriptions. Next: features, connectivity, FAQ, then the NMS and CMS docs.

2. **Fix duplicate and placeholder titles.** 4 pages are literally titled `"Title"`: `legacy-documentation/chat.md` and the Apollo `user-manual`, `verification` and `stomp-manual` pages. 13 titles appear twice, including `AMQP`, `MQTT`, `Configuring Transports` and the JBoss integration page, plus `Hello World`, `Installation` and others shared with the hidden ActiveMQ 4 pages. Give each page a distinct, descriptive title, e.g. "MQTT Protocol Support in ActiveMQ Classic" rather than just "MQTT". Duplicate titles also show up as duplicate Pagefind results.

## Medium impact

3. **Keep legacy docs out of search results.** All 23 pages under `legacy-documentation/` (Apollo, LevelDB, 3.x docs, 2008 board reports) are in the sitemap and compete with current docs. Mark them `unlisted`, add a `noindex` meta tag, or drop them from the sitemap with the sitemap plugin's `ignorePatterns`. Consider excluding them from the Pagefind index too.

4. **Handle the Javadocs in `static/`.** The Maven apidocs are about 15k static HTML files (469 MB under `static/components`) that aren't in the sitemap. Either add a canonical/`noindex` for older versions, or disallow them in `robots.txt` so crawlers spend their time on the real docs.

5. **Add a `robots.txt`.** There isn't one in `static/`. A minimal one that points to `https://activemq.apache.org/sitemap.xml` is enough.

6. **Add structured data (JSON-LD)** through `themeConfig.metadata` or `headTags`:
   - `SoftwareApplication` on the homepage and component pages, with name, version, license and download URL.
   - `Organization` for the ASF.
   - `NewsArticle` for release and CVE posts.

7. **Fix the social preview image.** `og:image` is `activemq_logo_black.png` (682×242) with `twitter:card=summary_large_image`. A proper 1200×630 card with the logo and tagline would look much better when links are shared.

8. **Switch internal links to HTTPS.** There are 581 `http://…apache.org` links in `docs/` and 609 in `src/` and `blog/`. Moving them to `https://` avoids redirect hops.

## Lower impact / hygiene

9. **Alt text:** 46 images use empty `![]()` alt text. Add descriptions, especially for diagrams like `BrokerTopology` and `amqstore`. Also rename files and folders with spaces: `static/img/Core Library Usage.JPG`, `static/img/BrokerSession Library Usage.JPG` and `docs/classic/overview/faq/developing activemq`.
10. **Image weight:** `static/img` is 7.1 MB. The desktop background PNGs, `web_console.png` and `customers/UBS-LOGO-WHITE.png` are over 300 KB each. Convert them to WebP or compress them to improve Core Web Vitals.
11. **Keywords and headings:** doc pages usually repeat the title as their H1. Adding terms like "ActiveMQ Classic" and "JMS broker" to H1s and intros helps with long-tail searches.
12. **External redirects:** follow the 6 external redirects in `.htaccess` (Artemis, Camel) to confirm the destinations exist (also tracked in `htaccess.md`).
13. **Download page:** `src/pages/download.md` is thin (just three links) and has a typo: "you wish you download". Add a sentence or two about each component so it isn't treated as a thin page.
#1 and #2 are next.
