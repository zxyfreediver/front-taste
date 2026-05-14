---
name: neon-cyberpunk
description: Create mechanical neon-cyberpunk frontend UI — clipped panels with corner targeting brackets, shimmer-sweep on hover for both cards and buttons, RGB-glitch text, persistent HUD scanlines, and a slow vertical scan beam.
---

# Neon Cyberpunk Style

## Structure lock

When applying this taste to an existing product, preserve the product's current DOM/content structure, paragraph order, component logic, responsive breakpoints, semantic roles, and control behavior. Do not split or merge paragraphs, reorder sections, add/drop product cards, or change a flow unless the user explicitly asks.

Keep the host application's font sizes, line heights, spacing scale, grid ratios, and control dimensions. Apply Neon Cyberpunk through font-family choices, color tokens, surfaces, borders, shadows, texture, icon treatment, and other non-structural visual details. Treat any sizing or layout values in examples below as illustrative recipes for new work, not overrides for an existing app.

Not "dark site with neon accent colors". This style is a **mechanical HUD**: every card looks like a piece of hardware, every button looks like a stamped slab in an arcade cabinet, every heading flickers with RGB misregistration. Static surfaces are sharp and angular. **Motion is reserved for hover and one slow background scan beam** — no constantly spinning lights, no flickering ambient effects (those just look ugly and distracting).

## The four pillars

A surface is cyberpunk when it has **all four**:

1. **Sharp angular geometry** — clipped corners (octagonal cuts), `border-radius: 0`, no soft curves anywhere.
2. **Corner brackets** — L-shaped marks at the 4 corners of every card, like a targeting reticle. Pure machine-UI signal.
3. **Hover shimmer streak** — a bright diagonal streak races across cards and buttons on hover. **This is the same visual on both — they share the language.**
4. **Mechanical typography** — uppercase + wide letter-spacing on labels, RGB-split shadow on display headings.

Skip any one and it slides back into "generic dark theme with neon".

## Required: dark base + tech grid + hot spots

```css
body {
  background-color: #050410;
  background-image:
    /* 1. fine tech grid */
    linear-gradient(90deg, rgba(49, 247, 255, 0.08) 1px, transparent 1px),
    linear-gradient(rgba(255, 47, 185, 0.06) 1px, transparent 1px),
    /* 2. periodic data-node hot spots */
    radial-gradient(circle at 18% 22%, rgba(49, 247, 255, 0.18), transparent 22%),
    radial-gradient(circle at 82% 78%, rgba(255, 47, 185, 0.16), transparent 22%),
    radial-gradient(circle at 50% 50%, rgba(120, 80, 255, 0.10), transparent 50%);
  background-size: 28px 28px, 28px 28px, auto, auto, auto;
  color: #f8f7ff;
  font-family: "JetBrains Mono", ui-monospace, monospace;
  min-height: 100vh;
}
```

## Required: scanlines + slow vertical scan beam

Two fixed pseudo-overlays on the body or shell — scanlines (static) + a single slow scan beam. **Do not add more ambient animation.** Constantly orbiting lights / spinning gradients on cards look cheap and distract from the content.

```css
/* persistent scanlines */
.shell::before {
  content: ""; position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background: repeating-linear-gradient(180deg, transparent 0 7px, rgba(255,255,255,0.06) 8px);
  opacity: 0.32;
}

/* one slow vertical scan beam */
@keyframes cyber-scan {
  0%   { transform: translateY(-100%); opacity: 0; }
  10%  { opacity: 0.9; }
  90%  { opacity: 0.9; }
  100% { transform: translateY(100%); opacity: 0; }
}
.shell::after {
  content: ""; position: fixed; left: 0; right: 0; height: 28vh;
  z-index: 0; pointer-events: none;
  background: linear-gradient(180deg,
    transparent, rgba(49,247,255,0.10) 50%, transparent);
  animation: cyber-scan 9s linear infinite;
}

.shell > * { position: relative; z-index: 1; }
```

