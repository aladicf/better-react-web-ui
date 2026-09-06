---
name: frontend-design
description: Create distinctive, production-grade React and Tailwind interfaces with strong hierarchy, thoughtful systems, and polished implementation that avoid generic AI aesthetics. Use when the user wants to build or redesign web pages, flows, components, or full app surfaces, or when another better-react-web-ui skill needs shared project design context before other better-react-web-ui skills.
license: Apache 2.0. Based on Anthropic's frontend-design skill. See NOTICE.md for attribution.
metadata:
  argument-hint: "[page, flow, or component]"
---

Create working React and Tailwind interfaces that fit the product, preserve explicit constraints, and make the primary task clear. Read only the references relevant to the requested work.

## Context Gathering Protocol

Gather only the context needed for the requested decision. Use this order:

1. Reuse the user's current instructions, prior answers, and any direction or creative authority already granted.
2. Read the project's documented context in `.better-react-web-ui.md`, README, brand guidance, and applicable instructions. If the canonical context file is absent, check `.better-web-ui.md`, `.better-ui.md`, then `.impeccable.md` as migration inputs.
3. Inspect the affected code, callers, assets, and existing design system. Treat observed implementation as evidence of the current system, not proof of unstated audience needs.
4. Ask only about missing facts that materially change the work. Label reasonable assumptions and proceed with reversible choices within the authorized scope.

For a new design direction, establish the audience, intended task, and brand tone. Under explicit creative delegation, choose and record reasonable assumptions without another approval checkpoint. Never invent user answers or product facts.

For a focused repair, use the relevant code and constraints. Do not require a brand interview before fixing keyboard focus, overflow, or a measured performance defect.

Use $setup when the user requests persistent project context or when substantial design work needs missing context recorded. The absence of a context file alone does not require setup. Preserve existing context when updating it.

## Set priorities

Preserve the existing visual system unless the user requests a change. For an open direction, choose a coherent style through [design directions](reference/design-directions.md). Establish hierarchy with spacing, grouping, type, and contrast before adding decoration.

Distinguish requirements from preferences:

- Preserve accessibility, truthful content, functional controls, and explicit user constraints.
- Treat aesthetic guidance as defaults for open decisions. Inter, Arial, system fonts, pure white, pure black, gradients, cards, and familiar layouts are valid when they fit the brand and task.
- Use [AI slop detection](reference/ai-slop-detection.md) to diagnose generic composition, unsupported claims, or unnecessary decoration. A font or color alone is not a defect.
- Keep core workflows familiar and readable even when the marketing page uses expressive imagery or motion.

Prioritize clarity, task completion, and error prevention over visual novelty. Never fabricate customers, testimonials, metrics, capabilities, urgency, or scarcity. Keep prices, consent, destructive consequences, and cancellation paths clear. See [interface honesty](reference/interface-honesty.md).

## Match the implementation

Detect the existing React framework, Tailwind configuration, components, tokens, and data flow before editing. Reuse suitable code and installed dependencies. Respect explicit stack choices for new projects. Use [framework defaults](reference/framework-defaults.md) only for unspecified choices.

Consult [framework official docs](reference/framework-official-docs.md) before framework-specific decisions. For Next.js, read relevant bundled documentation at `node_modules/next/dist/docs/` when available. Prefer that version-matched source over memory.

Use [component and block strategy](reference/component-and-block-strategy.md) and [React shadcn accelerators](reference/react-shadcn-accelerators.md) when existing components or blocks fit the task. For custom primitives, read [component anatomy](reference/component-anatomy.md) and [component accessibility](reference/component-accessibility.md). Preserve mature library semantics rather than rewriting them for appearance.

In Astro projects, add React islands only for interactions that need them. Keep implementation complexity proportionate to the requested result.

## Implement the requested result

1. Identify the target page, flow, or component and the primary user task. Preserve fixed content, section order, and interaction behavior.
2. Choose a direction within the user's authority. For one requested artifact, implement directly. Use $add-ui for comparison when the user asks for alternatives, honoring the requested count. Do not add a selection checkpoint after the user has chosen or delegated a direction.
3. Build the smallest complete version with real source files and working actions. Establish a constrained spacing, type, color, radius, and elevation system before decorative details.
4. Cover relevant loading, empty, error, success, and responsive states. Use optimistic updates only when failures can be recovered without misleading the user or losing data.
5. Verify the result in the target project. Report what changed, the checks performed, and any untested behavior.

For substantial missing context, use [design process](reference/design-process.md) and [UX strategy](reference/ux-strategy.md). Do not turn a focused repair into a redesign.

## Load references by task

| Task | References |
| --- | --- |
| Landing or marketing page | [Landing-page storytelling](reference/landing-page-storytelling.md), [hero sections](reference/hero-sections-ux.md), [marketing copywriting](reference/marketing-copywriting.md), [social proof](reference/social-proof-patterns.md) |
| Hierarchy and layout | [Hierarchy checklist](reference/hierarchy-checklist.md), [spacing system](reference/spacing-system.md), [spatial design](reference/spatial-design.md) |
| Typography | [Typography](reference/typography.md), [text hierarchy and readability](reference/text-hierarchy-and-readability.md) |
| Color and status | [Color and contrast](reference/color-and-contrast.md), [semantic color](reference/semantic-color.md), [colorblindness UX](reference/colorblindness-ux.md) |
| Imagery and depth | [Image treatment](reference/image-treatment.md), [surface separation](reference/surface-separation.md), [elevation system](reference/elevation-system.md) |
| Animation or scrolling | [Motion design](reference/motion-design.md), [landing-page storytelling](reference/landing-page-storytelling.md) |
| Responsive behavior | [Responsive design](reference/responsive-design.md), [container queries](reference/container-queries.md) |
| Controls, forms, and recovery | [Interaction design](reference/interaction-design.md), [component accessibility](reference/component-accessibility.md), [error recovery](reference/error-recovery.md) |
| Copy and product decisions | [UX writing](reference/ux-writing.md), [interface honesty](reference/interface-honesty.md), [pricing and packaging](reference/pricing-and-packaging.md) |
| Final review | [React and Tailwind implementation review](reference/react-tailwind-implementation-review.md), [before-and-after examples](reference/before-and-after-examples.md) |

Use the [reference index](reference/README.md) for specialized topics such as authentication, commerce, data visualization, onboarding, permissions, and localization. Do not load the entire reference library for every task.

## Verify before delivery

- Check that the primary action is clear and functional. Keep labels and content truthful.
- Check desktop and phone layouts, long content, and zoom for clipping, overflow, and lost functionality.
- Test keyboard operation, visible focus, accessible names, contrast, and relevant error recovery.
- With reduced motion enabled, keep all meaningful content visible and reachable. Decorative animation must not gate content access.
- Load initially visible and likely LCP images eagerly. Lazy-load suitable below-fold media. Reserve dimensions to avoid layout shifts.
- Base performance findings on measurements. Add memoization or temporary `will-change` only when profiling supports it.
- Use the project's existing checks and respect its command restrictions. Do not claim browser, accessibility, or performance results from source inspection alone.
- Review whether typography, spacing, color, and interaction decisions fit the product. Preserve approved brand choices even when a different style is your personal preference.
