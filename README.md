# Redemption Apostolic Church (RAC) Website

Modern church website built with **Next.js App Router**, React, TailwindCSS, and shadcn/ui style components.

## Overview
This project powers the public website for **Redemption Apostolic Church**.

Key goals:
- Fast, responsive marketing site
- Modern UI components
- SEO-ready metadata (Open Graph, Twitter cards, canonical URLs)
- Search-engine readiness (robots + sitemap)

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS
- Radix UI / shadcn-style UI primitives

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run the dev server
```bash
npm run dev
```
Then open:
- http://localhost:3000

### 3) Production build
```bash
npm run build
npm run start
```

## Environment Variables
Create a `.env.local` file in the project root if you need to override defaults:

### `NEXT_PUBLIC_SITE_URL`
- **Purpose**: Base URL used for canonical URLs, Open Graph URLs, robots sitemap URL, and sitemap generation.
- **Example**:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- **Purpose**: Google Search Console verification token.
- **Example**:
```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_token
```

## SEO / Metadata
The site uses Next.js Metadata APIs and per-route metadata:

- **Global metadata**: `app/layout.tsx`
  - `metadataBase`
  - OpenGraph
  - Twitter card
  - icons / favicons
  - Google verification (when env var is provided)

- **Canonical URLs**
  - Static pages export `metadata.alternates.canonical`
  - Dynamic routes use `generateMetadata` to set:
    - canonical URL
    - OpenGraph and Twitter `images`

## Sitemap and Robots
- **Sitemap**: `app/sitemap.ts` (generated from `NEXT_PUBLIC_SITE_URL`)
- **Robots**: `app/robots.ts` (includes absolute sitemap URL)

## Images / Assets
Static assets live in:
- `public/`
- `public/images/`

Key brand assets:
- `public/logo.png` (RAC logo)
- `public/k-logo.png` (Kawerify Tech logo)

The site is configured with `images.unoptimized = true` in `next.config.mjs`, so Next.js image optimization is disabled.

## Branch Search
The home hero includes a **smart typeahead** branch search:
- Suggests featured branches when empty
- Suggests matching branches as you type
- Keyboard navigation (Up/Down/Enter/Esc)
- Navigates directly to a branch detail page or to `/branches?q=...`

Branch summary data is centralized in:
- `lib/branches-data.ts`

## Project Structure (high level)
- `app/` - Next.js routes (App Router)
- `components/` - UI sections and reusable components
- `lib/` - shared utilities and shared data
- `public/` - static assets

## Notes
- TypeScript type-checking is skipped during build (see `next.config.mjs`).
- If you enable strict type-checking later, run:
```bash
npm run lint
```

## License
Private/internal project.
