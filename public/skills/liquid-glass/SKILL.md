---
name: liquid-glass
description: Create iOS 26 liquid glass frontend UI with prismatic color fields, layered blur depth, rim-lit surfaces, and floating glass capsules.
---

# Liquid Glass Style (iOS 26)

Use this style when the product should feel like an iOS 26 glass workspace — luminous, prismatic, and deeply layered with translucent depth.

## Core Principles

- Use translucent surfaces over vibrant, saturated color fields that "show through" the glass.
- Create hierarchy through layered depth: header = heavy frost (48px), cards = medium frost (36px), buttons = light capsules (22px).
- Add rim lighting (bright top-edge highlights via `inset 0 1px 0`) to glass panels to simulate light refraction.
- Use inner glow (radial gradient centered in upper portion) to make glass panels feel luminous.
- Prefer floating capsule controls, rounded panes, and bright rim highlights.
- Keep content crisp over every glass layer — glass must never harm readability.

## Depth System

| Layer    | Blur  | Saturate | Opacity   | Examples                   |
|----------|-------|----------|-----------|----------------------------|
| Header   | 48px  | 1.65     | 0.74      | Shell header, preview nav  |
| Panels   | 36px  | 1.65     | 0.52–0.56 | Cards, windows, metrics    |
| Capsules | 22px  | 1.65     | 0.38–0.44 | Buttons, pills, chips      |

## Layout Rules

- Use floating sheets, frosted side panels, glass dock controls, and luminous stacked cards.
- In dashboards, use layered glass metrics (each at subtly different visual depth) and blur-backed activity streams.
- In settings, use glass capsule toggles, translucent control groups, and luminous segmented sections.
- Avoid hard black borders, noisy gradients, and flat opaque backgrounds.

## Component Rules

- Buttons are floating glass capsules with strong blur, subtle rim light, and spring-animated hover lift.
- Cards should have medium backdrop blur (36px), bright top-edge rim light inset, and an inner radial glow.
- The header is the most frosted layer — highest opacity, heaviest blur (48px).
- Badges are glass pills with readable text and subtle blur.
- Active buttons use a gradient blue glass fill with colored drop shadow.

## Motion Rules

- Use spring-animated hover effects: `cubic-bezier(0.34, 1.56, 0.64, 1)` for lift + scale on glass capsules.
- Use slow ambient background breathing (14s ease-in-out, opacity oscillation) for the page atmosphere.
- Avoid aggressive flashes, glitch effects, hard stops, and heavy bounces.

## Output Checklist

- The page looks like luminous iOS 26 glass over prismatic color fields.
- At least three visible glass layers have distinctly different blur and opacity.
- Every glass panel has a visible rim light (bright top edge) and inner glow (brighter center).
- Glass capsules visibly float above panels with soft drop shadows.
- Hover triggers spring-animated lift + scale on all interactive glass elements.
- Glass never harms text readability.
