---
name: colorize
description: Build or refine UI color systems, warmth, semantic color, and color-based hierarchy in designs that are too gray, monochromatic, or missing color meaning. Use when the user mentions dull colors, gray UI, missing warmth, weak semantic color, or a need for stronger color hierarchy.
metadata:
  argument-hint: "[screen, theme, or color system]"
---

Strategically introduce color to designs that are too monochromatic, gray, or lacking in visual warmth and personality.

## MANDATORY PREPARATION

Users start this workflow with `/colorize`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: existing brand colors.

---

## Assess Color Opportunity

Analyze the current state and identify opportunities:

1. **Understand current state**:
   - **Color absence**: Pure grayscale? Limited neutrals? One timid accent?
   - **Missed opportunities**: Where could color add meaning, hierarchy, or delight?
   - **Context**: What's appropriate for this domain and audience?
   - **Brand**: Are there existing brand colors we should use?
   - **Temperature**: Do the neutrals feel warm, cool, or accidentally lifeless?
   - **Hierarchy without color**: If you mentally remove color, is the interface still clear?

2. **Identify where color adds value**:
   - **Semantic meaning**: Success (green), error (red), warning (yellow/orange), info (blue)
   - **Hierarchy**: Drawing attention to important elements
   - **Categorization**: Different sections, types, or states
   - **Emotional tone**: Warmth, energy, trust, creativity
   - **Wayfinding**: Helping users navigate and understand structure
   - **Delight**: Moments of visual interest and personality

If any of these are unclear from the codebase, ask the user directly to clarify what you cannot infer.

**CRITICAL**: More color ≠ better. Strategic color beats rainbow vomit every time. Every color should have a purpose. Color should reinforce hierarchy that already exists — not replace it.

## Plan Color Strategy

Create a purposeful color introduction plan:

Consult the [color and contrast](../frontend-design/reference/color-and-contrast.md) reference for palette structure, contrast, color-family selection, temperature, and theme behavior.
Consult the [color ramp workflow](../frontend-design/reference/color-ramp-workflow.md) reference when you need to build or repair tints, tones, shades, and reusable color stops.
Consult the [semantic color](../frontend-design/reference/semantic-color.md) reference when color needs to communicate state, alerts, or status—not just brand personality.

- **Color palette**: What colors match the brand/context? (Choose 2-4 colors max beyond neutrals)
- **Palette relationship**: Is this best treated as monochrome, analogous, complementary, or triadic?
- **Dominant color**: Which color owns 60% of colored elements?
- **Accent colors**: Which colors provide contrast and highlights? (30% and 10%)
- **Application strategy**: Where does each color appear and why?
- **Shade system**: Which greys, primary shades, and semantic ramps exist before you start applying them?
- **Schema**: Are the color roles and usable stops documented clearly enough for later screens to stay consistent?

**IMPORTANT**: Color should enhance hierarchy and meaning, not create chaos. Less is more when it matters more.

## Build the Palette Before Applying It

Think in hue, saturation, and lightness even if you ultimately encode the palette in OKLCH.

### Neutral scale
- Define **8-10 neutrals** up front, from a dark near-black to an off-white
- Tint them slightly warm or cool so the interface feels intentional instead of lifeless
- Reserve the darkest neutral for primary text and the lightest for page backgrounds

### Primary and accent scales
- Pick a **base shade** that could plausibly work for a button, active state, or strong highlight
- Define the **dark edge** for text / high-contrast UI and the **light edge** for tinted backgrounds
- Fill the gaps so you have a stable 5-10 shade ramp instead of improvising on every screen

### Saturation and brightness control
- As colors get much lighter or darker, increase saturation enough to keep them from going muddy
- When a ramp looks dull, don't only change lightness — slightly rotate hue toward a brighter-feeling hue if needed
- For neutrals and subtle surfaces, temperature matters more than raw saturation
- Use toned-down variants when pure color feels too harsh, toy-like, or visually noisy

### Contrast strategy
- For low-emphasis colored surfaces, prefer **dark text on light color** instead of white text on dark color
- When text sits on a colored background, use a darker or lighter shade of that same hue family instead of generic grey

## Introduce Color Strategically

Add color systematically across these dimensions:

### Semantic Color
- **State indicators**:
  - Success: Green tones (emerald, forest, mint)
  - Error: Red/pink tones (rose, crimson, coral)
  - Warning: Orange/amber tones
  - Info: Blue tones (sky, ocean, indigo)
  - Neutral: Gray/slate for inactive states

- **Status badges**: Colored backgrounds or borders for states (active, pending, completed, etc.)
- **Progress indicators**: Colored bars, rings, or charts showing completion or health

