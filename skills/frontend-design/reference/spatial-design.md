# Spatial Design

## Spacing Systems

### Use 4pt Base, Not 8pt

8pt systems are too coarse—you'll frequently need 12px (between 8 and 16). Use 4pt for granularity: 4, 8, 12, 16, 24, 32, 48, 64, 96px.

### Name Tokens Semantically

Name by relationship (`--space-sm`, `--space-lg`), not value (`--spacing-8`). Use `gap` instead of margins for sibling spacing—it eliminates margin collapse and cleanup hacks.

## Grid Systems

### The Self-Adjusting Grid

Use `repeat(auto-fit, minmax(280px, 1fr))` for responsive grids without breakpoints. Columns are at least 280px, as many as fit per row, leftovers stretch. For complex layouts, use named grid areas (`grid-template-areas`) and redefine them at breakpoints.

### Rule of Thirds as a Composition Tool

Use rule-of-thirds thinking for hero sections, editorial layouts, feature narratives, gallery/detail pages, and image-led product pages where one focal point needs to guide attention.

Practical React/Tailwind patterns:

- build wide compositions with `grid-cols-12`; thirds map cleanly to `col-span-4` regions and focal bands
- place the headline, primary CTA, product crop, person gaze, or proof point near a third-line or intersection when it strengthens the scan path
- use `object-position` utilities or arbitrary values such as `object-[65%_40%]` to keep the meaningful image subject near a focal third
- let responsive variants change the composition instead of forcing a wide third-grid onto narrow screens
- reserve center alignment for simple, minimal, or ceremonial moments where off-center composition would add noise

Do not treat thirds as law. Data-heavy dashboards, dense forms, tables, and operational tools usually need alignment, density, and stable scanning more than photographic composition. If the grid makes the task slower, drop it.

## Visual Hierarchy

### The Squint Test

Blur your eyes (or screenshot and blur). Can you still identify:
- The most important element?
- The second most important?
- Clear groupings?

If everything looks the same weight blurred, you have a hierarchy problem.

### Hierarchy Through Multiple Dimensions

Don't rely on size alone. Combine:

| Tool | Strong Hierarchy | Weak Hierarchy |
|------|------------------|----------------|
| **Size** | 3:1 ratio or more | <2:1 ratio |
| **Weight** | Bold vs Regular | Medium vs Regular |
| **Color** | High contrast | Similar tones |
| **Position** | Top/left (primary) | Bottom/right |
| **Space** | Surrounded by white space | Crowded |

**The best hierarchy uses 2-3 dimensions at once**: A heading that's larger, bolder, AND has more space above it.

### Cards Are Not Required

Cards are overused. Spacing and alignment create visual grouping naturally. Use cards only when content is truly distinct and actionable, items need visual comparison in a grid, or content needs clear interaction boundaries. **Never nest cards inside cards**—use spacing, typography, and subtle dividers for hierarchy within a card.

## Container Queries

Viewport queries are for page layouts. **Container queries are for components**:

```css
.card-container {
  container-type: inline-size;
}

.card {
  display: grid;
  gap: var(--space-md);
}

/* Card layout changes based on its container, not viewport */
@container (min-width: 400px) {
  .card {
    grid-template-columns: 120px 1fr;
  }
}
```

**Why this matters**: A card in a narrow sidebar stays compact, while the same card in a main content area expands—automatically, without viewport hacks.

## Logical Layout Utilities

Tailwind v4 itself leans on logical properties internally, and v4.2 adds more logical property utilities. Use them when layout should respect writing mode, direction, or reusable component placement better than physical left/right/top/bottom classes.

Good uses:

- `pbs-*` and `pbe-*` for block-start and block-end padding
- `mbs-*` and `mbe-*` for block-start and block-end margin
- `scroll-mbs-*`, `scroll-mbe-*`, `scroll-pbs-*`, and `scroll-pbe-*` for anchor offsets in writing-mode-aware layouts
- `inline-*`, `block-*`, `min-inline-*`, `max-inline-*`, `min-block-*`, and `max-block-*` for component sizing by logical axis
- `inset-s-*`, `inset-e-*`, `inset-bs-*`, and `inset-be-*` for positioned elements

Prefer logical utilities for reusable primitives, multilingual interfaces, sidebars, sheets, and components that may appear in both left-to-right and right-to-left contexts. Physical utilities are fine when the design meaning is explicitly physical, such as a chart axis, drag handle, or directional illustration.

Stop using old `start-*` and `end-*` positioning patterns in new work when `inset-s-*` and `inset-e-*` express the same job more consistently.

## Zoom Utilities Are For Controlled Previews

Tailwind CSS v4.3 adds `zoom-*` utilities. Use them only when the product intentionally needs CSS `zoom`, such as document previews, canvas previews, miniature UI snapshots, or controlled editor surfaces.

Avoid `zoom-*` for ordinary responsive layout, text fitting, or accessibility fixes. If content does not fit, fix the layout, wrapping, scale, or container logic. Zooming whole UI regions can distort hit targets, focus expectations, and perceived type scale.

## Optical Adjustments

Text at `margin-left: 0` looks indented due to letterform whitespace—use negative margin (`-0.05em`) to optically align. Geometrically centered icons often look off-center; play icons need to shift right, arrows shift toward their direction.

### Pointer Targets vs Visual Size

Buttons can look small but need large coarse-pointer targets (44px minimum). Use padding or pseudo-elements:

```css
.icon-button {
  width: 24px;  /* Visual size */
  height: 24px;
  position: relative;
}

.icon-button::before {
  content: '';
  position: absolute;
inset: -10px;  /* Expand coarse-pointer target to 44px */
}
```

## Depth & Elevation

Create semantic z-index scales (dropdown → sticky → modal-backdrop → modal → toast → tooltip) instead of arbitrary numbers. For shadows, create a consistent elevation scale (sm → md → lg → xl). **Key insight**: Shadows should be subtle—if you can clearly see it, it's probably too strong.

---

**Avoid**: Arbitrary spacing values outside your scale. Making all spacing equal (variety creates hierarchy). Creating hierarchy through size alone - combine size, weight, color, and space.
