---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with strong hierarchy, thoughtful systems, and polished implementation that avoid generic AI aesthetics. Use when the user wants to build or redesign web pages, flows, components, or full app surfaces, or when another better-web-ui skill needs shared project design context before specialized work begins.
license: Apache 2.0. Based on Anthropic's frontend-design skill. See NOTICE.md for attribution.
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

## Refactoring UI Operating Model

Use this decision order before reaching for effects:

1. **Start with a feature, not a shell**: Design the specific user task first. Navigation, chrome, and decorative structure should follow the needs of the feature, not the other way around.
2. **Establish hierarchy in grayscale**: First make the interface clear using spacing, size, weight, contrast, and grouping. If it doesn't work in grayscale, color won't save it.
3. **Define systems before details**: Use constrained scales for spacing, type, color, radius, and elevation. Limit choices to reduce decision fatigue and make the result feel intentional.
4. **Choose personality through concrete levers**: Express tone through font choice, color temperature, border radius, and language — not random effects.
5. **Polish last**: Add color, depth, decoration, motion, and finishing touches only after hierarchy and systems are already working.

**CRITICAL**: Hierarchy beats decoration. Systems beat one-off tweaking. Restraint beats trend-chasing.

## Context Gathering Protocol

Design skills produce generic output without project context. You MUST have confirmed design context before doing any design work.

**Required context** — every design skill needs at minimum:
- **Target audience**: Who uses this product and in what context?
- **Use cases**: What jobs are they trying to get done?
- **Brand personality/tone**: How should the interface feel?

Individual skills may require additional context — check the skill's preparation section for specifics.

**CRITICAL**: You cannot infer this context by reading the codebase. Code tells you what was built, not who it's for or what it should feel like. Only the creator can provide this context.

**Gathering order:**
1. **Check current instructions (instant)**: If your loaded instructions already contain a **Design Context** section, proceed immediately.
2. **Check .better-web-ui.md (fast)**: If not in instructions, read `.better-web-ui.md` from the project root. If it exists and contains the required context, proceed.
3. **Check legacy context files (fallback)**: If `.better-web-ui.md` does not exist yet, read `.better-ui.md` and then `.impeccable.md` from the project root. If either exists and contains the required context, proceed, but prefer migrating to `.better-web-ui.md` when possible.
4. **Run setup (REQUIRED)**: If neither source has context, you MUST run $setup NOW before doing anything else. Do NOT skip this step. Do NOT attempt to infer context from the codebase instead.

## Framework & Library Guidance

This skill library is intentionally framework-agnostic and library-agnostic.

When implementation details matter, follow this precedence:

1. **Detect and match the existing project stack first**
2. **Respect explicit user choices for new projects second**
3. **Use the default matrix only when the project is new and unspecified**

The full precedence order, framework-default matrix, problem shorthand, and caveats live in [framework defaults](reference/framework-defaults.md). Use that reference whenever you need to decide styling, component libraries, form architecture, table architecture, or virtualization defaults.

When the project uses a specific frontend framework or meta-framework, consult [framework official docs](reference/framework-official-docs.md) before making framework-specific implementation decisions.

For **Next.js** specifically, if the project includes bundled version-matched docs at `node_modules/next/dist/docs/`, read the relevant local Next.js doc there before coding. Treat those bundled docs as the source of truth for the installed version instead of relying on stale memory.

When React-based fallback defaults are relevant, use [component and block strategy](reference/component-and-block-strategy.md) to decide when to compose from `shadcn/ui` primitives, when blocks are an appropriate accelerator, and how to avoid shipping generic library output unchanged. Use [react shadcn accelerators](reference/react-shadcn-accelerators.md) when the request maps to a curated community component such as theme controls, consent, text motion, testimonial patterns, wheel pickers, or slide actions.

When the project does **not** have a mature component library and you need to build or refine primitives from scratch, use [component anatomy](reference/component-anatomy.md) for practical anatomy guidance on custom components such as buttons, cards, checkboxes, dropdowns, tabs, textareas, toasts, toggles, tooltips, accordions, avatars, badges, borders, breadcrumbs, iconography, lists, and submit actions.

