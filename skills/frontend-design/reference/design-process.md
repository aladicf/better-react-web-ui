# Design Process

Use this reference when a request needs a clearer path from rough thinking to a polished interface.

The point of the design process is not ceremony. It is to reduce confusion, surface problems early, and make visual decisions in the right order.

## A practical three-layer model

Think of the process as three connected layers:

1. **Wireframes**
   - low-fidelity structure for a screen, flow, or page
   - used to define layout, priority, navigation, and task support

2. **Styleguide**
   - the working reference for visual standards, reusable elements, and recurring patterns
   - used to stabilize colors, type, spacing, controls, and surface behavior before the design drifts

3. **Prototype**
   - a higher-fidelity mockup or interactive demo that shows how the product should actually feel in use
   - used to test flow, fidelity, and interaction expectations before or during implementation

This is not a rigid waterfall. Move between layers as needed. The important part is to avoid jumping straight into polished UI before the structure is doing its job.

## Start with wireframes

Wireframes are simple, low-fidelity layouts that show where navigation, content, actions, and supporting elements belong.

Their job is to reveal the skeletal logic of the product, not to prove final visual taste.

### What wireframes should answer

- what problem this screen is solving
- what the primary task is
- where the user looks first, second, and third
- how navigation, content, and actions relate
- whether the business rules and interactions are visible in the interface

### Why wireframing is worth the time

- **clarity**: makes placement, grouping, and hierarchy easier to discuss
- **speed**: exposes bad ideas before they become expensive polished work
- **usability**: helps find structural and architectural problems early
- **validation**: checks that the intended rules, flows, and interactions are actually represented on screen

### The key operating rule

Solve **one problem at a time**.

Do not use a wireframe to solve information architecture, visual identity, and detailed component polish all at once. First make the structure make sense.

## How to make wireframes look intentional without becoming high-fidelity

Low-fidelity does not have to mean careless. Good wireframes should feel readable, calm, and obviously unfinished in the right ways.

### 1. Remove clutter aggressively

Avoid anything that drags attention into final-visual-design territory too early:

- polished photography or screenshots
- detailed illustrations
- production-ready copy everywhere
- decorative color usage with no structural purpose

Prefer:

- simple boxes for media
- placeholder or rough copy where detailed language is not yet the question
- plain surfaces that keep the conversation on layout and flow

### 2. Use restrained color on purpose

Do not default to stark black-and-white or messy sketch styling if it makes hierarchy harder to read.

Instead:

- use gray values to communicate emphasis and grouping
- use one primary color sparingly for the main action or key signal
- use a secondary accent only when it clarifies role differences
- keep secondary actions visibly quieter through outline or ghost treatment rather than competing filled buttons

### 3. Preserve real proportions

Even in low fidelity, size relationships matter.

Use relative size to communicate:

- headline vs support text
- primary action vs secondary action
- dominant content area vs supporting panel
- large high-priority media vs small decorative or optional content

If everything is the same size, the wireframe stops teaching anything useful about hierarchy.

### 4. Make element purpose obvious

A non-technical reviewer should be able to tell what the main controls are without explanation.

- buttons should read as actions
- inputs should look typable
- navigation should feel navigational
- cards, lists, tables, and panels should signal their role clearly

When in doubt, strip an element back until removing anything else would make its purpose ambiguous.

That usually reveals the simplest version that still communicates intent.

## When to move from wireframes to a styleguide

Move into styleguide work once the broad structure is stable enough that visual decisions should become reusable instead of improvised.

Use the styleguide layer to define and stabilize things like:

- type roles and hierarchy
- color roles and action emphasis
- spacing rhythm
- surface styles and elevation logic
- interaction states
- recurring UI patterns and component conventions

The styleguide is what stops each new screen from becoming a fresh negotiation.

## When to prototype

Move into prototyping when the team needs to test the experience closer to reality.

Typical reasons:

- a flow needs to be reviewed end to end
- an interaction pattern needs to be felt, not just described
- stakeholders need to validate fidelity and behavior together
- implementation is about to begin and the team needs a stronger reference point

Prototypes should answer questions that wireframes and static style decisions cannot answer alone.

## Practical sequence for agents

When the request is open-ended or structurally ambiguous, prefer this order:

1. define the task and user goal
2. sketch wireframes for the critical screen or flow
3. check hierarchy in grayscale first
4. stabilize reusable visual rules in a lightweight styleguide mindset
5. raise fidelity only after the structure works
6. prototype or implement the key interaction path

## Good outcomes from this process

By following this progression, the work should make it easier to:

- create wireframes for layout, page content, and navigation
- turn rough structure into consistent visual rules
- convert those decisions into polished prototypes or implementation-ready direction

---

**Avoid**: treating wireframes as miniature finished comps, solving multiple unrelated design problems in one pass, over-coloring low-fidelity work, or using polished visuals to hide weak structure.