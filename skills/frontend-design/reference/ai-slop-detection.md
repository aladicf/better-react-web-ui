# AI Slop Detection

This reference captures the most common visual tells that make an interface look machine-generated, trend-chasing, or generically “designed.”

## Common AI Slop Tells

### Purple-Blue Gradient Syndrome
- generic purple-to-blue gradients
- gradients used as default decoration instead of meaningful color decisions

### Neon-on-Dark Defaults
- cyan, violet, and electric accents on dark backgrounds
- glowing UI without a product-specific reason

### Glassmorphism Overuse
- blurred translucent cards everywhere
- glow borders and frosted panels used decoratively, not functionally

### Identical Card Grids
- repeated icon + heading + body card patterns
- every card same size, same rhythm, same formula

### Metric-Hero Clichés
- big number, small label, supporting stats, accent gradient
- decorative dashboard tropes with no meaningful information hierarchy

### Generic Icon-Above-Heading Templates
- rounded icon badge above every feature heading
- interchangeable marketing-section blocks that could fit any startup

### Decorative Sparklines
- tiny charts added to “feel data-driven” without conveying useful information

### Rounded-Rectangle-with-Safe-Shadow Syndrome
- generic medium-radius box
- generic drop shadow
- no distinctive composition, typography, or personality choices

## Secondary Smells

- gradient text headlines for “impact”
- too many accent borders with no hierarchy logic
- decorative mesh/noise/patterns that compete with content
- safe neutral sans + generic spacing + nothing memorable

## How to Diagnose It

Ask:
- Would someone instantly believe “AI made this” if shown the design cold?
- Is the design leaning on trends instead of hierarchy, systems, and personality?
- Could you swap the content with another startup’s content and barely notice?

## What to Do Instead

- commit to a real visual point of view
- use hierarchy before decoration
- choose personality through font, color temperature, radius, and language
- use fewer but more intentional effects
- prefer distinct composition over more garnish

## Redesign Upgrade Priority

When improving an existing React and Tailwind surface, fix in this order:

1. **Typography**: choose a stronger local type system, fix heading scale, line-height, line length, and numeric alignment.
2. **Color cleanup**: remove clashing accents, normalize gray families, and route colors through semantic tokens.
3. **Interactive states**: add hover, focus-visible, active, loading, disabled, and error states before adding new decoration.
4. **Layout rhythm**: fix max-widths, section spacing, grid structure, alignment, and responsive collapse.
5. **Component patterns**: replace generic repeated card formulas only when the new pattern serves the content better.
6. **Missing states**: add loading, empty, error, and success states so the product feels finished.
7. **Polish pass**: tune spacing, wrapping, copy, icon weight, media treatment, and small alignment details.

This order matters. If hierarchy and states are weak, adding fancier surfaces only makes the weakness louder.

## Strategic Omissions to Check

Generic generated pages often forget:

- custom 404 or not-found recovery
- clear back or escape route from secondary pages
- privacy, terms, and required legal links
- form validation and inline recovery
- skip link for keyboard users
- favicon and share metadata
- cookie or consent surface when legally required
- real loading, empty, and error states

---

**Avoid**: solving weak design with extra gradients, glow, blur, metrics, or stock “wow” devices. Distinctiveness comes from decisions, not effects density.