The more focused component-pattern references in this folder — such as accordion, breadcrumb, carousel, slider, date input, date-time picker, navigation menu, feature comparison, configurator, and complex table guidance — follow the same default. They are primarily for custom primitives, headless compositions, or plain HTML / CSS / JavaScript implementations. If a mature component library already owns the primitive well, use those references mainly to decide whether the pattern fits, how it should be composed, what defaults and states it needs, and how it should behave responsively around the library component instead of rewriting strong upstream anatomy, semantics, or accessibility behavior.

---

## Design Direction

Treat design direction as a deliberate constraint system, not a vague tone adjective.

- **Feature first**: Identify the primary workflow or moment this screen must support before designing the shell around it.
- **Purpose**: What problem does this interface solve? Who uses it?
- **Brand fit**: What should this feel like for this specific company, product, audience, and promise?
- **Content fit**: How much copy, proof, imagery, navigation, and product detail must this layout support?
- **Constraints**: Technical requirements, performance budget, accessibility, and maintenance cost.
- **Differentiation**: What makes this memorable without making it harder to use?

Follow [design directions](reference/design-directions.md) when choosing or preserving a style.

That reference defines the approved website directions for this library, how to choose among them, where louder styles should stay selective, and which styles this library should not generate.

Use these rules by default:

- **Existing project first**: if the project already has a visual system, preserve its typography, palette, spacing rhythm, surface language, and interaction tone unless the user explicitly asks for a rebrand or larger style shift.
- **Broad new-project requests choose from approved directions**: if the user asks for a new landing page, marketing page, or several distinct directions without naming a style, select from the approved design directions based on the product idea and brand fit instead of inventing random vibe labels.
- **Choose structure before effects**: establish one primary structural direction first, then optionally add one supporting surface, typographic, motion, or expressive modifier.
- **Keep core flows clearer than the shell**: even when the marketing layer is more expressive, forms, tables, settings, auth, pricing comparisons, and error states should usually stay closer to minimalist, Swiss, flat, or similarly clarity-first behavior.
- **Never default to retro / cyber / synthwave / terminal aesthetics**: do not volunteer those directions from broad prompts in this library.

Apply a little pessimism up front:

- design the smallest useful version first
- do not imply functionality that is not ready to exist
- use rough exploration to make decisions quickly, then build the real thing early and iterate in short cycles
- lock typography, spacing, hierarchy, and CTA structure before layering on heavier style treatments

Use [design process](reference/design-process.md) when the request is still fuzzy, when layout and flow decisions need to be clarified before polish, or when you need a cleaner progression from wireframe to styleguide to prototype.
Use [design principles](reference/design-principles.md) when the team needs clearer shared defaults, stronger product values, or a more durable decision-making point of view that explains both what to do and what to avoid.
Use [ux strategy](reference/ux-strategy.md) when the work needs clearer user-segment focus, priorities, high-value UX actions, feasibility framing, or risk-aware alignment with product and business goals before screen-level execution.
Use [audience-sensitive design](reference/audience-sensitive-design.md) when the audience itself changes the UX — for example when designing for Gen Z, children, parents, older adults, or any audience with distinct device habits, trust patterns, or accessibility needs.

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Intentionality beats intensity. Typography, spacing, hierarchy, and content structure should still work even if decorative effects are temporarily removed.

Then implement working code that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

### Typography
→ *Consult [typography reference](reference/typography.md) for scales, pairing, loading strategies, and font-selection heuristics. Use [text hierarchy and readability](reference/text-hierarchy-and-readability.md) for line length, line-height, baseline alignment, label/value treatment, link emphasis, numeric alignment, and semantic vs visual hierarchy.*

Choose fonts that are beautiful, unique, and interesting. Pair a distinctive display font with a refined body font.

**DO**: Use a constrained, hand-crafted type scale; use modular ratios as inspiration, not as a prison
**DO**: Build hierarchy with weight, color, and spacing — not size alone
**DO**: Align mixed font sizes by their baseline when they appear on the same line
**DO**: Tighten headlines carefully and add letter-spacing to all-caps text when readability benefits
**DO**: When a hero or display headline wraps to multiple lines, reduce the size before crushing the leading; keep enough line-height and block padding that ascenders and descenders never clip
**DON'T**: Use overused fonts—Inter, Roboto, Arial, Open Sans, system defaults
**DON'T**: Use monospace typography as lazy shorthand for "technical/developer" vibes
**DON'T**: Use `em`-based type scales for nested UI — they drift off-system fast
**DON'T**: Center long-form text; center works for short statements, not dense reading
**DON'T**: Put large icons with rounded corners above every heading—they rarely add value and make sites look templated

