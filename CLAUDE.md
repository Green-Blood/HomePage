# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (binds to 0.0.0.0 for network access)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint via Next.js
npm run prettier  # Format all files with Prettier
```

No test suite is configured.

## Stack

- **Next.js 14** (Pages Router) — no App Router
- **Chakra UI v1** — component library and theming
- **Framer Motion** — page transition animations
- **Three.js** — interactive 3D model on the homepage
- **Vercel Analytics + Speed Insights** — injected in `_app.js`

## Architecture

### App shell (`pages/_app.js`)
Wraps everything in `<Chakra>` (theme + color mode via cookies), `<Fonts>`, and `<Layout>` (main layout with navbar/footer). `AnimatePresence` handles page exit animations; scroll position is reset on route change.

### Color mode persistence (`components/chakra.js`)
Exports both the `<Chakra>` provider and `getServerSideProps`. Every page that needs SSR color mode (no flash) re-exports `getServerSideProps` from this file — see the bottom of `pages/index.js` and `pages/works.js`.

### Layouts
- `components/layouts/main.js` — root shell with `<Head>`, `<NavBar>`, the lazy-loaded Three.js model, and `<Footer>`
- `components/layouts/article.js` — page-level wrapper that adds Framer Motion slide-in animation

### 3D model (`components/voxel-dog.js`)
Loaded with `next/dynamic` (SSR disabled). Renders `/public/spider.glb` via Three.js with `OrbitControls` and an intro camera animation. The component is named "VoxelDog" for historical reasons but displays the spider model.

### Theme (`lib/theme.js`)
Extends Chakra UI with custom fonts (M PLUS Rounded 1c), colors (`grassTeal`), global body background, and a `section-title` Heading variant. Default color mode is dark, follows system preference.

### Works pages
`pages/works.js` is the index grid. Individual work detail pages live under `pages/works/{enterpriseWorks,studyWorks,oldWorks}/`. The `WorkGridItem` component in `components/grid-item.js` accepts `folder` + `id` props to construct the detail page link.

## Code style

Prettier is configured (`.prettierrc` via `prettier.config.js`): single quotes, no semicolons, 2-space indent, trailing commas off, LF line endings.
