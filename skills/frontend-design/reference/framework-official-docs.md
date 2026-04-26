# Framework Official Docs

Use this reference when a task is tied to a supported React framework, React runtime, or Astro project using React islands.

Before making framework-specific architecture or implementation decisions, consult the official docs for that framework first. Do not rely on stale memory, generic cross-framework habits, or copied snippets when the framework has explicit guidance for routing, rendering, data loading, forms, styling, or deployment.

This reference is a curated starting map, not a frozen copy of each ecosystem's documentation. Framework docs evolve quickly. Use the links below to orient yourself, then follow the official docs deeper for the exact feature you are implementing.

## Research workflow

When the project stack is known, do this in order:

1. **Confirm the actual supported framework in use**
   - Check the existing codebase first.
   - Distinguish plain React usage from a supported meta-framework such as Next.js, React Router, TanStack Start, Vite React, or Astro with React islands.

2. **Open the official docs entry page for that framework**
   - Start with the framework-specific links below instead of a generic search result.

3. **Read the framework's core architecture pages before coding**
   - project/app structure
   - routing
   - rendering model and server/client boundaries
   - data loading and mutations
   - forms and validation
   - Tailwind setup and asset handling
   - deployment / SSR / SSG / hydration implications

4. **Then do a focused web search only when needed**
   - If the official docs do not directly answer the version, adapter, or edge-case question, do a focused web search.
   - Verify whatever you find against official docs before treating it as guidance.

## Official docs starting points

### React

Use when the project is plain React or when a framework-specific answer should be grounded in React's own mental model.

- [React Learn](https://react.dev/learn)
- [React API reference](https://react.dev/reference/react)
- [Rules of React](https://react.dev/reference/rules)

Consult React docs first for component composition, hook correctness, state ownership, client component behavior, and render purity.

### Next.js

Use when the project is Next.js, especially App Router work.

- [Next.js docs](https://nextjs.org/docs)
- [Getting Started](https://nextjs.org/docs/app/getting-started)
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Rendering Philosophy](https://nextjs.org/docs/app/guides/rendering-philosophy)
- [Forms](https://nextjs.org/docs/app/guides/forms)
- [AI Coding Agents](https://nextjs.org/docs/app/guides/ai-agents)
- [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)

For modern Next.js projects, if bundled docs exist at `node_modules/next/dist/docs/`, read the relevant local doc before writing Next.js code. Treat those bundled local docs as the source of truth for the installed version.

### React Router

Use when the project is React Router rather than Next.js or TanStack Start.

- [React Router home](https://reactrouter.com/home)
- [Picking a Mode](https://reactrouter.com/start/modes)
- [Framework installation](https://reactrouter.com/start/framework/installation)
- [Framework routing](https://reactrouter.com/start/framework/routing)

Consult React Router docs first for mode choice, route configuration, nested outlets, route modules, loaders, actions, and rendering strategy.

### TanStack Start

Use when the project is TanStack Start for React.

- [TanStack Start docs](https://tanstack.com/start/latest)
- [Getting Started](https://tanstack.com/start/latest/docs/framework/react/getting-started)
- [Routing](https://tanstack.com/start/latest/docs/framework/react/guide/routing)
- [Execution Model](https://tanstack.com/start/latest/docs/framework/react/guide/execution-model)
- [Server Functions](https://tanstack.com/start/latest/docs/framework/react/guide/server-functions)

Consult TanStack Start docs first for isomorphic execution, route loaders, server functions, validation, document shell setup, hydration, and environment safety.

### Vite React

Use when the project is a Vite-powered React app.

- [Vite guide](https://vite.dev/guide/)
- [Vite features](https://vite.dev/guide/features)
- [Vite build guide](https://vite.dev/guide/build)
- [Tailwind install with Vite](https://tailwindcss.com/docs/installation/using-vite)

Consult Vite and React docs first for project structure, entry points, environment variables, asset handling, routing library choice, Tailwind setup, build behavior, and deployment expectations.

### Astro With React Islands

Use when the project is Astro and React is enabled or should be enabled for interactive islands.

- [Astro getting started](https://docs.astro.build/en/getting-started/)
- [Why Astro?](https://docs.astro.build/en/concepts/why-astro/)
- [Astro islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Front-end frameworks](https://docs.astro.build/en/guides/framework-components/)
- [React integration](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Tailwind integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

Consult Astro docs first for islands architecture, hydration directives, when to keep content server-rendered, React integration boundaries, and Astro-specific Tailwind setup.

Default Astro implementation bias:

- prefer Astro components, native HTML elements, and Tailwind-first styling before adding a framework island
- preserve Astro's low-JS / zero-JS-by-default model whenever the feature can be delivered without client-side framework code
- introduce React component stacks such as shadcn/ui, ReUI, shadcncraft, or Kibo UI when the user explicitly requests interactive React islands or the project already depends on that integration

### Motion For React

Use when the project explicitly asks for Motion / Framer Motion-style animation primitives, or when an animation-heavy React feature needs Motion instead of Tailwind transitions alone.

Important filter before reaching for it:

- if the effect is a simple hover, press, opacity fade, translate entrance, reduced-motion fallback, or other self-contained state transition, prefer Tailwind utilities first
- use Motion when the interaction truly benefits from layout animation, gestures, motion values, framework-linked orchestration, or richer scroll/state coupling

- [Motion for React](https://motion.dev/docs/react)

Practical adapter rule:

- React-based web apps use the `motion` package with imports from `motion/react`
- Astro React islands may use Motion inside the hydrated React island only

Consult Motion docs first for package and import path, gesture APIs, layout animations, scroll animations, SVG animation support, and when Tailwind transitions are the simpler choice.

## Practical rule for agents

If the framework is known, do not jump straight from generic frontend instincts to code.

Instead:

- start from the official docs for that exact framework
- read the framework-specific architecture pages that affect the feature
- only then choose implementation details, component libraries, rendering patterns, or deployment-sensitive behavior

This prevents subtle mistakes that look fine in a code review and then fail at runtime.
