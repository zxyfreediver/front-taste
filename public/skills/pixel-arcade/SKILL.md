---
name: pixel-arcade
description: Create 8-bit pixel frontend UI with game panels, chunky controls, tile maps, and arcade status feedback.
---

# Pixel Arcade Style

## Structure lock

When applying this taste to an existing product, preserve the product's current DOM/content structure, paragraph order, component logic, responsive breakpoints, semantic roles, and control behavior. Do not split or merge paragraphs, reorder sections, add/drop product cards, or change a flow unless the user explicitly asks.

Keep the host application's font sizes, line heights, spacing scale, grid ratios, and control dimensions. Apply Pixel Arcade through font-family choices, color tokens, surfaces, borders, shadows, texture, icon treatment, and other non-structural visual details. Treat any sizing or layout values in examples below as illustrative recipes for new work, not overrides for an existing app.

Use this style when the interface should feel playable, blocky, and memorable while staying usable for real product workflows.

## Core Principles

- Treat the page as a mission console, not a normal SaaS page.
- Use square modules, visible tile grids, chunky borders, and block shadows.
- Convert product concepts into game concepts: owners become players, tasks become quests, risks become hazards.
- Keep text readable; the pixel feeling comes from layout, controls, and rhythm, not unreadable fonts.

## Typography

- Use Silkscreen (Google Fonts, bitmap pixel font, weights 400/700) as the primary UI font.
- Disable font anti-aliasing: `-webkit-font-smoothing: none; -moz-osx-font-smoothing: unset`.
- Set `text-rendering: optimizeSpeed` for crisp pixel edges.
- Use uppercase text for all buttons, kickers, and status labels.
- Add a 2px solid text-shadow matching the border color on headings for pixel depth.
- Letter-spacing: add 0.02em to prevent glyph collision at small sizes.

## Layout Rules

- Use tile-map sections, inventory slots, score counters, mission panels, and status bars.
- Use hard rectangular composition; avoid soft cards, glass effects, and generic gradients.
- In dashboards, group metrics into pixel scoreboards and quest logs.
- In settings, use option screens, save slots, toggles as block switches, and clear selected states.

## Component Rules

- Buttons are square or stepped with thick borders and offset shadows.
- Badges look like game labels: LVL, QUEST, READY, RISK, OWNER.
- Tables should look like logs or inventory lists.
- Progress uses filled pixel cells instead of smooth bars.

## Motion Rules

- Use snap transitions, one-step hover offsets, and quick state changes.
- Avoid slow luxury fades or physics-heavy motion.

## Output Checklist

- The first viewport reads as an 8-bit product mission console.
- At least three UI elements are visibly pixel-specific.
- The same product content remains understandable without the style name.
- Typography uses a pixel/bitmap font (Silkscreen) with anti-aliasing disabled.
