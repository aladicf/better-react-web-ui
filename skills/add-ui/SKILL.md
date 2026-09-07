---
name: add-ui
description: Create or redesign React and Tailwind sections, pages, flows, shells, and components. Use when the user wants new UI or a redesign. Implement one requested or selected direction directly, or generate distinct alternatives when the user asks to compare options.
metadata:
  argument-hint: "[UI artifact or redesign request]"
---

## MANDATORY PREPARATION

Users start this workflow with `/add-ui`. `add-ui` is the canonical skill name in this repository. Some hosts may expose a friendly `/add` alias, but docs, wrappers, and source files should continue to refer to the skill as `add-ui`.

Read [frontend-design](../frontend-design/SKILL.md) and follow its Context Gathering Protocol. Reuse available context and ask only about consequential gaps.

When the request is for a brand-new landing page, marketing page, or several distinct directions and the aesthetic is still open, use the approved style-selection rules in `frontend-design`'s [design directions](../frontend-design/reference/design-directions.md). Choose directions that fit the product idea and brand context instead of inventing vague vibe labels.

When working inside an existing project with an established visual system, preserve that system first and make the options feel distinct without quietly rebranding the product.

For landing-page variants, use [landing-page storytelling](../frontend-design/reference/landing-page-storytelling.md) to compare openings, navigation, evidence order, and endings within the user's structural constraints.

Also gather the smallest set of implementation details needed to generate usable code:

- React framework / runtime (React, Next.js, React Router, TanStack Start, Vite React, or Astro with React islands)
- Tailwind setup and theme token conventions
- target insertion point (new route, existing page, shared component folder, design system area)
- whether this is a brand-new artifact or a redesign of an existing one
- whether the user wants a section, page, flow, shell, or standalone component
- quality bar (quick draft, production-ready, flagship)

If the request is a redesign of an existing artifact, also identify:

- which parts must remain recognizable (content blocks, section order, interaction model, familiar affordances, brand cues)
- which parts are flexible (style, colors, copywriting, typography, media treatment, density, detail language)
- whether the user wants mostly safe evolution, a broad explore-and-compare pass, or one or two stretch directions

Use this precedence order when deciding implementation defaults:

1. detect and match the existing project's React framework, Tailwind setup, and component libraries first
2. if this is a brand-new project and the user explicitly names a supported React component library, use that
3. if this is a brand-new project and the user does not specify, use the framework defaults defined in `frontend-design`

Also consult [component library integration](./reference/component-library-integration.md) to decide whether the requested artifact should be led by primitives, reusable patterns, or block accelerators.

Ask only the missing questions. If you can infer the technical stack from the codebase, do so.

Consult these references as needed:

- [artifact taxonomy](./reference/artifact-taxonomy.md)
- [component library integration](./reference/component-library-integration.md)
- [variation quality bar](./reference/variation-quality-bar.md)
- [preview and apply patterns](./reference/preview-apply-patterns.md)
- [request mapping heuristics](./reference/request-mapping.md)
- [examples and command naming](./reference/examples.md)

Use these deterministic helper assets when they improve consistency across hosts and agents:

- [comparison table template](./assets/comparison-table-template.md)
- [component library integration checklist](./assets/component-library-integration-checklist.md)
- [variant naming scheme](./assets/variant-naming-scheme.md)
- [preview page checklist](./assets/preview-page-checklist.md)
- [apply / cleanup checklist](./assets/apply-cleanup-checklist.md)

---

Implement the requested artifact directly. When the user asks for alternatives, generate meaningfully different directions and help compare and integrate them.

This includes both **adding new UI** and **redesigning existing UI**.

When the request is to redesign an existing page, section, flow, shell, or component, default to preserving the artifact's recognizable bones unless the user explicitly asks for structural reinvention. In practice that usually means:

- keep the core information architecture, content blocks, and sequence intact when they already support the job to be done
- keep familiar interactions and affordances unless they are clearly broken or the user asks for a larger UX shift
- evolve the visual system through typography, color, copy framing, media treatment, detail language, spacing rhythm, and emphasis strategy
- make it obvious across the options what stayed constant and what changed

If one variant intentionally pushes further on structure, label it clearly as the stretch option instead of quietly bulldozing the existing page.

