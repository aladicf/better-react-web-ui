# Colorblindness UX

Color accessibility is not solved by contrast ratios alone.

An interface can pass contrast checks and still fail people with color-vision deficiencies if the system depends on hue differences that collapse into each other.

Use this reference when color is carrying meaning in:

- validation and status states
- charts and data visualization
- badges and labels
- current/selected states
- heatmaps and gradients
- comparison views where categories are color-coded

## Start with the important mindset shift

Colorblindness and color weakness are not one single condition.

People perceive colors differently, and the severity varies across individuals. Treat colorblind-friendly design as a resilience problem, not a one-time compliance checkbox.

The practical consequence:

- do not assume one "safe palette" solves every context
- do not assume users perceive your semantic colors the way you do
- do not ask people to rely on hue memory alone

## Never rely on color alone

If color is doing important work, pair it with another signal.

Good companions include:

- text labels
- icons
- shape differences
- line style differences
- border or fill pattern differences
- explicit positioning or grouping

Examples:

- `Error` should not be red alone; pair it with wording and often an icon
- selected navigation should not be a color shift alone; add underline, border, weight, or marker
- chart series should not depend on hue alone; add labels, direct annotations, patterns, or line-style changes

## Lightness matters more than many teams expect

Two colors with different names can become indistinguishable if they share similar lightness.

That means:

- vary **lightness**, not just hue
- check whether neighboring colors still separate when converted into similar-value grays
- build gradients with meaningful lightness progression, not hue cycling alone

This matters especially for:

- red/green comparisons
- charts with many adjacent series
- status badges on tinted surfaces
- low-emphasis UI where colors are already desaturated

## Color combinations to handle carefully

Some combinations are especially fragile for common color-vision deficiencies.

Risky pairs or groups include:

- red + green
- red + brown
- dark green + brown
- purple + blue
- pink + turquoise + gray
- green + orange/red/blue when the colors share similar lightness

Safer starting directions often include:

- blue + orange
- blue + red, when lightness still separates them clearly

These are starting heuristics, not guarantees. Test the actual UI, not just isolated swatches.

## Semantic states need non-color redundancy

For success, warning, error, and info states:

- pair color with a visible label or concise message
- add an icon when the state needs quick recognition
- make the surrounding field, badge, or alert shape reinforce the state
- use tinted surfaces and darker text rather than tiny colored details only

The smaller the signal, the more dangerous color-only meaning becomes.

## Current, selected, and active states need extra cues

Common UI failures include:

- active nav shown only by a color change
- selected chips shown only by fill hue
- completed steps shown only by green
- chart legends requiring users to remember which color means what

Stronger patterns:

- underline or side marker for active nav
- check icon or border shift for selected items
- direct labels on chart lines or bars when feasible
- explicit state text like `Active`, `Selected`, `Completed`

## Charts, dashboards, and dense visualizations need stronger separation

When data visualization relies on color categories, add backup structure.

Helpful moves:

- direct labeling instead of legend-only decoding
- patterns or textures for fills when bars/areas must be distinguished
- different stroke styles for lines
- point shapes that differ meaningfully
- sorted grouping and annotation that reduce the amount users must memorize

Be careful with patterns layered over color: patterns also change perceived brightness and density. Test the full chart, not just the palette.

## Validation and form feedback need calm redundancy

Forms often fail colorblind users when:

- valid fields go green with no wording
- invalid fields go red with no message
- helper/error text differs only by color
- success/error icons are visually similar at small sizes

Safer defaults:

- keep the message text explicit
- keep label, field, and status message visually connected
- use icons and wording in addition to semantic color
- avoid making the entire recovery path depend on noticing a tiny red accent line

## Offer alternate modes when the surface is data-heavy

For charts, maps, and other highly color-dependent interfaces, consider an explicit assistive mode when the domain justifies it.

Examples:

- a colorblind-friendly palette toggle
- shapes/patterns layered into data views
- higher-contrast or labeled-series views

This is especially useful when the product contains repeated analysis tasks rather than one-off status messages.

## Palette simulation workflow

Do not wait until the end of a project to check color accessibility. Build simulation into the design and dev workflow so problems surface when they are still cheap to fix.

### Step 1: Design with grayscale first

