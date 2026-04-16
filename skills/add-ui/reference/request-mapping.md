## Request mapping heuristics

Use this reference to shape the five directions for common request types.

When React-based fallback defaults are relevant, pair this with [component library integration](./component-library-integration.md) so you decide not just *what* artifact is being requested, but also whether that artifact should be led by primitives, reusable patterns, or block accelerators.

### Hero / landing / CTA

Prioritize:

- hierarchy first
- strong typography
- believable proof
- one obvious primary action

Also:

- match the page promise to the user's likely traffic source and awareness level
- define the value proposition clearly as both the benefit and how the product delivers it
- make the headline outcome-specific, not category-foggy
- keep proof close to the strongest claim
- use CTA text that says what the user gets next, not generic button filler
- handle predictable objections near the relevant CTA, form, or proof point instead of hiding them elsewhere
- keep a secondary CTA quieter and lower-commitment when one is needed

For redesigns of an existing hero, landing page, blog page, login/signup page, or CTA surface:

- preserve the current narrative skeleton when the user asks to keep the essence: section order, proof blocks, CTA placement, and major content zones should usually stay recognizable
- push distinction through typography, palette, copywriting tone, proof styling, imagery direction, spacing rhythm, and detail language before changing the information architecture
- if you offer a stretch direction, label it clearly as the bolder structural departure instead of treating it as the default

Pair this with [../../frontend-design/reference/marketing-copywriting.md](../../frontend-design/reference/marketing-copywriting.md) when the artifact depends on headline quality, section sequencing, CTA strategy, or conversion-aware copy structure.

### Pricing / comparison / plan selection

Prioritize:

- scanability
- difference clarity
- action confidence
- plan framing that reduces hesitation

Also:

- ask for the pricing metric and target buyer when missing
- make packaging, metric, and price point legible as separate decisions
- show who each tier is for instead of relying on feature sprawl alone
- make annual billing, limits, and enterprise escalation easy to understand

Pair this with [../../frontend-design/reference/pricing-and-packaging.md](../../frontend-design/reference/pricing-and-packaging.md) when the work touches packaging logic, billing clarity, or pricing-page strategy.

### Paywalls / upgrade prompts / trial expiration

Prioritize:

- value before ask
- timing that follows a real aha or limit moment
- clear explanation of what unlocks and why it matters
- an honest path to dismiss, continue free, or choose a lower-friction alternative when one exists

Also:

- match the prompt type to the situation: feature gate, usage limit, trial ending, or tier upsell
- keep the upgrade path short and in-context
- do not rely on dark patterns to lift conversion

Pair this with [../../frontend-design/reference/paywalls-and-upgrade-flows.md](../../frontend-design/reference/paywalls-and-upgrade-flows.md).

### Auth / account / settings

Prioritize:

- clarity
- reassurance
- error resilience
- reduced ambiguity over decorative flourish

For redesigns of existing auth surfaces:

- preserve task order, field expectations, and recovery paths unless the current flow is demonstrably broken
- explore differences through trust tone, copy clarity, typography, color, spacing, and support content more than through novel interaction patterns

### Notifications / inbox / activity feed / notification settings

Prioritize:

- clear severity hierarchy
- low interruption by default
- frequency control
- scanability and action clarity

Also:

- distinguish validation, passive indicators, inbox entries, alerts, and notifications instead of treating them as one pattern
- use calm defaults and recommended modes before overwhelming users with a giant toggle wall
- preserve user trust with mute, snooze, digest, summary, or quiet-hours options when volume could grow
- keep human-originated or awaited messages more prominent than generic automated chatter
- make feed rows easy to scan by source, object, urgency, and recency

Pair this with [../../frontend-design/reference/status-communication.md](../../frontend-design/reference/status-communication.md) when the work involves notification centers, reminder settings, badges, push prompts, digest preferences, or activity feeds.

### Legacy modernization / replacement beta / hybrid old-new flow

Prioritize:

- workflow continuity
- low-risk improvements first
- seam reduction between old and new UI
- trust with heavy users and stakeholders

Also:

- map what must stay behaviorally consistent before exploring visual futures
- prefer improvements that clarify validation, errors, processing, hierarchy, and affordances without breaking critical business logic
- if the request involves a replacement concept, make it clear whether the direction is a legacy upgrade, a parallel beta candidate, or a fuller replacement slice
- use early preview artifacts to help teams compare migration directions, not just aesthetics

Pair this with [../../frontend-design/reference/legacy-modernization.md](../../frontend-design/reference/legacy-modernization.md) when the request touches supplier-built tools, back-office UIs, partial migrations, or high-risk workflow replacement.

### Search / command palette / help search / result pages

Prioritize:

- intent matching
- fast scanability
- zero dead-ends
- query-specific filtering

