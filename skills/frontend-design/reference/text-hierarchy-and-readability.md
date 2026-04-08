# Text Hierarchy and Readability

Use this reference as the canonical shared doctrine for text hierarchy, reading comfort, labels, links, and text alignment decisions.

## Type Scale Logic

Use a constrained, hand-crafted scale for interface work. Modular ratios are useful for exploration, but real UI often needs practical, edited steps.

Good UI scales usually cover:
- caption
- secondary/supporting text
- body
- subheading
- heading
- optional display size

Avoid stacks of near-identical sizes that create mud instead of hierarchy.

## Line Length

For comfortable reading, keep most paragraphs in the **45–75 character** range.

Practical web default:
- `max-width: 60ch` to `65ch` for body copy

Wider blocks can work for some layouts, but the longer the line, the more carefully line-height must be tuned.

## Line-Height Proportionality

Line-height is not one-size-fits-all.

- Small text needs more line-height
- Large headings need less line-height
- Long line lengths need more line-height
- Narrow text blocks can handle tighter line-height

As a rule of thumb:
- body: around `1.5–1.7`
- headings: often `1.0–1.25`

## Baseline Alignment

When mixed font sizes appear on the same row, align them by baseline rather than vertical center.

Baseline alignment usually feels cleaner and more deliberate because the eye already reads type from that shared line.

## All-Caps Letter-Spacing

All-caps text usually needs more letter-spacing than sentence case because capitals have less shape variation.

Use extra tracking to improve readability, especially for:
- eyebrows
- small labels
- metadata

## Headline Tightening

Some fonts are naturally too loose at large sizes.

For headings and display text:
- slightly tighten letter-spacing when the face supports it
- avoid over-tightening until letters visually crash

## Labels Are a Last Resort

Before adding a separate label, ask:
- Is the value format obvious on its own?
- Does the surrounding context already explain the data?
- Can label and value be combined into one clearer phrase?

Extra labels often flatten hierarchy and make dense UI harder to scan.

## You Might Not Need a Label at All

Many values explain themselves through format or context:
- `janedoe@example.com`
- `(555) 765-4321`
- `$19.99`
- `Customer Support`

If the value or nearby context already carries the meaning, skip the extra label.

## Combine Labels and Values

When a label is needed for clarity, see if it can be absorbed into the value.

Examples:
- `12 left in stock`
- `3 bedrooms`
- `Due Apr 12`

Combined phrasing usually scans faster and gives the interface more natural hierarchy.

## Labels Are Secondary

When separate labels are necessary, they should usually act as support text, not as peers of the data they describe.

De-emphasize labels when:
- the value is what matters most
- the user is scanning for the content itself
- the format already explains the data

Ways to quiet them:
- smaller size
- softer contrast
- lighter weight
- less dominant placement

## When to Emphasize a Label

Sometimes users are scanning for the field name first, not the value.

This is common in:
- technical specifications
- settings screens
- dense admin tables
- dashboards where similar values appear repeatedly

In those contexts, give the label slightly more emphasis without making the value disappear.

## Separate Visual Hierarchy from Document Hierarchy

Semantic structure and visual hierarchy are related, but not identical.

- Use semantic elements for structure and accessibility
- Style them according to the actual hierarchy the user needs

An `h1` does not need to look huge if it behaves more like a section label. Many section titles should be visually restrained even when semantically important.

## Balance Weight and Contrast

Hierarchy is not just about size.

Heavier or denser shapes can overpower lighter elements even at similar sizes. Use contrast to rebalance them.

Typical cases:
- soften icons when they overpower nearby text
- add a little weight to subtle separators before making them darker
- reduce contrast on metadata instead of shrinking it into unreadability

## Left vs Center Alignment

Default to **left alignment** for most UI and multi-line reading.

Use **center alignment** for:
- short hero statements
- compact empty states
- small, self-contained blocks of text

Avoid center-aligning long-form text or dense explanatory content.

## Don’t Center Long Form Text

If something is more than a couple of lines, it will usually read better left-aligned.

When a centered block gets too long:
- shorten it
- break it up
- or switch to left alignment

## Right-Align Numbers

In tables and numeric columns, right-align numbers so digits and decimals are easier to compare.

Use `tabular-nums` when consistency matters.

## Hyphenate Justified Text

If text is justified for a print-like or editorial effect, enable hyphenation.

Without hyphenation, justification often creates distracting gaps and weak reading rhythm.

Justified text should be a deliberate stylistic choice, not a default.

## Link Emphasis Rules

Not every link needs a bright accent color.

Good options:
- stronger weight
- slightly darker tone
- underline on hover for secondary links

Reserve stronger emphasis for links that are part of the main task path.

## Use Letter-Spacing Effectively

Trust the typeface designer by default, but adjust spacing deliberately when the context changes.

Most common uses:
- tighten loose display text
- open up all-caps labels
- refine small metadata and eyebrows

## Semantic vs Visual Hierarchy

Visual hierarchy should reflect what the user needs to notice first, not just what the markup implies is structurally important.

This matters especially for:
- section titles
- labels
- metadata
- supporting copy

## Quick Checks

- Does the scale feel deliberate or accidental?
- Are paragraphs within readable width?
- Does line-height match line length?
- Are mixed sizes baseline-aligned?
- Are all-caps tracked appropriately?
- Are labels quieter than the values they support when appropriate?
- Are labels emphasized only when users are actually scanning for them?
- Are long-form blocks left-aligned unless there is a strong reason not to?
- Are number columns right-aligned when comparison matters?
- Do links use only as much visual emphasis as their job requires?
- Does visual hierarchy match what users should read first?

---

**Avoid**: centering long paragraphs, using lots of near-identical font sizes, forcing every value into a rigid `label: value` format, letting semantic heading levels dictate visual size automatically, and over-brightening every link in a UI where almost everything is clickable.