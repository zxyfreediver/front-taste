---
name: mono-ink
description: Create antique manuscript / e-ink reader frontend UI — warm paper background, ink-warm black text, IM Fell English book typography with hand-printed irregularity, paper grain, and hairline rules.
---

# Mono Ink Style

This is **not** a "modern minimal black-and-white editorial" style. It's a **17th-century book / e-ink reader** style — the page should feel like aged paper or a Kindle in dim light, set in a serif type that visibly remembers being pressed by ink onto paper.

## The two-line rule

1. **Paper, not white.** Background is warm cream `#e6e1d2` (or `#d4d1c5` for a cooler e-ink feel). Pure white kills the manuscript mood instantly.
2. **Ink, not black.** Text is warm near-black `#1a1611`. Pure `#000` looks digital and harsh; warm black reads as printed ink.

## Required: load IM Fell English

The defining choice. **IM Fell English** is a free Google Font that revives a 17th-century English book face. Its irregular glyphs are exactly what gives the "古体手写" (ancient handwritten) quality — letters wobble slightly, ink-like, asymmetric.

```html
<!-- via <link> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
```

Or for Next.js:
```ts
import { IM_Fell_English, EB_Garamond } from "next/font/google";
const imFell = IM_Fell_English({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });
const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"] });
```

**Pairing:** IM Fell English for headings, big quotes, and decorative copy. EB Garamond for long body text (it's smoother and easier on the eyes for paragraphs).

## Required: warm paper background with grain

Paper isn't a flat color — it has fiber. Add an SVG noise overlay so it doesn't look like a colored rectangle:

```css
body {
  background-color: #e6e1d2;
  background-image:
    /* paper grain — SVG noise at low opacity */
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.10  0 0 0 0 0.09  0 0 0 0 0.07  0 0 0 0.18 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>"),
    /* horizontal ledger rules — optional, for ledger / table feel */
    linear-gradient(#1a1611 1px, transparent 1px);
  background-size: 180px 180px, 100% 84px;
  color: #1a1611;
  min-height: 100vh;
}
```

For a cooler "e-ink reader" variant, swap `#e6e1d2` → `#d4d1c5` (cooler gray). Keep the grain.

## Color palette (the entire palette)

| Token              | Value      | Purpose                                  |
|--------------------|------------|------------------------------------------|
| `--paper`          | `#e6e1d2`  | Page background (warm aged paper)        |
| `--paper-light`    | `#efeadc`  | Card / panel surface (lighter cream)     |
| `--paper-shadow`   | `#ddd6c2`  | Hover / inset / disabled state           |
| `--ink`            | `#1a1611`  | Body text & all rules                    |
| `--ink-muted`      | `#5a5142`  | Secondary text, captions                 |
| `--ink-faded`      | `#6a5f4d`  | Tertiary text, dates                     |

**Do not introduce any other color.** No grays from a fresh palette, no off-blacks. Only these six values, all pulled from the same brown-warm hue family.

## Typography

```css
.body { font-family: "EB Garamond", "IM Fell English", Georgia, "Songti SC", serif;
        line-height: 1.78; font-feature-settings: "liga", "dlig", "onum"; }
.display { font-family: "IM Fell English", Georgia, serif; font-weight: 400;
           letter-spacing: 0.01em;
           /* the ink-bleed shadow — letters look softly pressed onto paper */
           text-shadow: 0 0 0.8px rgba(26, 22, 17, 0.28),
                        0.3px 0.3px 0 rgba(26, 22, 17, 0.18); }
```

**Key rules:**
- **No `text-transform: uppercase`.** Manuscripts use mixed case. All-caps reads as 20th-century editorial, not antique.
- **Italic for emphasis**, not bold. `<em>` and `<i>` get `font-style: italic` — that's how books mark stress.
- **Generous leading** (1.7–1.8). Manuscripts are read slowly.
- **Old-style figures** (`font-feature-settings: "onum" on`). Numbers like 1234 should descend below the baseline — that's how period type set them.
- **The ink-bleed `text-shadow`** is the most important detail. Without it, letters look digital. With it, they feel pressed.

## Component recipes

### Card / panel — paper sheet

```css
.paper-card {
  background: #efeadc;
  border: 1.5px solid #1a1611;
  border-radius: 0;                  /* never rounded — paper has corners */
  padding: 32px;
  box-shadow:
    0 1px 0 rgba(26, 22, 17, 0.10),  /* subtle stacked-paper hint */
    2px 4px 0 rgba(26, 22, 17, 0.05);
}
```

### Button / chip — slab with ink rule

```css
.ink-button {
  background: #efeadc;
  border: 1.5px solid #1a1611;
  border-radius: 0;
  padding: 8px 18px;
  font-family: "IM Fell English", Georgia, serif;
  letter-spacing: 0.02em;
  color: #1a1611;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease, box-shadow 120ms ease;
}
.ink-button:hover {
  background: #ddd6c2;
  transform: translate(-1px, -1px);
  box-shadow: 2px 2px 0 #1a1611;     /* paper lifts off the page */
}
.ink-button--primary {
  background: #1a1611; color: #efeadc;
}
```

### Drop cap — first letter of a major paragraph

```css
.lede > p:first-of-type::first-letter {
  font-family: "IM Fell English", Georgia, serif;
  float: left;
  font-size: 3.2em;
  line-height: 0.88;
  padding: 0.08em 0.12em 0 0;
}
```

### Header — single hairline rule, no frost

```css
.ink-header {
  background: #efeadc;
  border-bottom: 1.5px solid #1a1611;
  padding: 18px 24px;
  /* no box-shadow, no backdrop-filter — this isn't a tech site */
}
```

### Tables / ledgers — period numerals + thin rules

```css
.ledger { font-feature-settings: "tnum" on, "onum" on; border-collapse: collapse; }
.ledger th, .ledger td {
  padding: 10px 14px;
  border-bottom: 1px solid #1a1611;
  text-align: left;
}
.ledger th { font-family: "IM Fell English", Georgia, serif; font-weight: 400; font-style: italic; }
```

## Common mistakes (and what's wrong)

| Symptom                             | Cause                                  | Fix                                            |
|-------------------------------------|----------------------------------------|------------------------------------------------|
| Looks like a tech editorial site    | Sans-serif font, all-caps headings     | Use IM Fell English serif, mixed case         |
| Looks digital and harsh             | Pure `#000` on pure `#fff`             | Use `#1a1611` ink on `#e6e1d2` paper          |
| Looks flat and dead                 | No paper grain                          | Add the SVG noise background                   |
| Letters look pristine, not "inky"   | No text-shadow on display              | Add the faint ink-bleed shadow                 |
| Cards feel too modern               | Rounded corners, drop shadows           | `border-radius: 0`, hairline border, paper offset shadow |
| Bold for emphasis feels wrong       | Using `<strong>` / `font-weight: 700`   | Use `<em>` + italic instead                   |

## Layout & motion rules

- **Layout:** column grids, hairline rules between sections, generous side margins. Treat every panel as a printed page. Use sidenotes (small italic text in margin) instead of tooltips.
- **Tables:** hairline rules only, period numerals (`tnum onum`).
- **Motion:** minimal. Hover lifts the paper 1px with an offset shadow. No fades, no scales, no spring physics. Things should feel like marking ink, not animating pixels.
- **Dashboards:** financial-newspaper feel — column tables, bar charts in pure ink, no colored accents.
- **Settings:** form rows separated by hairline rules, italic field labels, slab black "Save" buttons.

## Browser support

All standard CSS — no exotic features. Works everywhere.

## Output checklist

- [ ] IM Fell English loaded (heading + display) and EB Garamond loaded (body).
- [ ] Background is warm paper `#e6e1d2`, NOT white. Cream/aged feel.
- [ ] SVG noise grain layered on the body background.
- [ ] Text is ink-warm `#1a1611`, NOT pure black.
- [ ] Display headings have a faint ink-bleed `text-shadow`.
- [ ] No `text-transform: uppercase` anywhere. Mixed case throughout.
- [ ] Italic for emphasis, not bold.
- [ ] Old-style figures enabled via `font-feature-settings: "onum" on`.
- [ ] Body line-height 1.7–1.8.
- [ ] Cards/buttons: `border-radius: 0`, 1.5px ink border, paper-offset shadow on hover.
- [ ] No colored accents anywhere — only the six paper/ink values.
- [ ] First paragraph of major copy uses a drop cap.
