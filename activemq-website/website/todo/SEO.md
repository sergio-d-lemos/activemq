# SEO Improvement Suggestions

The two biggest SEO problems are that the docs reorganization breaks existing URLs without any redirects, and that none of the 539 doc pages has a hand-written meta description. Suggestions are listed most important first.

## High impact

1. **Redirect the old doc URLs.** The live site uses flat URLs like `/components/classic/documentation/jms2` and `/use-cases`. The new build nests them, e.g. `/documentation/using-activemq-classic/use-cases`, and the old paths don't exist in `build/`. The homepage itself still links to `/components/classic/documentation/jms2`. Without redirects, years of backlinks and search rankings will turn into 404s.
   - Add `@docusaurus/plugin-client-redirects`, which you can generate from the rename list in commit `4218202d0`. Or better, add real 301s through `.htaccess` in `static/`, since ASF's web servers support it and search engines follow server-side 301s more reliably than client-side redirects.
   - Also switch `onBrokenLinks: 'warn'` to `'throw'` in `docusaurus.config.ts` so the build fails on broken internal links. `docs/classic/broken_links.txt` already lists 113 of them.

2. **Write meta descriptions.** 0 of the 539 doc pages set `description:` in their frontmatter. Docusaurus falls back to the first paragraph, which gives descriptions like *"…why its so interesting to work on (smile)"*. That `(smile)` is a leftover Confluence emoticon code, and 10 files still contain these. Start with the pages that get the most traffic: getting started, configuration, transports, persistence, and security.

3. **Fix the homepage metadata.**
   - The page title is `Welcome | Apache ActiveMQ`. Something like `Apache ActiveMQ – Open Source Multi-Protocol Java Message Broker` would rank better.
   - There's no `<meta name="description">` at all. Pass `description=` to `<Layout>` in `src/pages/index.tsx`.

4. **Fix duplicate and placeholder titles.** 4 pages are literally titled `"Title"`. `AMQP`, `MQTT`, `Configuring Transports` and the JBoss integration page each appear twice. Give each page a distinct, descriptive title, e.g. "MQTT Protocol Support in ActiveMQ Classic" rather than just "MQTT".

## Medium impact

5. **Keep legacy docs out of search results.** The 23 pages under `legacy-documentation/` (Apollo, LevelDB, 3.x docs, 2008 board reports) are in the sitemap and compete with current docs. Mark them `unlisted`, add a `noindex` meta tag, or drop them from the sitemap with the sitemap plugin's `ignorePatterns`.

6. **Handle the Javadocs in `static/`.** The Maven apidocs are about 15k static HTML files that aren't in the sitemap. Either add a canonical/`noindex` for older versions, or disallow them in `robots.txt` so crawlers spend their time on the real docs.

7. **Add a `robots.txt`.** There isn't one in `static/`. A minimal one that points to `https://activemq.apache.org/sitemap.xml` is enough.

8. **Add structured data (JSON-LD)** through `themeConfig.metadata` or `headTags`:
   - `SoftwareApplication` on the homepage and component pages, with name, version, license and download URL.
   - `Organization` for the ASF.
   - `NewsArticle` for release and CVE posts.

9. **Fix the social preview image.** `og:image` is `activemq_logo_black.png` with `twitter:card=summary_large_image`. A proper 1200×630 card with the logo and tagline would look much better when links are shared.

10. **Switch internal links to HTTPS.** There are 588 `http://…apache.org` links in the docs. Moving them to `https://` avoids redirect hops.

## Lower impact / hygiene

11. **Alt text:** 46 images use empty `![]()` alt text. Add descriptions, especially for diagrams like `BrokerTopology` and `amqstore`. Also rename files with spaces, such as `Core Library Usage.JPG`.
12. **Image weight:** `static/img` is 7.1 MB. The desktop background PNGs and `web_console.png` are over 300 KB each. Convert them to WebP or compress them to improve Core Web Vitals.
13. **Trailing slashes:** set `trailingSlash` explicitly, likely `false` to match the current URLs. That way canonical URLs, sitemap entries and the server's behavior all agree.
14. **Keywords and headings:** doc pages usually repeat the title as their H1. Adding terms like "ActiveMQ Classic" and "JMS broker" to H1s and intros helps with long-tail searches.
15. **Site search:** add Algolia DocSearch, which is free for open-source projects. It isn't a direct ranking factor, but it keeps users on the site. The `docsearch:*` meta tags are already emitted.
16. **Artemis:** the Artemis link goes to `artemis.apache.org`. Make sure the old `/components/artemis/*` URLs 301 there instead of returning 404s.
17. **Download page:** `src/pages/download.md` is thin (just three links) and has a typo: "you wish you download". Add a sentence or two about each component so it isn't treated as a thin page.

Tackle #1 before launch, because once rankings are lost to 404s they're hard to get back. #2–#4 are next.
