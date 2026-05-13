---
name: vintage-computing
description: Create retro desktop frontend UI — beige plastic shell, beveled keycap buttons, scanlined CRT terminal panels with phosphor-glow VT323 text, pinstripe title bars, and old window chrome.
---

# Vintage Computing Style

This is **1980s/early-90s desktop hardware**, not generic "retro". Cards look like beige plastic windows. Buttons look like injection-molded keycaps that physically push in when pressed. Terminal panels are dark with green phosphor text and visible CRT scanlines. The page should feel like it could boot DOS.

## The four pillars

1. **Beige plastic + bevels.** Every card and button has a 4-shadow bevel: light highlight on top-left, dark shade on bottom-right, hard offset drop shadow. NO `border-radius` (or 2px max).
2. **VT323 in CRT panels.** Terminal/data panels use `VT323` (the iconic 1976 Lear Siegler ADM-3A terminal font), green or amber phosphor color, visible scanlines.
3. **Buttons that push in.** On `:active`, the bevel **inverts** (light becomes dark, dark becomes light) and the button translates 1–2px down-right. This is the keycap-press feel.
4. **CRT vignette.** A radial darken at the page corners simulates monitor curvature. Plus subtle scanlines on terminal panels.

Skip any one and it slides toward "generic Windows 98 parody".

## Required: pixel grid + CRT vignette

```css
body {
  background-color: #d7c7a3;
  background-image:
    linear-gradient(90deg, rgba(83, 69, 43, 0.10) 1px, transparent 1px),
    linear-gradient(rgba(83, 69, 43, 0.08) 1px, transparent 1px),
    /* CRT corner darken */
    radial-gradient(circle at 50% 50%, transparent 55%, rgba(48, 40, 25, 0.22) 100%);
  background-size: 24px 24px, 24px 24px, auto;
  color: #2b261c;
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  min-height: 100vh;
}
```

## Required: load VT323

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=VT323&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

Or for Next.js:
```ts
import { VT323, IBM_Plex_Mono } from "next/font/google";
const vt323 = VT323({ subsets: ["latin"], weight: ["400"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"] });
```

Use `VT323` for terminal panels + display headings. Use `IBM Plex Mono` (or `Geist Mono`) for UI button labels — VT323 at small sizes can be hard to read.

## Color palette

| Token              | Value      | Purpose                                      |
|--------------------|------------|----------------------------------------------|
| `--bg`             | `#d7c7a3`  | Beige desk surface                           |
| `--surface`        | `#efe2bd`  | Beige plastic panel                          |
| `--surface-strong` | `#1e2a1d`  | Dark CRT panel background                    |
| `--surface-weak`   | `#c7b78e`  | Hover / pinstripe shade                      |
| `--text`           | `#2b261c`  | Body text                                    |
| `--muted`          | `#6f6148`  | Secondary text                               |
| `--border`         | `#4d412c`  | Hard bevel border                            |
| `--accent`         | `#2f6b3f`  | Action green                                 |
| `--accent-2`       | `#d78d2f`  | Warning amber                                |
| `--bevel-light`    | `rgba(255, 246, 218, 0.85)` | Top-left highlight inset      |
| `--bevel-dark`     | `rgba(70, 58, 38, 0.55)` | Bottom-right shade inset         |
| `--crt-green`      | `#6cff6c`  | Phosphor green                               |
| `--crt-amber`      | `#ffb000`  | Phosphor amber (alternative)                 |

## The bevel system

Every interactive surface uses this 4-shadow recipe (the entire visual identity of the style):

```css
.bevel {
  border: 2px solid #4d412c;
  border-radius: 2px;
  box-shadow:
    inset 1px 1px 0 rgba(255, 246, 218, 0.85),    /* top-left highlight */
    inset -1px -1px 0 rgba(70, 58, 38, 0.55),     /* bottom-right shade */
    2px 2px 0 rgba(48, 40, 25, 0.40);             /* hard offset drop */
}

.bevel:active {
  /* INVERT — looks pressed in */
  box-shadow:
    inset 1px 1px 0 rgba(70, 58, 38, 0.55),
    inset -1px -1px 0 rgba(255, 246, 218, 0.85),
    1px 1px 0 rgba(48, 40, 25, 0.20);
  transform: translate(2px, 2px);
}
```

## Component recipes

### Card / panel — beige plastic window

```css
.window {
  background: #efe2bd;
  border: 2px solid #4d412c;
  border-radius: 2px;
  padding: 24px;
  box-shadow:
    inset 0 1px 0 rgba(255, 246, 218, 0.85),
    inset 0 -1px 0 rgba(70, 58, 38, 0.55),
    inset 1px 0 0 rgba(255, 246, 218, 0.85),
    inset -1px 0 0 rgba(70, 58, 38, 0.55),
    4px 4px 0 rgba(48, 40, 25, 0.40);
}
```

Optional: top title bar with traffic-light dots (`● ● ●`) on the left and an `.ft-window-title` (VT323).

### CRT terminal panel — green phosphor + scanlines + flicker

