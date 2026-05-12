# Color & Contrast

## Color Spaces: Use OKLCH

**Stop using HSL.** Use OKLCH (or LCH) instead. It's perceptually uniform, meaning equal steps in lightness *look* equal—unlike HSL where 50% lightness in yellow looks bright while 50% in blue looks dark.

```css
/* OKLCH: lightness (0-100%), chroma (0-0.4+), hue (0-360) */
--color-primary: oklch(60% 0.15 250);      /* Blue */
--color-primary-light: oklch(85% 0.08 250); /* Same hue, lighter */
--color-primary-dark: oklch(35% 0.12 250);  /* Same hue, darker */
```

**Key insight**: As you move toward white or black, reduce chroma (saturation). High chroma at extreme lightness looks garish. A light blue at 85% lightness needs ~0.08 chroma, not the 0.15 of your base color.

## Choosing Color Families

Color harmony methods are useful starting tools, not automatic guarantees of taste.

Use them to generate options, then judge the result in context.

### Monochrome

Use one hue with multiple tints, tones, and shades.

Best for:
- calm, cohesive interfaces
- products that want restraint over spectacle
- systems where hierarchy should come mostly from spacing, contrast, and type

Risk:
- can feel flat if there is no semantic color or accent contrast where the workflow needs it

### Analogous

Use neighboring hues on the color wheel.

Best for:
- smooth, harmonious palettes
- interfaces that want warmth, nuance, or atmospheric character
- brands where multiple related hues should feel like one family

Risk:
- nearby hues can become muddy if contrast and role separation are weak

### Complementary

Use opposite hues on the wheel.

Best for:
- high-contrast emphasis
- strong call-to-action moments
- designs where one color family needs a clear counterweight

Risk:
- complements at equal intensity can feel loud or childish fast; one side usually needs to dominate while the other acts as an accent

### Triadic

Use three hues spaced around the wheel.

Best for:
- expressive systems with multiple clear roles
- illustration-heavy or brand-rich interfaces
- products that genuinely benefit from broader category color

Risk:
- easy to overdo; most product UIs should still keep one dominant family and let the others play supporting roles

### Practical rule

Start with the smallest color family that solves the job:

- monochrome when restraint is enough
- analogous when you want subtle richness
- complementary when you need focused contrast
- triadic only when the product can support a broader, more expressive palette

## Building Functional Palettes

### Color Temperature

Warm and cool are attention tools as much as aesthetic choices.

- warm hues (reds, oranges, yellows, warm neutrals) come forward faster
- cool hues (blues, teals, violets, cool neutrals) tend to recede and stabilize the layout

Use warm colors for:
- warnings
- urgent actions
- emotional highlights
- places where you want the eye to land quickly

Use cool colors for:
- structural UI
- secondary interactions
- trustworthy or calm product tone
- passive surfaces and background framework

The goal is not to follow a rigid nature chart. It is to control attention and mood deliberately.

### Saturation, Tint, Tone, and Shade

These are practical levers, not art-school trivia:

- **tint**: add lightness so a color can sit back into the background
- **shade**: darken a color so it can carry stronger emphasis, text, or hover depth
- **tone**: reduce saturation and intensity so a color feels calmer and less insistent
- **saturation**: controls how vivid or raw a color feels

In UI work:

- use tints for backgrounds, low-emphasis fills, or supporting surfaces
- use shades for stronger text, actions, and darker interactive states
- use toned-down variants to keep palettes from becoming harsh or toy-like
- be careful with highly saturated colors at large scale; they exhaust the eye quickly

### The Tinted Neutral Trap

**Pure gray is dead.** Add a subtle hint of your brand hue to all neutrals:

Tailwind CSS v4.2 adds neutral-adjacent palettes `mauve`, `olive`, `mist`, and `taupe`. Use them when default gray, zinc, neutral, stone, and slate feel too generic for the brand but a full custom neutral ramp would be wasteful.

Useful mapping:

- `mauve`: warmer, slightly violet product surfaces
- `olive`: calm green-gray operational or wellness-adjacent surfaces
- `mist`: cooler, blue-green neutral surfaces
- `taupe`: warmer editorial, premium, or tactile surfaces