## Color palette

| Token        | Value      | Purpose                                  |
|--------------|------------|------------------------------------------|
| `--bg`       | `#050410`  | Deep night-city background               |
| `--surface`  | `rgba(13,16,32,0.88)` | Card / panel surface          |
| `--cyan`     | `#31f7ff`  | Primary rail color (signal, info)        |
| `--magenta`  | `#ff2fb9`  | Accent / action color (alerts, CTAs)     |
| `--violet`   | `#8a5fff`  | Tertiary depth color                     |
| `--amber`    | `#ffcc33`  | Warning / caution                        |
| `--text`     | `#f8f7ff`  | Body text                                |
| `--muted`    | `#8ea0ff`  | Secondary text, metadata                 |

Cyan and magenta carry 90% of the look. Violet/amber are accent reserves — use sparingly.

## Typography — glitchy CRT feel

This is the most distinctive part. Cyberpunk text isn't just neon-colored — it **judders, half-flickers, and carries a wobbling RGB shadow**, like a malfunctioning CRT or compromised feed. Three layers of motion:

1. **Continuous RGB-shadow wobble** — the magenta + cyan channel offsets oscillate slowly between ~1.5px and ~2.6px, like a CRT slipping in and out of focus.
2. **Occasional glitch burst** — every few seconds the heading dims briefly and jumps 1px sideways, twice in quick succession (think: signal interference).
3. **Body flicker** — paragraphs subtly drop opacity (0.94–0.96) for a fraction of a second on a long irregular cycle.

```css
.body { font-family: "JetBrains Mono", ui-monospace, monospace; letter-spacing: 0.01em; }

.kicker, .chip, .button {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.86em;
}

/* 1. continuous RGB-channel wobble — runs forever, very subtle */
@keyframes cyber-rgb-shift {
  0%, 100% {
    text-shadow:
      -1.5px 0 0 rgba(255, 47, 185, 0.65),
       1.5px 0 0 rgba(49, 247, 255, 0.65),
      0 0 18px rgba(255, 255, 255, 0.20);
  }
  50% {
    text-shadow:
      -2.6px 0 0 rgba(255, 47, 185, 0.55),
       2.6px 0 0 rgba(49, 247, 255, 0.55),
      0 0 24px rgba(255, 255, 255, 0.32);
  }
}

/* 2. occasional glitch — punctuated dim+jitter, NOT constant flicker */
@keyframes cyber-glitch {
  0%, 88%, 100% { opacity: 1; transform: translateX(0); }
  89% { opacity: 0.55; transform: translateX(1px); }
  90% { opacity: 0.95; transform: translateX(-1.5px); }
  91% { opacity: 0.5;  transform: translateX(0.8px); }
  92% { opacity: 1;    transform: translateX(0); }
  /* second smaller burst at 43% — keeps the rhythm irregular */
  43%   { opacity: 0.7; transform: translateX(-0.8px); }
  43.5% { opacity: 1;   transform: translateX(0.6px); }
  44%   { opacity: 1;   transform: translateX(0); }
}

/* 3. ultra-subtle body flicker — preserves readability */
@keyframes cyber-text-flicker {
  0%, 4%, 8%, 53%, 56%, 100% { opacity: 1; }
  5%, 7% { opacity: 0.94; }
  54%, 55% { opacity: 0.96; }
}

/* compose the two heading animations */
h1, h2, h3, .brand {
  display: inline-block;            /* needed for transform on display elements */
  letter-spacing: 0.02em;
  animation:
    cyber-rgb-shift 3.4s ease-in-out infinite alternate,
    cyber-glitch 6.5s steps(40) infinite;
}

/* body flicker — desync paragraphs by giving alternating delays */
p, li { animation: cyber-text-flicker 9.7s infinite; }
li:nth-child(2n) { animation-delay: -2.3s; }
li:nth-child(3n) { animation-delay: -5.1s; }
```