### Color & Theme
→ *Consult [color reference](reference/color-and-contrast.md) for OKLCH, palettes, and dark mode. Use [colorblindness UX](reference/colorblindness-ux.md) when semantic states, charts, active states, or category colors must remain distinguishable under color-vision deficiencies. Use [color ramp workflow](reference/color-ramp-workflow.md) when building or repairing ramps. Use [semantic color](reference/semantic-color.md) when color is carrying status, alerts, or meaning.*

Commit to a cohesive palette. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

**DO**: Start in grayscale, then layer color on top of an already-clear hierarchy
**DO**: Use modern CSS color functions (oklch, color-mix, light-dark) for perceptually uniform, maintainable palettes
**DO**: Define shades up front — greys need a real scale, primary and accent colors need multiple usable stops
**DO**: Tint your neutrals toward your brand hue—even a subtle hint creates subconscious cohesion
**DO**: Prefer dark text on light tinted surfaces when you need accessible, lower-emphasis colored panels
**DON'T**: Use gray text on colored backgrounds—it looks washed out; use a shade of the background color instead
**DON'T**: Blindly `lighten()` or `darken()` your way into 35 nearly identical shades
**DON'T**: Use pure black (#000) or pure white (#fff)—always tint; pure black/white never appears in nature
**DON'T**: Use the AI color palette: cyan-on-dark, purple-to-blue gradients, neon accents on dark backgrounds
**DON'T**: Use gradient text for "impact"—especially on metrics or headings; it's decorative rather than meaningful
**DON'T**: Default to dark mode with glowing accents—it looks "cool" without requiring actual design decisions

### Layout & Space
→ *Consult [spatial reference](reference/spatial-design.md) for grids, rhythm, and container queries. Use [spacing system](reference/spacing-system.md) and [hierarchy checklist](reference/hierarchy-checklist.md) when composition or grouping is weak.*

Create visual rhythm through varied spacing—not the same padding everywhere. Embrace asymmetry and unexpected compositions. Break the grid intentionally for emphasis.

**DO**: Start with more white space than feels necessary, then remove it until the design feels balanced
**DO**: Create visual rhythm through varied spacing—tight groupings, generous separations
**DO**: Use fluid spacing with clamp() that breathes on larger screens
**DO**: Use asymmetry and unexpected compositions; break the grid intentionally for emphasis
**DO**: Keep more space around groups than within them to avoid ambiguous spacing
**DO**: Break long pages into clear logical blocks; equal-weight sections should usually keep consistent outer spacing and shared backgrounds should wrap the whole related block, not just a narrow heading strip
**DO**: Give components the width they actually need; fixed widths are often better than fluid widths for sidebars, forms, and cards
**DON'T**: Wrap everything in cards—not everything needs a container
**DON'T**: Nest cards inside cards—visual noise, flatten the hierarchy
**DON'T**: Use identical card grids—same-sized cards with icon + heading + text, repeated endlessly
**DON'T**: Use the hero metric layout template—big number, small label, supporting stats, gradient accent
**DON'T**: Center everything—left-aligned text with asymmetric layouts feels more designed
**DON'T**: Stretch every section just because the viewport is wide
**DON'T**: Use the same spacing everywhere—without rhythm, layouts feel monotonous

### Visual Details
→ *Consult [elevation system](reference/elevation-system.md) for shadow levels, raised/inset logic, and depth mapping. Use [surface separation](reference/surface-separation.md) when deciding between spacing, borders, shadows, overlap, and background shifts. Use [finishing touches](reference/finishing-touches.md) for tasteful default upgrades, accent borders, and decorative backgrounds. Use [personality levers](reference/personality-levers.md) when the tone feels vague. Use [ai slop detection](reference/ai-slop-detection.md) when the design risks looking generic or trend-chasing.*

