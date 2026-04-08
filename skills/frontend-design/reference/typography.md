# Typography

## Classic Typography Principles

### Vertical Rhythm

Your line-height should be the base unit for ALL vertical spacing. If body text has `line-height: 1.5` on `16px` type (= 24px), spacing values should be multiples of 24px. This creates subconscious harmony—text and space share a mathematical foundation.

### Modular Scale & Hierarchy

The common mistake: too many font sizes that are too close together (14px, 15px, 16px, 18px...). This creates muddy hierarchy.

**Use fewer sizes with more contrast.** A 5-size system covers most needs:

| Role | Typical Ratio | Use Case |
|------|---------------|----------|
| xs | 0.75rem | Captions, legal |
| sm | 0.875rem | Secondary UI, metadata |
| base | 1rem | Body text |
| lg | 1.25-1.5rem | Subheadings, lead text |
| xl+ | 2-4rem | Headlines, hero text |

Popular ratios: 1.25 (major third), 1.333 (perfect fourth), 1.5 (perfect fifth). Pick one and commit.

### Readability & Measure

Use `ch` units for character-based measure (`max-width: 65ch`). Line-height scales inversely with line length—narrow columns need tighter leading, wide columns need more.

**Non-obvious**: Increase line-height for light text on dark backgrounds. The perceived weight is lighter, so text needs more breathing room. Add 0.05-0.1 to your normal line-height.

## Font Selection & Pairing

### Use Good Fonts

Good typography choices are a high-leverage personality decision.

For UI work, prefer fonts that are:
- legible at small sizes
- available in multiple useful weights
- distinct enough to create tone without hurting clarity

When appropriate, strong modern defaults include:
- **Geist Sans** for clean, modern UI and product surfaces
- **Geist Mono** for technical accents, code, and data contexts where monospace is genuinely useful
- **Geist Pixel** for playful, retro, or deliberately pixel-art directions where that personality is clearly intentional

Use Geist thoughtfully:
- Geist Sans works well as a primary UI sans
- Geist Mono should be an accent, not a lazy shorthand for "developer vibes"
- Geist Pixel is niche and should be reserved for interfaces that truly want a stylized, pixel-forward personality

### Choosing Distinctive Fonts

**Avoid the invisible defaults**: Inter, Roboto, Open Sans, Lato, Montserrat. These are everywhere, making your design feel generic. They're fine for documentation or tools where personality isn't the goal—but if you want distinctive design, look elsewhere.

**Better Google Fonts alternatives**:
- Instead of Inter → **Instrument Sans**, **Plus Jakarta Sans**, **Outfit**
- Instead of Roboto → **Onest**, **Figtree**, **Urbanist**
- Instead of Open Sans → **Source Sans 3**, **Nunito Sans**, **DM Sans**
- For editorial/premium feel → **Fraunces**, **Newsreader**, **Lora**

**System fonts are underrated**: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui` looks native, loads instantly, and is highly readable. Consider this for apps where performance > personality.

### Play It Safe

When in doubt, a neutral sans or system stack is safer than an expressive font used badly.

Playing it safe does not mean giving up on quality; it means choosing legibility and familiarity when the product needs restraint.

### Ignore Typefaces with Less Than Five Weights

As a rule of thumb, families with a healthier range of weights are often more carefully built and more flexible in UI systems.

They give you:
- clearer hierarchy options
- better consistency across states and roles
- less pressure to mix too many families

This is not a law, but it is a useful filter.

### Optimize for Legibility

Fonts designed for body use usually have:
- taller x-heights
- less extreme proportions
- more forgiving spacing at small sizes

Avoid condensed or stylized display faces for body text.

### Trust the Wisdom of the Crowd

Popular fonts are often popular for a reason: they are reliable, legible, and well-crafted.

This is especially useful when choosing:
- a neutral UI sans
- a serif for editorial use
- a proven family for a production system

### Steal from People Who Care

When you see excellent typography on a product you admire, inspect what it is using.

Good design teams make these decisions deliberately. Studying them is often a better shortcut than random font browsing.

### Developing Your Intuition

Over time, pay attention to what makes a type choice feel:
- refined
- cheap
- technical
- playful
- editorial
- trustworthy

Taste improves by noticing decisions, not by hoping inspiration strikes.

### Pairing Principles

**The non-obvious truth**: You often don't need a second font. One well-chosen font family in multiple weights creates cleaner hierarchy than two competing typefaces. Only add a second font when you need genuine contrast (e.g., display headlines + body serif).

When pairing, contrast on multiple axes:
- Serif + Sans (structure contrast)
- Geometric + Humanist (personality contrast)
- Condensed display + Wide body (proportion contrast)

**Never pair fonts that are similar but not identical** (e.g., two geometric sans-serifs). They create visual tension without clear hierarchy.

### Web Font Loading

The layout shift problem: fonts load late, text reflows, and users see content jump. Here's the fix:

```css
/* 1. Use font-display: swap for visibility */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}

