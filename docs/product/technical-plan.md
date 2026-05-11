# Technical Plan

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- Static JSON-like TypeScript content

## Data Model

`StyleSkill` contains slug, display name, status, bilingual copy, tags, use cases, compatible agents, theme tokens, visual DNA, and safety metadata.

Published styles expose detail pages, preview routes, and downloads. Planned styles appear in roadmap sections without download links.

## Deployment

The MVP is static-first and suitable for Vercel. ZIP files live in `public/downloads` for now. If download or image traffic grows, assets can move to GitHub Releases or Cloudflare R2.
