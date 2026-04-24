# Design Principles

Use this reference when the team needs a clearer product point of view, a more durable decision framework, or a set of agreed defaults that reduce repeated design debates.

Design principles are not decorative slogans.

They are shared default decisions with enough clarity that teams can apply them **with judgment** without reopening the same argument every week.

## What design principles are for

Good principles help teams:

- align around what the product should feel like
- make tradeoffs faster
- resist random trend-chasing and reactive workslop
- preserve consistency across many people and many features
- document what the organization values in the product experience

Without them, decisions become sporadic, ad hoc, and inconsistent. The product still communicates values — just accidentally.

## Use principles intentionally, not all at once

Good design principles are not a checklist that must all fire at maximum strength in every screen.

Different surfaces need different emphases.

Examples:

- a dense operational table may need stronger consistency, modularity, and scanning support than dramatic white space
- a landing page hero may depend more on emphasis, anchor placement, and message clarity than on feature density
- a narrow settings flow may need Fitts's Law and proximity discipline more than expressive composition

The goal is intentional use, not ritual obedience.

If a team starts applying every principle equally, the principles stop acting like judgment and start acting like cargo cult decor.

## A useful principle is not a slogan

Weak principle:

- “Delight the user.”

Better principle:

- “Reduce cognitive load before adding personality.”

Weak principle:

- “Be innovative.”

Better principle:

- “Innovate in workflow efficiency, not by reinventing standard controls.”

Good principles are:

- specific enough to guide a decision
- broad enough to apply repeatedly
- opinionated enough to exclude bad choices
- practical enough that a product team can actually use them

## Principles should explain what you do **and** what you do not do

The strongest principle sets clarify both ambition and restraint.

Examples:

- **Do** preserve context during short, high-priority tasks  
  **Do not** default to blocking modals for every interruption.

- **Do** write in the user’s language  
  **Do not** force people to learn internal jargon or database vocabulary.

- **Do** favor durable, repairable structure  
  **Do not** chase novelty that makes the interface harder to understand.

If a principle never rules anything out, it is probably too vague.

## Visual principles are useful raw material for product principles

Many teams already use perceptual rules without naming them.

Naming them helps.

Especially useful source principles include:

- **proximity** — related things sit closer together than unrelated things
- **emphasis** — every screen needs a clear point of visual priority
- **white space** — empty space should direct attention, not perform taste for its own sake
- **consistency** — same-role elements should follow the same rules
- **modularity** — layouts should align to clear blocks and grid logic
- **anchor placement** — the strongest objects should occupy stable, noticeable positions instead of floating ambiguously
- **scan patterns** — dense or sequential reading often wants F-pattern logic, while lighter, action-led pages often benefit from Z-pattern logic
- **Fitts's Law** — important targets should be easy to notice and easy to hit

Those do not need to appear as abstract lecture notes in the final principle set.

They should be translated into product-facing defaults the team can actually use.

For example:

- instead of `Use proximity`, write `Keep more space around groups than inside them so users can see structure at a glance.`
- instead of `Use emphasis`, write `Every screen should make the primary action or primary information obvious within a glance.`
- instead of `Use modularity`, write `Align repeated content to a stable grid so related blocks feel deliberate instead of improvised.`

## A practical quality bar for principles

Ask:

- Would this help resolve a real product disagreement?
- Does it point to a concrete tradeoff?
- Does it reflect the product’s values rather than generic design virtue?
- Could a new teammate apply it without a long explanation?

If the answer is no, sharpen it.

## Dieter Rams is useful because the principles are humble and usable

One reason Rams-style principles remain useful is that they are practical rather than grandiose.

They focus on qualities like:

- usefulness
- clarity
- honesty
- restraint
- thoroughness
- longevity

The lesson is not that every product should imitate Braun. The lesson is that principles work best when they are plain enough to guide real work.

## How to write principles for a product team

Start from actual product tensions, not from aspiration wallpaper.

### 1. Look at recurring decisions

Write principles around the tradeoffs the team actually faces, such as:

- speed vs certainty
- density vs readability
- flexibility vs simplicity
- interruption vs continuity
- novelty vs familiarity
- promotion vs trust

### 2. Ground them in the product’s job

Ask:

- What must this product help people do well?
- What kind of mistakes are most costly?
- What experience qualities matter most here: calm, speed, clarity, trust, precision?
- What kind of page or workflow is this: dense and sequential, or lightweight and action-led?

Those answers change which visual and interaction principles deserve the most weight.

### 3. Derive a small set

Usually **3–7** principles is enough.

Fewer than 3 often lacks coverage. More than 7 often becomes a poster, not a tool.

### 4. Write them as defaults, not absolutes

Prefer:

- “Default to non-blocking overlays for short sub-tasks.”
- “Use modals to slow people down only when the interruption adds value.”

Over:

- “Never use modals.”

### 5. Add anti-principles when helpful

An anti-principle is a thing the team explicitly does **not** want to normalize.

Examples:

- We do not hide critical information behind marketing tone.
- We do not make users learn internal taxonomy just to find content.
- We do not escalate routine updates into high-severity interruptions.

## Practical principle families teams often need

When principles feel too abstract, group them by the kind of product tension they need to settle.

Common families:

- **structure and grouping** — proximity, modularity, alignment, logical block separation
- **priority and scanning** — emphasis, anchor placement, F-pattern vs Z-pattern decisions, CTA hierarchy
- **interaction effort** — Fitts's Law, target sizing, control placement, friction around key actions
- **consistency and system quality** — repeated spacing, typography, button rules, media treatment, token discipline
- **trust and persuasion** — honest claims, proof near the claim, specific USP framing, restrained CTA pressure

This helps teams avoid writing seven principles that all secretly mean `be clearer somehow`.

## Self-check prompts for principle quality

Before keeping a principle, ask:

- does it help us decide where emphasis belongs?
- does it clarify how related elements should group or separate?
- does it improve how users scan, compare, or act?
- does it prevent a recurring quality failure such as weak hierarchy, random spacing, inconsistent controls, or vague promises?
- does it translate into something reviewable in a mock, prototype, or shipped UI?

## Useful templates

### Principle template

`[Verb or stance] so that [user/product outcome].`

Examples:

- Preserve context so repeated work stays fast.
- Explain consequences so risky actions feel controlled.
- Prefer human language so content stays findable.

### Principle + boundary template

`Do [preferred behavior]. Do not [common failure mode].`

### Tradeoff template

`When forced to choose, favor [A] over [B].`

Examples:

- Favor clarity over decorative intensity.
- Favor workflow continuity over dramatic interruption.
- Favor understandable vocabulary over internal precision.

## What good principles often cover

Depending on the product, principles often need to guide:

- hierarchy and readability
- interaction familiarity
- error prevention and recovery
- honesty in copy and visual emphasis
- system flexibility vs user effort
- search, navigation, and findability
- interruption level and notification behavior
- long-term maintainability rather than short-term flash

## Anti-patterns

Avoid principles that are:

- so generic they apply to every company on earth
- too numerous to remember
- too abstract to resolve real decisions
- disconnected from real user or business risk
- inspirational but non-operational

If a principle cannot influence a design review, a roadmap tradeoff, or a product critique, it is probably not strong enough yet.