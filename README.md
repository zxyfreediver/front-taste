# FrontTaste

Preview frontend taste before installing the Skill.

FrontTaste is a bilingual gallery of reusable frontend style Skills for AI coding agents. The MVP ships six complete styles, each with live landing, dashboard, and settings previews plus Markdown-only Skill downloads.

## MVP Styles

- Quiet SaaS
- Precision Ops
- Luxury Noir
- Brutal Grid
- Editorial Launch
- Cyber Infra

Six more styles are listed as planned: Playful Bento, Calm Workspace, Glass Agent, Dense Analytics, Hardware Premium, and Retro Future.

## Routes

- `/en` and `/zh`
- `/[locale]/styles`
- `/[locale]/styles/[slug]`
- `/[locale]/compare`
- `/[locale]/docs/install`
- `/[locale]/docs/what-is-a-frontend-skill`
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
