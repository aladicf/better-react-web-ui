# Changelog

All notable changes to `better-web-ui` will be documented in this file.

The format is inspired by Keep a Changelog and uses a simple `Added` / `Changed` / `Fixed` / `Removed` structure.

## [Unreleased]

## [1.9.1] - 2026-04-16

### Added

- Shared `design-principles` doctrine now covers how to write practical, decision-making design principles that clarify both preferred defaults and anti-patterns.
- Shared `search-and-findability` doctrine now covers intent-aware site search, synonym and typo tolerance, zero-result recovery, search audits, autosuggest, metadata, and vocabulary gaps.
- Shared `component-anatomy` doctrine now also covers practical filter / faceting guidance including async result updates, slider fallbacks, stable panels, long option groups, result-count apply buttons, and mobile filter surfaces.
- Shared `component-anatomy` doctrine now also covers product/result-list continuation patterns and variant-selector anatomy so catalog-style browsing and option picking can be reasoned about more systematically.
- Shared `component-anatomy` doctrine now also covers KPI cards / dashboard widgets so real-time metrics, delta cues, freshness states, and trustworthy comparison anatomy are easier to design consistently.
- Shared `audience-sensitive-design` doctrine now covers designing for Gen Z, children and parents, and older adults without falling into stereotypes, with guidance on device reality, trust, motivation, and accessibility-sensitive interaction choices.

### Changed

- `interaction-design` now includes clearer decision guidance for choosing between modals, non-modal overlays, drawers, pages, and inline approaches based on task scope and interruption cost.
- `interaction-design` now also covers when to use infinite scroll, `Load more`, or pagination, including guidance for search vs category browsing, mobile thresholds, footer access, and back-button restoration.
- `interaction-design` now also covers real-time dashboard comprehension, update pacing, role-based prioritization, pause/snapshot controls, and quieter motion strategies for live decision surfaces.
- `status-communication` now also covers freshness, staleness, paused/offline/reconnecting states, cached snapshots, and accessibility considerations for trustworthy live-data interfaces.
- `empty-state-patterns` now also covers 404 / not-found recovery, including tone, navigation, and broken-link recovery guidance.
- `search-and-findability` now more explicitly covers command palettes vs site search vs filter bars, search microcopy, placeholder guidance, recent/related search labeling, and empty-submit / no-results recovery patterns.
- `marketing-copywriting` now more explicitly covers landing-page value propositions, objection handling, primary vs secondary CTA discipline, and message flow.
- `add-ui` request mapping now gives stronger commerce-specific guidance for result browsing, product-page above-the-fold summaries, variant selection, and trust-preserving catalog UX.
- `add-ui` request mapping now also gives stronger guidance for real-time dashboards and 404 / broken-link recovery surfaces.
- `frontend-design`, `setup`, `critique`, `add-ui` request mapping, the shared reference index, and `README.md` now surface the new principles and search/findability guidance more explicitly.
- `frontend-design`, `setup`, the shared reference index, and `README.md` now surface the new audience-specific guidance more explicitly so age- and life-stage-aware UX work is easier to discover.
- The repository version metadata in `package.json` and `package-lock.json` has been bumped to `1.9.1`.

## [1.9.0] - 2026-04-15

### Added

- A new in-folder index at `skills/frontend-design/reference/README.md` now maps the shared doctrine library by topic so maintainers and users can browse it without already knowing the exact filename.
- A new in-folder index at `skills/animate/reference/README.md` now groups the deeper motion guidance by use case instead of leaving the reference set as a flat filename list.
- Shared `status-communication` doctrine now covers the differences between validation, notifications, indicators, badges, inboxes, activity feeds, digest settings, severity hierarchy, and notification-fatigue mitigation.
- Shared `legacy-modernization` doctrine now covers workflow and dependency mapping, coexistence with modern products, migration-strategy choices, legacy seam pain, public-beta paths, and stakeholder / heavy-user trust building.

### Changed

- `README.md` now surfaces `interaction-design`, `status-communication`, `legacy-modernization`, `cognitive-load`, `hierarchy-checklist`, and `ux-writing` more prominently in the quick-start doctrine list, and links to both reference indexes.
- README now includes a quick skill-picker table that clarifies common ambiguities such as `critique` vs `audit` vs `polish` and `distill` vs `quieter` vs `bolder`.
- The `critique`, `audit`, `polish`, `distill`, `bolder`, and `quieter` skill descriptions now use sharper trigger language to make overlap boundaries clearer.
- `setup` now states more explicitly that `.better-web-ui.md` is the canonical design-context destination, while `.better-ui.md` and `.impeccable.md` are legacy migration inputs only.
- `animate` now links directly to its new reference index so the deeper motion library is easier to browse.
- `add-ui` now explicitly supports redesigning existing surfaces while preserving their recognizable structure, and its request mapping now also covers notification settings / feeds and legacy-modernization scenarios more directly.
- `frontend-design`, `clarify`, `onboard`, `harden`, `normalize`, and `critique` now point more explicitly to the shared doctrine needed for status communication and legacy-system modernization work.
- The repository version metadata in `package.json` and `package-lock.json` has been bumped to `1.9.0`.

