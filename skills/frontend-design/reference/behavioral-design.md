# Behavioral Design

Use this reference when the UI needs to shape attention, completion, decision-making, or return behavior — especially for onboarding, pricing and packaging, setup flows, upgrade prompts, checklists, profile completion, reminders, and other behavior-sensitive surfaces.

This is not permission to manipulate people. The goal is to reduce friction, clarify value, and help users make better decisions with less mental strain.

## Ask Only the Missing Questions

Before changing the surface, clarify:

- what behavior are we trying to encourage?
- why is that behavior genuinely useful to the user, not just to the business?
- what creates abandonment now: overload, uncertainty, weak motivation, unclear next steps, or poor trust?
- is the task one-time, repeated, habit-forming, or high-stakes?
- where would a stronger prompt help, and where would it become pushy or manipulative?

If the only clear goal is “make people click more,” the design problem is probably underspecified.

## Core Principles

### Reduce overload before adding persuasion

Users do not make better decisions when every option, explanation, and edge case appears at once. They stall, guess, or leave.

Use progressive disclosure to:

- show the next necessary step first
- defer advanced controls until intent is clear
- keep secondary explanation nearby but not dominant
- break large forms or setup flows into smaller meaningful chunks

This is especially valuable in onboarding, pricing comparison, setup, and dense admin flows.

### Prime the journey before asking effort

Priming is what you tell users before they start or before a higher-effort step begins.

Good priming reduces uncertainty by making the path legible:

- what is about to happen
- how long it will take
- why it is worth doing
- what users will get at the end

Useful examples:

- honest time estimates for onboarding or setup
- previewing the benefits of profile completion before asking for more fields
- telling users what data or permissions a flow will need before they hit the request wall

Users usually tolerate effort better when the purpose and payoff are clear.

### Respect the attention budget

Every prompt, modal, tour, banner, permission request, and upgrade nag spends attention.

Good behavioral design avoids stacking those costs early or all at once.

Prefer asks that are:

- contextual
- delayed until they are relevant
- earned through prior value
- easy to dismiss or postpone
- respectful of a prior `Not now`

Good examples:

- asking for notifications only when a user has a concrete alert-worthy event
- prompting for a review after a successful outcome
- surfacing an upgrade ask at the moment a paid feature boundary is reached
- teaching features in-context instead of forcing a 15-step tour up front

Weak examples:

- newsletter popups on first paint
- permission prompts before the user understands the benefit
- repeated upgrade banners immediately after dismissal
- multi-layer modal stacks that make the interface feel like an interrogation

### Frame each step truthfully in the moment

Framing is how the current request is explained.

Weak framing asks for work without context:

- “Continue”
- “Enter your email”
- “Complete setup”

Stronger framing ties the step to value:

- what this step unlocks
- why the information matters
- what good outcome it supports

The principle is simple: do not ask users to donate effort to a mystery.

### Make progress visible when completion matters

People are more likely to finish when they can see that progress exists and the end is reachable.

Useful completion cues include:

- progress bars
- step counters
- setup checklists
- profile-completion summaries
- “2 steps left” or similar honest progress language

Use these especially when:

- the task spans multiple screens
- setup has several required steps
- returning later is common
- partial completion still has value, but finishing is better

Do not fake precision. If progress is fuzzy, use a fuzzy indicator instead of pretending the system knows the exact percentage.

### Offload memory instead of testing recall

Short-term memory is a bad storage layer.

Support decision-making with:

- inline summaries of previous choices
- visible defaults and recommendations
- review screens before high-impact actions
- side-by-side comparison when users must evaluate options
- structured pros/cons, feature groups, or recommended paths

If users must remember something from another screen just to continue, the interface is already doing too little.

### Use visibility and feedback generously

Users should be able to tell:

- what can be interacted with
- what just happened
- whether the action worked
- what is expected next

Strong visibility and feedback reduce hesitation and error.

Examples:

