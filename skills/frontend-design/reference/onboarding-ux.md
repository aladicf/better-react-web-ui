# Onboarding UX

Use this reference when the work involves first-run setup, activation, aha-moment design, setup wizards, tours, checklists, contextual onboarding, progressive permission requests, or deciding how first-time and returning users should experience the product differently.

Onboarding is not a welcome screen.

It is the product’s first argument for why the user should keep going.

Good onboarding shortens the distance between:

- first arrival
- first understanding
- first meaningful success
- confident repeat use

## Start with the activation question

Before designing an onboarding surface, ask:

- what is the earliest meaningful value this product can deliver?
- what do users need to understand before they can reach it safely?
- what work is truly required now, and what can wait until later?
- is the user exploring voluntarily, trying to finish a work task, or already under pressure?
- what happens when the user leaves halfway through and comes back later?

The right onboarding system is shaped by time-to-value, not by how many tips or tour steps the team can write.

## Design the sequence around value, not ceremony

A strong onboarding sequence usually moves through four layers:

1. **orientation** — what this product or area is for
2. **minimum setup** — the least information or configuration needed to begin
3. **first success** — a real useful outcome, not a fake tutorial trophy
4. **expansion** — deeper features taught only after the user has enough context to care

If the flow spends too much effort on explanation before users touch anything useful, it is front-loading ceremony and delaying trust.

## First-run sequencing should get narrower before it gets broader

Early onboarding is usually strongest when it:

- explains the immediate payoff
- asks only for what is needed to start
- reduces decision count at each step
- keeps the next move obvious
- saves advanced branching for later discovery

Good defaults:

- start with one clear path for the common case
- use smart defaults where the user can still review and change them
- defer advanced settings until after users understand the base workflow
- preserve progress if the flow is interrupted

Do not treat the first run like a full product tour, data collection form, and preference center all at once.

## Time to value matters more than completion theater

A 100% onboarding completion rate is not the goal if users still fail to get value.

Optimize for:

- how quickly users do something real
- how confidently they understand the next step
- whether they can continue without hand-holding

Good activation moments are concrete:

- first project created
- first invite sent
- first dashboard configured
- first order placed
- first report shared

Weak activation moments are often internal milestones the user does not care about, like `finished wizard` or `closed all tips`.

## Choose the onboarding pattern by job

Different onboarding patterns solve different problems.

| Pattern | Best for | Strong when | Weak when |
| --- | --- | --- | --- |
| **Setup wizard** | required structured setup before real use | the system genuinely needs ordered inputs or choices | the flow is mostly teaching rather than configuring |
| **Checklist** | multi-step activation with clear milestones | users benefit from visible progress and can complete steps over time | the product needs too much explanation before any step feels meaningful |
| **Contextual onboarding** | learning in the product while doing real work | features make sense at point of use | users truly need an initial orientation before acting |
| **Guided tour** | broad unfamiliar interfaces with hidden affordances | the UI is complex and a short tour clarifies the map | it tries to explain every feature or blocks real use |
| **Interactive tutorial / sandbox** | high-complexity or high-risk tools | users need hands-on practice before working live | the normal product is already simple enough to learn by doing |

Good onboarding often combines patterns, but one should lead.

If the product needs a wizard, a tour, a checklist, three permission prompts, and a giant modal stack just to get started, the interface may be asking for too much too early.

## Tours, checklists, and contextual guidance should not fight each other

### Tours

Use tours to explain the map of an unfamiliar interface, not to narrate every control.

Good defaults:

- keep them short
- focus on workflow, not tool inventory
- let users skip, replay, and continue the real task
- avoid spotlighting controls users cannot yet meaningfully use

### Checklists

Use checklists when activation has several distinct tasks that can be completed over time.

Good defaults:

- keep items outcome-oriented instead of feature-named
- make progress honest and visible
- let users return later without losing the path
- mark meaningful completion, not busywork

### Contextual onboarding

Use contextual hints, empty states, nudges, and local guidance when the best moment to teach is inside the actual task.

Good defaults:

- teach just before the action matters
- attach guidance to the relevant object or control
- dismiss or retire the hint once the user has clearly learned it
- avoid repeating the same explanation across multiple sessions without reason

