# Surface Separation

Use this reference when deciding how to distinguish adjacent surfaces **without making the interface busy**.

Good separation comes from choosing the lightest effective tool:
- spacing
- background shift
- subtle shadow
- overlap
- border only when truly needed

## Core Principle

Separation should clarify structure, not decorate it.

If borders, cards, and shadows are doing more work than hierarchy, grouping, and spacing, the UI will usually feel noisy.

## Emulate a Light Source

Light comes from above.

When you want surfaces to feel raised or inset:
- top-facing edges tend to catch more light
- recessed top lips cast shadow downward
- raised objects cast shadow beneath themselves

Use these cues subtly. The goal is believable structure, not photo-realism.

## Raised Elements

Raised surfaces should feel like they sit above the page.

Common cues:
- slightly lighter top edge or face treatment
- subtle shadow underneath
- lighter surface than the background when working in flatter styles

Good uses:
- buttons
- floating cards
- menus
- dialogs
- dragged items

## Inset Elements

Inset surfaces should feel recessed into the page.

Common cues:
- inner shadow near the top
- slightly lighter lower lip
- darker surrounding surface
- lower visual elevation than nearby raised elements

Good uses:
- wells
- input fields
- recessed panels
- segmented controls with pressed selections

## Don’t Get Carried Away

Borrow physical cues from the real world, but stop before the effect becomes louder than the structure.

If the interface already reads clearly, simpler depth usually wins.

## Use Filled or Tight Shadows Intentionally

Not every shadow needs a large blur.

Tighter shadows or even offset shadows can work well when:
- you want flat depth without soft-material realism
- you need separation but want to preserve a flatter aesthetic
- you want a card/button to stand off the page without dramatic softness

## Overlap Creates Layers

Overlap is one of the clearest ways to communicate layered structure.

Use overlap when it helps show:
- something belongs partly to two regions
- a card crosses a section boundary
- controls float above media
- content sits above a background treatment

Keep overlaps readable:
- preserve edge clarity
- add a tiny gap, outline, inner shadow, or matching background edge when collisions feel muddy

## Overlapping Images

Overlapping images can create depth, but they clash easily.

Use an invisible separator when needed:
- a background-matching edge
- a subtle border
- a slight shadow

That keeps the layering effect without turning the overlap into noise.

## Use Fewer Borders

Borders are useful, but they are not the default answer.

Before adding a border, ask whether separation is already clear through:
- spacing
- background difference
- elevation
- grouping

Too many borders create visual chatter.

## Use a Box Shadow Instead

A subtle shadow can outline a surface more gently than a border.

This works especially well when:
- the surface is lighter than the background
- you want softness instead of a hard edge
- the interface already has enough linear separators

## Use Two Different Background Colors

Adjacent surfaces often only need a slight background shift.

Useful when:
- panels sit beside each other
- content and sidebar need separation
- sections need distinction without extra chrome
- cards or inset surfaces need a quiet edge

Low-contrast shifts usually feel more sophisticated than adding another border.

## Add Extra Spacing

Often the cleanest separator is simply more space.

Use spacing when:
- groups should feel distinct
- sections are competing
- borders are compensating for weak grouping
- the layout feels crowded or over-framed

Remember:
- more space around groups than within groups
- separation should reinforce information structure

## Unnecessary Cards and Containers

Not every region needs to become a card.

Avoid:
- wrapping every section in a panel by default
- nesting cards inside cards
- adding containers when spacing and alignment would be enough

Cards should mean something:
- separate ownership
- distinct action area
- floating layer
- independent chunk of content

## Separation Decision Order

When two things need distinction, try this order:

1. **Spacing**
2. **Background shift**
3. **Subtle shadow / elevation**
4. **Overlap / layering**
5. **Border**

If you reach for borders first every time, the UI will usually end up too busy.

## Quick Checks

- Are borders doing work spacing or background contrast should do instead?
- Are cards nested without a strong reason?
- Do raised and inset treatments actually communicate structure?
- Are overlapping layers clear instead of muddy?
- Would fewer separators make the interface feel calmer and more intentional?

---

**Avoid**: using borders as a reflex, nesting cards inside cards, adding dramatic shadows with no semantic meaning, and using realism or layering effects that are louder than the hierarchy they are supposed to clarify.
