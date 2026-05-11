# Conversion Experimentation

Use this reference when improving React and Tailwind marketing pages, onboarding flows, pricing surfaces, demo requests, forms, or feature pages where the goal is to increase a measurable action without guessing.

Experiments are not decoration swaps. A useful experiment changes one meaningful cause of user behavior and measures whether the target behavior improves.

## Start With Funnel Diagnosis

Before proposing UI changes, identify:

- target action: signup, trial start, demo request, purchase, activation, invite, setup completion, upgrade, or contact
- current baseline and goal
- traffic source and visitor intent
- device split and viewport constraints
- largest drop-off point
- what users already know before reaching this surface
- what happens immediately after the conversion action

If there is no baseline, instrument first. Shipping random variants without measurement is cargo-cult CRO.

## Prioritize by Constraint

Find the current bottleneck before optimizing small details.

| Bottleneck | Better experiment direction |
| --- | --- |
| Visitors do not understand the offer | headline, subheadline, hero visual, product screenshot |
| Visitors do not trust the claim | proof placement, testimonial specificity, case study, security/compliance cue |
| Visitors want it but hesitate | risk reversal, FAQ, pricing clarity, next-step copy |
| Visitors start but do not finish | form field count, validation, mobile layout, step sequencing |
| Users sign up but do not activate | onboarding first win, setup order, dummy data, templates |
| Users cannot choose | plan recommendation, comparison simplification, guided selector |
| Users bounce on mobile | responsive layout, tap targets, load time, copy density |

Do not test button color while the value proposition is vague. That is low standards dressed as optimization.

## Experiment Anatomy

Write experiments as:

```text
Because {observed problem}, changing {specific UI/copy/flow element}
for {audience or traffic segment} should improve {metric}
by {expected mechanism}.
```

Example:

```text
Because paid-search visitors arrive with demo intent, replacing the generic hero CTA
with "Book a 15-minute demo" should improve demo-start clicks by making the next step
match the ad promise.
```

Each experiment needs:

- hypothesis
- primary metric
- guardrail metric
- target segment
- variant description
- implementation scope
- decision rule

Guardrails matter. A variant that raises clicks but lowers qualified demos is not a win.

## Page Experiments

### Homepage

Good tests:

- specific vs abstract headline
- product screenshot, interactive demo, short video, or real workflow visual
- proof bar placement near hero vs lower page
- one primary CTA vs primary plus secondary research CTA
- navigation CTA visibility
- section order based on visitor intent

React/Tailwind checks:

- hero variants must keep first viewport readable at mobile and desktop sizes
- screenshots or videos must not create LCP regressions
- nav CTA variants must keep keyboard focus and hit targets intact

### Landing page

Good tests:

- message match with ad or email promise
- navigation removed vs reduced vs retained
- short page vs complete argument
- form embedded on page vs click-through CTA
- proof density and placement
- urgency or scarcity only when genuinely true

React/Tailwind checks:

- do not hide exits or required legal links to chase conversion
- keep sticky CTA from covering form fields, consent text, or footer actions
- verify narrow-layout section order, not only desktop composition

### Pricing page

Good tests:

- monthly/annual toggle framing
- recommended plan explanation
- 2, 3, or 4 visible tiers
- guided plan selector vs comparison table
- ROI calculator or usage estimator
- FAQ placement near price objections
- value proof near plan CTA

React/Tailwind checks:

- pricing cards must stay comparable across breakpoints
- plan recommendation badges must not be color-only
- hidden feature rows on mobile need accessible disclosure states

### Feature page

Good tests:

- static screenshot vs focused product demo
- feature list vs before/after workflow
- use-case examples by role
- feature-specific case study
- CTA to try feature vs CTA to see product tour
- related integrations or compatibility section

React/Tailwind checks:

- product visuals should show actual state, not abstract decoration
- repeated feature blocks should use consistent spacing and heading levels

