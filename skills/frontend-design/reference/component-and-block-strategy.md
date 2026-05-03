# Component and Block Strategy

Use this reference when a React and Tailwind project uses supported component-library defaults and the component direction is still open.

This library does **not** maintain a frozen catalog of every upstream `shadcn/ui`, shadcn block kit, motion library, map component kit, consent UI, background pattern source, specialized auth/billing UI, or Base UI-based primitive system. Those inventories change quickly. Use the official upstream docs for current availability. Use this reference for **selection strategy**: what each layer is for, when to use it, and how to avoid generic output.

## Official upstream references

Use these as the primary source for current component availability, integration details, and Tailwind implementation behavior:

- [`shadcn/ui` components](https://ui.shadcn.com/docs/components) — browse the current component catalog
- [`shadcn/ui` TanStack Form docs](https://ui.shadcn.com/docs/forms/tanstack-form) — form integration patterns when form architecture matters
- [`shadcn/ui` Blocks](https://ui.shadcn.com/blocks#blocks) — browse block-level accelerators for common screens and sections
- [`shadcn/ui` registry directory](https://ui.shadcn.com/docs/directory) — discover community registries when the core catalog is not enough
- [ReUI components](https://reui.io/components) — browse composed components and in-house workflow-heavy pieces
- [ReUI docs](https://reui.io/docs) — understand registry, Base UI / Radix compatibility, and usage model
- [shadcncraft](https://shadcncraft.com/) - production-ready shadcn/ui components, blocks, pages, and matching Figma design-system assets
- [Kibo UI components](https://www.kibo-ui.com/components) - composable shadcn/ui-oriented React, TypeScript, Tailwind, Lucide, and Radix components
- [Kibo UI blocks](https://www.kibo-ui.com/blocks) - precomposed and animated blocks for React interfaces
- [Basecn](https://basecn.dev/) - shadcn/ui components powered by Base UI
- [Tailark](https://tailark.com/) - shadcn marketing blocks, pages, and illustrations for modern marketing websites
- [shadcnblocks](https://www.shadcnblocks.com/) - shadcn/ui blocks and components for common sections and product surfaces
- [React Bits](https://reactbits.dev/) - animated React components and effects
- [Animate UI](https://animate-ui.com/) - animated React components for shadcn/ui and Tailwind projects
- [Animata](https://animata.design/docs) - open-source React and Tailwind animations, effects, and interactions
- [Magic UI](https://magicui.design/) - React, TypeScript, Tailwind, and Motion components and effects that pair with shadcn/ui
- [Motion Primitives](https://motion-primitives.com/docs) - reusable animated components built with Motion and Tailwind CSS
- [Efferd](https://efferd.com/) - shadcn/ui blocks for React frameworks, with Radix and Base UI support
- [Billing SDK](https://billingsdk.com/) - billing and monetization UI components
- [blocks.so](https://blocks.so/) - free shadcn/ui components and blocks for React
- [coss/ui](https://coss.com/ui) - Base UI-based component library with a broad primitive catalog
- [Better Auth UI](https://better-auth-ui.com/) - ready-to-use authentication components for Better Auth, built with shadcn/ui and HeroUI
- [Smooth UI](https://smoothui.dev/) - animated React components and blocks for shadcn/ui, Motion, and Tailwind
- [TripleD UI](https://ui.tripled.work/) - UI components, blocks, and pages for React interfaces
- [shadcn-map](https://shadcn-map.vercel.app/) - shadcn/ui map components built with Leaflet and React Leaflet
- [mapcn](https://mapcn.vercel.app/) - React map components and blocks built on MapLibre and styled with Tailwind
- [Consent Manager](https://chanhdai.com/components/consent-manager) - c15t-based cookie and tracking consent banner for Next.js and shadcn/ui
- [c15t](https://c15t.com/) - developer-first consent management and script-loading system
- [PatternCraft](https://patterncraft.fun/) - modern background pattern and gradient snippets
- [React shadcn accelerators](./react-shadcn-accelerators.md) - curated shortlist of ChanhDai community-registry components that better-react-web-ui treats as optional React accelerators
- [Sonner docs](https://sonner.emilkowal.ski/getting-started) — toast layer guidance when feedback/notification primitives are the feature in question
- [Vaul docs](https://vaul.emilkowal.ski/getting-started) — drawer and bottom-sheet guidance when overlay patterns are the feature in question
- [TanStack Form overview](https://tanstack.com/form/latest/docs/overview) — default headless form-state recommendation when the React form stack is still open
- [TanStack Form React quick start](https://tanstack.com/form/latest/docs/framework/react/quick-start) — recommended React usage model and composition direction
- [TanStack Table introduction](https://tanstack.com/table/latest/docs/introduction) — default headless table/data-grid recommendation when the React table stack is still open
- [Tailwind utility-class guide](https://tailwindcss.com/docs/styling-with-utility-classes) — core utility-first workflow
- [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design) — breakpoint and adaptive layout guidance
- [Tailwind states and variants](https://tailwindcss.com/docs/hover-focus-and-other-states) — `hover:`, `focus:`, group states, and related variants
- [Tailwind dark mode](https://tailwindcss.com/docs/dark-mode) — `dark:` behavior and manual theme toggles
- [Tailwind theme variables](https://tailwindcss.com/docs/theme) — theme tokens and customization
- [Tailwind colors](https://tailwindcss.com/docs/colors) — palette, opacity modifiers, and color variable usage
- [Tailwind adding custom styles](https://tailwindcss.com/docs/adding-custom-styles) — arbitrary values, custom variants, and custom utilities
- [Tailwind detecting classes in source files](https://tailwindcss.com/docs/detecting-classes-in-source-files) — source scanning, static class detection, and safelisting
- [Tailwind functions and directives](https://tailwindcss.com/docs/functions-and-directives) — `@theme`, `@utility`, `@source`, `@apply`, and related directives
- [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide) — important when working in mixed v3/v4 codebases
- [Tailwind install with Vite](https://tailwindcss.com/docs/installation/using-vite) — recommended path for Vite-based stacks
- [Tailwind install with PostCSS](https://tailwindcss.com/docs/installation/using-postcss) — recommended path for PostCSS-based stacks
- [Tailwind framework guides](https://tailwindcss.com/docs/installation/framework-guides) — framework-specific install paths

If the official docs still do not answer the question, do a focused web search and then verify what you find against upstream documentation before making implementation decisions.

## Split Tailwind CSS entry points when sources differ

Tailwind v4 can generate separate CSS outputs for different source sets. Use this when an internal route, admin area, editor, playground, or other isolated surface has many custom utilities or class patterns that should not inflate the main site CSS.

Example:

```css
/* global.css */
@import "tailwindcss";
@source not "./internal";
```

```css
/* internal.css */
@import "tailwindcss" source(none);
@source "./internal";
```

Then import `internal.css` only from the internal route or layout that needs it.

Use this pattern when:

- the project uses Tailwind v4 CSS-first configuration
- a route segment owns a meaningfully different class surface
- the extra utilities are measurable in the primary CSS bundle
- the framework supports route-level or layout-level CSS entry points

Do not split CSS entry points for tiny one-off differences. The extra file, import path, and source boundary should pay for themselves through smaller critical CSS, less unused style matching, and simpler route ownership.

## Curated community accelerators for React fallback defaults

When a React/Tailwind/shadcn project is new or still open-ended, `better-react-web-ui` may also consider the curated shortlist in [React shadcn accelerators](./react-shadcn-accelerators.md).

Use that shortlist when:

- the request clearly maps to an existing community component with strong documentation
- the component page includes a concrete registry install path, usage examples, and API notes
- the dependency model is acceptable for the current framework and browser targets

Do **not** treat the shortlist as mandatory. It is a convenience layer for feature-fit acceleration, not a replacement for project-specific composition judgment.

In practice, that means:

- prefer **Sonner** when the request needs a React toast layer and the codebase does not already standardize on another one
- prefer **Vaul** when the request needs a React drawer / bottom-sheet primitive and the codebase does not already standardize on another one
- prefer **TanStack Form** when the request involves serious form work and the React form stack is still open
- prefer **TanStack Table** when the request involves serious table or data-grid work and the React table stack is still open

## Respect `shadcn create`, `shadcn apply`, and `components.json`

When a project was created with `npx shadcn create`, updated with `npx shadcn@latest apply`, or includes a `components.json` file with the shadcn schema, treat that project state as a stronger signal than the generic React fallback defaults.

Important implications from the official docs:

- `shadcn create` is designed to customize the project from the start — component library, icons, base color, theme, fonts, and overall style are part of the chosen baseline.
- The named styles and presets are not just palette swaps; they can change spacing, structure, geometry, and the feel of the generated component code.
- Typography-led styles matter as real product baselines. For example, a style such as `Sera` can bring serif display type, sans-serif body copy, square corners, uppercase tracked headings, and underlined controls that change the editorial feel of the entire app rather than merely tinting the palette.
- `shadcn apply` can switch presets in an existing project and update Tailwind theme variables, colors, fonts, icons, and reinstall existing components to match the new preset.
- `components.json` tells the CLI how the project is configured and can include important signals like `style`, `tailwind.baseColor`, `tailwind.cssVariables`, `tailwind.prefix`, aliases, registries, `rsc`, and `tsx`.
- shadcn now supports both Radix and Base UI ecosystems, and the CLI can auto-detect and transform components or blocks to match the selected library.

Practical rule for agents:

1. Check for `components.json` and treat it as a configuration source, not a random file.
2. Inspect the current Tailwind theme tokens, Tailwind variables, fonts, icons, and installed component code before assuming a default shadcn look.
3. If the project has already been customized through `shadcn create` or `shadcn apply`, preserve that baseline — including named style choices like typography-first editorial presets.
4. Do **not** "normalize" a customized project back to Vega/new-york/default-looking output just because the task is broad.
5. When the project is already committed to Radix or Base UI, match that ecosystem consistently across primitives, composed components, and blocks.

## Components vs patterns vs blocks

### Components

Small reusable building blocks such as buttons, inputs, selects, popovers, dialogs, tabs, tables, and toasts.

Use components when you need:

- strong integration with an existing codebase
- custom hierarchy, layout, or copy framing
- product-specific behavior
- a composable foundation that can be extended safely

### Patterns

Repeated arrangements built from components, such as filter bars, settings forms, command surfaces, pricing cards, auth panels, empty states, or dashboard widgets.

Use patterns when you need:

- consistency across multiple features
- a shared UX structure without freezing the entire page
- reusable compositions that still allow local variation

### Blocks

Larger prebuilt sections or flows, such as hero sections, pricing sections, feature grids, testimonials, auth screens, or dashboard surfaces.

Use blocks when you need:

- acceleration for common surface types
- a credible starting point for a new screen or section
- fast comparison of multiple directions before refinement

Do not confuse a block with a final design. A block is a head start, not permission to ship generic output unchanged.

## What "Base UI direction" means here

When this library says `shadcn/ui` in the Base UI direction, it means:

- start from composable, production-grade UI primitives
- prefer system-level consistency over one-off decorative flourishes
- customize layout, typography, color, spacing, and tone to fit the product
- treat the library as a foundation, not as the finished brand expression

This is about **how to use the primitives**, not about copying a default demo aesthetic.

## Positioning: primitives, block kits, motion libraries, and specialist kits

### `shadcn/ui`

Use for foundational components and custom product composition.

Best fit:

- application UI
- dashboards
- settings
- data-heavy surfaces
- flows that need product-specific logic or interaction states

### `shadcn/ui Blocks`

Use as a speed layer for common marketing and product surfaces.

Best fit:

- hero sections
- pricing sections
- feature sections
- auth scaffolds
- common landing page structures

### ReUI

Use as an accelerator when the project benefits from more prebuilt React/Tailwind composition options around common sections or polished UI structures.

Best fit:

- early exploration
- marketing/product sections where time-to-first-good-version matters
- situations where a prebuilt structure can be refined into a more distinctive direction

### shadcncraft

Use when the project benefits from production-ready shadcn-based components, blocks, pages, or a matching Figma-to-React design layer.

Best fit:

- teams aligning design assets and React implementation
- landing pages and application screens that can start from a polished page or block structure
- projects where a paid design/code system is acceptable

### Kibo UI

Use when the request maps to composable React components, functional widgets, or animated blocks that fit a shadcn-style Tailwind project.

Best fit:

- advanced components such as color pickers, code blocks, dropzones, QR code, marquee, or image zoom
- precomposed blocks where motion or richer interaction is part of the value
- projects that already use Radix, Lucide, Tailwind, and shadcn-style composition

### Marketing and page block kits

Use Tailark, shadcnblocks, Efferd, blocks.so, shadcncraft, or TripleD UI when the request is a recognizable marketing, landing, auth, pricing, testimonial, FAQ, feature, footer, or page-section job and speed to a credible first pass matters.

Best fit:

- landing pages and marketing sites
- common SaaS sections such as hero, logo cloud, features, pricing, testimonials, FAQs, contact, and footer
- quick variant exploration where the block will be rewritten and adapted to the product

### Motion and effects libraries

Use React Bits, Animate UI, Animata, Magic UI, Motion Primitives, Smooth UI, or Kibo UI when the request clearly needs polished motion, animated text, visual effects, gestural details, or interactive blocks that would be costly to craft from scratch.

Best fit:

- animated hero details
- interactive reveal effects
- motion-heavy landing surfaces
- expressive but bounded product moments

Do not reach for these libraries for routine hover, focus, opacity, or translate transitions that Tailwind utilities can handle cleanly.

### Specialist auth and billing UI

Use Better Auth UI when the project uses Better Auth and needs sign-in, sign-up, password recovery, magic-link, or social-login surfaces.

Use Billing SDK when the project needs billing, monetization, subscription, plan, checkout, or customer-portal UI.

Use Consent Manager or c15t when the project needs cookie consent, privacy settings, script loading control, or tracking consent flows.

Best fit:

- domain-specific flows where the library matches the backend/service model
- flows with many predictable states that benefit from a purpose-built component set
- projects where the dependency and service assumptions already align

### Base UI-based component systems

Use Basecn or coss/ui when the project wants a Base UI-based primitive catalog rather than a Radix-flavored shadcn stack.

Best fit:

- teams standardizing on Base UI primitives
- broad custom app UI needing many accessible primitives
- projects where the selected shadcn ecosystem already points toward Base UI

### Maps and geospatial UI

Use shadcn-map when the project wants Leaflet or React Leaflet maps that fit a shadcn/ui project.

Use mapcn when the project wants MapLibre-based React map components, blocks, and Tailwind-styled map UI.

Best fit:

- location search and discovery
- delivery, routing, field-service, travel, logistics, or real-estate surfaces
- dashboards where geospatial context is a primary content type

### Background patterns

Use PatternCraft when the request needs background patterns, gradients, grid textures, dot fields, or subtle decorative surfaces.

Best fit:

- hero backgrounds
- section separation
- empty states or lightweight brand texture
- subtle product personality without committing to heavy illustration

Do not treat any block source as mandatory. If the project already has a strong design system, or the request needs a very product-specific structure, compose directly from primitives and local patterns instead.

## Decision order

1. Match the existing project stack and component usage first.
2. If the codebase already uses `shadcn/ui`, extend it before introducing a second component direction.
3. If the request needs custom hierarchy, dense product logic, or strong differentiation, compose from components.
4. If the request is a common section type and speed matters, start from a block and refine aggressively.
5. If repeated structures emerge, extract a reusable pattern rather than keeping many slightly different local copies.

## When to start from primitives instead of blocks

Prefer primitives when:

- the request is data-dense or workflow-heavy
- the UI needs unusual hierarchy or information architecture
- the project already has strong local patterns to match
- the block would require so much restructuring that it stops saving time
- the design needs to feel meaningfully unlike common SaaS templates

## When a block is appropriate

A block is a good accelerator when:

- the request is a familiar section or shell type
- the codebase is still open-ended
- a fast exploration pass is more valuable than precise custom structure on the first draft
- the block gives useful scaffolding for spacing, content grouping, and responsive structure

## How to use blocks without producing generic output

When using a block:

- change the hierarchy to match the product's real priorities
- rewrite copy so it teaches the actual value proposition
- adjust spacing, type, media treatment, and action strategy to fit the chosen tone
- remove decorative filler that does not clarify the task
- extract reusable local patterns only after repeated use is clear

A good result may begin from a block, but it should not still read like a stock block once finished.

## Relationship to `add-ui`, `setup`, and `extract`

- Use `add-ui` to explore multiple directions and decide whether components, patterns, or blocks should lead.
- Use `setup` to record whether a project already uses `shadcn/ui`, whether it is customized, and whether blocks are already part of the stack.
- Use `extract` when repeated local compositions around these libraries deserve a documented shared pattern.
