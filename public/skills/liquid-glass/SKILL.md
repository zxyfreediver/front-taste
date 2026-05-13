---
name: liquid-glass
description: Create iOS 26 liquid glass frontend UI — highly translucent surfaces with vibrant color fields bleeding through, layered blur depth, bright rim lighting, and floating glass capsules.
---

# Liquid Glass Style (iOS 26)

The defining feature of liquid glass is **see-through translucency**. The colorful page background must clearly read THROUGH every card, button, and chip — not be hidden behind frosted white. Get this wrong and it just looks like opaque cards. Get it right and the UI feels alive.

## The two-line rule

If you only remember two things, remember these:

1. **Glass surfaces are very transparent** — backgrounds in the `rgba(255,255,255,0.06–0.30)` range, NEVER `0.5+`. The page color must show through.
2. **The page background must be vibrant** — saturated radial gradients in bright purples/blues/pinks/teals. White or pale backgrounds give nothing for the glass to refract.

If buttons and cards look opaque, the alpha is too high or the page behind them is too pale. Both must be right.

## Required: vibrant page background

Use 4–5 saturated radial gradients on the body. Not pastel — saturated.

```css
body {
  min-height: 100vh;
  background:
    radial-gradient(circle at 8% 6%,   rgba(56, 110, 255, 0.78), transparent 38%),
    radial-gradient(circle at 92% 8%,  rgba(255, 110, 200, 0.62), transparent 36%),
    radial-gradient(circle at 78% 88%, rgba( 96, 220, 200, 0.62), transparent 38%),
    radial-gradient(circle at 18% 78%, rgba(168, 110, 255, 0.66), transparent 38%),
    radial-gradient(circle at 50% 50%, rgba(255, 200, 110, 0.30), transparent 48%),
    #c2d6ff;
  background-attachment: fixed;
}
```

## The glass recipe (the only pattern you need)

Apply `backdrop-filter` directly to the element. The four ingredients:

```css
.glass {
  /* 1. Very transparent, slightly diagonal-shaded background */
  background:
    linear-gradient(155deg,
      rgba(255, 255, 255, 0.30),
      rgba(255, 255, 255, 0.10) 60%,
      rgba(255, 255, 255, 0.18)),
    rgba(255, 255, 255, 0.06);

  /* 2. Strong blur + saturation boost on the backdrop */
  backdrop-filter: blur(30px) saturate(1.8);
  -webkit-backdrop-filter: blur(30px) saturate(1.8);

  /* 3. Faint white border + bright top rim light, dark bottom shade */
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 24px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.85),       /* top rim */
    inset 0 -1px 0 rgba( 20,  40, 110, 0.10),       /* bottom shade */
    inset 1px 0 0 rgba(255, 255, 255, 0.18),        /* left rim */
    inset -1px 0 0 rgba(255, 255, 255, 0.12),       /* right rim */
    /* 4. Soft cool-blue floating shadow */
    0 24px 48px rgba(20, 40, 110, 0.18),
    0 60px 120px rgba(20, 40, 110, 0.14);
}
```

**Why each piece matters:**
- The diagonal gradient creates a subtle highlight-to-shadow sweep, like real glass catching light.
- The base alpha (0.06) is what makes pixels behind read through. Going above 0.30 kills the effect.
- `saturate(1.8)` boosts the colors of whatever is behind so they look more vivid through the glass.
- The inset shadows are the rim light. Without them, glass looks like a flat tinted rectangle.
- The cool-blue (not gray) drop shadow is what makes the glass *float*.

## Depth system

| Layer    | Base alpha | Blur  | Saturate | Examples                       |
|----------|------------|-------|----------|--------------------------------|
| Header   | 0.28       | 40px  | 1.8      | Sticky top nav                 |
| Cards    | 0.06–0.10  | 30px  | 1.8      | Cards, panels, windows         |
| Capsules | 0.08–0.12  | 24px  | 1.8      | Buttons, chips, tags, toggles  |
| Primary  | gradient   | 20px  | 1.85     | Primary CTA, active selection  |

**Rule:** higher in the stack = more opaque (text needs to stay readable). Lower in the stack = more transparent (more "see-through" feel).

## Component recipes

### Card

```html
<div class="glass-card">…</div>
```
```css
.glass-card {
  padding: 32px;
  border-radius: 28px;
  background:
    linear-gradient(155deg, rgba(255,255,255,0.30), rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.18)),
    rgba(255,255,255,0.06);
  backdrop-filter: blur(30px) saturate(1.8);
  -webkit-backdrop-filter: blur(30px) saturate(1.8);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.85),
    inset 0 -1px 0 rgba(20,40,110,0.10),
    0 24px 48px rgba(20,40,110,0.18),
    0 60px 120px rgba(20,40,110,0.14);
  transition: transform 320ms cubic-bezier(0.34, 1.4, 0.64, 1), box-shadow 320ms ease;
}
.glass-card:hover {
  transform: translateY(-4px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.95),
    0 32px 72px rgba(20,40,110,0.22),
    0 80px 140px rgba(20,40,110,0.16);
}
```

### Secondary button / chip / tag (capsule)

