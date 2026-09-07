# Resolve project and page context

Use this procedure when identifying the design system for a target, persisting setup, or continuing substantial page work. It uses existing project files and ordinary Markdown. No helper runtime is required.

## Resolve the owning application

1. Resolve the requested route, page, or component to its owning application. Honor an explicitly named application. Inspect imports and workspace configuration when ownership is unclear.
2. Read applicable repository and nested instructions. Their scope still applies when an application has its own design context.
3. Read `.better-react-web-ui.md` in that application's root. Read parent context up to the repository root for shared defaults. Application-specific values override inherited design defaults, subject to explicit user instructions.
4. Read a matching page brief, existing `DESIGN.md`, brand documents, and relevant tokens or components. Do not read a sibling application's context as a fallback.
5. If ownership remains ambiguous and changes would cross application boundaries, ask which application is intended. Continue independent inspection while waiting.

A shared component package may serve several applications. Inspect its callers before assigning it one application's branding. Preserve shared contracts and use consumer-level styling when the component's API supports it.

For a single-app repository, the repository root remains the application root. An absent context file does not make existing code a blank slate.

## Distinguish facts, decisions, and observations

- User-confirmed product facts and brand constraints describe what must be true.
- Documented decisions describe the intended design. Record their source and scope.
- Tokens, components, and current screenshots describe the implemented design.
- Assumptions describe unresolved choices made under delegated authority. Never present them as user answers.

When documents disagree with code, name the mismatch. A requested normalization may restore documented intent. A requested documentation update may record implemented behavior. Do not silently overwrite either to make them agree.

Read an existing `DESIGN.md` as a design-system input. Preserve its format and link to it instead of copying its token inventory. When canonical context is absent, check `.better-web-ui.md`, `.better-ui.md`, then `.impeccable.md` only at the resolved application or applicable parent scope. Migrate relevant material during requested setup work without deleting the originals.

## Persist context in the correct place

For requested setup, update `.better-react-web-ui.md` in the owning application's root. Keep shared defaults at the repository root. Record only application-specific differences in a child file, with a relative link to inherited guidance.

Preserve unrelated sections. Update `AGENTS.md` only when requested. Do not rewrite context, create a report, or migrate files during an advice-only request.

## Record a page brief when it helps continuation

For substantial page creation or redesign, reuse a matching brief when one exists. If no record exists, keep these decisions in the working response. Persist them when the user requests reusable context or has authorized project documentation as part of implementation.

Use a `## Page briefs` section in the application's `.better-react-web-ui.md`. Key each entry by route and source path. A component within a page inherits that page's purpose unless the task explicitly changes it. Do not create a separate history or registry.

```markdown
## Page briefs

### /pricing: src/routes/pricing.tsx

- Visitor intent: evaluate plans and choose a suitable one.
- Audience and primary action: [confirmed audience and working destination]
- Available evidence: [verified claims and their sources]
- Fixed constraints: [brand, content, behavior, and section order]
- Selected direction: [composition and source of the decision]
- Reference: [existing approved reference, if any]
- Open decisions: [assumptions or missing inputs]
- Last checked: [date and source revision or working-tree state]
```

Choose visitor intent per page. A landing page helps a visitor decide, an admin page helps complete a task, documentation helps understanding, and a gallery centers the work being viewed. These are planning prompts, not rigid categories or required fields for every repair.

Before reusing a brief, compare its target and constraints with the current request and code. Update stale decisions only within authorized scope. Never reuse one route's proof, pricing, or audience claims as another route's facts.
