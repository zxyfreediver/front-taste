---
name: clay-play
description: Create soft 3D claymorphism frontend UI — pillow-inflated cards via 4-layer shadow system, Fredoka rounded-friendly typography, squashy press feedback, gentle idle wobble on primary CTA, pastel cloud-blob background.
---

# Clay Play Style

Real claymorphism, not "rounded corners and a pastel color". The defining visual is **a 4-layer shadow system** that makes every surface look genuinely 3D-pillow-inflated, like it's molded from soft clay rather than drawn on a screen. Every interaction is tactile — buttons squash on press, the primary CTA wobbles gently like it's alive.

## The two-line rule

1. **4 shadow layers per surface, always.** A single shadow gives you flat tinted cards. Real clay needs an inner top highlight + inner bottom shade + outer ground shadow + soft floor blur. **Skip any one layer and it stops looking 3D.**
2. **Fredoka, not Inter.** The font is half the personality. Rounded glyph terminals + warm proportions are what make the surface look soft. A sans-serif modernist font on a clay layout looks like a confused ad.

## Required: pastel blob background

Cards need vibrant pastel space behind them to feel cheerful:

```css
body {
  background-color: #fff1e6;
  background-image:
    radial-gradient(circle at 14% 16%, rgba(255, 122,  89, 0.30), transparent 28%),
    radial-gradient(circle at 86% 12%, rgba(116, 211, 255, 0.26), transparent 26%),
    radial-gradient(circle at 22% 92%, rgba(255, 211, 110, 0.22), transparent 28%),
    radial-gradient(circle at 82% 80%, rgba(196, 110, 255, 0.22), transparent 26%);
  color: #272038;
  font-family: "Fredoka", "Quicksand", "Nunito", system-ui, sans-serif;
  font-weight: 500;
  min-height: 100vh;
}
```

## Required: load Fredoka

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Or for Next.js:
```ts
import { Fredoka } from "next/font/google";
const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
```

## The 4-layer pillow shadow (the entire visual identity)

Every clay surface uses this exact shadow structure, scaled up or down:

```css
.clay {
  border: 0;                               /* clay surfaces never have borders */
  border-radius: 32px;                     /* big radius — pillows aren't sharp */
  background: #ffffff;
  box-shadow:
    inset 0 3px 0  rgba(255, 255, 255, 0.95),  /* 1. inner top highlight (rim of light) */
    inset 0 -4px 0 rgba(103, 74, 92, 0.18),    /* 2. inner bottom shade (rim of shadow) */
    0 2px 0 rgba(255, 255, 255, 0.6),           /* 3. outer top rim       */
    0 14px 0 rgba(103, 74, 92, 0.18),           /* 4a. ground shadow (hard offset) */
    0 32px 70px rgba(255, 122, 89, 0.22);       /* 4b. floor blur (soft scatter) */
}
```

The two `inset` shadows are what give the pillow shape. The outer `0 14px 0` is what makes the whole surface look like it's resting *on top of* something. The `32px 70px` blur is the warm floor halo.

## Color palette

| Token              | Value                    | Purpose                                  |
|--------------------|--------------------------|------------------------------------------|
| `--bg`             | `#fff1e6`                | Cream page background                    |
| `--surface`        | `#ffffff`                | Card / button surface                    |
| `--surface-strong` | `#ffd6e8`                | Pink accent surface                      |
| `--surface-weak`   | `#fff8f1`                | Hover surface                            |
| `--text`           | `#272038`                | Body text (warm purple-black)            |
| `--muted`          | `#7b6c86`                | Secondary text                           |
| `--accent`         | `#ff7a59`                | Coral primary accent                     |
| `--accent-2`       | `#74d3ff`                | Sky-blue secondary accent                |
| `--clay-highlight` | `rgba(255, 255, 255, 0.95)` | Inner top highlight              |
| `--clay-shade`     | `rgba(103, 74, 92, 0.18)` | Inner bottom shade / ground         |
| `--clay-deep`      | `rgba(103, 74, 92, 0.30)` | Deep accent shade for primary       |

## Component recipes

### Card — full pillow

```css
.card {
  background: #ffffff;
  border: 0;
  border-radius: 32px;
  padding: 28px;
  box-shadow:
    inset 0 3px 0 rgba(255, 255, 255, 0.95),
    inset 0 -4px 0 rgba(103, 74, 92, 0.18),
    0 2px 0 rgba(255, 255, 255, 0.6),
    0 14px 0 rgba(103, 74, 92, 0.18),
    0 32px 70px rgba(255, 122, 89, 0.22);
  transition: transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 220ms ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow:
    inset 0 3px 0 rgba(255, 255, 255, 0.95),
    inset 0 -4px 0 rgba(103, 74, 92, 0.18),
    0 2px 0 rgba(255, 255, 255, 0.6),
    0 18px 0 rgba(103, 74, 92, 0.18),
    0 40px 80px rgba(255, 122, 89, 0.28);
}
```

### Button — squash on press

