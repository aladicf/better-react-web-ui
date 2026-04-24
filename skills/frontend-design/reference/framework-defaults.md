# Framework Defaults

Use this reference when the project stack is open and no stronger convention exists.

## Precedence

1. **Detect and match the existing project stack first**
   - Infer the framework / runtime already in use
   - Infer the current styling approach
   - Infer the current component library, design system, and token setup
   - Continue with the existing stack unless the user explicitly asks to change it

2. **Respect explicit user choices for new projects second**
   - If the user says to use Tailwind, CSS modules, Nuxt UI, shadcn-vue, Angular Material, etc., treat that as the default
   - If `setup` has already recorded implementation defaults for the project, follow those stored defaults before inventing new ones

3. **Use these framework defaults last**, only when the project is new and unspecified

## Default matrix

- **React-based frameworks and meta-frameworks** (`Next.js`, `TanStack Start`, `React Router`, Vite React)
  - styling: **Tailwind CSS**
  - components: **shadcn/ui** in the Base UI direction
  - accelerators: **shadcn/ui Blocks**, **re-ui** components / blocks, and the curated React/shadcn accelerator shortlist in [react-shadcn-accelerators](react-shadcn-accelerators.md) when the feature request matches

- **Astro**
  - styling: **Tailwind CSS**
  - components: **HTML-first Astro components and native elements by default**
  - integration rule: only reach for **React** + **shadcn/ui** when the user explicitly asks for React-compatible component integration or the existing Astro project already uses that stack

- **Laravel + Inertia / React**
  - styling: **Tailwind CSS**
  - components: **shadcn/ui** in the Base UI direction
  - accelerators: **shadcn/ui Blocks**

- **Vue / Nuxt**
  - styling: **Tailwind CSS**
  - components: **Nuxt UI** or **shadcn-vue**

- **Svelte / SvelteKit**
  - styling: **Tailwind CSS**
  - components: **shadcn-svelte**

- **Angular**
  - styling: **Tailwind CSS**
  - components: **Angular Material** or **ZardUI**

- **SolidJS / Solid-based meta-frameworks**
  - styling: **Tailwind CSS**
  - components: **SolidUI**

## Problem shorthand

When the stack is still open, keep these defaults in mind:

- **forms** → **TanStack Form**
- **tables / datagrids** → **TanStack Table**
- **long lists / virtual lists** → **TanStack Virtual**
- **React toasts** → **Sonner**
- **React drawers / bottom sheets** → **Vaul**
- **predictive wrapped-text sizing before DOM measurement** → **Pretext**

Those are defaults, not mandates. Existing project choices still win first.

## Important caveats

Treat these as preferred defaults, not universal truths:

- Do **not** force React-only component libraries into non-React stacks
- Do **not** add React islands to Astro by default when plain Astro components and HTML solve the task cleanly
- Do **not** replace an existing design system unless the task explicitly calls for it
- Do **not** describe `better-web-ui` itself as Tailwind-only or React-only

## Framework-specific guidance

When the project uses a specific frontend framework or meta-framework, consult [framework official docs](framework-official-docs.md) before making framework-specific implementation decisions. Use the official docs to confirm architecture, routing, rendering boundaries, data loading, forms, styling, and deployment expectations instead of guessing from generic cross-framework habits.

For **Next.js** specifically, if the project includes bundled version-matched docs at `node_modules/next/dist/docs/`, read the relevant local Next.js doc there before coding. Treat those bundled docs as the source of truth for the installed version instead of relying on stale memory. If the project is on an older Next.js version that does not bundle docs there yet, follow the official AI-agents setup guidance and codemod path described in [framework official docs](framework-official-docs.md).

When React-based fallback defaults are relevant, use [component and block strategy](component-and-block-strategy.md) to decide when to compose from `shadcn/ui` primitives, when blocks are an appropriate accelerator, and how to avoid shipping generic library output unchanged.

When the project does **not** have a mature component library and you need to build or refine primitives from scratch, use [component anatomy](component-anatomy.md) for practical anatomy guidance on custom components such as buttons, cards, checkboxes, dropdowns, tabs, textareas, toasts, toggles, tooltips, accordions, avatars, badges, borders, breadcrumbs, iconography, lists, and submit actions.