/* 2. Match fallback metrics to minimize shift */
@font-face {
  font-family: 'CustomFont-Fallback';
  src: local('Arial');
  size-adjust: 105%;        /* Scale to match x-height */
  ascent-override: 90%;     /* Match ascender height */
  descent-override: 20%;    /* Match descender depth */
  line-gap-override: 10%;   /* Match line spacing */
}

body {
  font-family: 'CustomFont', 'CustomFont-Fallback', sans-serif;
}
```

Tools like [Fontaine](https://github.com/unjs/fontaine) calculate these overrides automatically.

## Modern Web Typography

### Fluid Type

Fluid typography via `clamp(min, preferred, max)` scales text smoothly with the viewport. The middle value (e.g., `5vw + 1rem`) controls scaling rate—higher vw = faster scaling. Add a rem offset so it doesn't collapse to 0 on small screens.

**Use fluid type for**: Headings and display text on marketing/content pages where text dominates the layout and needs to breathe across viewport sizes.

**Use fixed `rem` scales for**: App UIs, dashboards, and data-dense interfaces. No major app design system (Material, Polaris, Primer, Carbon) uses fluid type in product UI — fixed scales with optional breakpoint adjustments give the spatial predictability that container-based layouts need. Body text should also be fixed even on marketing pages, since the size difference across viewports is too small to warrant it.

### OpenType Features

Most developers don't know these exist. Use them for polish:

```css
/* Tabular numbers for data alignment */
.data-table { font-variant-numeric: tabular-nums; }

/* Proper fractions */
.recipe-amount { font-variant-numeric: diagonal-fractions; }

/* Small caps for abbreviations */
abbr { font-variant-caps: all-small-caps; }

/* Disable ligatures in code */
code { font-variant-ligatures: none; }

/* Enable kerning (usually on by default, but be explicit) */
body { font-kerning: normal; }
```

Check what features your font supports at [Wakamai Fondue](https://wakamaifondue.com/).

## Typography System Architecture

Name tokens semantically (`--text-body`, `--text-heading`), not by value (`--font-size-16`). Include font stacks, size scale, weights, line-heights, and letter-spacing in your token system.

## Keep Your Line Length in Check

Readable paragraphs usually live in the **45–75 character** range.

For the web, `ch`-based constraints are usually the easiest practical tool.

## Dealing with Wider Content

If a layout needs wide media or wide panels, the paragraph text inside it still does not need to stretch to the same width.

Use mixed widths when needed:
- wide area for visuals
- narrower measure for reading

That usually feels more polished than forcing everything into one width.

## Baseline, Not Center

When different text sizes share a row, align by baseline rather than visual centering.

Centered mixed sizes often look subtly off; baseline alignment feels cleaner and more intentional.

## Line-Height Is Proportional

Line-height depends on both font size and measure.

- smaller text needs more support
- larger headings usually need less
- wider lines need more line-height than narrow lines

Use line-height as an active reading tool, not a fixed default.

## Accounting for Line Length

As lines get longer, increase line-height so the eye can find the next line comfortably.

If a paragraph feels tiring to track, the line-height is often too tight for the measure.

## Accounting for Font Size

As type gets larger, line-height usually needs to come down.

Headlines often work near `1.0–1.2`, while body copy usually wants more breathing room.

## Accessibility Considerations

Beyond contrast ratios (which are well-documented), consider:

- **Never disable zoom**: `user-scalable=no` breaks accessibility. If your layout breaks at 200% zoom, fix the layout.
- **Use rem/em for font sizes**: This respects user browser settings. Never `px` for body text.
- **Minimum 16px body text**: Smaller than this strains eyes and fails WCAG on mobile.
- **Adequate touch targets**: Text links need padding or line-height that creates 44px+ tap targets.

---

**Avoid**: more than 2-3 font families per project, skipping fallback font definitions, ignoring font loading performance (FOUT/FOIT), using decorative fonts for body text, relying on too few weights for hierarchy, or using Geist Mono/Geist Pixel as gimmicks where their personality does not fit the product.
