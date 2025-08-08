# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Astro 5.x, featuring a minimal blog and performance-optimized static site generation. The site uses TailwindCSS v4 for styling and is deployed on Cloudflare Pages with custom domain routing.

## Development Commands

- **Development server**: `npm run dev` or `bun run dev`
- **Build**: `npm run build` or `bun run build`
- **Preview build**: `npm run preview` or `bun run preview`

Note: This project uses Bun as the package manager (evidenced by bun.lock), but npm commands should work as well.

## Architecture

### Content Management
- **Blog posts**: Markdown files in `src/posts/` with frontmatter (title, date, author)
- **Static pages**: Astro components in `src/pages/` (index, about, posts)
- **Dynamic routing**: `src/pages/posts/[slug].astro` handles individual blog post rendering

### Styling System
- **CSS Framework**: TailwindCSS v4 with `@tailwindcss/vite` plugin
- **Global styles**: `src/globals.css` with custom CSS theme variables
- **Typography**: Two primary fonts via fontsource-variable:
  - Bricolage Grotesque Variable (titles, headings)
  - Inter Variable (body text)
- **Font loading**: Optimized with preload hints in Layout component

### Component Structure
- **Single layout**: `src/components/Layout.astro` handles all pages
- **Navigation**: Embedded in Layout with active state detection
- **Type definitions**: PostItem interface defined in `src/pages/posts.astro`

### Performance Optimizations
- Aggressive build optimizations in `astro.config.mjs`:
  - CSS code splitting enabled
  - Manual chunk splitting for vendor code
  - HTML compression
  - CSS inlining for critical styles
  - Prefetch all pages with viewport strategy
- Font preloading in Layout component
- Sitemap generation via `@astrojs/sitemap`

### Deployment
- **Target**: Cloudflare Pages (configured in `wrangler.jsonc`)
- **Custom domains**: Both `abidf.com` and `www.abidf.com`
- **Smart placement**: Enabled for optimal edge performance

## File Structure Patterns

```
src/
├── components/Layout.astro    # Single layout component
├── pages/
│   ├── index.astro           # Home page
│   ├── about.astro           # About page
│   ├── posts.astro           # Blog listing
│   ├── posts/[slug].astro    # Individual post pages
│   └── robots.txt.ts         # Dynamic robots.txt
├── posts/                    # Markdown blog posts
└── globals.css              # TailwindCSS + custom styles
```

## Code Conventions

- **TypeScript**: Strict configuration extending `astro/tsconfigs/strict`
- **Styling**: Utility-first with TailwindCSS, custom classes prefixed with semantic names
- **Date formatting**: Consistent `en-US` locale with full month names
- **Imports**: Uses import.meta.glob for dynamic post collection
- **Navigation**: Active state managed via aria-current="page"

## Content Authoring

Blog posts require frontmatter with:
```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
author: "Author Name"
---
```

Posts are automatically sorted by date (newest first) and rendered with slug-based URLs.
- i use bun