# Skill Compatibility Matrix

This matrix shows which skills reference each other and which skill categories commonly work together.
It is generated automatically from canonical SKILL.md content analysis.

## Skills by Category

### Accessibility

- **a11y**: Systematically audit and remediate accessibility issues in UI, focusing on keyboard navigation, screen reader support, c... Commonly used with: frontend-design, setup.
- **add-ui**: Generate 5 distinct, production-grade UI variations for a requested new or existing section, component, page, flow, or s... Commonly used with: frontend-design, setup.
- **audit**: Run technical quality checks across accessibility, performance, theming, responsive design, and anti-patterns. Generates... Commonly used with: frontend-design, setup.
- **critique**: Evaluate an interface from a UX perspective, assessing hierarchy, information architecture, emotional resonance, cogniti... Commonly used with: frontend-design, hierarchy, setup.
- **test**: Build or improve a UI testing strategy covering visual regression, interaction testing, and accessibility assertions. Us... Commonly used with: frontend-design, setup.

### Color

- **bolder**: Increase visual impact, contrast, personality, and compositional confidence when a design feels bland, generic, or too s... Commonly used with: frontend-design, setup.
- **colorize**: Build or refine UI color systems, warmth, semantic color, and color-based hierarchy in designs that are too gray, monoch... Commonly used with: frontend-design, setup.

### Components

- **setup**: Gather and persist project design context such as audience, brand personality, UX goals, React framework, Tailwind setup...

### Data Viz

- **data-viz**: Design or improve data visualizations, charts, and data presentation interfaces. Use when the user asks to add charts, b... Commonly used with: frontend-design, setup.
- **empty-state**: Design focused empty states for zero-data, no-results, permission, and error situations with clear value framing, strong... Commonly used with: frontend-design, setup.

### Delight

- **distill**: Simplify cluttered UI by removing unnecessary elements, choices, features, and structural complexity. Use when the probl... Commonly used with: frontend-design, setup.

### Depth

- **depth**: Add or refine depth through elevation systems, raised and inset surfaces, layered overlap, and meaningful shadow behavio... Commonly used with: frontend-design, setup.

### Forms

- **extract**: Extract reusable components, product patterns, and design tokens into a clearer design system with shared APIs, document... Commonly used with: frontend-design, setup.
- **security-ux**: Design security-conscious interfaces that protect users without frustrating them. Use when the user asks about MFA, pass... Commonly used with: frontend-design, setup.

### Hierarchy

- **frontend-design**: Create distinctive, production-grade React and Tailwind interfaces with strong hierarchy, thoughtful systems, and polish... Commonly used with: hierarchy, setup.
- **hierarchy**: Clarify priority and emphasis by fixing unclear primary actions, competing visual weight, loud section titles, and weak ... Commonly used with: frontend-design, setup.
- **quieter**: Reduce visual intensity, saturation, and noise while preserving hierarchy and character. Use when the structure is basic... Commonly used with: frontend-design, setup.

### Layout

- **adapt**: Adapt designs for narrow, medium, wide, embedded, or print web contexts without losing usability, hierarchy, or target s... Commonly used with: frontend-design, setup.
- **arrange**: Improve layout composition, spacing systems, grouping, and visual rhythm. Use when the user mentions weak layout structu... Commonly used with: frontend-design, setup.
- **forms**: Design, structure, or improve form interfaces for clarity, completion rates, and user confidence. Use when the user asks... Commonly used with: frontend-design, setup.
- **normalize**: Audit and realign UI to match design system standards, spacing, tokens, and patterns. Use when the user mentions consist... Commonly used with: frontend-design, setup.
- **polish**: Perform a final quality pass fixing alignment, spacing, consistency, and micro-detail issues before shipping. Use when t... Commonly used with: empty-state, frontend-design, setup.

### Localization

- **harden**: Improve interface resilience through better error handling, i18n support, text overflow handling, and edge case manageme... Commonly used with: frontend-design, setup.
- **localize**: Plan, implement, or improve an internationalization and localization strategy for UI content, formatting, and regional a... Commonly used with: frontend-design, setup.

### Motion

- **animate**: Improve or implement purposeful motion systems, micro-interactions, gestures, and transition behavior for production-gra... Commonly used with: frontend-design, setup.
- **showcase**: Create standout, technically ambitious interfaces that feel extraordinary through cinematic transitions, advanced motion... Commonly used with: frontend-design, setup.

### Onboarding

- **onboard**: Design onboarding and activation flows that help users reach value quickly. Use when the user mentions onboarding, getti... Commonly used with: frontend-design, setup.

### Performance

- **delight**: Add moments of joy, personality, and surprise through success states, empty states, loading moments, hover details, and ... Commonly used with: frontend-design, setup.
- **optimize**: Diagnose and fix UI performance across loading speed, rendering, animations, images, and bundle size. Use when the user ... Commonly used with: frontend-design, setup.

### Resilience

- **clarify**: Improve UX writing, marketing copy, labels, microcopy, instructions, and error messages so interfaces and product messag... Commonly used with: frontend-design, setup.

### Search

- **search**: Design or improve search experiences, result presentation, and filtering interfaces. Use when the user asks to add searc... Commonly used with: frontend-design, setup.

### Typography

- **imagery**: Improve how interfaces use photos, screenshots, icons, illustrations, and user-uploaded media so visuals support clarity... Commonly used with: frontend-design, setup.
- **typeset**: Improve UI typography by fixing font choices, type scale, hierarchy, weight, and readability so text feels intentional. ... Commonly used with: frontend-design, setup.

## Cross-Category Collaboration

Skills in adjacent categories often work together on the same task. When two skills overlap, the matrix notes the boundary.

- **a11y** (Accessibility) with **harden** (Resilience): a11y focuses on systematic remediation; harden covers broader edge cases.
- **test** (Testing) with **audit** (Audit): test builds testing strategy; audit runs cross-dimensional quality checks.
- **optimize** (Performance) with **animate** (Motion): optimize fixes jank; animate adds purposeful motion.
- **data-viz** (Data Viz) with **colorize** (Color): data-viz uses color strategically; colorize builds color systems.
- **forms** (Forms) with **harden** (Resilience): forms structures inputs; harden handles edge cases and overflow.
- **search** (Search) with **arrange** (Layout): search presents results; arrange handles list rhythm.
- **security-ux** (Security) with **harden** (Resilience): security-ux designs flows; harden handles error recovery.
- **animate** (Motion) with **delight** (Delight): animate implements motion; delight adds personality moments.
- **hierarchy** (Hierarchy) with **polish** (Polish): hierarchy fixes priority; polish cleans details.
- **clarify** (Writing) with **forms** (Forms): clarify improves copy; forms structures the flow.

## Potential Overlap Boundaries

These skill pairs have similar trigger language. Descriptions should be tightened if near-miss activations occur.

- **a11y** and **audit**: Both mention accessibility. a11y is remediation; audit is scoring.
- **harden** and **polish**: Both improve quality. harden is edge cases; polish is micro-details.
- **distill** and **quieter**: Both reduce noise. distill removes elements; quieter reduces intensity.
- **delight** and **animate**: Both add personality. delight is moments; animate is systematic motion.
- **test** and **audit**: Both check quality. test is testing strategy; audit is scored findings.
- **forms** and **harden**: Both handle validation. forms designs flows; harden handles edge cases.
- **data-viz** and **colorize**: Both use color. data-viz is chart-specific; colorize is system-wide.