```html
<button class="glass-pill">Action</button>
<span class="glass-pill">Tag</span>
```
```css
.glass-pill {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 20px;
  border-radius: 999px;
  background:
    linear-gradient(160deg, rgba(255,255,255,0.42), rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.22)),
    rgba(255,255,255,0.08);
  backdrop-filter: blur(24px) saturate(1.8);
  -webkit-backdrop-filter: blur(24px) saturate(1.8);
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: #0e1a2c;
  font-weight: 500;
  cursor: pointer;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.95),
    inset 0 -1px 0 rgba(20,40,110,0.12),
    inset 1px 0 0 rgba(255,255,255,0.30),
    inset -1px 0 0 rgba(255,255,255,0.22),
    0 1px 3px rgba(20,40,110,0.14),
    0 10px 26px rgba(20,40,110,0.18);
  transition: transform 240ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 240ms ease, background 240ms ease, border-color 240ms ease;
}
.glass-pill:hover {
  transform: translateY(-3px) scale(1.04);
  background:
    linear-gradient(160deg, rgba(255,255,255,0.55), rgba(255,255,255,0.18) 55%, rgba(255,255,255,0.30)),
    rgba(255,255,255,0.12);
  border-color: rgba(255, 255, 255, 0.85);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,1),
    0 22px 50px rgba(20,40,110,0.26);
}
.glass-pill:active { transform: translateY(-1px) scale(0.99); transition-duration: 80ms; }
```

### Primary CTA (vivid accent capsule)

The accent gradient replaces the white. Same structure, blue base.

```html
<button class="glass-pill glass-pill--primary">Get started</button>
```
```css
.glass-pill--primary {
  background:
    linear-gradient(160deg, rgba(255,255,255,0.32), transparent 50%),
    linear-gradient(135deg, rgba(75,116,255,0.85), rgba(120,175,255,0.78));
  backdrop-filter: blur(20px) saturate(1.85);
  -webkit-backdrop-filter: blur(20px) saturate(1.85);
  border-color: rgba(180, 200, 255, 0.6);
  color: #ffffff;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.55),
    inset 0 -1px 0 rgba(30,50,140,0.35),
    0 4px 14px rgba(75,116,255,0.34),
    0 22px 56px rgba(75,116,255,0.28);
}
.glass-pill--primary:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.7),
    0 6px 22px rgba(75,116,255,0.42),
    0 30px 72px rgba(75,116,255,0.34);
}
```

### Header (heavier opacity for text readability)

```css
.glass-header {
  position: sticky; top: 0;
  background: rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(40px) saturate(1.8);
  -webkit-backdrop-filter: blur(40px) saturate(1.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}
```

### Segmented control / toggle group

A `glass-pill` row inside a `glass-card` with `border-radius: 999px` and `padding: 6px`. Active item gets the `glass-pill--primary` recipe.

## Common mistakes (and what's wrong)

| Symptom                              | Cause                                         | Fix                                              |
|--------------------------------------|-----------------------------------------------|--------------------------------------------------|
| Looks like flat white cards          | Background alpha too high (0.5+)              | Drop to 0.06–0.30                                 |
| Looks like flat tinted rectangles    | No rim light                                  | Add `inset 0 1px 0 rgba(255,255,255,0.85+)`     |
| Looks frosted but not "alive"        | Pale page background                          | Use saturated radial gradients                   |
| Glass doesn't float                  | Gray drop shadow                               | Use cool-blue tint `rgba(20, 40, 110, …)`        |
| Hover feels stiff                    | Linear easing                                  | Use `cubic-bezier(0.34, 1.56, 0.64, 1)`          |

## Motion rules

- Spring hover on capsules: `cubic-bezier(0.34, 1.56, 0.64, 1)` over 220–260ms — `translateY(-3px) scale(1.04)`.
- Slower hover on cards: 320ms — `translateY(-4px)`, no scale.
- Press: snap back to `translateY(-1px) scale(0.99)` in 80ms.
- Optional ambient page breathing: animate radial-gradient overlays with 14s ease-in-out alternate.
- Avoid: aggressive flashes, hard stops, heavy bounces, glitch effects.

## Layout rules

- Float glass over the vibrant prismatic mist — never over solid white.
- Use depth: header heaviest, cards medium, capsules lightest.
- Dashboards: layered glass metrics at slightly different depths, blur-backed activity streams.
- Settings: glass capsule toggles, translucent control groups, luminous segmented sections.
- Avoid: hard black borders, noisy gradients, flat opaque backgrounds, color-on-color without translucency.

## Browser support

`backdrop-filter` is widely supported (Chrome, Edge, Safari, Firefox 103+). Always pair with `-webkit-backdrop-filter:` for older Safari. No SVG filter, no custom code — just plain CSS.

## Output checklist

- [ ] Body has 4+ saturated radial gradients (purples/blues/pinks/teals), not pastel.
- [ ] Every glass surface uses `backdrop-filter: blur(20–40px) saturate(1.8)`.
- [ ] Card/chip background alpha is 0.06–0.30 (NEVER 0.5+).
- [ ] Every glass surface has `inset 0 1px 0 rgba(255,255,255,0.85+)` top rim light.
- [ ] Drop shadows are cool-blue `rgba(20, 40, 110, …)`, large and soft.
- [ ] Capsules: `border-radius: 999px`. Cards: `border-radius: 24–32px`.
- [ ] Hover: `translateY` + `scale` with spring easing.
- [ ] Active/primary: vivid blue gradient replaces the white base.
- [ ] Vibrant page colors clearly read THROUGH each glass surface.