- obvious primary actions
- responsive hover / focus / pressed states
- save, success, retry, and loading feedback
- confirmation summaries after meaningful progress

### Use affordances and constraints honestly

Affordances should signal what the control is for. Constraints should reduce invalid or risky behavior without becoming hostile.

Prefer:

- controls that look interactive when they are interactive
- labels and helper text that explain limits before error
- input structure that guides users toward valid formats
- disabled or hidden behavior that matches the real reason the option is unavailable

Avoid false affordances and invisible constraints that make the user learn the rules only by failing.

### Match conceptual models when possible

Interfaces become easier when the system behaves the way users expect the domain to behave.

Good questions:

- what do users think this object or step means?
- what would they expect to happen next?
- are we forcing them to learn our internal structure instead of using a familiar model?

This matters in navigation, forms, pricing tiers, permissions, setup sequences, and dashboard organization.

## Choice Architecture and Pricing

How options are positioned changes what feels reasonable.

Useful patterns include:

- presenting a clear middle recommendation when it is genuinely the best fit for most buyers
- ordering options from simpler to more advanced so the progression feels legible
- framing each tier by audience or use case, not just by arbitrary names

### The decoy effect, used responsibly

Contextual comparison can reduce decision friction, but a tier should not exist only as a sacrificial prop.

Healthy use:

- every option could plausibly fit someone
- the middle tier is recommended because it really is the best balance for many users
- tradeoffs stay visible and honest

Unhealthy use:

- deliberately sabotaging one option to herd users into another
- hiding meaningful downsides behind weak contrast or tiny footnotes

Use choice architecture to clarify, not to corner people.

## Onboarding, Checklists, and Completion Loops

For setup and onboarding, the behavior problem is usually not that the journey is too long. It is that users cannot tell why the next step matters.

Good defaults:

- explain the purpose of the flow before it starts
- show only the information needed for the current step
- tell users why you are asking for each meaningful piece of information
- make the next step obvious
- show progress honestly
- end each step with reassurance and a clear next move

If a flow asks for many fields, permissions, or choices, consider:

- sequencing it into steps
- adding a short “what you’ll get” introduction
- offering save-and-return when commitment is longer

## Triggers, Rewards, and Return Behavior

Habit loops are often described as:

1. trigger
2. action
3. reward
4. investment or return path

This can be useful, but it needs guardrails.

### Good uses

- reminders that help users finish something they already value
- notifications that surface genuinely time-sensitive or human-relevant events
- progress or completion signals that reinforce meaningful achievement
- surprise only when it delights without destabilizing trust

### Prompt cadence matters as much as prompt wording

Even a legitimate ask becomes hostile when repeated too often.

Good defaults:

- one interruptive ask at a time
- cooldowns after dismissal
- quieter fallback channels for lower-priority reminders
- session-level restraint so users can get back to their actual task

When multiple teams each add `just one more prompt`, the product teaches users to avoid engaging at all.

### Be careful with variable rewards

Variable rewards can increase engagement, but they also drift quickly into slot-machine thinking.

Use them sparingly and ethically:

- reward useful outcomes, not compulsive checking
- avoid fake scarcity, false urgency, or engineered anxiety
- give users control over notification frequency and interruption level
- do not hide the real cost of coming back again and again

If the design depends on uncertainty to keep users from leaving, the product may be borrowing addiction tactics instead of creating real value.

## Practical Checklist

Before calling a behavior-sensitive surface done, check:

- the next step is obvious
- the user understands why this step exists
- visible information matches the current decision, not every possible later decision
- progress is shown honestly when completion matters
- the interface reduces memory burden with summaries, defaults, or comparison structure
- controls signal what they do and respond clearly when used
- constraints guide before they punish
- pricing or recommendation patterns clarify instead of manipulate
- reminders and rewards support user value without becoming coercive

Good behavioral design makes progress, choice, and feedback feel easier — not sneakier.