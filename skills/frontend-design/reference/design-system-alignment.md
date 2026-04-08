# Design System Alignment

## Tokens vs Components vs Patterns

### Tokens
- the smallest reusable values
- examples: spacing scale, color ramps, type sizes, radius, shadow levels

### Components
- reusable UI building blocks
- examples: button, input, card, alert, modal

### Patterns
- repeated arrangements or flows built from components
- examples: empty states, filter bars, settings forms, master-detail layouts

Confusing these layers leads to drift and messy extraction.

## When to Normalize vs Extract

### Normalize
Use when a feature has drifted away from the system and needs to be realigned.

Good fit:
- mismatched token use
- inconsistent spacing
- off-brand component variants
- one area of the product feeling “not like the rest”

### Extract
Use when repeated ad-hoc solutions should become shared system assets.

Good fit:
- same pattern implemented 3+ times
- hard-coded values repeating across multiple surfaces
- repeated component logic with only slight variation

## What Drift Means

Drift happens when:
- one-off values are added for convenience
- teams style local components without checking the system
- patterns slowly diverge in spacing, typography, color, or behavior

Drift is not just visual inconsistency — it weakens learnability and system trust.

## System-First Fixes vs Local Overrides

### System-first fix
- change the token, shared component, or documented pattern
- best when the problem is recurring or systemic

### Local override
- acceptable when the context is genuinely unique
- dangerous when used as a shortcut for fixing drift

If the same override shows up repeatedly, it probably wants to become system work.

## Small Constrained Systems vs Token Sprawl

A good system limits choices.

Healthy systems:
- have a small number of useful scale steps
- make decisions easier
- improve consistency and speed

Token sprawl:
- documents chaos instead of reducing it
- creates too many nearly identical options
- makes every design decision negotiable again

## Practical Checks

- Is this a token problem, component problem, or pattern problem?
- Should this be normalized locally or extracted system-wide?
- Is the proposed solution reducing choices or adding more?
- Are repeated local exceptions signaling system drift?

---

**Avoid**: creating tokens for every one-off value, extracting context-specific quirks into the system, or using local overrides as a substitute for proper alignment work.