Do not swap every neutral to a new palette for novelty. Pick one neutral family, test contrast, and keep semantic roles clear.

```css
/* Dead grays */
--gray-100: oklch(95% 0 0);     /* No personality */
--gray-900: oklch(15% 0 0);

/* Warm-tinted grays (add brand warmth) */
--gray-100: oklch(95% 0.01 60);  /* Hint of warmth */
--gray-900: oklch(15% 0.01 60);

/* Cool-tinted grays (tech, professional) */
--gray-100: oklch(95% 0.01 250); /* Hint of blue */
--gray-900: oklch(15% 0.01 250);
```

The chroma is tiny (0.01) but perceptible. It creates subconscious cohesion between your brand color and your UI.

### Palette Structure

A complete system needs:

| Role | Purpose | Example |
|------|---------|---------|
| **Primary** | Brand, CTAs, key actions | 1 color, 3-5 shades |
| **Neutral** | Text, backgrounds, borders | 9-11 shade scale |
| **Semantic** | Success, error, warning, info | 4 colors, 2-3 shades each |
| **Surface** | Cards, modals, overlays | 2-3 elevation levels |

**Skip secondary/tertiary unless you need them.** Most apps work fine with one accent color. Adding more creates decision fatigue and visual noise.

## Dark Mode Token Discipline

Dark mode is not light mode with inverted colors. Build a paired theme with semantic tokens, then map Tailwind utilities to those tokens.

Good defaults:

- avoid pure black backgrounds and pure white body text; use near-black surfaces and off-white text
- reduce chroma for accent and semantic colors on dark surfaces so buttons, badges, and links do not vibrate
- use regular or medium body text weights; very thin type gets weak fast on dark backgrounds
- create separate tokens for `background`, `surface`, `surface-raised`, `border`, `muted`, `foreground`, `muted-foreground`, `primary`, and semantic states
- treat dark shadows as weak depth tools; use subtle borders, highlights, glows, gradients, or surface lightness steps instead
- provide a theme toggle when user preference matters, and respect `prefers-color-scheme` as the initial default when no explicit choice exists

Tailwind pattern:

```css
@theme {
  --color-background: oklch(99% 0.004 250);
  --color-foreground: oklch(17% 0.014 250);
  --color-surface: oklch(100% 0 0);
  --color-border: oklch(90% 0.01 250);
}

.dark {
  --color-background: oklch(15% 0.014 250);
  --color-foreground: oklch(88% 0.01 250);
  --color-surface: oklch(20% 0.016 250);
  --color-border: oklch(31% 0.018 250);
}
```

Then use token utilities such as `bg-background`, `text-foreground`, `bg-surface`, and `border-border` instead of hard-coding `dark:bg-black`, `dark:text-white`, or random slate values per component.

Dark mode testing should include:

- normal text and small metadata contrast
- disabled and placeholder contrast
- focus rings on dark surfaces
- semantic states such as error, warning, success, and info
- screenshots, charts, and logos that may disappear on dark backgrounds
- bright ambient light, dim rooms, and OLED/low-brightness devices

### Build a Practical Color Schema

A real color schema should document more than a few pretty swatches.

Capture at least:

- the primary brand or accent family
- any supporting secondary or tertiary families if they are truly needed
- a neutral text/background foundation
- semantic ramps for success, warning, error, and info when the product needs them
- the usable weights or stops for each family
- short usage notes for where each color should appear in text, buttons, surfaces, borders, charts, or states

The schema is part of the styleguide layer. Its job is to stop every new screen from improvising colors again.

Whether you name the stops `50-950`, `100-900`, or another consistent scale matters less than having a system that people can actually reuse.

### The 60-30-10 Rule (Applied Correctly)

This rule is about **visual weight**, not pixel count:

- **60%**: Neutral backgrounds, white space, base surfaces
- **30%**: Secondary colors—text, borders, inactive states
- **10%**: Accent—CTAs, highlights, focus states

The common mistake: using the accent color everywhere because it's "the brand color." Accent colors work *because* they're rare. Overuse kills their power.

