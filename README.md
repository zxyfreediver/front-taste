# FrontTaste

Preview frontend taste before installing the Skill.

FrontTaste is a bilingual, CSS-driven gallery of reusable frontend style Skills for AI coding agents. It ships 8 downloadable FrontTaste-original style Skills and an immersive homepage that switches the entire page by changing the selected style.

## FrontTaste Originals

- Pixel Arcade
- Liquid Glass
- Mono Ink
- Neon Cyberpunk
- Fresh Minimal
- Vintage Computing
- Clay Play
- Luxury Noir

The homepage uses the same MemoPilot prompt for every style and shows pre-rendered landing, dashboard, and settings demos.

## Routes

- `/en` and `/zh`
- `/[locale]/docs/install` redirects to the homepage install section
- `/[locale]/request` redirects to the homepage request section
- `/[locale]/styles` redirects to the homepage
- `/[locale]/styles/[slug]` redirects to `/?style=[slug]#demo`
- `/previews/[slug]/landing`
- `/previews/[slug]/dashboard`
- `/previews/[slug]/settings`
- `/downloads/[slug]`

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000/en`.

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Documentation

The original PRD is kept in `FrontTaste_PRD.md`. Split product and implementation docs live in `docs/product/`.
