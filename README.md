<p align="center">
  <h1 align="center">FrontTaste</h1>
  <p align="center">
    Preview a frontend style before you download the Skill.<br>
    <a href="https://front-taste.vercel.app/en">https://front-taste.vercel.app/en</a>
    <br><br>
    <a href="./README.zh.md">中文文档</a>
  </p>
</p>

## The problem

You find a frontend style Skill (a Markdown prompt for AI coding agents). You download it, feed it to Claude/ChatGPT/Cursor — but you have **no idea what you'll get until it renders**. The Skill sounds good in theory, but the result might not match your taste.

FrontTaste solves this: **every style Skill comes with live, rendered previews** — ecommerce, admin, auth, and profile pages — so you can judge the visual output before you install it.

## How it works

```
1. Browse → Pick a style from the gallery
2. Preview → See the same MemoPilot app rendered in that style (4 page types)
3. Download → Get the SKILL.md file
4. Use → Single prompt to any AI coding agent: "Apply the [style] Skill to my project"
```

## The 8 styles

| Style | Vibe | Preview |
|---|---|---|
| **Fresh Minimal** | Clean SaaS, mint accents, editorial serif moment | ↓[demo](https://fronttaste.vercel.app/en?style=fresh-minimal) |
| **Liquid Glass** | iOS 26 frosted glass, prismatic blobs, floating capsules | ↓[demo](https://fronttaste.vercel.app/en?style=liquid-glass) |
| **Mono Ink** | Black & white editorial, oversized typography, print rules | ↓[demo](https://fronttaste.vercel.app/en?style=mono-ink) |
| **Neon Cyberpunk** | Game HUD, cyan/pink neon, scanlines, angular panels | ↓[demo](https://fronttaste.vercel.app/en?style=neon-cyberpunk) |
| **Pixel Arcade** | 8-bit pixel UI, chunky controls, arcade scoreboards | ↓[demo](https://fronttaste.vercel.app/en?style=pixel-arcade) |
| **Vintage Computing** | Beige CRT terminals, amber glow, retro desktop chrome | ↓[demo](https://fronttaste.vercel.app/en?style=vintage-computing) |
| **Industrial Blue** | Corporate blue-white, structured grids, professional | ↓[demo](https://fronttaste.vercel.app/en?style=industrial-blue) |
| **Luxury Noir** | Black-gold premium, cinematic spacing, brass details | ↓[demo](https://fronttaste.vercel.app/en?style=luxury-noir) |

## What's a Skill?

A Skill is a **single Markdown file** (~18KB, zero scripts, no external requests). Drop it into any AI coding workflow:

```
Apply the "Fresh Minimal" Skill from FrontTaste to build the landing page.
```

That's it. The Skill encodes the full visual DNA — color palette, typography, spacing rhythm, component shapes, motion curves — so the AI generates UI that stays consistent across prompts.

## Usage

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000/en`.

## Verify

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Project structure

```
pages/
  [locale]/             → bilingual homepage (en/zh)
  previews/[slug]/[type] → full-page preview (commerce/admin/auth/profile)
  downloads/[slug]      → redirects to .skill.zip
public/
  skills/[slug]/SKILL.md  → the distributable Skill files
  downloads/              → .skill.zip bundles
src/
  components/           → ImmersiveHome, PreviewRenderer, SiteShell, etc.
  lib/
    fronttaste.ts       → canonical StyleSkill data (8 styles + theme defs)
    copy.ts             → bilingual UI strings
    style-provider.tsx   → React context for live style switching
```

## Tech

Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript · Embla Carousel

All style switching is CSS-driven via `[data-style]` selectors on custom properties — zero layout shift on switch.