Before applying semantic colors, check the UI in grayscale. If hierarchy, states, and grouping are already clear without hue, the color layer will only make it stronger. If the grayscale version is ambiguous, fix the structure before adding color.

Ways to preview grayscale:
- apply a grayscale filter in Figma or your design tool
- use browser DevTools rendering emulation (Chrome: Rendering > Emulate vision deficiencies > Achromatopsia)
- apply `filter: grayscale(100%)` to the root element temporarily in dev

### Step 2: Simulate the most common deficiencies

The most common color-vision deficiencies to simulate are:

- **Deuteranopia** (no green cones) — red/green distinctions collapse most severely
- **Protanopia** (no red cones) — similar to deuteranopia but with slightly different hue shifts
- **Tritanopia** (no blue cones) — blue/yellow distinctions collapse, rarer but still relevant

Run the full UI through each simulation. Do not just test the palette swatches in isolation.

**Browser DevTools** (Chrome, Edge, Firefox):
- open DevTools > More tools > Rendering > Emulate vision deficiencies
- cycle through deuteranopia, protanopia, and tritanopia while navigating the actual product

**Figma plugins**:
- Stark, Color Blind, or A11y - Color Contrast Checker
- apply the simulation to the full frame, not just individual components

**macOS / iOS**:
- System Settings > Accessibility > Display > Color Filters
- this simulates at the OS level and can be used while testing the actual app in a browser or simulator

### Step 3: Check semantic state ramps under simulation

Semantic colors (success, warning, error, info) are the highest-risk areas. Under deuteranopia simulation:

- does error still look like a problem, or does it blend into neutral?
- does success still look different from info?
- do warning badges remain noticeable against their background?

If two semantic states become indistinguishable, the fix is usually one of:
- increase lightness separation between the states
- add icons or shape differences to the state indicators
- use tinted backgrounds with darker text rather than thin colored lines

### Step 4: Test data visualizations with patterns

Charts are where color-only design fails most visibly. Under simulation:

- can you still tell which line is which on a multi-series chart?
- do pie or bar segments remain distinct?
- does a heatmap still show the gradient progression?

When simulation reveals ambiguity, add pattern alternatives:
- solid vs striped vs dotted fills for bars or areas
- different line dash patterns for line charts
- different point shapes for scatter plots
- direct data labels so users do not need to read the legend

### Step 5: Document and tokenize safe patterns

When you find a color combination and pattern that survives simulation, document it:

- add the safe pairs to your design-system documentation
- tokenize semantic states with their non-color companions (icon + label + color)
- include the simulation results as part of component acceptance criteria

## Testing should include simulation and real people

Simulation helps catch obvious failures, but it is not the whole story.

Use both:

- simulator tools in design/dev workflows
- usability testing with people who have color-vision deficiencies when the product depends heavily on color interpretation

Useful checks:

- can users tell statuses apart without guessing?
- can users follow charts without memorizing a legend constantly?
- can users find the selected/current state without relying on hue alone?
- do low-emphasis states stay distinguishable after desaturation?

## Useful tools and references to keep nearby

Worth keeping in the workflow:

- **WhoCanUse** — for contrast and color-combination checks with simulation preview
- **Stark** (Figma plugin) — simulation, contrast checks, and focus order
- **Color Blind (Figma plugin)** — fast simulation across all deficiency types
- **Chrome DevTools > Rendering > Emulate vision deficiencies** — free, built-in, tests the real product
- **Coblis** — upload an image and see it through different simulations
- **axe DevTools** — catches missing labels and contrast issues automatically

You do not need to trust one simulator blindly; use them as a fast warning system. Test the full UI, not just isolated swatches.

## Practical checklist

- Would this UI still make sense if hue differences became unreliable?
- Are important statuses paired with text, icons, shapes, or position?
- Do neighboring colors differ in lightness, not just hue?
- Are active/current/selected states communicated by more than color?
- Do charts and dashboards avoid legend-only color decoding when possible?
- Do validation and semantic states remain understandable without red/green distinction alone?
- Has the UI been checked with simulation tools and, where justified, real colorblind users?

## Good defaults to remember

- use color as a helpful layer, not the only layer
- vary lightness intentionally
- prefer explicit labels over silent color meaning
- test semantic ramps and charts under color-vision simulation
- treat colorblind-friendly design as part of clarity, not as a nice-to-have edge case