**Important rules:**
- Apply the heading animation only to **display headings** (h1, h2, h3, brand). Don't touch buttons or chips — uppercase mono labels are tiny, glitching them just makes them unreadable.
- Body flicker is **opacity-only** (no jitter). Position-shifting paragraphs causes nausea.
- Use `steps(40)` on the glitch animation — it makes the bursts feel digital/mechanical, not smooth.
- Use `alternate` direction on the RGB wobble — gives a natural breathing feel.
- Stagger paragraph delays with `nth-child` so multiple lines don't flicker in unison (synchronized flicker = dance party, desynced = old monitor).

## The shimmer-sweep — shared by cards and buttons

This is the **only motion on interactive surfaces**, and it appears on hover only — never as ambient animation. A bright diagonal streak races across the surface in ~0.7–0.9s.

```css
@keyframes cyber-sweep {
  0%   { transform: translateX(-100%) skewX(-20deg); }
  100% { transform: translateX(220%) skewX(-20deg); }
}

/* the streak — invisible until hover triggers the animation */
.cyber-surface::before {
  content: ""; position: absolute;
  top: 0; bottom: 0; left: 0; width: 35–40%;
  background: linear-gradient(90deg,
    transparent, rgba(49,247,255,0.45) 50%, transparent);
  transform: translateX(-100%) skewX(-20deg);
  pointer-events: none;
}
.cyber-surface:hover::before { animation: cyber-sweep 0.7s ease-out; }
```

Both cards and buttons use this same skeleton. Cards use a slightly slower (0.9s) and wider (35%) streak; buttons use 0.7s × 40%.

## Component recipes

### Card / panel — clipped + brackets + hover shimmer

```css
.cyber-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;        /* clip the shimmer streak to the card shape */
  padding: 28px;
  color: #f8f7ff;
  /* 1. clipped octagonal cuts */
  clip-path: polygon(
    0 12px, 12px 0,
    calc(100% - 24px) 0, 100% 24px,
    100% calc(100% - 12px), calc(100% - 12px) 100%,
    24px 100%, 0 calc(100% - 24px)
  );
  /* 2. card surface + 8 corner-bracket lines */
  background:
    linear-gradient(135deg, rgba(49,247,255,0.06), transparent 35%, rgba(255,47,185,0.05)),
    linear-gradient(#31f7ff, #31f7ff),  /* TL h */
    linear-gradient(#31f7ff, #31f7ff),  /* TL v */
    linear-gradient(#ff2fb9, #ff2fb9),  /* TR h */
    linear-gradient(#ff2fb9, #ff2fb9),  /* TR v */
    linear-gradient(#ff2fb9, #ff2fb9),  /* BL h */
    linear-gradient(#ff2fb9, #ff2fb9),  /* BL v */
    linear-gradient(#31f7ff, #31f7ff),  /* BR h */
    linear-gradient(#31f7ff, #31f7ff),  /* BR v */
    rgba(13, 16, 32, 0.88);
  background-position:
    0 0,
    14px 14px, 14px 14px,
    calc(100% - 14px) 14px, calc(100% - 14px) 14px,
    14px calc(100% - 14px), 14px calc(100% - 14px),
    calc(100% - 14px) calc(100% - 14px), calc(100% - 14px) calc(100% - 14px),
    0 0;
  background-size:
    100% 100%,
    14px 1px, 1px 14px,
    14px 1px, 1px 14px,
    14px 1px, 1px 14px,
    14px 1px, 1px 14px,
    100% 100%;
  background-repeat: no-repeat;
  border: 1px solid rgba(49, 247, 255, 0.30);
  box-shadow:
    inset 0 0 24px rgba(49, 247, 255, 0.06),
    0 24px 48px rgba(0, 0, 0, 0.5),
    0 0 32px rgba(49, 247, 255, 0.10);
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
}

/* 3. hover shimmer streak */
.cyber-card::before {
  content: ""; position: absolute;
  top: 0; bottom: 0; left: 0; width: 35%;
  background: linear-gradient(90deg,
    transparent, rgba(49,247,255,0.45) 50%, transparent);
  transform: translateX(-100%) skewX(-20deg);
  pointer-events: none;
  z-index: 1;
}
.cyber-card:hover {
  transform: translateY(-2px);
  border-color: rgba(49, 247, 255, 0.55);
  box-shadow:
    inset 0 0 32px rgba(49, 247, 255, 0.14),
    0 32px 64px rgba(0, 0, 0, 0.6),
    0 0 48px rgba(49, 247, 255, 0.28);
}
.cyber-card:hover::before { animation: cyber-sweep 0.9s ease-out; }
```