### Accent Color Application
- **Primary actions**: Color the most important buttons/CTAs
- **Links**: Add color to clickable text (maintain accessibility)
- **Icons**: Colorize key icons for recognition and personality
- **Headers/titles**: Add color to section headers or key labels
- **Hover states**: Introduce color on interaction

### Background & Surfaces
- **Tinted backgrounds**: Replace pure gray (`#f5f5f5`) with warm neutrals (`oklch(97% 0.01 60)`) or cool tints (`oklch(97% 0.01 250)`)
- **Colored sections**: Use subtle background colors to separate areas
- **Gradient backgrounds**: Add depth with subtle, intentional gradients (not generic purple-blue)
- **Cards & surfaces**: Tint cards or surfaces slightly for warmth

**Use OKLCH for implementation**: It's perceptually uniform, meaning equal steps in lightness *look* equal. Great for generating harmonious scales. But still think conceptually in hue, saturation, and lightness when deciding how colors should behave.

### Data Visualization
- **Charts & graphs**: Use color to encode categories or values
- **Heatmaps**: Color intensity shows density or importance
- **Comparison**: Color coding for different datasets or timeframes

### Borders & Accents
- **Accent borders**: Add colored left/top borders to cards or sections
- **Underlines**: Color underlines for emphasis or active states
- **Dividers**: Subtle colored dividers instead of gray lines
- **Focus rings**: Colored focus indicators matching brand

### Typography Color
- **Colored headings**: Use brand colors for section headings (maintain contrast)
- **Highlight text**: Color for emphasis or categories
- **Labels & tags**: Small colored labels for metadata or categories

Treat color as a support to hierarchy:
- Keep primary body text mostly neutral
- Use color sparingly for action, state, and emphasis
- If a screen feels exciting only because everything is colored, you've probably overdone it

### Decorative Elements
- **Illustrations**: Add colored illustrations or icons
- **Shapes**: Geometric shapes in brand colors as background elements
- **Gradients**: Colorful gradient overlays or mesh backgrounds
- **Blobs/organic shapes**: Soft colored shapes for visual interest

## Balance & Refinement

Ensure color addition improves rather than overwhelms:

### Maintain Hierarchy
- **Dominant color** (60%): Primary brand color or most used accent
- **Secondary color** (30%): Supporting color for variety
- **Accent color** (10%): High contrast for key moments
- **Neutrals** (remaining): Gray/black/white for structure

Treat color psychology as a directional tool, not a law:
- warmer, brighter colors usually attract more attention
- cooler colors often stabilize and recede
- darker palettes often feel more serious or corporate
- brighter palettes often feel more youthful or energetic

Then verify the actual result against the product's audience and tone instead of trusting the color wheel blindly.

### Accessibility
- **Contrast ratios**: Ensure WCAG compliance (4.5:1 for text, 3:1 for UI components)
- **Don't rely on color alone**: Use icons, labels, or patterns alongside color
- **Test for color blindness**: Verify red/green combinations work for all users
- **Flip contrast when needed**: If white text on a colored surface demands too-dark a background, use a lighter background with darker text instead

### Cohesion
- **Consistent palette**: Use colors from defined palette, not arbitrary choices
- **Systematic application**: Same color meanings throughout (green always = success)
- **Temperature consistency**: Warm palette stays warm, cool stays cool

**NEVER**:
- Use every color in the rainbow (choose 2-4 colors beyond neutrals)
- Apply color randomly without semantic meaning
- Put gray text on colored backgrounds—it looks washed out; use a darker shade of the background color or transparency instead
- Build shades on the fly with ad-hoc lighten/darken helpers and call it a system
- Use pure gray for neutrals—add subtle color tint (warm or cool) for sophistication
- Use pure black (`#000`) or pure white (`#fff`) for large areas
- Violate WCAG contrast requirements
- Use color as the only indicator (accessibility issue)
- Make everything colorful (defeats the purpose)
- Default to purple-blue gradients (AI slop aesthetic)

## Verify Color Addition

Test that colorization improves the experience:

- **Better hierarchy**: Does color guide attention appropriately?
- **Clearer meaning**: Does color help users understand states/categories?
- **More engaging**: Does the interface feel warmer and more inviting?
- **Still accessible**: Do all color combinations meet WCAG standards?
- **Not overwhelming**: Is color balanced and purposeful?

Remember: Color is emotional and powerful. Use it to create warmth, guide attention, communicate meaning, and express personality. But restraint and strategy matter more than saturation and variety. Be colorful, but be intentional.
