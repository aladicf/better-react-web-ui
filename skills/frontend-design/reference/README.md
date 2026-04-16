# Frontend Design Reference Index

This folder is the shared doctrine layer for `better-web-ui`.

Use it as a map of the map when you know you need guidance but do not yet know which specific reference file to open.

## Start here

If you only open a few files first, make them these:

- [ux strategy](./ux-strategy.md) — connect UX direction to user segments, priorities, feasibility, and risk
- [audience-sensitive design](./audience-sensitive-design.md) — adapt UX to specific age groups, life stages, gatekeepers, trust models, and accessibility expectations
- [design process](./design-process.md) — move from vague request to clearer direction
- [design principles](./design-principles.md) — turn values and tradeoffs into usable team defaults
- [hierarchy checklist](./hierarchy-checklist.md) — sanity check priority, grouping, and grayscale clarity
- [interaction design](./interaction-design.md) — patterns, focus, loading, overlays, and guardrails
- [error recovery](./error-recovery.md) — validation, summaries, recoverability, and fixable error behavior
- [authentication and account recovery](./authentication-and-account-recovery.md) — sign-in, MFA, session expiry, password UX, and recovery-stack guidance
- [reviews and ratings](./reviews-and-ratings.md) — product-review trust, rating summaries, and social proof that actually helps decisions
- [search and findability](./search-and-findability.md) — site search, autosuggest, zero-results recovery, and intent-aware findability
- [status communication](./status-communication.md) — notifications, validations, badges, inboxes, and attention management
- [legacy modernization](./legacy-modernization.md) — legacy-system UX upgrades, migration strategy, stakeholder trust, and hybrid old/new seams
- [cognitive load](./cognitive-load.md) — simplify decisions, memory burden, and complexity exposure
- [ux writing](./ux-writing.md) — interface microcopy, labels, errors, and confirmations
- [typography](./typography.md) — type scale, hierarchy, pairing, and readability
- [color and contrast](./color-and-contrast.md) — palette structure, contrast, and theme discipline

## Structure and layout

- [spatial design](./spatial-design.md)
- [spacing system](./spacing-system.md)
- [hierarchy checklist](./hierarchy-checklist.md)
- [surface separation](./surface-separation.md)
- [elevation system](./elevation-system.md)

Use these when the UI feels crowded, flat, ambiguously grouped, or visually monotonous.

## Interaction and product behavior

- [ux strategy](./ux-strategy.md)
- [audience-sensitive design](./audience-sensitive-design.md)
- [interaction design](./interaction-design.md)
- [error recovery](./error-recovery.md)
- [authentication and account recovery](./authentication-and-account-recovery.md)
- [reviews and ratings](./reviews-and-ratings.md)
- [search and findability](./search-and-findability.md)
- [status communication](./status-communication.md)
- [legacy modernization](./legacy-modernization.md)
- [cognitive load](./cognitive-load.md)
- [action hierarchy](./action-hierarchy.md)
- [empty-state patterns](./empty-state-patterns.md)
- [responsive design](./responsive-design.md)

Use these when the problem is not just styling, but how the product behaves, guides, or protects the user.

## Typography and writing

- [design principles](./design-principles.md)
- [typography](./typography.md)
- [text hierarchy and readability](./text-hierarchy-and-readability.md)
- [ux writing](./ux-writing.md)
- [error recovery](./error-recovery.md)
- [marketing copywriting](./marketing-copywriting.md)
- [copy editing sweeps](./copy-editing-sweeps.md)

Use these when the interface reads poorly, sounds unclear, or needs stronger conversion-aware messaging.

## Color, tone, and visual personality

- [color and contrast](./color-and-contrast.md)
- [color ramp workflow](./color-ramp-workflow.md)
- [semantic color](./semantic-color.md)
- [personality levers](./personality-levers.md)
- [finishing touches](./finishing-touches.md)
- [ai slop detection](./ai-slop-detection.md)

Use these when the UI needs stronger mood, more systematic ramps, or protection from generic AI aesthetics.

## Motion and implementation

- [motion design](./motion-design.md)
- [native motion with CSS and Tailwind](./native-motion-with-css-and-tailwind.md)
- [framework official docs](./framework-official-docs.md)
- [react shadcn accelerators](./react-shadcn-accelerators.md)

For the deeper motion doctrine library, also see the [animate reference index](../../animate/reference/README.md).

## Components and systems

- [component anatomy](./component-anatomy.md)
- [component and block strategy](./component-and-block-strategy.md)
- [design-system alignment](./design-system-alignment.md)
- [image treatment](./image-treatment.md)
- [text-layout prediction](./text-layout-prediction.md)

Use these when the work involves reusable primitives, design-system reuse, screenshots/media, or repeated layout logic.

## Authentication, pricing, and monetization surfaces

- [authentication and account recovery](./authentication-and-account-recovery.md)
- [pricing and packaging](./pricing-and-packaging.md)
- [paywalls and upgrade flows](./paywalls-and-upgrade-flows.md)
- [reviews and ratings](./reviews-and-ratings.md)

Use these when the task touches account access, plan comparison, billing clarity, feature gates, or upgrade prompts.

## How to use this folder well

- start with the smallest reference that answers the real problem
- use the grouped sections above when the filename is not obvious
- prefer shared doctrine here over duplicating the same guidance inside many skills
- if a task is clearly framework-specific, open [framework official docs](./framework-official-docs.md) before making architecture calls

This folder exists so individual skills can stay focused while still sharing one coherent design brain.
