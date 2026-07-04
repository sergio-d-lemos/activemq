# Apache ActiveMQ Website

This is a proposal for a new ActiveMQ website, based on [Docusaurus](https://docusaurus.io/).

## Prerequisites

- Java 11+ and Maven 3.6+

## Usage

### Start Development Server

```bash
mvn frontend:pnpm@start
```

Launches the Docusaurus dev server with hot-reload at `http://localhost:3000`.

### Full Build

```bash
mvn package
```

This will:
1. Install Node.js v22.16.0 and pnpm 11.9.0 (if not already cached)
2. Run `pnpm install` to fetch dependencies
3. Run `pnpm run build` to produce the static site
4. Copy the build output to `target/website/`

### Clean

```bash
mvn clean
```

Runs `pnpm run clear` to remove the Docusaurus generated files and then the standard Maven `target/` cleanup.

