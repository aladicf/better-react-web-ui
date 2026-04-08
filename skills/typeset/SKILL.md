---
name: typeset
description: Improve UI typography by fixing font choices, type scale, hierarchy, weight, and readability so text feels intentional. Use when the user mentions fonts, typography, type scale, readability, text hierarchy, or sizing that feels off.
metadata:
   argument-hint: "[target]"
---

Assess and improve typography that feels generic, inconsistent, or poorly structured — turning default-looking text into intentional, well-crafted type.

## MANDATORY PREPARATION

Users start this workflow with `/typeset`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first.

---

## Assess Current Typography

Analyze what's weak or generic about the current type:

1. **Font choices**:
   - Are we using invisible defaults? (Inter, Roboto, Arial, Open Sans, system defaults)
   - Does the font match the brand personality? (A playful brand shouldn't use a corporate typeface)
   - Are there too many font families? (More than 2-3 is almost always a mess)

2. **Hierarchy**:
   - Can you tell headings from body from captions at a glance?
   - Are font sizes too close together? (14px, 15px, 16px = muddy hierarchy)
   - Are weight contrasts strong enough? (Medium vs Regular is barely visible)

3. **Sizing & scale**:
   - Is there a consistent type scale, or are sizes arbitrary?
   - Does body text meet minimum readability? (16px+)
   - Is the sizing strategy appropriate for the context? (Fixed `rem` scales for app UIs; fluid `clamp()` for marketing/content page headings)

4. **Readability**:
   - Are line lengths comfortable? (45-75 characters ideal)
   - Is line-height appropriate for the font and context?
   - Is there enough contrast between text and background?

5. **Consistency**:
   - Are the same elements styled the same way throughout?
   - Are font weights used consistently? (Not bold in one section, semibold in another for the same role)
   - Is letter-spacing intentional or default everywhere?

**CRITICAL**: The goal isn't to make text "fancier" — it's to make it clearer, more readable, and more intentional. Good typography is invisible; bad typography is distracting.

## Plan Typography Improvements

Consult the [typography reference](../frontend-design/reference/typography.md) from the frontend-design skill for detailed guidance on scales, pairing, loading strategies, and font-selection heuristics.
Consult the [text hierarchy and readability](../frontend-design/reference/text-hierarchy-and-readability.md) for line length, line-height, alignment, baseline, label/value handling, semantic-vs-visual hierarchy, link emphasis, and numeric alignment.
Consult the [hierarchy checklist](../frontend-design/reference/hierarchy-checklist.md) when typography problems are really hierarchy problems in disguise.

Treat the shared text hierarchy/readability reference as the common source for reading comfort and text-structure rules, then apply the typography-specific changes here.

Create a systematic plan:

- **Font selection**: Do fonts need replacing? What fits the brand/context?
- **Type scale**: Establish a constrained UI scale; use modular scales as inspiration, then hand-craft the actual steps you need
- **Weight strategy**: Which weights serve which roles? (Regular for body, Semibold for labels, Bold for headings — or whatever fits)
- **Spacing**: Line-heights, letter-spacing, and margins between typographic elements

## Improve Typography Systematically

### Font Selection

If fonts need replacing:
- Choose fonts that reflect the brand personality
- Pair with genuine contrast (serif + sans, geometric + humanist) — or use a single family in multiple weights
- Prefer families with a healthy range of weights; families with more weights are usually more carefully built
- Optimize for legibility in UI text — avoid condensed display faces with short x-heights for body copy
- Ensure web font loading doesn't cause layout shift (`font-display: swap`, metric-matched fallbacks)

### Establish Hierarchy

Build a clear type scale:
- **5-7 sizes cover most needs**: caption, secondary, body, subheading, heading, display, optional eyebrow
- **Use ratios to explore, then commit to real values** that feel right in the interface
- **Combine dimensions**: Size + weight + color + space for strong hierarchy — don't rely on size alone
- **Use dramatic enough weight contrast** that the hierarchy is obvious; medium vs regular is often too subtle
- **App UIs**: Use a fixed `rem`-based type scale, optionally adjusted at 1-2 breakpoints. Fluid sizing undermines the spatial predictability that dense, container-based layouts need
- **Marketing / content pages**: Use fluid sizing via `clamp(min, preferred, max)` for headings and display text. Keep body text fixed

### Fix Readability

- Set `max-width` on text containers using `ch` units (`max-width: 65ch`)
- Keep most paragraphs in the 45-75 character range
- Adjust line-height per context: tighter for headings (1.1-1.2), looser for body (1.5-1.7)
- Increase line-height as line length increases; reduce it as font size gets larger
- Increase line-height slightly for light-on-dark text
- Ensure body text is at least 16px / 1rem

### Refine Details

- Use `tabular-nums` for data tables and numbers that should align
- Right-align numeric columns when comparison matters
- Align mixed-size text by the baseline when it appears on the same line
- Apply proper `letter-spacing`: slightly open for small caps and uppercase, default or slightly tighter for large display text
- Tighten headings selectively when the typeface is naturally loose at larger sizes
- Don’t make every link bright blue by default; match link emphasis to its importance in the reading flow
- Use semantic token names (`--text-body`, `--text-heading`), not value names (`--font-16`)
- Set `font-kerning: normal` and consider OpenType features where appropriate

### Weight Consistency

- Define clear roles for each weight and stick to them
- Don't use more than 3-4 weights (Regular, Medium, Semibold, Bold is plenty)
- Prefer larger jumps between roles over lots of barely different weights
- Load only the weights you actually use (each weight adds to page load)

### Scale Integrity

- Use `rem` or `px` as source values for the scale, then prefer `rem` in implementation to respect user settings
- Avoid `em`-based type scales in nested UI — descendants quickly drift off-system
- If a scale needs lots of fractional sizes to work, the scale is probably too mathematical and not practical enough

**NEVER**:
- Use more than 2-3 font families
- Pick sizes arbitrarily — commit to a scale
- Set body text below 16px
- Use decorative/display fonts for body text
- Disable browser zoom (`user-scalable=no`)
- Use `em` to define your type scale in nested UI
- Use tiny font sizes just to create hierarchy — use weight or color first
- Center-align long-form text
- Assume a perfect mathematical ratio is better than a hand-crafted scale
- Use `px` for font sizes in implementation — use `rem` to respect user settings
- Default to Inter/Roboto/Open Sans when personality matters
- Pair fonts that are similar but not identical (two geometric sans-serifs)

## Verify Typography Improvements

- **Hierarchy**: Can you identify heading vs body vs caption instantly?
- **Readability**: Is body text comfortable to read in long passages?
- **Consistency**: Are same-role elements styled identically throughout?
- **Personality**: Does the typography reflect the brand?
- **Performance**: Are web fonts loading efficiently without layout shift?
- **Accessibility**: Does text meet WCAG contrast ratios? Is it zoomable to 200%?

Remember: Typography is the foundation of interface design — it carries the majority of information. Getting it right is the highest-leverage improvement you can make.