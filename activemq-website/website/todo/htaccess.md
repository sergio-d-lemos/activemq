# .htaccess migration

`static/.htaccess` is copied from the old Jekyll site (`src/.htaccess`, 530 rules). It forces HTTPS, handles the Artemis/Camel/Apollo redirects and about 500 old Confluence top-level URLs. Docusaurus copies it to `build/.htaccess`.

## Verification

Tested by serving `build/` with a local copy of Apache (with MultiViews and `AllowOverride All`, and without the force-HTTPS rule):

- **All 782 old page URLs** return 200: 775 directly, 7 after one redirect.
- **All 523 internal redirect rules** end in a 200 after a single hop. The other 6 rules send users to external sites (Artemis, Camel) and were checked only for their destination, not followed.
- **All 858 new pages** load. The one exception is `/pmc-templates`, which redirects to the documentation copy of that page, as it did on the old site.

## Changes compared with the old file

1. **Removed the `^privacy-policy(.*)` rule.** It sent the real `/privacy-policy` page to a documentation page that doesn't exist.
2. **Fixed 13 rules that pointed at pages already missing on the old site.** Most were renamed to include "classic", e.g. `how-fast-is-activemq` → `how-fast-is-activemq-classic`. Also, `svn` and the subversion page → `source`, and the committer page → `/contributing`.
3. **Added redirects for the 6 pages removed in the migration:**
   - `overview` and `test` → the documentation home
   - `running-a-broker` → `run-broker`
   - `monitoring-activemq-classic` → `how-can-i-monitor-activemq-classic`
   - `the-jms-connector` → `jms-to-jms-bridge`
   - the NMS advisory example URL with spaces in it → the same page at its normal URL
4. **Removed extra redirect hops.** Old top-level rules that pointed at those 6 removed pages now go straight to the final page. `/nms`, `/cms` and `/activemq-pmc-templates` also redirect directly now.
5. **Fixed a 404 caused by `trailingSlash: false`.** Docusaurus writes pages like `/components/classic` as `components/classic.html` next to a `components/classic/` folder. Apache then redirected to `/components/classic/`, found no `index.html` there, and returned a 404. That broke 25 old URLs, including `/components/classic`, `/components/nms` and the documentation home. The new rules at the end of the file turn off `DirectorySlash`, serve `foo.html` for `/foo`, redirect `/foo/` to `/foo`, and restore the slash redirect for folders with no page of their own, such as the API docs.

## TODO before launch

- [ ] **Confirm `DirectorySlash Off` is allowed.** Change 5 relies on it. ASF's documentation (https://infra.apache.org/project-site.html) says the default is `AllowOverride All`, which permits it, but also that some projects have custom server settings. If ActiveMQ's setting doesn't allow it, the whole site returns HTTP 500. Confirm with ASF Infra, or check a staging deploy right after launch.
- [ ] Follow the 6 external redirects (Artemis, Camel) to confirm the destinations exist.