Also:

- design for the user's language rather than internal taxonomy
- make autosuggest predict goals, not just finish strings
- distinguish command palettes, site search, and filter bars by the job each one is doing
- distinguish result types clearly with labels, thumbnails, or metadata when that improves recognition
- use microcopy around placeholder text, recent searches, related searches, and no-results states to help users recover quickly
- turn zero-results screens into recovery surfaces with suggestions, nearby categories, or support paths
- keep search responsive enough to feel trustworthy, with loading feedback when the wait is noticeable

Pair this with [../../frontend-design/reference/search-and-findability.md](../../frontend-design/reference/search-and-findability.md) when the request involves site search, help-center search, command palettes, autocomplete, result ranking, or no-results recovery.

### Dashboard / charts / widgets / data tables

Prioritize:

- information hierarchy
- density control
- state handling
- labeling clarity

Also:

- design the dashboard as a decision assistant, not just a monitoring wall
- make the most urgent or consequential KPIs visually lead instead of giving every widget equal weight
- use deltas, meaningful trend sparklines, and short recent-history cues to explain change at a glance
- keep update motion subtle and orientation-preserving rather than flashy
- provide freshness, paused, stale, offline, or reconnecting states when timing or reliability matters
- allow filtering, snapshot, or pause controls when the stream can outpace human comprehension
- personalize prominence, alerting, or defaults by role when the same dashboard serves different decision-makers

### Commerce flows

Prioritize:

- friction reduction
- trust signals
- legible totals and decisions
- clean path to completion

Also:

- choose the list continuation pattern by browsing mode: exploratory category browsing can support `Load more` plus lazy-loading, but ranked search results usually need a more deliberate `Load more` or pagination rhythm
- avoid infinite scroll where footer access, backtracking, or careful result comparison matter
- keep filters and sorting stable and close to the results; top-aligned controls often adapt better than heavy sidebars, especially across mobile and desktop
- keep search visible and predictive when it is a common shortcut through the catalog
- use breadcrumbs when the hierarchy is deep enough that users need help climbing back up through categories
- make the product page capable of a convincing 30-second pitch above the fold: product name, price, critical options, primary CTA, and high-trust delivery / returns information should be easy to find immediately
- collapse secondary product detail into accordions or linked subsections instead of forcing every detail into the first screenful
- keep auxiliary widgets such as chat, loyalty prompts, or support controls available but visually quiet so they do not derail the buying decision
- match variant controls to the attribute being chosen: swatches for visual choices, buttons/chips for short textual sets, and richer dropdown/list patterns when options are longer or carry metadata
- show unavailable or out-of-stock variant options clearly before the user reaches the final action so the flow feels honest rather than bait-and-switch

### Content surfaces

Prioritize:

- readability
- rhythm
- framing and sequencing of content
- restraint before decoration

For redesigns of existing blog or editorial surfaces:

- keep the reading structure, taxonomy cues, and scan path recognizable unless the user asks for a bigger editorial rethink
- vary the direction through type system, card/article treatment, imagery, density, and framing rather than by disrupting the reading flow

### 404 / not-found / broken-link recovery

Prioritize:

- fast reassurance
- clear recovery navigation
- brand-consistent tone
- low frustration

Also:

- acknowledge the page is missing plainly rather than hiding the error behind cleverness alone
- give at least one obvious way forward such as home, search, previous page, or top destinations
- use humor or friendliness only when it supports the recovery instead of replacing it
- make the recovery actions stronger than the illustration or novelty treatment
- if the site is large, add search or a curated list of likely destinations

Pair this with [../../frontend-design/reference/empty-state-patterns.md](../../frontend-design/reference/empty-state-patterns.md) when the work is specifically about not-found, no-results, permission, or error recovery surfaces.

### 401 / 403 / 429 / 500 / 503 / error-page recovery

Prioritize:

- recovery that matches the failure
- trust and clarity over cleverness
- preserving task context where possible
- calm, brand-consistent tone

Also:

- for `401` or session-expired flows, give users a strong sign-in path and preserve the interrupted destination when possible
- for `403` or access-denied flows, explain the restriction clearly and show request-access, switch-account, or fallback navigation paths
- for `429` or rate-limit states, explain that the limit is temporary and show retry timing if the product knows it
- for `500` or server-error states, provide retry plus a dependable fallback like home, dashboard, or recent stable destinations
- for `503` or maintenance flows, link to status/incident detail and set expectations about timing when known
- keep route-level recovery actions more prominent than illustrations, mascots, or novelty copy

Pair this with [../../frontend-design/reference/empty-state-patterns.md](../../frontend-design/reference/empty-state-patterns.md) when the work is specifically about sign-in-required, access-denied, rate-limited, server-error, maintenance, or not-found recovery surfaces.