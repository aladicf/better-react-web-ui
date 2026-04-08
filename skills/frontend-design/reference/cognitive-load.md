# Cognitive Load

## Working-Memory Limits

Users can only juggle a small number of things at once. The more decisions, controls, and concepts visible at the same time, the harder it becomes to understand the interface quickly.

Practical rule:
- If a user has to parse more than a few competing options at a single decision point, cognitive load is rising fast.

## Too-Many-Options Thresholds

Use these as warning signs, not hard laws:

- **0–3 visible choices**: usually easy to parse
- **4–6 choices**: acceptable if clearly grouped or familiar
- **7+ choices**: likely overload unless the structure is extremely obvious

When options multiply:
- group them
- sequence them
- hide secondary ones until needed

## Progressive Disclosure Rules

Show users what they need **now**, not everything the system can do.

Good uses:
- advanced filters behind an expand/collapse affordance
- secondary settings after the primary task is understood
- detailed metadata after the main content is visible

Avoid dumping every state, option, and explanation onto the first screen if the user only needs the next step.

## Chunking Principles

Break complex content into meaningful chunks.

Useful chunking tools:
- sectioning
- subheadings
- proximity
- cards only when truly distinct
- steps or sequences
- collapsible advanced regions

Chunking fails when:
- groups are weak or ambiguous
- spacing between groups matches spacing within them
- headings are louder than the content they label

## What to Hide vs What to Show Now

### Show now
- the primary action
- the key context needed to make that action
- the minimum information needed for confidence

### Hide or defer
- advanced controls
- edge-case settings
- tertiary metadata
- power-user affordances that distract first-timers

### Reveal later when
- the user asks for more detail
- the next step requires more information
- the user has already demonstrated intent

## 8-Item Cognitive Load Checklist

Count a failure each time the answer is “yes”:

1. Are there too many visible choices at once?
2. Are multiple areas competing equally for attention?
3. Does the user need to remember information from another area to continue?
4. Is complex functionality exposed before it is needed?
5. Are groups weak, ambiguous, or hard to scan?
6. Are labels, explanations, or controls repeated unnecessarily?
7. Does the interface require the user to decode internal jargon or unclear metaphors?
8. Is the next step unclear without trial-and-error?

### Reading the result
- **0–1 failures**: low cognitive load
- **2–3 failures**: moderate cognitive load
- **4+ failures**: high/critical cognitive load

---

**Avoid**: treating every possible option as equally important, exposing advanced settings too early, and forcing users to hold too much in memory while navigating the screen.