This skill is for requests like:

- marketing and monetization surfaces: hero, features, pricing, testimonials, FAQ, CTA, logo cloud, gallery, blog, about, contact, plan pickers, upgrade modals, paywalls
- navigation and shell: navbar, footer, dashboard shell, onboarding feed, settings, card nav
- auth and account: login, register, forgot password, reset password, verify email, two-factor auth
- commerce: product overview, product category, product list, filters, cart, checkout, reviews, order summary, gift card
- data UI: charts, widgets, data tables, forms, compare views, bento grids, timelines, dashboards

The list is illustrative, not exhaustive.

## Core Operating Rules

1. **Generate real alternatives, not recolors**
   - Variations must differ in at least two relevant dimensions from the variation quality bar. Preserve fixed structure and brand constraints.
   - Changing only palette, border radius, or icon set does **not** count as a new direction.

2. **Start from the requested job to be done**
   - A pricing section is not just cards.
   - A login screen is not just inputs.
   - A dashboard shell is not just chrome.
   - Anchor every variant in the user's primary task and the product's tone.
   - For broad new-project marketing requests, choose approved design directions that fit the company / product idea and explain the fit.

3. **Prefer source-based previews over ephemeral DOM tricks**
   - If the host supports previews, generate real components/pages/routes the user can inspect and choose from.
   - Do **not** rely on browser-extension-style DOM injection as the primary workflow. It is fragile and does not create maintainable source code.

4. **Stay opinionated**
   - `better-react-web-ui` optimizes for distinctive, high-taste React and Tailwind output.
   - Do not collapse into the safest possible generic SaaS layout.
   - Use frontend-design guidance to identify concrete quality problems. Preserve explicit brand choices.

5. **Be integration-aware**
   - Match the project's existing code conventions and folder structure.
   - If a shared UI system already exists, plug into it instead of creating random one-off primitives.
   - If repeated structure emerges across variants, extract sensible shared pieces.

6. **Honor preserve-the-essence requests**
   - If the user says to keep the essence, keep the recognizable structure, key parts, and narrative flow unless they explicitly invite a deeper overhaul.
   - Distinct directions can still be genuinely different through type, color, copy, density, proof treatment, surface styling, media direction, and action emphasis.
   - Do not mistake “give me options” for permission to discard the existing architecture.

## Choose the delivery mode

Default to direct implementation when the user requests one artifact, specifies a direction, asks to apply a selected option, or delegates the design choice. Classify the request below, then implement and verify the result in the target location. Skip alternative files, comparison tables, and preview pickers. Report the changed files and checks.

Use exploration only when the user asks for alternatives or comparison. Honor the requested count. If no count is given, use five directions. The remaining workflow describes exploration.

## Exploration workflow

### 1. Classify the request

Use the [artifact taxonomy](./reference/artifact-taxonomy.md) to determine whether the user is asking for a section, page, flow, shell, or data/content component.

Also determine whether this is:

- a net-new artifact
- a redesign of an existing artifact with structure mostly preserved
- a redesign that allows moderate restructuring
- a redesign that invites a full rethink

Then identify:

- primary user goal
- core content blocks
- critical states (loading, empty, error, success, validation, responsive layout)
- placement context (new page, inside existing page, inside dashboard, inside marketing site)
- which structural elements are fixed versus flexible
- which current qualities should remain recognizable versus which should change

### 2. Define the requested directions

Generate the requested number of candidate directions, or five when an exploration request leaves the count open.

Use the [variation quality bar](./reference/variation-quality-bar.md) to ensure the requested directions are meaningfully different rather than cosmetic recolors.

When the request says to preserve the existing structure or essence, treat the current artifact as the baseline skeleton. The directions should primarily vary through visual system and messaging decisions rather than by deleting or reordering the page without permission.

For that kind of redesign, distinct options can differ through combinations of:

- typography and font pairing
- palette and contrast strategy
- copywriting tone and headline framing
- proof placement and emphasis
- density and spacing rhythm
- imagery or illustration treatment
- surface styling, borders, depth, and detail language
- action hierarchy and CTA presentation

Each direction must have:

