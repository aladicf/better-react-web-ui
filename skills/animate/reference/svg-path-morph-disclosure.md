# Prefer SVG path morphing over blunt chevron flips when disclosure motion matters

For disclosure indicators like accordions, comboboxes, and dropdown chevrons, rotating the whole icon is the easy baseline—but it is not always the best-looking one.

When the design wants a more refined feel, morphing the SVG path often reads as smoother and more intentional than flipping a chevron glyph around its center.

Why it often feels better:

- the stroke can stay optically anchored instead of swinging like a weather vane
- the motion feels more like the icon changing state than the whole symbol rotating as an object
- small disclosure indicators benefit from subtlety more than spectacle

Use this when:

- the disclosure icon is prominent enough that the motion quality matters
- the UI already leans polished and detail-sensitive
- a generic rotate feels clunky or too mechanical

Use simple rotation when:

- the control is low emphasis
- implementation simplicity matters more than micro-polish
- the icon is already visually tuned for a rotate-based pattern

The point is not that every chevron must morph. It is that disclosure motion should feel like it belongs to the component instead of just reusing the default flip from a demo library.