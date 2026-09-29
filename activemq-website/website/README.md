# Apache Website Template

This project contains a template website that aims to follow all the various required Apache Website Policies.

This template was generated using [Docusaurus](https://docusaurus.io/).

## Usage

You can directly copy from the root path of this template repository to your website repository.

> [!NOTE]
> TODO: Integrate it with [template support of Docusaurus](https://docusaurus.io/docs/api/misc/create-docusaurus#git-strategy).

Most of the configurations are inherited from Docusaurus https://docusaurus.io/docs/configuration.

Specificly, our template defines a few metadata fields to customize for every project:

```typescript
const projectName = "Template";
const mainRepoName = "apache-website-template";
const siteRepoName = "apache-website-template";
```

For example, Apache Fury can customize these fields as:

```typescript
const projectName = "Fury";
const mainRepoName = "incubator-fury";
const siteRepoName = "incubator-fury-site";
```

More placeholders and preset are under developed.

## Deploy

This template contains [a GitHub Actions workflow](.github/workflows/deploy.yml) to deploy the generated website content to the `asf-site` branch. It would work automatically, without any other ections required.

## Publishing a release

Each release is described by a single page, whose front matter (`version`,
`release_date`, `shortDescription`, ...) is the source of truth for the
release. At build time, `scripts/generate-release-news.ts` derives from these
pages a news post per release (`blog/releases/`, listed on `/news` and in the
RSS/Atom feeds) and the release list used by the home page and the download
page (`src/data/generated/releases.json`). Both are ignored by git and must
never be edited.

To publish an ActiveMQ Classic release, create its page with:

```bash
pnpm new-release classic 6.2.11 [--date yyyy-mm-dd] [--java 17+] [--summary "..."] [--dry-run]
```

then list the highlights of the release on the page, picking them from the
GitHub changes the command adds to it as a comment. When starting a new series,
also update `src/data/currentReleases.ts`.

NMS releases are published the same way, by adding a page with the same front
matter under `src/pages/components/nms/providers/activemq/downloads/`, or an
entry to `src/data/nmsReleases.ts` for Apache.NMS.API and Apache.NMS.AMQP.

`pnpm start` generates the news posts when it starts, restart it to pick up a
new or changed release.