**DO**: Use intentional, purposeful decorative elements that reinforce brand
**DO**: Create a small elevation system; shadows should communicate z-depth, not exist as default garnish
**DO**: Use background shifts, spacing, and subtle shadows before reaching for borders everywhere
**DO**: Treat louder style treatments such as glass, soft UI, clay, brutalist accents, or 3D elements as selective tools unless the chosen direction genuinely supports broad use
**DON'T**: Use glassmorphism everywhere—blur effects, glass cards, glow borders used decoratively rather than purposefully
**DON'T**: Use rounded elements with thick colored border on one side—a lazy accent that almost never looks intentional
**DON'T**: Use sparklines as decoration—tiny charts that look sophisticated but convey nothing meaningful
**DON'T**: Use rounded rectangles with generic drop shadows—safe, forgettable, could be any AI output
**DON'T**: Add realism or depth effects that don't clarify elevation or interaction
**DON'T**: Mix multiple loud style families at once without a clear hierarchy of what is primary versus supporting
**DON'T**: Use modals unless there's truly no better alternative—modals are lazy

### Images & Media
→ *Consult [image treatment](reference/image-treatment.md) when working with photos, screenshots, icons, illustrations, user-uploaded media, overlays, and image readability. Use [hero sections UX](reference/hero-sections-ux.md) when above-the-fold visuals, homepage openings, or landing-page first impressions need stronger clarity, proof, performance discipline, or a decision about whether a hero image should exist at all. Use [aspect ratio and card orientation](reference/aspect-ratio-and-card-orientation.md) when media proportions, crop rules, browse-vs-evaluate card layouts, or responsive card/media rhythm materially affect clarity and flow.*

**DO**: Treat image contrast problems as image-treatment problems first, not typography failures
**DO**: Keep screenshots large or focused enough to communicate something useful
**DO**: Keep icons close to the scale they were designed for unless they were made to scale illustratively
**DO**: Place hero copy in a visually quiet part of the image and keep it off faces, product details, or other meaningful focal points
**DO**: Force user-uploaded media into controlled shapes and predictable containers
**DON'T**: Scale screenshots down until they become eye tests
**DON'T**: Blow tiny icons up into chunky placeholders for real illustration
**DON'T**: Let user-uploaded images dictate layout shape or bleed into the background

### Motion
→ *Consult [motion reference](reference/motion-design.md) for timing, easing, and reduced motion.*

Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.

**DO**: Use motion to convey state changes—entrances, exits, feedback
**DO**: Use exponential easing (ease-out-quart/quint/expo) for natural deceleration
**DO**: For height animations, use grid-template-rows transitions instead of animating height directly
**DON'T**: Animate layout properties (width, height, padding, margin)—use transform and opacity only
**DON'T**: Use bounce or elastic easing—they feel dated and tacky; real objects decelerate smoothly

### Interaction

→ *Consult [interaction design](reference/interaction-design.md) for forms, focus, loading patterns, Jakob's Law, and Fitts's Law.*

**Forms and validation**
- [disabled buttons UX](reference/disabled-buttons-ux.md) — blocked primary actions, in-progress locking, unavailable actions
- [destructive action UX](reference/destructive-action-ux.md) — delete, archive, remove, revoke, undo-vs-confirm, bulk destructive actions
- [accordion UX](reference/accordion-ux.md) — FAQs, disclosure groups, product-detail accordions, settings sections
- [live validation UX](reference/live-validation-ux.md) — inline validation timing, blur-vs-real-time, reward-early/punish-late
- [error recovery](reference/error-recovery.md) — field errors, error summaries, strict validators, recoverable failure handling
- [date input UX](reference/date-input-ux.md) — date of birth, memorable-date forms
- [date-time picker UX](reference/date-time-picker-ux.md) — booking calendars, date-range pickers, time-slot selection

**Navigation and wayfinding**
- [information architecture UX](reference/information-architecture-ux.md) — large product suites, settings architecture, cross-product navigation
- [sidebar and footer UX](reference/sidebar-and-footer-ux.md) — right rails, support panels, support-heavy footers
- [navigation menu UX](reference/navigation-menu-ux.md) — mega-dropdowns, header navigation, hover vs click menus
- [breadcrumb UX](reference/breadcrumb-ux.md) — nested navigation, breadcrumb trails, current-location cues, docs hierarchies
- [search and findability](reference/search-and-findability.md) — site search, command palettes, autosuggest, zero-results recovery