## [1.8.2] - 2026-04-14

### Added

- Shared marketing-copywriting doctrine now covers context gathering, outcome-first framing, CTA strategy, lifecycle copy, app-store copy, and ethical psychology for software product surfaces.
- Shared copy-editing doctrine now covers the seven-sweep editing workflow plus quick-pass checks for clarity, proof, specificity, emotional resonance, and zero-risk decision support.

### Changed

- The `clarify` skill now explicitly covers marketing copy as well as UX writing, and points to the new shared copywriting / copy-editing references when the task goes beyond interface microcopy.
- The core `frontend-design` skill, `ux-writing` reference, `onboard` skill, `add-ui` request mapping, and README now surface the new copy guidance so it is easier to find and reuse.
- The repository version metadata in `package.json` and `package-lock.json` has been bumped to `1.8.2`.

## [1.8.1] - 2026-04-13

### Changed

- `README.md` now uses a more human, lightly tongue-in-cheek introduction aimed at developers who want help making better UI, UX, and animation decisions.
- The inspiration and attribution material now appears near the top of `README.md` with clearer spacing, per-source rows, and explicit creator names, while the duplicate attribution section was removed from the bottom of the file.
- README now states the framework-agnostic positioning more explicitly and documents a recommended upgrade path for older installs that preserves project-specific setup in `.better-web-ui.md`.

## [1.8.0] - 2026-04-13

### Added

- The `animate` skill now has its own `reference/` set covering Emil-inspired easing defaults, timing heuristics, gesture handling patterns, polish and reduced-motion patterns, performance-sensitive property choices, transform techniques, strategy heuristics, on-screen movement, drawer timing/easing, spring usage, and explicit source attribution.

### Changed

- README, contributing guidance, and development docs now use a clearer documentation map, reduce duplicated reference catalogs, and make the shared doctrine index easier to scan and maintain as the repository grows.
- Reorganized `README.md` around a shorter, human-first project overview with clearer installation, capability, doctrine, attribution, and contribution sections.
- README and `NOTICE.md` now point Anthropic attribution to the current upstream `better-web-ui` plugin path instead of stale frontend-design links.
- Motion attribution now explicitly credits Emil Kowalski's [animations.dev](https://animations.dev/) course and related open-source motion work where it informs the `animate` skill.
- Shared frontend doctrine now also covers dark-mode-only `color-scheme` guidance, layout-faithful skeleton placeholders, async combobox result stability, Motion adapter guidance for React/Vue/vanilla JS, and SVG path morphing as a refined disclosure-icon animation option.
- Animation doctrine now more explicitly prefers modern CSS, Tailwind utilities, and WAAPI wherever they can solve the motion cleanly, reserving Motion for interactions that genuinely need a heavier framework-linked animation layer.

### Fixed

- Removed a broken Anthropic attribution link discovered during the documentation link audit.
- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.7.0] - 2026-04-13

### Changed

- The shared `component-anatomy` reference now also covers buttons, cards, checkboxes, dividers, dropdowns, tabs, textareas, toasts, toggles, and tooltips, and the related docs were updated so that expanded coverage is easier to discover.
- The shared doctrine now also adds iconography, lists, submit-button guidance, stronger textarea state guidance, baseline-unit rules, and clearer grid/gutter spacing notes in the appropriate component and spacing references.
- React fallback guidance now treats Sonner as the preferred toast layer and Vaul as the preferred drawer primitive for React-based web apps when the codebase does not already have a stronger standard, with linked docs for setup, API, styling, and behavior details.
- New-project form defaults now prefer TanStack Form across supported React, Vue, Angular, Solid, and Svelte stacks when the form architecture is still open, while preserving existing project form libraries first.
- New-project table defaults now prefer TanStack Table across supported React, Vue, Angular, Solid, and Svelte stacks when the table or data-grid architecture is still open, while preserving existing project table/grid libraries first.
- New-project long-list and virtualization defaults now prefer TanStack Virtual across supported React, Vue, Angular, Solid, and Svelte stacks when the virtualization architecture is still open, while preserving existing project virtualization layers first.
- A new shared `text-layout-prediction` reference now documents when a Pretext-like approach is useful for virtualization, wrapped-text sizing, and repeated relayouts without hot-path DOM measurement.
- README, the core `frontend-design` skill, and repo agent guidance now surface a one-glance default-by-problem summary for TanStack Form, TanStack Table, Sonner, Vaul, and Pretext when the stack is still open.
- Next.js-specific guidance now tells agents to prefer the bundled version-matched docs in `node_modules/next/dist/docs/` when present, follow the official AI-agents setup for existing projects, and respect modern `create-next-app` agent-file defaults.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.6.0] - 2026-04-13

### Added

- Shared component-anatomy doctrine for custom or no-library primitive work, covering accordions, avatars, badges, borders, and breadcrumbs.

### Changed

