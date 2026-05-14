---
name: fresh-minimal
description: Create calm modern SaaS frontend UI — generous whitespace, hairline borders, dot-grid background, soft mint accent, and an editorial-serif moment via Instrument Serif on hero copy.
---

# Fresh Minimal Style

## Structure lock

When applying this taste to an existing product, preserve the product's current DOM/content structure, paragraph order, component logic, responsive breakpoints, semantic roles, and control behavior. Do not split or merge paragraphs, reorder sections, add/drop product cards, or change a flow unless the user explicitly asks.

Keep the host application's font sizes, line heights, spacing scale, grid ratios, and control dimensions. Apply Fresh Minimal through font-family choices, color tokens, surfaces, borders, shadows, texture, icon treatment, and other non-structural visual details. Treat any sizing or layout values in examples below as illustrative recipes for new work, not overrides for an existing app.

This is the **Linear / Anthropic / Stripe Press** SaaS look: extremely calm, almost no chrome, but with one elegant editorial moment — a serif italic hero line — that gives it a designer-magazine feel rather than generic Tailwind. Every interaction is gentle, not springy. Every border is hairline. The page should feel like a sheet of paper that's barely-there.

## The two-line rule

1. **One serif moment, everywhere else sans.** Hero `h1`/`h2` are Instrument Serif italic. Everything else is Geist/Inter sans. The contrast is the entire personality.
2. **Hairlines, not borders.** Use `rgba(16, 32, 26, 0.08)` for borders — barely visible. If you can clearly see your borders, the alpha is too high.

## Required: dot-grid + soft corner wash

```css
body {
  background-color: #f4fbf8;
  background-image:
    /* faint dot grid — texture without noise */
    radial-gradient(circle, rgba(32, 167, 121, 0.16) 0.6px, transparent 1.2px),
    /* soft mint corner wash */
    linear-gradient(135deg, rgba(32, 167, 121, 0.10), transparent 36%);
  background-size: 26px 26px, auto;
  color: #0e1e18;
  font-family: "Inter", "Geist", ui-sans-serif, system-ui, sans-serif;
  font-feature-settings: "tnum" on, "ss01" on;
  min-height: 100vh;
}
```

## Required: load Instrument Serif for the editorial moment

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

Or for Next.js:
```ts
import { Instrument_Serif, Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const display = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });
```

## Color palette

| Token              | Value                       | Purpose                            |
|--------------------|-----------------------------|------------------------------------|
| `--bg`             | `#f4fbf8`                   | Page background (mint-tinted white) |
| `--surface`        | `#ffffff`                   | Card / panel surface               |
| `--surface-weak`   | `#f0f8f4`                   | Hover surface                      |
| `--text`           | `#0e1e18`                   | Body text                          |
| `--muted`          | `#64746d`                   | Secondary text                     |
| `--border`         | `rgba(16, 32, 26, 0.08)`    | All borders (hairline)             |
| `--accent`         | `#20a779`                   | Primary mint                       |
| `--accent-2`       | `#18b48b`                   | Hover mint                         |
| `--glow`           | `0 0 0 4px rgba(32, 167, 121, 0.14)` | Focus ring          |

## Typography

```css
.body { font-family: "Inter", system-ui, sans-serif; letter-spacing: -0.005em; }

/* The editorial moment — italic serif on hero copy */
.display { font-family: "Instrument Serif", Georgia, serif;
           font-weight: 400; font-style: italic;
           letter-spacing: -0.015em; line-height: 1.05; }

.body strong, .metric { font-feature-settings: "tnum" on; letter-spacing: -0.02em; }
```

**Rules:**
- Hero `h1`/`h2` italic Instrument Serif. Section titles stay sans.
- Sans uses tight tracking (`-0.005em` for body, `-0.02em` for big numbers).
- Tabular numerals everywhere a metric appears — clarity is the point.
- Avoid `font-weight: 700` for body sans. Use 500 for emphasis (Inter at 500 is plenty).

## Component recipes

### Card — borderless, soft elevation, mint glow on hover

```css
.card {
  background: #ffffff;
  border: 1px solid rgba(16, 32, 26, 0.08);
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(16, 32, 26, 0.04), 0 8px 28px rgba(28, 112, 85, 0.06);
  transition: transform 220ms cubic-bezier(0.32, 0.72, 0.34, 1),
              box-shadow 220ms ease, border-color 220ms ease;
}
.card:hover {
  transform: translateY(-2px);
  border-color: rgba(32, 167, 121, 0.20);
  box-shadow:
    0 1px 2px rgba(16, 32, 26, 0.04),
    0 18px 48px rgba(28, 112, 85, 0.12),
    inset 0 0 0 1px rgba(32, 167, 121, 0.06);
}
```

