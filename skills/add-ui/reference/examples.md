## Command naming

`add-ui` is the canonical skill name in this repository.

Some hosts may expose a friendly `/add` alias, but documentation, wrappers, and source files should continue to refer to the skill as `add-ui`.

## Example requests

- `/add-ui hero section for a B2B security product homepage`
- `/add-ui redesign the existing hero section for a B2B security homepage; keep the same core structure and proof points, but explore new style, colors, copywriting, and typography`
- `/add-ui pricing section for a developer tool with monthly and annual billing`
- `/add-ui upgrade paywall for a freemium AI writing app after the user hits the monthly generation limit`
- `/add-ui dashboard shell for an operations analytics platform`
- `/add-ui onboarding flow for a budgeting app aimed at first-time users`
- `/add-ui product comparison table for a high-consideration ecommerce category`
- `/add-ui redesign our existing login/register screens; keep the flow familiar but show five distinct visual and editorial directions we can compare`
- `/add-ui redesign this blog landing page while preserving its section order and content blocks; make the options feel meaningfully different without turning it into a different site`

Equivalent host-level alias examples:

- `/add hero section for a B2B security product homepage`
- `/add dashboard shell for an operations analytics platform`

## Expected behavior

The skill should:

1. classify the request
2. detect whether the request is net-new UI or a redesign of an existing artifact
3. preserve the recognizable structure when the user asks to keep the essence or current layout
4. generate **5** genuinely different directions
5. explain tradeoffs in a compact comparison format
6. recommend one direction when the goals clearly favor it
7. help preview and apply the selected option

For redesign requests that preserve structure, the directions should usually vary typography, color, copy framing, proof treatment, density, and detail language more than the underlying page skeleton.

## Layering examples

- **Component-led** — `/add-ui dense analytics filter bar for an operations dashboard`  
	Use when the artifact is workflow-heavy, stateful, or tightly coupled to existing product logic, so composition from primitives should lead.

- **Pattern-led** — `/add-ui reusable settings section pattern for notifications, privacy, and billing preferences`  
	Use when the main goal is a repeatable local structure built from existing components rather than a one-off screen.

- **Block-led** — `/add-ui hero section for a new developer tool homepage`  
	Use when the request is a familiar marketing surface and a prebuilt block can accelerate exploration before stronger differentiation.