```css
@keyframes crt-flicker {
  0%, 96%, 100% { opacity: 1; }
  97% { opacity: 0.92; }
  98% { opacity: 0.97; }
  99% { opacity: 0.94; }
}

.terminal {
  position: relative;
  background:
    /* visible scanlines — 2px on, 1px off */
    repeating-linear-gradient(180deg, transparent 0 2px, rgba(0, 0, 0, 0.18) 2px 3px),
    #1e2a1d;
  color: #6cff6c;
  font-family: "VT323", monospace;
  font-size: 1.1em;
  text-shadow: 0 0 4px rgba(108, 255, 108, 0.55), 0 0 10px rgba(108, 255, 108, 0.25);
  border: 2px solid #4d412c;
  padding: 20px;
  box-shadow:
    inset 0 0 32px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(108, 255, 108, 0.22),
    4px 4px 0 rgba(48, 40, 25, 0.40);
  animation: crt-flicker 6s infinite;
}

/* CRT curvature vignette inside the screen */
.terminal::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.45) 100%);
}
```

### Button — beveled keycap

```css
.btn {
  background: #efe2bd;
  border: 2px solid #4d412c;
  border-radius: 2px;
  padding: 8px 18px;
  color: #2b261c;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.86em;
  font-weight: 600;
  cursor: pointer;
  box-shadow:
    inset 1px 1px 0 rgba(255, 246, 218, 0.85),
    inset -1px -1px 0 rgba(70, 58, 38, 0.55),
    2px 2px 0 rgba(48, 40, 25, 0.40);
  transition: transform 80ms ease, box-shadow 80ms ease, background 80ms ease;
}
.btn:hover { background: #c7b78e; }
.btn:active {
  /* keycap pushes in */
  box-shadow:
    inset 1px 1px 0 rgba(70, 58, 38, 0.55),
    inset -1px -1px 0 rgba(255, 246, 218, 0.85),
    1px 1px 0 rgba(48, 40, 25, 0.20);
  transform: translate(2px, 2px);
}

.btn--primary {
  background: #2f6b3f; color: #f5edcf; border-color: #4d412c;
  box-shadow:
    inset 1px 1px 0 rgba(255, 255, 255, 0.30),
    inset -1px -1px 0 rgba(0, 0, 0, 0.30),
    3px 3px 0 rgba(48, 40, 25, 0.40);
}
```

### Header — pinstripe title bar

```css
.header {
  background: repeating-linear-gradient(180deg,
    #c7b78e 0 2px, #b3a47b 2px 3px);
  border-bottom: 2px solid #4d412c;
  box-shadow: inset 0 1px 0 rgba(255, 246, 218, 0.85),
              inset 0 -1px 0 rgba(70, 58, 38, 0.55);
}
.header .brand {
  font-family: "VT323", monospace;
  font-size: 1.4em;
  letter-spacing: 0.04em;
  text-shadow: 1px 1px 0 rgba(255, 246, 218, 0.85);
}
```

### Display headings — chunky VT323 with hard drop shadow

```css
h1, h2 {
  font-family: "VT323", monospace;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-shadow:
    2px 2px 0 rgba(255, 246, 218, 0.85),
    3px 3px 0 #4d412c;
}
```

## Common mistakes (and what's wrong)

| Symptom                              | Cause                                  | Fix                                            |
|--------------------------------------|----------------------------------------|------------------------------------------------|
| Looks like Windows 98 parody         | Cartoon colors, oversized chrome       | Subdued beige `#efe2bd`, 2px borders only      |
| Buttons feel flat                     | Single shadow                          | Use the 4-shadow bevel + invert on `:active`  |
| Terminal looks like a dark theme card | No scanlines, no phosphor glow         | Repeating-linear-gradient scanlines + VT323 + green text-shadow |
| Modern microinteractions break it    | Spring physics, 300ms eases            | Sharp 80ms transitions only                   |
| Body type looks fuzzy                | VT323 used for body                    | VT323 only for terminal & headings; UI uses IBM Plex Mono |
| Cards feel "soft"                    | `border-radius` >2px or no drop shadow | Hard 2px radius, hard `4px 4px 0` drop        |

## Layout & motion rules

- **Layout:** treat panels as windows. Add title bars with traffic-light dots `● ● ●`, status strips at the bottom with `▌` separators. Tables as system logs.
- **Numbers:** monospace tabular numerals — they ARE the font.
- **Motion:** sharp 80ms transitions, no easing curves beyond `ease`. NO spring physics. The keycap press is the only motion.
- **CRT flicker:** apply the `crt-flicker` animation to terminal panels at low rate (~6s period, ~5% drop). Don't apply to UI panels.
- **Wrap in `prefers-reduced-motion`:** disable `crt-flicker` for users who request it.
- **Avoid:** `border-radius: 8px+`, soft shadows, pastel colors, sans-serif body text, gradients on text.

## Output checklist

- [ ] Beige `#d7c7a3` background with pixel grid + CRT corner vignette.
- [ ] VT323 loaded; used for terminal panels + display headings.
- [ ] IBM Plex Mono (or equivalent) for UI labels and body.
- [ ] Every card/button has the 4-shadow bevel (highlight + shade + offset drop).
- [ ] Buttons invert their bevel on `:active` and translate `2px 2px`.
- [ ] Terminal panels have green/amber phosphor color + scanlines + glow text-shadow + `crt-flicker` animation.
- [ ] Headings use VT323 with hard `2px 2px 0` drop shadow.
- [ ] Header has pinstripe background.
- [ ] No `border-radius` >2px anywhere.
- [ ] No spring physics, no soft shadows, no SaaS pastels.
- [ ] `prefers-reduced-motion` disables CRT flicker.
