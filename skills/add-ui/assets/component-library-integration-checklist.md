# Component Library Integration Checklist

Use this checklist when `add-ui` is working in a React/Tailwind project where `shadcn/ui`, shadcn block kits, motion libraries, map component kits, consent UI, background pattern sources, specialized auth/billing UI, or Base UI-based primitives may influence implementation.

## Detect first

- Does the project already use `shadcn/ui` components or local wrappers around them?
- Does the project already use ReUI, shadcncraft, Kibo UI, Basecn, Tailark, shadcnblocks, React Bits, Animate UI, Animata, Magic UI, Motion Primitives, Efferd, Billing SDK, blocks.so, coss/ui, Better Auth UI, Smooth UI, TripleD UI, shadcn-map, mapcn, Consent Manager, c15t, or PatternCraft components or blocks?
- Are there existing tokens, variants, or spacing conventions that new work should match?
- Are blocks already present in the codebase, or is the stack still open?
- Does the project include a `components.json` file with the shadcn schema?
- Was the project likely initialized with `shadcn create` or updated with `shadcn apply`, based on its preset, component code, tokens, fonts, icons, or docs?
- Is the project effectively Radix-based, Base UI-based, or mixed?

## Decide the lead layer

- Use **components** when the request is workflow-heavy, data-dense, or highly product-specific.
- Use **patterns** when repeated compositions already exist or should be standardized.
- Use **blocks** when the request is a familiar section type and faster scaffolding is genuinely helpful.

## Avoid block-first by default when

- the project already has strong local patterns
- the artifact is dense, operational, or state-heavy
- the block would need major restructuring to fit the product
- five directions would become five cosmetic remixes of the same scaffold

## If using a block

- change hierarchy, copy, and action strategy
- adapt typography, spacing, and media treatment to the product tone
- remove decorative filler
- avoid shipping the upstream shape unchanged
- keep the project's current shadcn preset, component library flavor, and token baseline intact

## Current availability rule

- Do not maintain a frozen local inventory of every upstream component or block.
- Check official upstream documentation for current `shadcn/ui`, shadcn block kits, motion libraries, map component kits, consent UI, background pattern sources, specialized auth/billing UI, and Base UI-based primitive availability.
- If the docs still leave gaps, do a focused web search and verify what you find against the upstream docs before relying on it.

## Official docs quick links

- [`shadcn/ui` components](https://ui.shadcn.com/docs/components)
- [`shadcn/ui` TanStack Form docs](https://ui.shadcn.com/docs/forms/tanstack-form)
- [`shadcn/ui` Blocks](https://ui.shadcn.com/blocks#blocks)
- [ReUI components](https://reui.io/components)
- [ReUI docs](https://reui.io/docs)
- [shadcncraft](https://shadcncraft.com/)
- [Kibo UI components](https://www.kibo-ui.com/components)
- [Kibo UI blocks](https://www.kibo-ui.com/blocks)
- [Basecn](https://basecn.dev/)
- [Tailark](https://tailark.com/)
- [shadcnblocks](https://www.shadcnblocks.com/)
- [React Bits](https://reactbits.dev/)
- [Animate UI](https://animate-ui.com/)
- [Animata](https://animata.design/docs)
- [Magic UI](https://magicui.design/)
- [Motion Primitives](https://motion-primitives.com/docs)
- [Efferd](https://efferd.com/)
- [Billing SDK](https://billingsdk.com/)
- [blocks.so](https://blocks.so/)
- [coss/ui](https://coss.com/ui)
- [Better Auth UI](https://better-auth-ui.com/)
- [Smooth UI](https://smoothui.dev/)
- [TripleD UI](https://ui.tripled.work/)
- [shadcn-map](https://shadcn-map.vercel.app/)
- [mapcn](https://mapcn.vercel.app/)
- [Consent Manager](https://chanhdai.com/components/consent-manager)
- [c15t](https://c15t.com/)
- [PatternCraft](https://patterncraft.fun/)
- [Tailwind utility classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Tailwind states and variants](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind dark mode](https://tailwindcss.com/docs/dark-mode)
- [Tailwind theme variables](https://tailwindcss.com/docs/theme)
- [Tailwind colors](https://tailwindcss.com/docs/colors)
- [Tailwind adding custom styles](https://tailwindcss.com/docs/adding-custom-styles)
- [Tailwind detecting classes in source files](https://tailwindcss.com/docs/detecting-classes-in-source-files)
- [Tailwind functions and directives](https://tailwindcss.com/docs/functions-and-directives)
- [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide)
- [Tailwind install with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Tailwind install with PostCSS](https://tailwindcss.com/docs/installation/using-postcss)
- [Tailwind framework guides](https://tailwindcss.com/docs/installation/framework-guides)