## Color Psychology Is Context, Not Law

Color associations are useful, but they are not universal truths.

Common tendencies:

- white reads as clear, clean, simple
- black reads as authority, precision, seriousness
- red reads as danger, urgency, or importance
- orange reads as warning, friendliness, or energy
- yellow reads as optimism, highlight, or alertness
- green reads as safety, balance, or success
- blue reads as trust, stability, security, or finance
- purple and magenta often read as creativity, luxury, imagination, or youthfulness

But meaning changes with context, saturation, neighboring colors, and product domain.

For example:

- a dark navy product can feel corporate, stable, or premium
- bright greens and pinks can feel youthful, playful, or disruptive
- a muted olive or desaturated plum can feel editorial and refined instead of loud

Use psychology as a hypothesis to test against the product's tone, not as a universal mapping table.

## Contrast & Accessibility

### WCAG Requirements

| Content Type | AA Minimum | AAA Target |
|--------------|------------|------------|
| Body text | 4.5:1 | 7:1 |
| Large text (18px+ or 14px bold) | 3:1 | 4.5:1 |
| UI components, icons | 3:1 | 4.5:1 |
| Non-essential decorations | None | None |

**The gotcha**: Placeholder text still needs 4.5:1. That light gray placeholder you see everywhere? Usually fails WCAG.

### Dangerous Color Combinations

These commonly fail contrast or cause readability issues:

