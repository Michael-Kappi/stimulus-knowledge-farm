# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint (v9 flat config)
```

No test framework is configured yet.

## Architecture

- **Framework**: Next.js 16 with React 19, using the App Router (not Pages Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with PostCSS plugin, dark mode via CSS custom properties in `src/app/globals.css`
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font`

## Project Structure

All source code lives under `src/app/` following Next.js App Router file-based routing conventions. Components are Server Components by default.

## Key Conventions

- **Path alias**: `@/*` maps to `./src/*` (configured in tsconfig.json)
- **Environment variables**: `NEXT_PUBLIC_*` prefix for browser-exposed vars; see `.env.example` for the template
- **ESLint**: Uses ESLint v9 flat config (`eslint.config.mjs`) with `next/core-web-vitals` and `next/typescript` rulesets