For point-of-use empty states and recovery surfaces, also use [empty-state patterns](./empty-state-patterns.md).

## Progressive permission requests should arrive at the moment of need

Users do not want to grant access to a mystery.

Good permission requests explain:

- what is being requested
- why it is needed now
- what the user gets in return
- what still works if they decline, when applicable

Good defaults:

- request permissions just in time, not all at once at the start
- lead with the benefit, not the API capability
- keep the decline or `Not now` path clear when the product can still function partially
- make it easy to retry the request later in context

If onboarding depends on organization roles, access requests, or capability boundaries, also use [permissions and roles UX](./permissions-and-roles-ux.md).

## Setup wizards should earn each step

A setup wizard is strongest when order matters.

Use one when users truly need to:

- connect required systems
- choose foundational configuration
- confirm scope, workspace, region, or team setup
- establish defaults that affect later behavior

Good setup-wizard defaults:

- explain the purpose of the full setup before step one
- keep each step narrow and specific
- show progress honestly
- preserve data when users go back, pause, or get interrupted
- end each step with a clear next move, not a vague success haze
- prefer review summaries before high-impact settings are committed

Weak setup wizards ask for everything the business eventually wants instead of everything the product needs now.

## Returning-user behavior should not feel like first-run amnesia

Returning users should not be forced to re-prove beginner status.

Useful returning-user patterns include:

- `Continue where you left off`
- resumable checklists or setup flows
- dismissed tips staying dismissed unless context changed materially
- reminders tied to unfinished activation work instead of generic welcome messaging
- shorter re-entry surfaces that emphasize progress and the next action

Good defaults:

- distinguish never-started, partially-complete, and already-activated users
- let users revisit help intentionally instead of auto-restarting onboarding
- respect users who skipped because they already know the product

## First-time and returning users need different kinds of reassurance

First-time users often need:

- orientation
- payoff framing
- one obvious next step
- reassurance that the effort is small enough to start

Returning users often need:

- continuity
- state preservation
- quick reminders of what changed or what remains
- confidence that their past progress still counts

Do not use the same message, pattern, or intensity for both groups.

## Onboarding metrics should measure value and survivability

Useful signals include:

- time to first meaningful action
- time to first value
- completion rate for required setup
- drop-off by step or prompt
- skip rate and later recovery rate
- activation rate after first session
- return rate after partial onboarding
- feature adoption after contextual guidance

A useful onboarding flow is not only completed.

It is also resumed, survived, and understood.

## Common failure modes

Watch for:

- asking for too much information before users see value
- using tours to explain everything instead of the map
- showing checklists full of product-internal milestones instead of user outcomes
- triggering permission requests before users understand why they matter
- restarting onboarding for users who already declined, completed, or clearly learned it
- measuring wizard completion while ignoring whether users actually reached value
- ending setup with a vague `You're all set` and no next action
- using progress bars that pretend precision when the path is fuzzy

## Practical checklist

- What is the earliest real value moment for this user?
- What must happen before that moment, and what can wait?
- Is the chosen pattern a wizard, checklist, tour, or contextual hint for a real reason?
- Are permissions requested when their benefit is visible?
- Can interrupted users resume without losing context?
- Are first-time and returning-user states handled differently?
- Does the flow end with an obvious next move into the real product?
- Are metrics tracking activation and recovery, not just step completion?

## Anti-patterns

Avoid:

- full-product tours before users touch anything real
- giant setup flows that mix required configuration with optional marketing questions
- repeating beginner overlays for returning users
- permission walls with no context or fallback path
- fake completion moments that do not lead into useful work
- congratulating users for finishing onboarding when they still have no idea what to do next

Good onboarding UX makes the product feel understandable, reachable, and worth continuing — before the interface starts congratulating itself.

For decision framing and completion cues, also use [behavioral design](./behavioral-design.md).
For notification preference timing and calm reminder strategy, also use [status communication](./status-communication.md).
For sign-up, session, and identity flows inside onboarding, also use [authentication and account recovery](./authentication-and-account-recovery.md).
For performance honesty during setup and first-run waits, also use [loading feedback and perceived performance](./loading-feedback-and-perceived-performance.md).
