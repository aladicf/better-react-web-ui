# Color Ramp Workflow

## 1. Choose Neutral Temperature

Greys do not have to be truly neutral.

Pick a temperature on purpose:
- **Cool neutrals**: slightly blue for crisp, calm, modern interfaces
- **Warm neutrals**: slightly yellow/orange for editorial, human, or luxurious interfaces
- **Near-neutral**: restrained, flexible, low-personality default

Apply the temperature consistently across the ramp so the lightest and darkest neutrals still feel related.

## 1.5 Understand Tint, Tone, and Shade

Before building a ramp, be explicit about how the family should behave:

- **tint** lightens and softens the color for backgrounds and lower-emphasis use
- **shade** darkens the color for stronger emphasis, text, or hover depth
- **tone** reduces saturation so the color becomes calmer and easier to live with in larger areas

Most UI ramps need all three behaviors, not just a blind slide toward white or black.

## 2. Pick the Edge / Base / Fill-Gaps Structure

Build ramps intentionally instead of improvising shades on the fly.

### Base shade
- The middle color that could plausibly work for a button or strong accent

### Dark edge
- Usually for text, strong icons, or emphasis on light surfaces

### Light edge
- Usually for tinted backgrounds, panels, or subtle chips

### Fill the gaps
- Add the intermediate shades after the edges and base are chosen
- Use 5–10 shades per important ramp

This gives you a real system instead of a pile of nearly identical colors.

### Name the stops consistently

Whether the scale is `50-950`, `100-800`, or another stepped system, define it once and keep the naming stable.

The point is not the exact numbering convention. The point is that backgrounds, labels, borders, emphasis, and text can keep reaching for the same stops instead of inventing new ones on every screen.

## 3. Preserve Saturation

As colors move closer to black or white, they often lose energy.

To keep ramps from getting muddy:
- increase saturation as lightness moves away from the middle when needed
- compare shades side-by-side in context, not in isolation
- prefer hand-tuned ramps over automatic `lighten()` / `darken()` helpers

## 4. Use Flipped Contrast When Helpful

White text on a colored background often forces the background to become too dark and visually dominant.

Alternative:
- use a light tinted surface
- place darker colored text on top

This preserves personality while reducing visual aggression and improving accessibility.

## 5. Use Hue Rotation for Perceived Brightness

Brightness is not only about lightness. Some hues feel brighter than others.

To keep a ramp rich:
- rotate slightly toward brighter-feeling hues when lightening
- rotate slightly toward darker-feeling hues when darkening
- keep the shift subtle so the color family still feels consistent

Example:
- darkening yellow often benefits from drifting slightly orange instead of only lowering lightness

## 6. Grey-on-Color Rule

Never put generic grey text on a colored background. It usually looks washed out.

Instead:
- use a darker or lighter shade from the same hue family
- or use a carefully tuned color with similar hue and adjusted lightness/saturation

## Practical Ramp Checklist

- Does the neutral ramp have a deliberate temperature?
- Do tint, tone, and shade each have a useful job in the ramp?
- Do primary and accent ramps have clear edges and a usable base?
- Are there too many improvised one-off shades?
- Are light tinted surfaces using darker text instead of weak grey?
- Do darker and lighter shades still feel alive, not muddy?

---

**Avoid**: Building ramps entirely with blind math. Using dozens of shades that are visually indistinguishable. Assuming lightness alone controls how bright a color feels.