### Pill button (secondary)

```css
.btn {
  display: inline-flex; align-items: center; gap: 6px;
  background: #ffffff;
  border: 1px solid rgba(16, 32, 26, 0.08);
  border-radius: 999px;
  padding: 8px 18px;
  color: #0e1e18; font-weight: 500; letter-spacing: -0.005em;
  box-shadow: 0 1px 2px rgba(16, 32, 26, 0.04);
  transition: transform 160ms cubic-bezier(0.32, 0.72, 0.34, 1),
              box-shadow 160ms ease, border-color 160ms ease;
  cursor: pointer;
}
.btn:hover {
  background: #f0f8f4;
  border-color: rgba(32, 167, 121, 0.30);
  transform: translateY(-1px);
  box-shadow: 0 1px 2px rgba(16, 32, 26, 0.04), 0 8px 22px rgba(28, 112, 85, 0.10);
}
.btn:active { transform: scale(0.98); transition-duration: 80ms; }
.btn:focus-visible { outline: none; box-shadow: 0 0 0 4px rgba(32, 167, 121, 0.14); }
```

### Primary CTA

```css
.btn--primary {
  background: #20a779; color: #ffffff;
  border-color: #20a779;
  box-shadow: 0 1px 2px rgba(16, 32, 26, 0.06), 0 8px 22px rgba(32, 167, 121, 0.28);
}
.btn--primary:hover {
  background: #18b48b;
  box-shadow: 0 2px 4px rgba(16, 32, 26, 0.08), 0 14px 32px rgba(32, 167, 121, 0.36);
}
```

### Chip — feather-light tonal mint

```css
.chip {
  background: rgba(32, 167, 121, 0.08);
  color: #20a779;
  border: 0;
  border-radius: 999px;
  padding: 4px 12px;
  font-size: 0.84em;
  letter-spacing: -0.005em;
}
```

### Header — frosted hairline

```css
.header {
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(16, 32, 26, 0.08);
  backdrop-filter: blur(12px) saturate(1.4);
}
```

## Common mistakes (and what's wrong)

| Symptom                            | Cause                                  | Fix                                            |
|------------------------------------|----------------------------------------|------------------------------------------------|
| Looks like generic Bootstrap-y SaaS | All sans, no display moment             | Hero in Instrument Serif italic                |
| Borders look heavy                  | Border alpha 0.15+                      | Drop to 0.08, use hairline 1px                 |
| Feels stiff and corporate           | No tabular numerals, default tracking   | `font-feature-settings: "tnum" on`, `letter-spacing: -0.005em` |
| Buttons feel rubbery / springy      | Spring easing                           | Use `cubic-bezier(0.32, 0.72, 0.34, 1)` (smooth, not bouncy) |
| Hover lift feels sluggish           | 300ms+ transition                       | 220ms on cards, 160ms on buttons               |
| Mint is too saturated               | Pure greens                             | Use `#20a779` and stay there                   |

## Layout & motion rules

- **Layout:** generous whitespace (24–32px padding inside cards, 64–96px between sections). No dense grids — let blocks breathe.
- **Numbers:** tabular figures (`tnum`) — financial-clarity SaaS feel. Big metrics get tighter `letter-spacing: -0.02em`.
- **Motion:** smooth (NOT springy). `cubic-bezier(0.32, 0.72, 0.34, 1)` everywhere. Press states: `scale(0.98)` in 80ms.
- **Focus rings:** 4px mint halo. Don't suppress focus outlines — make them beautiful.
- **Avoid:** spring physics, drop shadows over 0.1 opacity, decorative icons, gradients on text, multiple accent colors.

## Output checklist

- [ ] Body has dot-grid + soft mint corner wash (NOT a flat color).
- [ ] Instrument Serif loaded; hero `h1`/`h2` are italic Instrument Serif.
- [ ] Body type is Inter (or Geist) at weight 400/500.
- [ ] Borders are hairline `rgba(16, 32, 26, 0.08)` — barely visible.
- [ ] Cards: 18px radius, soft 2-step shadow, border-color shifts mint on hover.
- [ ] Buttons: 999px pill radius, smooth easing (not springy), 80ms press squash.
- [ ] Focus rings: 4px mint halo via `box-shadow`.
- [ ] Tabular figures (`tnum`) on every numeric value.
- [ ] No drop shadows above 0.12 opacity.
- [ ] Only one accent color (mint `#20a779`). No secondary tones.