- Light gray text on white (the #1 accessibility fail)
- **Gray text on any colored background**—gray looks washed out and dead on color. Use a darker shade of the background color, or transparency
- Red text on green background (or vice versa)—8% of men can't distinguish these
- Blue text on red background (vibrates visually)
- Yellow text on white (almost always fails)
- Thin light text on images (unpredictable contrast)

### Never Use Pure Gray or Pure Black

Pure gray (`oklch(50% 0 0)`) and pure black (`#000`) don't exist in nature—real shadows and surfaces always have a color cast. Even a chroma of 0.005-0.01 is enough to feel natural without being obviously tinted. (See tinted neutrals example above.)

### Testing

Don't trust your eyes. Use tools:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Browser DevTools → Rendering → Emulate vision deficiencies
- [Polypane](https://polypane.app/) for real-time testing

Contrast is necessary, not sufficient. For semantic states, charts, and active/selected cues that must survive color-vision deficiencies, also consult [colorblindness UX](./colorblindness-ux.md).

## Theming: Light & Dark Mode

### Dark Mode Is Not Inverted Light Mode

You can't just swap colors. Dark mode requires different design decisions:

| Light Mode | Dark Mode |
|------------|-----------|
| Shadows for depth | Lighter surfaces for depth (no shadows) |
| Dark text on light | Light text on dark (reduce font weight) |
| Vibrant accents | Desaturate accents slightly |
| White backgrounds | Never pure black—use dark gray (oklch 12-18%) |

```css
/* Dark mode depth via surface color, not shadow */
:root[data-theme="dark"] {
  --surface-1: oklch(15% 0.01 250);
  --surface-2: oklch(20% 0.01 250);  /* "Higher" = lighter */
  --surface-3: oklch(25% 0.01 250);

  /* Reduce text weight slightly */
  --body-weight: 350;  /* Instead of 400 */
}
```

### Token Hierarchy

Use two layers: primitive tokens (`--blue-500`) and semantic tokens (`--color-primary: var(--blue-500)`). For dark mode, only redefine the semantic layer—primitives stay the same.

### Weight Inversion Across Themes

When a ramp is used across both light and dark themes, the semantic job of each stop often flips.

In light mode:
- lighter stops often serve backgrounds and soft surfaces
- darker stops often serve text and strong emphasis

In dark mode:
- darker stops often become the page and panel foundation
- lighter stops often become text, overlays, or higher-elevation surfaces

Do not just invert every number mechanically. Check whether each stop still does its job in context.

### Dark-mode-only apps need an explicit `color-scheme`

If a product is **dark mode only**, the document should opt into dark browser chrome as well. Without that, the browser may keep light/system scrollbars and built-in surfaces, which can look especially bad against a dark UI during daytime system themes.

Use a class on the root element:

```html
<html class="scheme-only-dark">
```

And define it explicitly:

```css
.scheme-only-dark {
  color-scheme: only dark;
}
```

For Tailwind-oriented projects, exposing `scheme-only-dark` as a utility-style class on `<html>` is a clean pattern. If the project does not already have that utility, define it through the project's Tailwind entry layer instead of assuming the browser will infer the right chrome.

Use this when:

- the product ships only a dark theme
- the layout root should always render dark-friendly browser UI
- you want scrollbars and other UA-controlled surfaces to match the app instead of the user's daytime light preference

### Prefer Tailwind scrollbar utilities for local scroll areas

For app-style interfaces with custom themes, default browser scrollbars can feel like they belong to another product. Tailwind CSS v4.3 ships first-party scrollbar utilities, so do not reach for bespoke scrollbar CSS by default.

Use utilities on the actual scroll container:

```tsx
<aside className="overflow-auto scrollbar-thin scrollbar-gutter-stable scrollbar-thumb-border scrollbar-track-transparent">
  ...
</aside>
```

Good defaults:

- use `scrollbar-thin` on dense panels, command palettes, sidebars, and code panes where default scrollbars feel heavy
- use `scrollbar-auto` for long reading surfaces or coarse-pointer contexts where the browser default is easier to grab
- use `scrollbar-none` only for decorative or gesture-first regions that still expose another obvious way to move through content
- pair `scrollbar-thumb-*` and `scrollbar-track-*`; if one is unset, the missing side can become transparent
- use opacity modifiers for subtle tracks, such as `scrollbar-thumb-slate-900/60 scrollbar-track-slate-900/10`
- use `scrollbar-gutter-stable` when overflow appears conditionally and layout shift would hurt scanability
- use `scrollbar-gutter-both` for centered panels where a one-sided gutter makes content look off-center

For project tokens, define theme colors instead of hard-coding one-off values:

```css
@import "tailwindcss";

@theme {
  --color-scrollbar-thumb: var(--border);
  --color-scrollbar-track: transparent;
}
```

Then use `scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track` in markup. This keeps scrollbars connected to the design system and lets light and dark mode update through tokens.

### Use base-layer scrollbar CSS only for global defaults

Use base-layer CSS when the whole document needs a consistent browser chrome treatment, when the project must support a wrapper component that does not expose scrollbar classes, or when WebKit-specific radius/size polish is part of the design system.

Keep global scrollbar styling restrained:

```css
@layer base {
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-track);
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-scrollbar-track);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-scrollbar-thumb);
    border-radius: 999px;
  }
}
```

Avoid global `* { scrollbar-width: thin; }` unless the product is a dense application and you have tested coarse-pointer usability. Blanket thin scrollbars can make long pages worse.

### Extend the scrollbar gutter into the theme

On dense web apps, side panels, command surfaces, and dark layouts, the scroll area should feel like part of the surface. Match the scrollbar track or gutter to the surrounding background instead of leaving a bright system strip at the edge.

For full-page scroll, set document-level browser chrome and scrollbar tokens:

```css
@layer base {
  :root {
    color-scheme: light dark;
    --scrollbar-thumb: var(--border);
    --scrollbar-track: var(--background);
  }

  .dark {
    --scrollbar-thumb: var(--border);
    --scrollbar-track: var(--background);
  }

  * {
    scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  }

  ::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
  }
}
```

For nested scroll containers, prefer Tailwind's local scrollbar utilities or a local data attribute that maps the track to that container's surface token. This keeps a sidebar scrollbar aligned with the sidebar background and a main-content scrollbar aligned with the page background.

## Alpha Is A Design Smell

Heavy use of transparency (rgba, hsla) usually means an incomplete palette. Alpha creates unpredictable contrast, performance overhead, and inconsistency. Define explicit overlay colors for each context instead. Exception: focus rings and interactive states where see-through is needed.

---

**Avoid**: Relying on color alone to convey information. Creating palettes without clear roles for each color. Using pure black (#000) for large areas. Skipping color blindness testing (8% of men affected).
