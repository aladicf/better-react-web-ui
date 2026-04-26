# Cognitive Load

## Miller's Law (Practical Takeaway)

Users can only juggle a small number of things at once. The more decisions, controls, and concepts visible at the same time, the harder it becomes to understand the interface quickly.

Practical rule:
- If a user has to parse more than a few competing options at a single decision point, cognitive load is rising fast.

The important takeaway is not a magic number. It is that the interface should carry the burden instead of forcing users to remember state, compare scattered information, or mentally track unfinished work.

Reduce working-memory pressure by:
- keeping related controls and information together
- showing the current step, selection, or summary instead of expecting recall
- preserving entered state when users move between views or steps
- using defaults, previews, inline context, and confirmation summaries

## Design for users under strain, not ideal attention

Many interfaces are tested mentally against a calm, fully focused user.

Real users are often:

- interrupted
- rushed
- tired
- anxious about making a mistake
- multitasking across tabs, apps, or devices
- seeing the flow for the first time in a compact viewport

An interface that only feels easy under ideal attention is fragile.

Good defaults:

- keep the next step obvious even when the user is not reading every detail
- preserve state and progress so interruptions do not restart the task mentally
- use explicit labels instead of relying on icon guessing or memory
- keep current selection, step, or object visible near the action it affects
- reduce the need to reinterpret the same screen every time the user returns to it

## Hick's Law in Practice

Use these as warning signs, not hard laws:

- **0–3 visible choices**: usually easy to parse
- **4–6 choices**: acceptable if clearly grouped or familiar
- **7+ choices**: likely overload unless the structure is extremely obvious

When options multiply:
- group them
- sequence them
- hide secondary ones until needed

If several options must remain visible, make the structure obvious enough that users can recognize the correct branch quickly instead of comparing every item one by one.

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
- summaries that reflect prior choices so users do not have to remember them
- defaults and recommended paths that reduce comparison overhead

Chunking fails when:
- groups are weak or ambiguous
- spacing between groups matches spacing within them
- headings are louder than the content they label
- users must look somewhere else to remember what this group is acting on

## Reduce load without turning the UI into a ghost town

Reducing cognitive load is not the same as deleting useful information.

The goal is not emptiness.

The goal is clearer structure.

Good ways to simplify without starving the interface:

- keep helpful labels next to ambiguous icons
- use whitespace as separation, not as performative emptiness
- keep relevant metadata when it improves decisions, but group it clearly
- prefer one obvious path over several equally loud ones
- remove noise, repetition, and weak decoration before removing meaning

If users cannot tell what the controls do, what changed, or what happens next, the interface may be visually sparse but still cognitively heavy.

## Density can be efficient when the structure is legible

Density is not automatically the enemy of clarity.

For expert or repeat-use workflows, visible tools, metadata, and shortcuts can reduce effort when they are:

- consistently grouped
- visually prioritized
- predictable in location
- easy to scan by pattern

The failure mode is not density alone.

The failure mode is **uncurated density** where everything competes at once.

Good defaults:

- keep frequently used controls visible when hiding them would force repeated recall or extra clicks
- use grouping, spacing, and quieter secondary styling so dense areas can still breathe
- let interfaces grow with user literacy through progressive disclosure, not through permanent concealment
- prefer honest scrolling and sectioning over collapsing every tool into mystery menus just to reduce visible count

If users need the controls regularly, hiding them can increase cognitive load more than showing them well.

## Recognition beats recall

Users should not have to remember what the system meant a moment ago.

Prefer:

- visible labels over mystery icons
- familiar placements for common actions such as search, profile, back, and save
- summaries of prior choices instead of forcing users to remember them
- inline hints near the decision rather than explanations buried elsewhere
- controls whose visual form suggests how they work

Every moment of “wait, what does that mean again?” is cognitive load.

## Uncertainty is cognitive load too

Silence from the interface forces users to invent explanations.

That is mentally expensive.

Good feedback reduces doubt:

- pressed / hover / focus states confirm interaction
- loading states explain that the system is working
- success or error states explain what happened
- blocked states explain why and how to recover
- freshness, paused, or offline cues clarify live-data trust

If users are wondering whether the click worked, whether the page is frozen, or whether their data was saved, the interface is consuming attention that should stay on the task.

## Smart defaults reduce unnecessary decisions

Every choice has a cost.

Meaningful defaults help when they:

- match the common case honestly
- reduce busywork rather than hide commitments
- stay easy to review and change
- guide uncertain users toward a safe starting point

Use defaults to remove low-value decisions, not to smuggle in product-favoring outcomes.

## Meaningful friction is rare and must earn its place

Not every fast flow is good, but not every extra step is wise either.

Add friction only when it clearly helps users make a better decision, avoid costly mistakes, or understand a high-stakes commitment.

Good candidates:

- confirming an irreversible action
- reviewing a sensitive transfer, deletion, or purchase
- asking a small number of setup questions that materially improve the result

Weak candidates:

- slowing ordinary tasks just to feel premium
- moving controls to “wake users up”
- hiding obvious navigation so users must work harder
- manufacturing suspense with fake delays or vague progress theater

The right goal is thoughtful clarity, not theatrical difficulty.

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

**Avoid**: treating every possible option as equally important, exposing advanced settings too early, forcing users to hold too much in memory while navigating the screen, and mistaking visual emptiness or manufactured friction for real clarity.