**Important:** card needs `overflow: hidden` so the shimmer streak is clipped to the octagonal `clip-path` shape, otherwise it spills past the corners.

### Button — clipped slab + same shimmer sweep

```css
.cyber-button {
  position: relative;
  overflow: hidden;
  padding: 10px 22px;
  /* asymmetric corner cuts — top-left + bottom-right */
  clip-path: polygon(
    8px 0, 100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%, 0 8px
  );
  background:
    linear-gradient(180deg, rgba(49,247,255,0.10), rgba(49,247,255,0.02)),
    rgba(13, 16, 32, 0.88);
  border: 1px solid #31f7ff;
  border-radius: 0;
  color: #f8f7ff;
  font-family: "JetBrains Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.86em;
  cursor: pointer;
  box-shadow:
    inset 0 0 0 1px rgba(49,247,255,0.10),
    0 0 14px rgba(49,247,255,0.18);
  transition: color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.cyber-button::before {
  content: ""; position: absolute; top: 0; bottom: 0; left: 0; width: 40%;
  background: linear-gradient(90deg,
    transparent, rgba(49,247,255,0.55) 50%, transparent);
  transform: translateX(-100%) skewX(-20deg);
  pointer-events: none;
}
.cyber-button:hover {
  color: #31f7ff;
  transform: translateY(-1px);
  box-shadow:
    inset 0 0 0 1px rgba(49,247,255,0.30),
    0 0 22px rgba(49,247,255,0.45);
}
.cyber-button:hover::before { animation: cyber-sweep 0.7s ease-out; }
```

### Primary CTA — magenta-fill slab

Same skeleton as `.cyber-button`, swap cyan for magenta. Optional constant pulse for the page's primary action only.

```css
@keyframes cyber-pulse {
  0%, 100% { box-shadow: 0 0 0 1px #ff2fb9, 0 0 18px rgba(255,47,185,0.30); }
  50%      { box-shadow: 0 0 0 1px #ff2fb9, 0 0 28px rgba(255,47,185,0.55); }
}
.cyber-button--primary {
  background: linear-gradient(180deg, rgba(255,47,185,0.30), rgba(255,47,185,0.10)), #1a0a24;
  border-color: #ff2fb9;
  color: #ff2fb9;
  text-shadow: 0 0 12px rgba(255,47,185,0.65);
  animation: cyber-pulse 2.4s ease-in-out infinite;
}
.cyber-button--primary::before { /* override shimmer to magenta */
  background: linear-gradient(90deg,
    transparent, rgba(255,47,185,0.55) 50%, transparent);
}
```

### Chip — bracket label with status LED

```css
.cyber-chip {
  position: relative;
  display: inline-flex; align-items: center;
  padding: 4px 12px 4px 22px;
  border: 1px solid #31f7ff;
  text-transform: uppercase; letter-spacing: 0.16em; font-size: 0.78em;
  color: #f8f7ff;
}
.cyber-chip::after {
  content: ""; position: absolute; left: 8px; top: 50%;
  transform: translateY(-50%);
  width: 6px; height: 6px; border-radius: 50%;
  background: #31f7ff;
  box-shadow: 0 0 8px #31f7ff, 0 0 14px rgba(49,247,255,0.5);
}
```

### Header — neon underline, soft frost

