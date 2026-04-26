# Framework Defaults

Use this reference when the project stack is open and no stronger convention exists.

## Precedence

1. **Detect and match the existing project stack first**
   - Infer the React framework / runtime already in use
   - Infer the current Tailwind setup
   - Infer the current component library, design system, and token setup
   - Continue with the existing React and Tailwind stack unless the user explicitly asks to change it

2. **Respect explicit user choices for new projects second**
   - If the user says to use a supported React framework, Tailwind setup, or React component library, treat that as the default
   - If `setup` has already recorded implementation defaults for the project, follow those stored defaults before inventing new ones

3. **Use these framework defaults last**, only when the project is new and unspecified

## Default matrix

- **React-based frameworks and meta-frameworks** (`Next.js`, `TanStack Start`, `React Router`, Vite React, plain React)
  - styling: **Tailwind CSS**
  - components: **shadcn/ui** as the default foundation
  - accelerators: **shadcn/ui Blocks**, **ReUI**, **shadcncraft**, **Kibo UI**, **Basecn**, **Tailark**, **shadcnblocks**, **React Bits**, **Animate UI**, **Animata**, **Magic UI**, **Motion Primitives**, **Efferd**, **Billing SDK**, **blocks.so**, **coss/ui**, **Better Auth UI**, **Smooth UI**, **TripleD UI**, **shadcn-map**, **mapcn**, **c15t**, **PatternCraft**, and the curated React/shadcn accelerator shortlist in [react-shadcn-accelerators](react-shadcn-accelerators.md) when the feature request matches

- **Astro with React islands**
  - styling: **Tailwind CSS**
  - components: **Astro components for static structure, React islands for interactive component-library surfaces**
  - integration rule: use React islands when the feature genuinely needs interactivity or when the existing Astro project already uses React component islands

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

- Do **not** recommend unsupported non-React frameworks as implementation defaults
- Do **not** add React islands to Astro by default when plain Astro components and Tailwind solve the task cleanly
- Do **not** recommend non-Tailwind styling architectures
- Do **not** replace an existing design system unless the task explicitly calls for it
- Do **not** describe `better-react-web-ui` as a broad UI package

## Framework-specific guidance

When the project uses a supported React framework or Astro with React islands, consult [framework official docs](framework-official-docs.md) before making framework-specific implementation decisions. Use the official docs to confirm architecture, routing, rendering boundaries, data loading, forms, styling, and deployment expectations instead of guessing from generic cross-framework habits.

For **Next.js** specifically, if the project includes bundled version-matched docs at `node_modules/next/dist/docs/`, read the relevant local Next.js doc there before coding. Treat those bundled docs as the source of truth for the installed version instead of relying on stale memory. If the project is on an older Next.js version that does not bundle docs there yet, follow the official AI-agents setup guidance and codemod path described in [framework official docs](framework-official-docs.md).

Use [component and block strategy](component-and-block-strategy.md) to decide when to compose from `shadcn/ui` primitives, supported block kits, motion libraries, specialized auth/billing UI, Base UI-based primitives, or custom React components, and how to avoid shipping generic library output unchanged.

When the project does **not** have a mature component library and you need to build or refine primitives from scratch, use [component anatomy](component-anatomy.md) for practical anatomy guidance on custom components such as buttons, cards, checkboxes, dropdowns, tabs, textareas, toasts, toggles, tooltips, accordions, avatars, badges, borders, breadcrumbs, iconography, lists, and submit actions.
