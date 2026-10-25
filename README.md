# Sungdo Moon — Personal Homepage (`sungdomo.github.io`)

Modern, clean, and concise personal homepage built with [Astro](https://astro.build/).

## Structure

- [`src/data/siteData.ts`](./src/data/siteData.ts) — Single source of truth for profile bio, affiliations, news items, career timeline, education, publications (`papers.bib` entries), and academic/social links.
- [`src/layouts/BaseLayout.astro`](./src/layouts/BaseLayout.astro) — Shared page shell, navigation bar, and native light/dark theme switcher.
- [`src/pages/index.astro`](./src/pages/index.astro) — Home / About page.
- [`src/pages/publications.astro`](./src/pages/publications.astro) — Full academic bibliography with expandable abstracts and BibTeX entries.
- [`src/pages/cv.astro`](./src/pages/cv.astro) — Printable Curriculum Vitae page.
- [`src/styles/global.css`](./src/styles/global.css) — Design tokens, `light-dark()` color scheme architecture, cross-document view transitions, and print styles.

## Local Development

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
npm run preview
```