- **Name**: short, memorable, concept-led
- **Approved direction**: the primary structural direction and any supporting treatment when relevant
- **Design thesis**: one sentence explaining the idea
- **Why it works**: how it supports the user's goals
- **Key traits**: hierarchy, layout, density, personality, media treatment, action strategy
- **Best fit**: when this direction should be chosen over the others
- **Style cost**: the main implementation, performance, or state-management cost to watch

For redesigns of existing artifacts, also state:

- **Preserved bones**: what remains intentionally recognizable from the current artifact
- **Primary changes**: what is being pushed hardest in this direction

### 3. Build real candidate artifacts

For an approved mock or screenshot, follow [reference fidelity](../frontend-design/reference/reference-fidelity.md). For substantial page work, use the optional [page brief](../frontend-design/reference/project-context.md#record-a-page-brief-when-it-helps-continuation). A direct implementation request does not require either a mock or an extra selection round.

For each direction, generate a real artifact package.

Prefer:

- real component files
- real route/page files
- real preview shells that switch between variants
- real data mocks or placeholders when needed to make the UI legible

When redesigning an existing artifact, fork from the real current implementation when practical instead of rebuilding the whole thing from scratch. Preserve the requested structure first, then layer the design changes on top.

Use the [preview and apply patterns](./reference/preview-apply-patterns.md) to decide how to structure previews, fallback comparison formats, and final integration.

### 4. Make the variants truly comparable

For every variation, include the same practical checkpoints:

- responsive behavior
- accessibility expectations
- key interaction states
- content placeholders or example copy
- implementation notes
- any required supporting components

For redesigns, also include:

- a short note about what remained structurally consistent
- a short note about what changed visually or editorially

Do not let one option be a sketch while another is production-grade. Compare like with like.

### 5. Recommend and resolve selection

After generating the options:

1. summarize the tradeoffs in a compact table
2. recommend one option if the user's goals clearly favor it
3. ask the user to choose only if selection remains unresolved. Honor a prior choice or delegated authority to select and apply.

Your recommendation should explain **why** the chosen direction best matches:

- audience
- product tone
- information density
- conversion or usability goals
- maintainability in the current codebase

### 6. Apply the chosen direction cleanly

Once a direction is selected:

- integrate it into the requested target location
- preserve project conventions and imports
- extract repeated primitives if they are genuinely reusable
- remove obviously dead temporary scaffolding unless the user wants to keep the alternatives around
- keep preview artifacts only when they remain useful for future iteration

When a reusable pattern emerges, apply the spirit of `extract` — but do not build a bloated design system for one request.

Use the [request mapping heuristics](./reference/request-mapping.md) for artifact-specific priorities such as hero sections, pricing, paywalls, auth, dashboards, commerce flows, and content surfaces.

## Output Contract

Use [visual verification](../frontend-design/reference/visual-verification.md) before reporting the implemented result as checked. Keep implemented work distinct from unverified visual or behavioral claims.

For direct implementation, report the implemented result, changed files, and verification. For exploration, present results in this order:

1. **What I generated** — requested artifact + number of directions
2. **Variation summary table** — one row per generated direction with thesis and best-fit use case, using the [comparison table template](./assets/comparison-table-template.md) when helpful
3. **Recommended choice** — if appropriate
4. **Preview/apply notes** — how to inspect or switch among variants
5. **Implementation output** — created/updated files

Use the [variant naming scheme](./assets/variant-naming-scheme.md) to keep labels, file names, and selection mapping deterministic.
Use the [preview page checklist](./assets/preview-page-checklist.md) when building a preview surface.
Use the [apply / cleanup checklist](./assets/apply-cleanup-checklist.md) after the user selects a direction.

## Never Do This

- generate alternatives when the user requested direct implementation
- generate near-identical variants with cosmetic differences only
- inject temporary browser DOM as the main implementation strategy
- ignore the existing codebase structure and styling system
- bulldoze an existing artifact's structure after the user asked to preserve its essence or recognizable parts
- default to generic startup aesthetics just because the prompt is broad
- default to novelty aesthetics in this library
- make every option loud, card-heavy, gradient-heavy, or animation-heavy
- skip loading/error/empty/responsive-layout states when they materially affect the artifact
- apply a chosen variant without making it clear what changed

Remember: this skill is not a slot machine for interchangeable UI. It supports direct implementation and requested exploration, with maintainable source code in either mode.