```css
.btn {
  background: #ffffff;
  border: 0;
  border-radius: 999px;
  padding: 12px 24px;
  color: #272038;
  font-family: "Fredoka", system-ui, sans-serif;
  font-weight: 600;
  cursor: pointer;
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.95),
    inset 0 -3px 0 rgba(103, 74, 92, 0.18),
    0 6px 0 rgba(103, 74, 92, 0.18),
    0 14px 28px rgba(255, 122, 89, 0.20);
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 200ms ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.95),
    inset 0 -3px 0 rgba(103, 74, 92, 0.18),
    0 8px 0 rgba(103, 74, 92, 0.18),
    0 18px 36px rgba(255, 122, 89, 0.26);
}
.btn:active {
  /* squash — collapse vertical shadow as button compresses */
  transform: translateY(4px) scale(0.97);
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.95),
    inset 0 -2px 0 rgba(103, 74, 92, 0.18),
    0 1px 0 rgba(103, 74, 92, 0.18),
    0 4px 12px rgba(255, 122, 89, 0.18);
}
```

### Primary CTA — coral pillow with idle wobble

```css
@keyframes clay-wobble {
  0%, 100% { transform: rotate(0deg); }
  25%      { transform: rotate(-1deg); }
  50%      { transform: rotate(0deg); }
  75%      { transform: rotate(1deg); }
}

.btn--primary {
  background: #ff7a59;
  color: #ffffff;
  font-weight: 700;
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.55),
    inset 0 -4px 0 rgba(180, 50, 30, 0.30),
    0 8px 0 rgba(180, 50, 30, 0.30),
    0 22px 44px rgba(255, 122, 89, 0.36);
  animation: clay-wobble 4.6s ease-in-out infinite;
  transform-origin: center;
}
.btn--primary:hover {
  animation: none;                          /* hold still on hover */
  transform: translateY(-3px) scale(1.03);
}
.btn--primary:active {
  animation: none;
  transform: translateY(4px) scale(0.96);
}
```

### Chip / tag — small pillow

Same skeleton as `.btn`, smaller padding (`4px 14px`), smaller shadow (`0 4px 0` ground), keep the inset highlight + shade. Looks like a pressable jelly bean.

### Header — translucent pillow band

```css
.header {
  background: rgba(255, 255, 255, 0.65);
  border: 0;
  backdrop-filter: blur(12px) saturate(1.4);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.85),
    inset 0 -1px 0 rgba(255, 122, 89, 0.16),
    0 6px 24px rgba(255, 122, 89, 0.10);
}
```

## Common mistakes (and what's wrong)

| Symptom                              | Cause                                  | Fix                                            |
|--------------------------------------|----------------------------------------|------------------------------------------------|
| Looks like flat pastel cards          | Single drop shadow                     | Add ALL 4 shadow layers (highlight + shade + ground + floor) |
| Looks like a kid's app                | Comic Sans, primary RGB colors          | Fredoka + muted pastels (`#ff7a59`, `#74d3ff`) |
| Buttons feel like generic Material   | Same shadow on idle/hover/active        | Squash on `:active`: collapse `0 6px 0` → `0 1px 0` and `translateY(4px) scale(0.97)` |
| Borders look weird                   | Has a `border` declaration              | Remove all borders — clay is borderless        |
| Hover feels stiff                    | Linear easing, no scale                 | Spring `cubic-bezier(0.34, 1.56, 0.64, 1)` 220ms |
| Primary CTA feels dead               | No idle motion                          | Add `clay-wobble` rotate animation             |
| Cards look bumpy / harsh             | Border radius < 24px                    | Use 28–32px on cards, 999px on buttons         |

## Layout & motion rules

- **Layout:** asymmetric stagger (offset alternating cards `translateY(18px)`) for friendly hand-arranged feel. Use big radius (32px), generous padding (24–32px).
- **Numbers:** Fredoka regular weight — don't use tabular figures (kills the friendly feel).
- **Motion budget:**
  - Cards: hover lift (3px) — spring easing.
  - Buttons: hover lift (2px) + squash on `:active` (translateY 4px, scale 0.97).
  - Primary CTA: continuous gentle wobble (rotate ±1deg over 4.6s) — pauses on hover.
  - Wrap wobble in `prefers-reduced-motion: reduce`.
- **Avoid:** sharp corners, hairline borders, cool grays, drop shadows under 0.10 alpha (won't show), stiff easing.

## Output checklist

- [ ] Body has 3–4 saturated pastel cloud blobs.
- [ ] Fredoka loaded as the only font.
- [ ] Every card has the **4-layer shadow** (top highlight + bottom shade + ground offset + floor blur).
- [ ] Cards have NO border, `border-radius: 28–32px`.
- [ ] Buttons squash on `:active` (translate down + scale 0.97 + collapsed shadow).
- [ ] Primary CTA has idle `clay-wobble` rotation animation.
- [ ] Spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)` everywhere.
- [ ] Asymmetric stagger on dashboard cards (every other one offset 18px).
- [ ] No sharp corners, no hairlines, no monospace, no muted grays.
- [ ] `prefers-reduced-motion` disables the CTA wobble.
