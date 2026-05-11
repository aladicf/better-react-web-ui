# Copy Editing Sweeps

Use this reference when improving existing product or marketing copy. The goal is not to rewrite everything from scratch every time. The goal is to make the current message clearer, stronger, more trustworthy, and more actionable through disciplined passes.

If the project already includes a dedicated product-marketing context document, load it before editing so you preserve real positioning and voice instead of guessing.

## Core Philosophy

- editing is not rewriting
- one focused pass beats one vague `improve it` sweep
- every change should have a reason
- preserve voice while improving clarity, trust, and conversion

## The Seven Sweeps

Run these in order. After each sweep, do a quick check that you did not damage an earlier one.

### 1. Clarity

Focus: can a cold reader understand this immediately?

Check for:

- confusing sentences
- unclear pronouns
- missing context
- jargon or assumed knowledge
- buried main points
- multiple ideas fighting in one sentence or section

After this sweep, confirm:

- **Rule of One**: one main idea per section or screen
- **You Rule**: the copy speaks to the reader, not just about the product

### 2. Voice and tone

Focus: does the copy sound consistently like the same product and team?

Check for:

- random formality shifts
- personality drift
- mood whiplash between sections
- technical density that changes without reason

Read aloud when possible. Awkward transitions usually reveal themselves when heard.

### 3. So what

Focus: every claim should answer `why should I care?`

Fix by bridging feature → outcome with moves like:

- `so you can...`
- `which means...`
- `so your team can...`

### 4. Prove it

Focus: support claims with evidence or soften them honestly.

Good proof types:

- testimonials
- case studies
- metrics
- ratings
- benchmarks
- credible references

Flag language like:

- `best`
- `leading`
- `trusted by thousands`
- `fastest`

If the proof is not there, tone the claim down.

### 5. Specificity

Focus: replace vague language with concrete language.

Upgrade with:

- real examples
- timeframes
- numbers when true
- named use cases

If a sentence cannot be made specific, often it should be shorter.

### 6. Heightened emotion, authentically

Focus: help the reader feel the pain and the relief, not just understand it intellectually.

Add:

- relatable before moments
- grounded frustration
- believable aspiration

Avoid:

- fearmongering
- melodrama
- manipulative urgency

### 7. Zero risk

Focus: remove blockers to action at the decision point.

Clarify:

- what happens next
- how long it takes
- privacy, reliability, or support concerns
- whether setup or switching is safe and reversible

Then do one final quick loop across the earlier sweeps.

## Quick-Pass Checks

When a full seven-sweep edit is overkill, run these faster checks.

Use quick passes for small interface edits, old landing-page sections, settings copy, release notes, and component labels. Do not use quick passes to pretend that weak positioning is only a wording problem.

### Word-level cuts

Usually remove:

- `very`
- `really`
- `extremely`
- `incredibly`
- `just`
- `actually`
- `basically`

Usually replace:

- `in order to` → `to`
- `things` → something concrete
- `stuff` → something concrete

### Plain-English replacements

Prefer words users already understand. This matters more inside React components where labels, alerts, and cards have limited space.

| Weak or stiff | Stronger |
| --- | --- |
| accelerate | speed up |
| additional | more |
| approximately | about |
| commence | start |
| concerning | about |
| currently | now, or delete it |
| demonstrate | show |
| discontinue | stop |
| due to the fact that | because |
| enable | allow |
| ensure | make sure |
| facilitate | help |
| following | after |
| frequently | often |
| in order to | to |
| in relation to | about |
| in the event of | if |
| numerous | many |
| obtain | get |
| prior to | before |
| purchase | buy |
| regarding | about |
| retain | keep |
| select | choose |
| terminate | end |
| utilize | use |
| implement | set up |
| leverage | use |
| innovative | new |
| robust | strong |
| seamless | smooth |
| cutting-edge | modern |

Delete phrases that add no meaning:

- `a total of`
- `at this moment in time`
- `basically`
- `it should be understood`
- `of course`
- `the fact of the matter is`
- `to all intents and purposes`

### Sentence checks

- one idea per sentence when possible
- front-load the important part
- avoid more than 3 conjunctions in a sentence unless the rhythm truly works
- keep most narrow-layout-facing sentences short

### Paragraph checks

- one topic per paragraph
- strong opening sentence
- enough white space to scan

### Component-fit checks

Copy edits are not done until the edited text still fits the UI.

Check React/Tailwind surfaces for:

- button labels that stay readable at mobile widths
- card titles that survive real product names, plan names, and translated strings
- alerts that do not wrap into awkward walls
- table headers that remain scannable in dense grids
- empty states that keep one primary action instead of becoming mini landing pages
- tooltip text that stays short enough for hover, focus, and touch fallback patterns
- CTA copy that matches loading, success, and error states