```css
.cyber-header {
  background: rgba(5, 4, 16, 0.86);
  border-bottom: 1px solid rgba(49, 247, 255, 0.40);
  box-shadow:
    0 1px 0 rgba(49, 247, 255, 0.25),
    0 2px 24px rgba(49, 247, 255, 0.18);
  backdrop-filter: blur(8px);
}
```

## Common mistakes (and what's wrong)

| Symptom                                | Cause                                  | Fix                                            |
|----------------------------------------|----------------------------------------|------------------------------------------------|
| Looks like generic dark theme + neon   | No clipping, no brackets, no shimmer   | Add the four pillars                          |
| Cards look "cheap" / "Tron poster"     | Constantly orbiting / spinning lights   | Drop the ambient motion. Shimmer **on hover only** |
| Buttons feel like flat dark boxes      | No clip-path, no hover shimmer         | Asymmetric corner clip + shimmer sweep         |
| Text looks plain                       | No glitch shadow                        | RGB-split `text-shadow` on display headings   |
| Looks busy and noisy                   | Too many active animations              | One scan beam (background) + hover-only shimmer |
| Whole UI feels like a Tron poster      | Too much glow, low contrast             | Pull glow back; rely on geometry + hover motion |
| Shimmer spills past card corners       | Missing `overflow: hidden` on card      | Add `overflow: hidden`                         |

## Layout & motion rules

- **Layout:** dense HUD grids. Status panels, telemetry rows, command strips. Treat each panel as a piece of hardware.
- **Numbers:** monospace tabular numerals (`font-feature-settings: "tnum" on`). Numbers in a HUD never wiggle.
- **Status:** every chip has a state LED (cyan = ok, magenta = alert, amber = warning).
- **Motion budget:**
  - Background: ONE slow vertical scan beam, period ~9s.
  - Cards: NO ambient motion. Shimmer streak on hover only.
  - Buttons: NO ambient motion (except primary CTA's optional pulse). Shimmer on hover only.
  - Display headings: continuous subtle RGB wobble + occasional glitch burst (this is the typography signature).
  - Body text: ultra-subtle staggered opacity flicker (long cycles, desynced).
  - Active state on selection: optional gentle pulse.
- **Reduced motion:** wrap keyframe-driven elements in `@media (prefers-reduced-motion: reduce) { animation: none; }`. Cyberpunk should still look cyberpunk standing still — the geometry alone carries it.
- **Avoid:** soft pastel SaaS cards, casual illustration, slow fades, springy bounces, rounded corners, **constantly rotating gradient borders**.

## Output checklist

- [ ] Body has dark base + tech grid + 2–3 radial hot spots.
- [ ] Page has persistent scanlines + a slow vertical scan beam (one only).
- [ ] **No ambient animation on cards.** No spinning conic gradients, no pulsing borders.
- [ ] Every card has 4 corner-bracket marks (L-shapes at each corner).
- [ ] Every card has clipped corners (octagonal cuts), `border-radius: 0`.
- [ ] Every card has `overflow: hidden` + a shimmer-streak `::before`.
- [ ] Card hover triggers the same shimmer sweep used on buttons.
- [ ] Buttons have asymmetric corner clips + hover shimmer-sweep streak.
- [ ] Display headings have RGB-split `text-shadow` (magenta left + cyan right) — and that shadow continuously wobbles via `cyber-rgb-shift`.
- [ ] Display headings get an occasional glitch burst (`cyber-glitch`) — opacity dip + 1px horizontal jitter, NOT constant flicker.
- [ ] Body paragraphs have an ultra-subtle staggered opacity flicker (`cyber-text-flicker`) so even still text feels CRT-ish.
- [ ] Buttons / chips / kickers do NOT have heading-level glitch (they're too small — would just be unreadable).
- [ ] Chips have a status LED dot.
- [ ] Active / primary elements use magenta fill + optional pulse.
- [ ] Monospace font everywhere, uppercase + wide letter-spacing on labels.
- [ ] `prefers-reduced-motion` disables all keyframe animations.
