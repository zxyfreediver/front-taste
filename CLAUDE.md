# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (localhost:3000)
pnpm build            # Production build
pnpm typecheck        # TypeScript check (tsc --noEmit)
pnpm lint             # ESLint
```

No test suite yet (Playwright is in devDependencies but not configured).

## Architecture

FrontTaste is a bilingual (en/zh) static Next.js 16 site that showcases and distributes frontend style Skills — Markdown files that guide AI coding agents to generate UI with a specific visual taste. There is no database, no API, no auth.

### Routing (Next.js App Router, file-based locale)

- `src/app/layout.tsx` — root layout: fonts (Geist), `<html>`, metadata
- `src/app/[locale]/layout.tsx` — validates locale (`en`/`zh`), wraps children in `<SiteShell>`
- `src/app/[locale]/page.tsx` — homepage, renders `<ImmersiveHome>`
- `src/app/previews/[slug]/[type]/page.tsx` — full-page preview renders for landing/dashboard/settings
- `src/app/downloads/[slug]/route.ts` — redirects to the `.skill.zip` file in `public/downloads/`
- Redirect-only pages (no UI): `styles/`, `styles/[slug]`, `docs/install`, `request` — all redirect to `/?style=X#section`
- `src/app/[locale]/changelog/page.tsx` and `docs/what-is-a-frontend-skill/page.tsx` — static bilingual pages

No middleware. Locale is validated in the `[locale]` layout with a `notFound()` guard.

### Style switching system (the core mechanic)

The entire site renders in whichever style the user selects. This is driven by:

1. **`StyleProvider`** (`src/components/style-provider.tsx`) — React context that manages the selected style slug. Reads initial value from URL `?style=` param → localStorage → falls back to `"pixel-arcade"`. Writes selection to both localStorage and the URL (via `history.replaceState`). Wraps children in `<div class="ft-root" data-style="pixel-arcade">`.

2. **`globals.css`** — The `.ft-root[data-style="..."]` selector is the keystone. Every CSS rule for the site uses this prefix, e.g.:
   ```css
   .ft-root[data-style="pixel-arcade"] { --ft-bg: #171022; --ft-surface: #241734; ... }
   .ft-root[data-style="pixel-arcade"] .ft-style-button { background: var(--ft-surface); ... }
   ```
   This means all 8 styles' properties live in CSS custom properties scoped under each `[data-style]`. The style data in `fronttaste.ts` (colors, radii, shadows, patterns) is used for inlined styles in the preview renderer and the homepage buttons; the actual site shell styling is purely CSS-driven.

3. **`src/lib/fronttaste.ts`** — The canonical data file. Defines `StyleSkill` type, all 8 styles, and helpers (`getStyle`, `previewPath`, `downloadPath`). Each style has: theme colors/shadow/radius/pattern, bilingual copy, tags, use-cases, demo screenshot paths, style signature descriptions, and visual DNA text. Also defines the i18n types.

4. **`src/lib/copy.ts`** — All bilingual UI copy as a nested `Record<Locale, ...>` object. `otherLocale()` helper toggles en↔zh.

### Component map

| Component | Role |
|---|---|
| `SiteShell` | Header (brand + nav + language switch + GitHub link) + `<main>` + footer. Renders inside `StyleProvider`. |
| `ImmersiveHome` | The homepage: style selector buttons, preview carousel, install section, request section. Uses `useFronttasteStyle()` to read current style and render dynamic content. |
| `PreviewCarousel` | Embla carousel showing 3 demo screenshots (landing/dashboard/settings) for the selected style. Auto-advances every 3.8s. Resets to slide 0 on style change. |
| `PreviewRenderer` | Full-page fake product UI (a fictional "MemoPilot" app) rendered in the selected style's CSS custom properties. Used on `/previews/[slug]/[type]`. |
| `StyleCard` | A shadcn-style card showing one style's theme preview + metadata + action links. |
| `LanguageSwitch` | Client component that swaps `en`↔`zh` in the pathname, preserving `?style=` param. |
| `ButtonLink` | A `<Link>` styled with shadcn button variants. |

### Public assets

- `public/demos/` — 24 PNG screenshots (8 styles × 3 preview types: landing/dashboard/settings)
- `public/downloads/` — 8 `.skill.zip` files for download
- `public/skills/` — 8 directories each containing a `SKILL.md` (the actual distributable Skill files)

### Tech stack

- **Next.js 16** with Turbopack
- **React 19**
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **shadcn/ui** components (badge, button, card, carousel, input, separator, tabs, textarea, tooltip)
- **Embla Carousel** (via `embla-carousel-react`) for the demo carousel
- **Lucide React** for icons
- **pnpm** as package manager
- `@/` path alias → `./src/*`