- README, development docs, contributing guidance, agent instructions, and the core frontend-design skill now surface the custom-primitives guidance more clearly alongside the existing process, framework, hierarchy, typography, and color references.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.5.0] - 2026-04-12

### Changed

- Shared hierarchy guidance now covers negative space, proximity, alignment, scan patterns, and stronger layout-flow checks alongside consistency and visual-weight doctrine.
- The `hierarchy` skill now assesses spacing, grouping, alignment, and scan-path problems more explicitly, and points to the spacing and spatial references when hierarchy issues are really layout issues.
- README, development docs, and contributing guidance now surface hierarchy, spacing, and layout-flow references more clearly so users and maintainers can find the right doctrine faster.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.4.0] - 2026-04-12

### Added

- Shared design-process doctrine covering wireframes, styleguide thinking, and when to move into higher-fidelity prototypes.
- Shared framework-official-docs guidance that directs agents to official framework documentation before making framework-specific implementation decisions.

### Changed

- React fallback guidance now includes a curated shortlist of React/shadcn accelerators with direct feature and integration links for theme controls, consent, motion text, testimonial patterns, wheel pickers, and slide actions.
- Astro fallback guidance now prefers HTML-first Astro components plus Tailwind by default, only reaching for React plus `shadcn/ui` when that integration is explicitly requested or already present.
- Typography doctrine now covers emphasis discipline, weight strategy, italics, underlines, capitalization, responsive size strategy, and how to document a reusable typography schema.
- Color doctrine now better covers palette-family selection, color temperature, tint/tone/shade behavior, color psychology as contextual guidance, and practical color-schema planning.
- The `colorize` and `typeset` skills now point more explicitly at the shared doctrine needed to apply those refinements consistently.

### Fixed

- Synced root package version metadata in `package-lock.json` with the bumped package version.

## [1.3.0] - 2026-04-10

### Added

- User-facing README guidance for how installed skills are typically invoked, including slash-command usage, natural-language fallback prompting, and clarification that internal `$skill` references are not user commands.
- Shared React fallback guidance for respecting `shadcn create`, `shadcn apply`, and `components.json` baselines instead of reverting customized projects to generic defaults.
- Official upstream documentation bridges for `shadcn/ui`, `shadcn/ui Blocks`, `re-ui`, and Tailwind across maintainer docs, shared references, and deterministic checklists.
- Concise `add-ui` examples for component-led, pattern-led, and block-led requests.

### Changed

- `setup` now captures `components.json` usage, shadcn preset/apply baselines, and Radix-vs-Base-UI ecosystem preferences when they are relevant to future design work.
- README, contributing docs, development docs, and React fallback references now align on where maintainers and agents should look first for shadcn and Tailwind guidance.

### Fixed

- Synced the root package version metadata in `package-lock.json` with the current package version.

## [1.2.0] - 2026-04-10

### Changed

- Stack guidance now explicitly prioritizes detecting an existing project's styling and component libraries first, then respecting explicit user preferences for new projects, and only then falling back to framework-specific defaults.
- Added a framework-specific default matrix covering React-based frameworks, Astro, Laravel + Inertia / React, Vue / Nuxt, Svelte / SvelteKit, Angular, and SolidJS / SolidStart.
- `setup` now records implementation defaults as part of persisted project context so later design work can reuse the detected or chosen stack.
- `add-ui`, `frontend-design`, README, and repo instructions now align on the same stack-selection precedence and preferred defaults.

## [1.1.0] - 2026-04-09

### Added

- Contributor and development guides for maintaining canonical skills and generated wrappers.
- Wrapper-root `README.md` generation and validation.
- OXC-based script linting and stronger repository validation coverage.
- Shared doctrine coverage for UX laws and product principles including Jakob's Law, Fitts's Law, Hick's Law, Miller's Law, Postel's Law, Peak-End Rule, Aesthetic-Usability Effect, von Restorff Effect, Tesler's Law, the Doherty Threshold, safe-power guardrails, and dark-pattern avoidance.
- A `smoke:install` helper script for disposable local install checks and a consolidated `verify` workflow for maintainer validation.
- A contributor path for proposing brand-new skills, including a dedicated issue template.

### Changed

- Maintainer tooling is now pinned to Node `24.14.1`, with repository engines set to `>=24.14.1 <25`.
- Frontmatter parsing now uses structured YAML parsing instead of a custom line parser.
- Skill discovery descriptions, README guidance, and maintainer docs now more clearly distinguish overlapping skills such as `onboard` vs `empty-state` vs `critique` and `polish` vs `delight` vs `bolder` vs `quieter`.
- Runtime/version guidance now documents why both `.nvmrc` and `.node-version` exist and validation now checks that those files stay in sync.
- Workflow docs now standardize on regenerate wrappers before validation when wrapper-affecting changes were made.

### Fixed

- `setup` wording now more clearly explains the canonical `.better-web-ui.md` design-context destination and treats legacy context files as migration-only fallbacks.

## [1.0.0] - 2026-04-09

### Added

- Initial public release of the `better-web-ui` skill library.