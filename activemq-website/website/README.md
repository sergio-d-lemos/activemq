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

ActiveMQ Classic release pages live in `src/data/releases/classic/`, and are
served below `/components/classic/download/` by a dedicated instance of the
pages plugin (see `docusaurus.config.ts`). The file name is the URL, e.g.
`classic-06-02-11.mdx` is served as `/components/classic/download/classic-06-02-11`.

To publish an ActiveMQ Classic release, add its page to
`src/data/releases/classic/`, named after the zero-padded version (e.g.
`classic-06-02-11.mdx` for 6.2.11). Copying the page of the previous release of
the series is the easiest way to start:

```mdx
---
title: ActiveMQ 6.2.11 Release
version: 6.2.11
release_date: 2026-10-01
java_version: 17+
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.2.11
shortDescription: ActiveMQ 6.2.11 is a maintenance release on the 6.2.x series.
---

import ClassicRelease from '@site/src/components/ClassicRelease';

<ClassicRelease frontMatter={frontMatter}>

Apache ActiveMQ 6.2.11 was released on October 1st, 2026.

This is a maintenance release on the 6.2.x series.
It especially includes:
- ...

You can find details on the [release notes](https://github.com/apache/activemq/releases/tag/activemq-6.2.11).

</ClassicRelease>
```

The `release_date` is the day the release is announced, and the highlights can
be picked from the "What's Changed" section of the GitHub release. When starting
a new series, also update `src/data/currentReleases.ts`: add the new series
(e.g. `'6.3.'`) and remove the one it replaces.

NMS releases are published the same way, by adding a page with the same front
matter under `src/pages/components/nms/providers/activemq/downloads/`, or an
entry to `src/data/nmsReleases.ts` for Apache.NMS.API and Apache.NMS.AMQP.

`pnpm start` generates the news posts when it starts, restart it to pick up a
new or changed release.
