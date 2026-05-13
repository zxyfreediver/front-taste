---
name: luxury-noir
description: Create black-gold magazine frontend UI — Bodoni Moda gold-foil display headings, EB Garamond body, hairline gold rules, dark sheen cards, brass-outlined buttons, champagne shimmer on primary CTA.
---

# Luxury Noir Style

This is **Vogue / Hermès / private-bank annual report** territory. Premium isn't "dark theme with a gold button" — it's the **typography**, **the gold-foil text effect**, **hairline gold rules** as section dividers, and slow cinematic transitions. If it could appear in a perfume ad, it's right.

## The two-line rule

1. **Display in Bodoni Moda, body in EB Garamond.** Both serif. The high-contrast Didone display + the gentle book serif body is the entire personality. Sans-serif kills luxury instantly.
2. **Gold is a gradient, never a flat color.** Display headings get the gold-foil text gradient (`background-clip: text`). Buttons and rules get a multi-stop gradient. Solid `#d4af37` looks like a mistake.

## Required: warm spotlight + cinematic vignette

```css
body {
  background-color: #080706;
  background-image:
    /* warm gold corner spotlight */
    radial-gradient(circle at 18% 0%,   rgba(215, 180, 106, 0.22), transparent 36%),
    radial-gradient(circle at 82% 100%, rgba(176, 138,  60, 0.16), transparent 38%),
    /* diagonal sheen */
    linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 44%),
    /* cinematic vignette */
    radial-gradient(circle at 50% 50%, transparent 55%, rgba(0, 0, 0, 0.55) 100%);
  color: #f7ecd8;
  font-family: "EB Garamond", "Cormorant Garamond", Georgia, serif;
  font-feature-settings: "lnum" on, "kern" on, "liga" on;
  letter-spacing: 0.005em;
  min-height: 100vh;
}
```

