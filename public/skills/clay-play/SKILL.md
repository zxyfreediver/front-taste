---
name: industrial-blue
description: Create clean corporate blue-white frontend UI — standard system fonts, white surfaces with fine borders, corporate blue accents, structured grids, professional and plain.
---

# Industrial Blue Style

Clean corporate enterprise UI. The defining visual is **white card surfaces with fine gray borders, corporate blue (#2563eb) accents, and structured grid layouts** — the kind of UI you'd find in a professional B2B SaaS dashboard. Nothing playful, nothing trendy. Just clean, professional, and readable.

## The two-line rule

1. **White cards with 1px borders, always.** Cards aren't floating — they're contained in fine gray (`#d4d8e0`) borders with subtle shadows. No border-radius over 6px. No borderless surfaces.
2. **System sans-serif, not a display font.** Use the OS-native sans-serif stack (`Geist`, `Inter`, `system-ui`). No serif, no rounded fonts, no monospace for body text.

## Required: clean gray-blue background

```css
body {
  background-color: #f4f6f9;
  color: #131a26;
  font-family: "Geist", "Inter", ui-sans-serif, system-ui, sans-serif;
  min-height: 100vh;
}
```

## Color palette

| Token           | Value    | Purpose                    |
|-----------------|----------|----------------------------|
| `--bg`          | `#f4f6f9` | Page background            |
| `--surface`     | `#ffffff` | Card / panel surface       |
| `--surface-alt` | `#e4e8f0` | Secondary surface          |
| `--text`        | `#131a26` | Body text (near-black)     |
| `--muted`       | `#5e6d82` | Secondary text             |
| `--border`      | `#d4d8e0` | Card / input borders       |
| `--accent`      | `#2563eb` | Corporate blue accent      |
| `--accent-2`    | `#3b82f6` | Lighter blue               |

## Component recipes

### Card

```css
.card {
  background: #ffffff;
  border: 1px solid #d4d8e0;
  border-radius: 6px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06);
}
```

### Button

```css
.btn {
  background: #ffffff;
  border: 1px solid #d4d8e0;
  border-radius: 6px;
  padding: 10px 20px;
  color: #131a26;
  font-family: "Geist", "Inter", ui-sans-serif, system-ui, sans-serif;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease;
}
.btn:hover {
  transform: translateY(-1px);
  background: #f8f9fb;
  border-color: #2563eb;
  box-shadow: 0 2px 6px rgba(37,99,235,0.10);
}
.btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}
```

### Primary CTA

```css
.btn--primary {
  background: #2563eb;
  color: #ffffff;
  border: 1px solid #2563eb;
  border-radius: 6px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(37,99,235,0.20);
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
}
.btn--primary:hover {
  transform: translateY(-1px);
  background: #1d4ed8;
  box-shadow: 0 4px 14px rgba(37,99,235,0.30);
}
.btn--primary:active {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(37,99,235,0.20);
}
```

### Header

```css
.header {
  background: #ffffff;
  border-bottom: 1px solid #d4d8e0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
```

## Layout & motion rules

- **Layout:** Structured grids, clear section hierarchy, professional spacing (24–32px gaps). Cards align to a clean grid — no staggered offsets.
- **Typography:** Single sans-serif stack. Headings at 600 weight. Body at 400. Muted text at `#5e6d82`.
- **Motion budget:**
  - Cards: 2px hover lift, 180ms ease.
  - Buttons: 1px hover lift, 160ms ease.
  - No animations, no wobbles, no spring physics.
- **Avoid:** border-radius over 8px, borderless cards, playful shadows, display fonts, bright/saturated colors, gradients.

## Output checklist

- [ ] Body has clean gray-blue background (`#f4f6f9`).
- [ ] System sans-serif font only — no display or rounded fonts.
- [ ] Every card has 1px `#d4d8e0` border + subtle shadow.
- [ ] Border-radius never exceeds 6px.
- [ ] Corporate blue (`#2563eb`) used only for accents and primary actions.
- [ ] Standard ease transitions — no spring or bounce.
- [ ] Clean grid alignment — no staggered/offset cards.
- [ ] Header is white with bottom border.
