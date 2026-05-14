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
- Industrial Blue
- Luxury Noir

The homepage uses the same prompts across every style and renders ecommerce, admin, login, and profile demos in-page.

## Routes

- `/en` and `/zh`
- `/[locale]/docs/install` redirects to the homepage install section
- `/[locale]/request` redirects to the homepage request section
- `/[locale]/styles` redirects to the homepage
- `/[locale]/styles/[slug]` redirects to `/?style=[slug]#demo`
- `/previews/[slug]/commerce`
- `/previews/[slug]/admin`
- `/previews/[slug]/auth`
- `/previews/[slug]/profile`
- `/downloads/[slug].skill.zip`

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