## Onboarding Experiments

### Time-to-value

Good tests:

- quick-start path vs full setup
- dummy data vs blank empty state
- prefilled templates
- OAuth or import shortcuts
- first quick win before profile completion
- setup step count and ordering

### Guidance

Good tests:

- checklist vs wizard
- contextual hints vs tour
- user-triggered tour vs automatic tour
- shorter tour length
- sticky next-step CTA during setup
- help offer at stuck points

### Personalization

Good tests:

- role-based onboarding paths
- goal-selection step
- role-specific dashboard defaults
- industry-specific examples
- template recommendations from onboarding answers

### Stalled users

Good tests:

- welcome-back resume state
- simplified return path
- reminder timing after incomplete setup
- human outreach for high-value accounts
- "what is blocking you?" feedback prompt

React/Tailwind checks:

- persist onboarding progress across reloads and route transitions
- distinguish skipped, completed, dismissed, and not-yet-seen states
- respect reduced motion for celebration and progress effects
- avoid modal stacks that block the real product before value appears

## Behavioral Models for Experiment Ideas

Use these as diagnosis tools, not tricks.

| Model | UI question | Ethical React/Tailwind application |
| --- | --- | --- |
| Activation energy | What makes starting feel hard? | prefill, templates, shorter first step, visible quick start |
| BJ Fogg model | Is motivation, ability, or prompt missing? | clearer benefit, easier action, better-timed CTA |
| EAST | Is the action easy, attractive, social, and timely? | reduce fields, show proof, place CTA at decision moment |
| Goal-gradient effect | Can users see progress toward value? | checklist, step counter, progress summary |
| Hick's law | Are there too many choices? | reduce CTAs, recommend a path, group options |
| Loss aversion | What risk does the user fear? | trial terms, undo, guarantee, data safety copy |
| Status quo bias | Why does switching feel unsafe? | import path, migration proof, compatibility details |
| Social proof | What makes this feel trusted? | relevant logos, specific testimonials, usage stats |
| Zeigarnik effect | Is there a useful unfinished loop? | resume setup, incomplete checklist, draft recovery |

If the model makes the interface less honest, do not use it.

## Experiment Backlog Format

Use this structure:

| Field | What to write |
| --- | --- |
| Problem | Observed issue or funnel drop-off |
| Hypothesis | Cause and expected behavior change |
| Variant | Concrete UI/copy/flow change |
| Metric | Primary success metric |
| Guardrail | Quality metric that must not degrade |
| Segment | Audience, traffic source, device, or plan |
| Effort | Small, medium, large |
| Risk | Low, medium, high |

Prioritize high-impact, low-risk tests first, but reserve some capacity for deeper structural tests when the page or onboarding flow is fundamentally weak.

## Metrics

Page metrics:

- conversion rate by traffic source
- CTA click-through
- scroll depth to key sections
- form start and completion
- pricing plan selection
- qualified lead rate
- mobile vs desktop conversion

Onboarding metrics:

- activation rate
- time to activation
- step completion
- setup drop-off
- skip and resume rate
- Day 1, Day 7, and Day 30 retention
- feature adoption after guidance
- support requests during setup

Quality guardrails:

- rage clicks or repeated validation errors
- bounce rate after variant exposure
- refund, cancellation, or downgrade signals
- accessibility regressions
- performance regressions, especially LCP and INP
- lead quality, not only lead volume

## Anti-Patterns

Avoid:

- testing visual trivia before fixing message clarity
- calling a redesign an A/B test when many causes changed at once
- measuring only clicks when downstream quality matters
- using fake urgency, fake scarcity, or manipulative defaults
- running experiments that break accessibility or mobile usability
- copying another company test without matching audience, traffic, and product model
- declaring wins without enough data or a defined decision rule

Good CRO makes the product easier to understand, trust, and start using. Bad CRO makes dashboards look better while users get worse experiences.