Tailwind implementation moves:

- use `min-w-0`, `truncate`, `line-clamp-*`, or wrapping deliberately instead of hoping copy stays short
- avoid fixed-height cards when marketing text can grow
- test edited copy with realistic long names and narrow containers
- keep icon-only actions backed by `aria-label` text that names the action and object

If stronger copy breaks the component, fix the component. Do not weaken important meaning just to satisfy brittle layout.

## Editing Checklist

Before editing:

- goal and desired action are known
- audience is understood
- offer and constraints are clear enough
- one read-through happened before touching the copy

After editing:

- the copy is immediately understandable
- jargon is explained or removed
- voice is consistent
- features connect to outcomes
- proof is near claims where possible
- vague claims are made concrete or softened
- blockers to action are addressed
- the core message still sounds like the product, not like a random rewrite bot

## Common Software Copy Problems

### Wall of features

Fix by translating each feature into an outcome with a concrete example.

### Platform fog

Fix by naming who it is for, what it replaces, and what gets easier.

### Generic differentiation

Fix by choosing 2-3 differentiators and proving them.

### Missing time-to-value

Fix by showing the first win and how fast it happens.

### No trust cues

Fix by adding proof, privacy clarity, reliability cues, and support visibility.

### Buried CTA

Fix by making the next step obvious early and repeating it after major arguments when appropriate.

## Content Refresh Pass

Use this when editing existing published product or marketing surfaces rather than new copy.

Refresh triggers:

- traffic, activation, conversion, or search performance has declined
- product names, pricing, features, screenshots, or integrations changed
- stats, examples, or customer proof are more than 12 months old
- competitors changed their positioning or comparison claims
- brand voice has drifted since the content shipped

Refresh sequence:

1. **Freshness**: update dates, product screenshots, feature names, pricing, plan names, and examples.
2. **Accuracy**: verify claims, links, integrations, supported frameworks, and billing or legal language.
3. **Voice**: align older copy with current brand and product maturity.
4. **Search intent**: check whether the page still answers the query or job that brings users there.
5. **Proof**: replace stale proof with newer testimonials, numbers, logos, case studies, or screenshots.
6. **Structure**: add comparison tables, FAQs, scannable sections, or tighter visual grouping when the current page is hard to scan.

Refresh vs rewrite:

| Signal | Action |
| --- | --- |
| Core message still works, details are stale | Refresh |
| Product changed but audience stayed same | Refresh plus voice and proof pass |
| Audience, offer, or page job changed | Rewrite |
| Layout no longer supports current search intent | Rewrite structure, then edit copy |
| Only stats, links, or screenshots are stale | Light refresh |

Cadence defaults:

- pricing and product pages: quarterly or whenever features/pricing change
- comparison and alternatives pages: every 3-6 months
- high-traffic guides: every 6 months
- evergreen docs and low-traffic pages: annually or when data shows decay

React/Tailwind refresh checks:

- update screenshots or product imagery together with the copy so page evidence does not contradict current UI
- check responsive wrapping after replacing old short claims with newer specific proof
- keep `Last updated` or freshness metadata near content where currency matters
- use stable data sources for numbers where possible instead of hardcoding stale claims across components

## Expert Panel Gate

Use this after the seven sweeps for high-stakes copy: homepage hero, pricing page, launch page, checkout, upgrade prompt, cancellation flow, enterprise contact page, marketplace listing, or product onboarding.

Pick 3-5 lenses, score each 1-10, then fix the lowest score first.

Useful lenses:

- conversion copywriter: benefit hierarchy, CTA strength, objection handling
- UX writer: scannability, component fit, state clarity, cognitive load
- target customer: relevance, trust, motivation, objections
- brand strategist: voice, positioning, category fit
- accessibility reviewer: plain language, readable structure, keyboard and screen reader text
- SEO/content reviewer: search intent, freshness, headings, useful answers

Scoring:

| Score | Meaning |
| --- | --- |
| 9-10 | publish-ready |
| 7-8 | strong, minor edits |
| 5-6 | functional but weak |
| 3-4 | major gaps |
| 1-2 | wrong direction |

Do not treat persona scoring as theater. If every imaginary expert loves everything, the review is useless.

## Collaborative Editing Pattern

When working iteratively:

1. run one sweep
2. show findings with specific examples
3. propose concrete edits, not generic criticism
4. return the revised copy in the same structure
5. re-check earlier sweeps after changes

Editing should feel like sharpening the message, not replacing it with a different personality.