**Commerce and content**
- [collection browsing and filtering](reference/collection-browsing-and-filtering.md) — long result lists, faceted browsing, filter overlays
- [complex table UX](reference/complex-table-ux.md) — data grids, pinned columns, header filters, row selection, validation inside tables
- [feature comparison UX](reference/feature-comparison-ux.md) — comparison tables, side-by-side specs, shortlist compare flows
- [configurator UX](reference/configurator-ux.md) — product builders, step-based configuration, real-time option previews
- [slider UX](reference/slider-ux.md) — range sliders, loan or pricing calculators, dual-handle filters
- [carousel UX](reference/carousel-ux.md) — carousels, gallery rails, testimonial sliders, feature rails
- [ecommerce UX](reference/ecommerce-ux.md) — category pages, product pages, shopping flows, carts, checkout
- [reviews and ratings](reference/reviews-and-ratings.md) — product reviews, recommendation signals, customer-photo proof
- [social proof patterns](reference/social-proof-patterns.md) — testimonials, customer logos, review badges, case studies
- [pricing and packaging](reference/pricing-and-packaging.md) — pricing pages, plan comparison, billing settings
- [paywalls and upgrade flows](reference/paywalls-and-upgrade-flows.md) — feature locks, usage limits, trials, upgrade prompts

**Feedback and status**
- [micro failures and perceived quality](reference/micro-failures-and-perceived-quality.md) — flaky feeling from tiny jank, weak feedback, vanishing menus, or haunted-looking behavior
- [loading feedback and perceived performance](reference/loading-feedback-and-perceived-performance.md) — skeletons, stale-data cues, optimistic UI, streaming content, honest waiting states
- [status communication](reference/status-communication.md) — validations, notifications, badges, inboxes, activity feeds
- [empty-state patterns](reference/empty-state-patterns.md) — zero-data surfaces
- [component accessibility](reference/component-accessibility.md) — keyboard support, focus indicators, skip links, modal focus handling, hidden content, current-page states

**Legacy and resilience**
- [behavioral design](reference/behavioral-design.md) — progressive disclosure, priming, framing, completion cues, pricing choice architecture
- [onboarding UX](reference/onboarding-ux.md) — first-run sequencing, activation, aha moments, tours vs checklists
- [predictive and intent-driven UI](reference/predictive-and-intent-ui.md) — recommendations, smart defaults, resume flows
- [legacy modernization](reference/legacy-modernization.md) — legacy systems, hybrid old/new flows, migration-roadmap decisions
- [cognitive load](reference/cognitive-load.md) — Hick's Law and Miller's Law in practice
- [authentication and account recovery](reference/authentication-and-account-recovery.md) — sign-in, sign-up, password setup, session expiry, two-factor flows, lockouts
- [permissions and roles UX](reference/permissions-and-roles-ux.md) — role models, request-access flows, capability boundaries, admin-vs-member behavior
- [language and locale selection](reference/language-and-locale-selection.md) — language selectors, market overrides, currency or shipping preferences

Use [action hierarchy](reference/action-hierarchy.md) when deciding which controls should lead, recede, disappear, or escalate in destructive confirmations.

Use `empty-state` for zero-data surface design. Use `onboard` for broader activation strategy, aha moments, tours, and first-run education.
Use `optimize` when frequent interactions feel sluggish or break flow. Use `harden` when permissions, destructive actions, automation, or admin power need stronger safeguards.

Make interactions feel fast. Use optimistic UI—update immediately, sync later.

**DO**: Use progressive disclosure—start simple, reveal sophistication through interaction (basic options first, advanced behind expandable sections; hover states that reveal secondary actions)
**DO**: Use familiar patterns for familiar tasks—navigation, search, tabs, dropdowns, tables, filters, forms, pagination, and settings should behave the way strong products already taught users to expect
**DO**: Use the least interruptive status pattern that still works—inline validation, quiet indicators, inboxes, summaries, and toasts should not all compete for the same urgency
**DO**: Build on existing workflow knowledge before proposing a big-bang rewrite of a legacy system; hybrid coexistence and staged migration are often the more honest design problem
**DO**: Design empty states that teach the interface, not just say "nothing here"
**DO**: Make every interactive surface feel intentional and responsive
**DO**: Design actions in a real hierarchy — one primary action, a few secondary actions, and quiet tertiary actions
**DO**: Make common actions easy to hit — generous targets, whole-row labels where appropriate, and close placement to the content being acted on
**DO**: Give users control over noisy systems with calm defaults, digest modes, mute paths, snooze options, or quiet hours when notification volume could become disruptive
**DON'T**: Repeat the same information—redundant headers, intros that restate the heading
**DON'T**: Invent custom interaction models for standard controls unless the gain is obvious and significant
**DON'T**: Make every button primary—use ghost buttons, text links, secondary styles; hierarchy matters
**DON'T**: Treat every status update like a warning, toast, push notification, or growth prompt just because the system can send one
**DON'T**: Assume replacing a legacy surface from scratch is automatically safer than documenting workflows, reducing seam pain, and migrating incrementally with users

