# Spacing System

## Meaningful Scale Jumps

A spacing system only helps if adjacent steps feel meaningfully different.

Good scales usually start tighter at the small end and spread out as values grow.

Example UI-friendly scale:
- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 96

If two values are so close that choosing between them feels arbitrary, your scale is too dense to guide decisions.

## Group Spacing Rules

Spacing should communicate structure.

### Within groups
- Use tighter spacing between related elements

### Between groups
- Use noticeably more spacing than inside the group

If the space between items inside a group matches the space between groups, the grouping will feel ambiguous.

## Start With Too Much Whitespace

When composing a layout, begin with more space than you think you need. Then remove space until the result feels balanced.

This usually produces a cleaner result than adding whitespace reactively only after something feels cramped.

## Max-Width vs Fluid Width

Not every component should scale fluidly forever.

### Good candidates for max-width or fixed width
- forms
- sidebars
- readable text blocks
- cards with predictable content

### Good candidates for fluid width
- galleries
- dashboards
- data tables with adaptive columns
- large layout containers

Use the width the content actually wants until the viewport forces compromise.

## Ambiguous Spacing Examples

### Forms
Bad:
- label/input gap = field-group gap

Better:
- tight label/input gap
- larger gap between field groups

### Lists
Bad:
- bullet spacing = internal line-height

Better:
- more space between bullets than between wrapped lines inside one bullet

### Horizontal toolbars
Bad:
- same gap between button clusters as within a cluster

Better:
- tighter spacing inside action groups, larger gaps between groups

## Rhythmic Spacing

Good layouts alternate:
- tight clusters
- medium separations
- generous section breaks

Uniform spacing everywhere creates monotony and weak hierarchy.

## Practical Checks

- Does every gap come from a defined scale?
- Is there more space around groups than inside them?
- Are forms and reading widths capped appropriately?
- Is the layout roomy first, then tightened intentionally?

---

**Avoid**: Arbitrary 13px / 19px / 27px gaps. Stretching narrow content to full width. Using borders where spacing should create separation.