## Required: load Bodoni Moda + EB Garamond

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,700;1,400&family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
```

Or for Next.js:
```ts
import { Bodoni_Moda, EB_Garamond } from "next/font/google";
const display = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "700", "900"], style: ["normal", "italic"] });
const body = EB_Garamond({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"] });
```

## Color palette

| Token              | Value                       | Purpose                                  |
|--------------------|-----------------------------|------------------------------------------|
| `--bg`             | `#080706`                   | Deep blackened page                      |
| `--surface`        | `#14110d`                   | Card surface                             |
| `--surface-strong` | `#211a12`                   | Stronger card variant                    |
| `--surface-weak`   | `#1c1812`                   | Button surface                           |
| `--text`           | `#f7ecd8`                   | Warm ivory body text                     |
| `--muted`          | `#b6a485`                   | Secondary copy                           |
| `--border`         | `#4a3823`                   | Brass hairline                           |
| `--accent`         | `#d7b46a`                   | Solid gold (only for chip dots / borders) |
| `--gold-foil`      | `linear-gradient(135deg, #b8923a 0%, #f3deb1 35%, #d7b46a 60%, #876c2d 100%)` | Display text & headings |
| `--gold-line`      | `linear-gradient(90deg, transparent, #d7b46a 30%, #f3deb1 50%, #d7b46a 70%, transparent)` | Section rule |

## The gold-foil text effect

Every display heading uses this — it's the signature of the style:

```css
.gold-foil {
  background: linear-gradient(135deg, #b8923a 0%, #f3deb1 35%, #d7b46a 60%, #876c2d 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}
```

Apply to: hero `h1`/`h2`, brand mark, big metric numbers. Don't apply to body text or buttons (loses readability).

## Typography

```css
.body { font-family: "EB Garamond", Georgia, serif;
        font-feature-settings: "lnum" on, "kern" on, "liga" on;
        letter-spacing: 0.005em; line-height: 1.7; }

.display { font-family: "Bodoni Moda", Georgia, serif;
           font-weight: 500; letter-spacing: -0.01em; line-height: 1.05; }

.kicker {
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  letter-spacing: 0.32em;        /* very wide tracking — magazine kicker style */
  font-size: 0.74em;
  color: #d7b46a;
}
```

**Rules:**
- Body line-height 1.7 — luxury reads slow.
- Kickers (overline labels) get `letter-spacing: 0.32em` and small caps feel.
- NEVER use `font-weight: 700+` on body — book serif at 400 is correct.
- Never apply gold-foil to small text (under 18px) — it becomes muddy.

## Component recipes

### Card — dark sheen + hairline brass + warm hover glow

```css
.card {
  background:
    linear-gradient(135deg, rgba(215, 180, 106, 0.06), transparent 42%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 30%),
    #14110d;
  border: 1px solid #4a3823;
  border-radius: 12px;
  padding: 32px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 24px 64px rgba(0, 0, 0, 0.55);
  transition: border-color 360ms ease, box-shadow 360ms ease;
}
.card:hover {
  border-color: rgba(215, 180, 106, 0.55);
  box-shadow:
    inset 0 0 0 1px rgba(215, 180, 106, 0.20),
    inset 0 0 60px rgba(215, 180, 106, 0.08),    /* gold inner glow */
    0 28px 72px rgba(0, 0, 0, 0.60),
    0 0 80px rgba(215, 180, 106, 0.10);          /* warm halo */
}
```

### Section divider — hairline gold fading rule

```css
.divider {
  height: 1px;
  background: linear-gradient(90deg,
    transparent, #d7b46a 30%, #f3deb1 50%, #d7b46a 70%, transparent);
  margin: 56px 0;
}
```

### Button — brass hairline outline (quiet)

```css
.btn {
  background: #1c1812;
  border: 1px solid #4a3823;
  border-radius: 4px;
  padding: 10px 22px;
  color: #f7ecd8;
  font-family: "EB Garamond", serif;
  font-weight: 500;
  letter-spacing: 0.04em;
  font-size: 0.86em;
  text-transform: uppercase;
  cursor: pointer;
  transition: border-color 320ms ease, color 320ms ease, background 320ms ease;
}
.btn:hover {
  border-color: #d7b46a;
  color: #d7b46a;
  background: rgba(215, 180, 106, 0.06);
}
```

### Primary CTA — champagne shimmer (THE signature interaction)

```css
.btn--primary {
  background: linear-gradient(120deg, #b8923a 0%, #f3deb1 35%, #d7b46a 65%, #b8923a 100%);
  background-size: 220% 100%;     /* gradient is 2.2× wider than button */
  background-position: 0% 0;
  border: 1px solid #f3deb1;
  color: #120d08;
  font-weight: 600;
  letter-spacing: 0.10em;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.40),
    0 18px 48px rgba(215, 180, 106, 0.30);
  transition: background-position 700ms ease, box-shadow 700ms ease;
}
.btn--primary:hover {
  /* slide the gradient — like champagne tilting */
  background-position: -120% 0;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    0 22px 56px rgba(215, 180, 106, 0.42);
}
```

### Chip — hairline gold + LED-dot

```css
.chip {
  position: relative;
  padding: 4px 12px 4px 22px;
  border: 1px solid rgba(215, 180, 106, 0.35);
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.72em;
  color: #d7b46a;
  background: transparent;
}
.chip::before {
  content: ""; position: absolute; left: 8px; top: 50%;
  transform: translateY(-50%);
  width: 6px; height: 6px; border-radius: 50%;
  background: #d7b46a;
  box-shadow: 0 0 6px rgba(215, 180, 106, 0.50);
}
```

### Header — soft frost + gold underline

```css
.header {
  background: rgba(8, 7, 6, 0.85);
  position: relative;
  backdrop-filter: blur(12px);
}
.header::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent, #d7b46a 30%, #f3deb1 50%, #d7b46a 70%, transparent);
}
.header .brand {
  font-family: "Bodoni Moda", serif;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #b8923a, #f3deb1, #d7b46a, #876c2d);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

## Common mistakes (and what's wrong)

| Symptom                              | Cause                                  | Fix                                            |
|--------------------------------------|----------------------------------------|------------------------------------------------|
| Looks like generic dark theme + gold | Sans-serif body, solid gold accent     | Bodoni display + EB Garamond body + gold-foil gradient on text |
| Gold looks cheap / yellow            | Single hex gold (`#ffd700`)             | Use the 4-stop gradient (#b8923a → #f3deb1 → #d7b46a → #876c2d) |
| Headings look chunky                 | `font-weight: 700+`                    | Bodoni at weight 500 — its high-contrast strokes carry the weight |
| Body text feels stiff                | line-height 1.4 / sans                  | EB Garamond at line-height 1.7                |
| Hover feels rushed                   | 200ms transitions                       | 320–700ms slow eases; luxury moves slow       |
| Buttons feel plastic                 | Filled with solid color                 | Hairline brass border on quiet buttons; gold gradient on primary |
| Section feels flat                   | No divider rule                         | Use the fading hairline gold rule between sections |

## Layout & motion rules

- **Layout:** cinematic spacing — 56–96px between sections. Hairline gold rules separate them. Cards have generous internal padding (32px+).
- **Numbers:** lining figures (`lnum`) — luxury financial reports use lining, not old-style. Use Bodoni for big numbers + apply gold foil for hero metrics.
- **Motion:** slow eases (320–700ms). NEVER spring physics. The champagne shimmer on the primary CTA is the only "look at me" motion.
- **Avoid:** fast game-y effects, neon, drop shadows you can see clearly, pastel colors, tight letter-spacing on uppercase, sans-serif fonts.

## Output checklist

- [ ] Body has warm gold spotlights + cinematic corner vignette.
- [ ] Bodoni Moda + EB Garamond loaded; both serifs.
- [ ] Display headings (h1, h2, hero, brand) use the gold-foil gradient via `background-clip: text`.
- [ ] Body uses EB Garamond at line-height 1.7.
- [ ] Kickers / overlines have `letter-spacing: 0.32em`.
- [ ] Section dividers are hairline gold fading rules.
- [ ] Cards have a hairline brass border that brightens on hover + adds gold inner glow.
- [ ] Quiet buttons: hairline brass outline, color shifts to gold on hover.
- [ ] Primary CTA has the champagne-shimmer gradient slide on hover.
- [ ] Chips have a leading gold dot.
- [ ] No solid `#d4af37` flat gold anywhere — always a gradient.
- [ ] No sans-serif. No spring physics. No fast transitions.