### Responsive
→ *Consult [responsive reference](reference/responsive-design.md) for narrow-first strategy, fluid design, natural widths, column rebalancing, and container queries.*

**DO**: Use container queries (@container) for component-level responsiveness
**DO**: Adapt the interface for different contexts—don't just shrink it
**DON'T**: Hide critical functionality in narrow layouts—adapt the interface, don't amputate it

### UX Writing
→ *Consult [ux-writing reference](reference/ux-writing.md) for labels, errors, and empty states. Use [interface honesty](reference/interface-honesty.md) when wording, progress cues, consent, unsubscribe/cancel flows, or upgrade prompts risk sounding evasive, manipulative, or faux-friendly. Use [error recovery](reference/error-recovery.md) when the problem is not just message wording, but how users discover, understand, and fix errors in context. Use [marketing copywriting](reference/marketing-copywriting.md) when the task involves headlines, landing pages, product positioning, onboarding promises, lifecycle messages, marketplace listings, or CTA strategy. Use [social proof patterns](reference/social-proof-patterns.md) when the copy depends on testimonial framing, case-study proof, certifications, or the placement of credibility signals near claims and CTAs. Use [copy editing sweeps](reference/copy-editing-sweeps.md) when improving existing copy through focused passes instead of rewriting blindly. Pair those with [pricing and packaging](reference/pricing-and-packaging.md) and [paywalls and upgrade flows](reference/paywalls-and-upgrade-flows.md) when the copy needs to explain plans, billing, renewals, upgrades, or value without sliding into pressure tactics.*

**DO**: Make every word earn its place
**DON'T**: Repeat information users can already see

Use `empty-state` for zero-data surface design. Use `onboard` for broader activation strategy, first-run learning, aha moments, tours, and adoption planning.

### Product Ethics & Defaults

When tradeoffs appear, default to this order:
1. **Clarity**
2. **Task completion speed**
3. **Error prevention**
4. **Familiar interaction patterns**
5. **Visual polish**
6. **Advanced flexibility**

Do not sacrifice the top of the list just to improve the bottom.

#### Never Use Dark Patterns

The interface must not rely on confusion, obstruction, guilt, concealment, or misleading hierarchy to drive product-favoring outcomes.

**DO**:
- make choices, pricing, consent, and consequences easy to understand
- keep unsubscribe, cancellation, privacy, and downgrade paths straightforward
- use truthful warnings, real opt-in, and fair defaults
- preserve user autonomy, informed consent, and reversibility whenever possible

**DON'T**:
- hide important information behind weak contrast, obscure placement, or misleading labels
- make cancellation harder than signup
- preselect exploitative options just to raise conversion
- use fake urgency, fake scarcity, shame copy, or ambiguous destructive confirmations
- improve metrics by making decisions less informed or harder to reverse

---

## The AI Slop Test

**Critical quality check**: If you showed this interface to someone and said "AI made this," would they believe you immediately? If yes, that's the problem.

A distinctive interface should make someone ask "how was this made?" not "which AI made this?"

Review the DON'T guidelines above—they are the fingerprints of AI-generated work from 2024-2025.

Consult [ai slop detection](reference/ai-slop-detection.md) for the consolidated anti-pattern list.

---

## Implementation Principles

Match implementation complexity to the aesthetic vision. Heavier styles such as glass, soft UI, clay, 3D, or other custom-surface treatments increase CSS complexity, state design work, accessibility risk, and performance tuning cost. Restrained directions still need precision, not less effort.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices across generations.

Remember these quality checks while implementing:
- Can someone identify the primary, secondary, and tertiary elements within two seconds?
- Are spacing, typography, color, radius, and elevation decisions coming from systems instead of one-off tweaks?
- Does the personality come through in font, color, radius, and language?
- Would the design still feel good if color were temporarily removed?

Remember: GPT is capable of extraordinary creative work. Don't hold back—show what can truly be created when thinking outside the box and committing fully to a distinctive vision.