# FrontTaste

Preview frontend taste before installing the Skill.

FrontTaste is a bilingual gallery of reusable frontend style Skills for AI coding agents. It includes 12 downloadable FrontTaste-original style Skills plus a curated directory of ready-made external design Skills from official or directory sources.

## FrontTaste Originals

- Quiet SaaS
- Precision Ops
- Luxury Noir
- Brutal Grid
- Editorial Launch
- Cyber Infra
- Playful Bento
- Calm Workspace
- Glass Agent
- Dense Analytics
- Hardware Premium
- Retro Future

Each original style has three live previews: landing, dashboard, and settings.

## External Skills

External Skills are listed with official source links and install commands where available. FrontTaste does not host or repackage those files.

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
