# Component Accessibility

Use this reference when the work involves accessible front-end components, keyboard-only interaction, focus indicators, skip links, hidden content, modal focus handling, or evaluating whether a custom or third-party component is genuinely accessible rather than merely marketed that way.

This reference is intentionally cross-cutting.

It is not a replacement for the component-specific guidance in `component-anatomy.md`, nor for the broader product interaction rules in `interaction-design.md`.

Use it when the accessibility questions sit **across many components at once**.

## Start with the cross-cutting question

Before choosing a component pattern, ask:

- can users operate this with keyboard alone?
- will screen readers understand what it is, what state it is in, and what it controls?
- is the visible design providing a focus cue, state cue, and purpose cue without relying on one fragile signal?
- if this component is hidden, disabled, moved, inserted, or removed, what happens to focus and discoverability?
- if this is from a third-party library, how do we know it works beyond the README claims?

Accessibility failures often come from missing these system questions rather than from one bad ARIA attribute.

## Native semantics first

Prefer native HTML that already has the expected behavior:

- links for navigation
- buttons for actions
- inputs for input
- labels for labels
- lists for grouped items
- fieldsets and legends for related form controls

Do not turn generic elements into pseudo-controls unless there is a very strong reason.

If a native element already gives you the semantics and keyboard behavior, using something else usually creates more work and more failure paths.

## Keyboard parity beats hover cleverness

If pointer users can reveal, open, dismiss, or switch something, keyboard users need an equally straightforward path.

Common traps:

- hover-only menus
- hover-only help content
- icon-only controls that only explain themselves on hover
- controls whose secondary actions appear visually but cannot be reached predictably by focus

Good defaults:

- every hover affordance should have a focus-safe equivalent when it matters
- every revealed panel should be discoverable without pointer precision
- keyboard traversal should follow the real structure of the UI rather than a hidden implementation structure

## Focus indicators must be obvious, not polite whispers

Do not remove outlines without a better replacement.

Strong defaults for focus indicators:

- visible contrast against adjacent colors
- enough thickness to be noticed quickly
- offset or outer treatment so the ring does not collapse into the component edge
- consistency across major controls

Focus styling is not just for keyboard specialists. It also signals interactivity and helps users maintain orientation.

### Practical rules

- avoid focus styles so subtle that they disappear on tinted surfaces
- avoid making focus visible only for one assumed input mode if that removes valuable affordance for others
- style parent groups with `:focus-within` when that improves clarity for grouped inputs or controls

## Do not invent manual tab order unless you absolutely must

The default DOM order is usually the correct tab order.

Avoid:

- positive `tabindex` values
- manually numbering tab stops
- making non-interactive content focusable just so assistive tech can “find it”

Useful rule:

- use `tabindex="-1"` when you need to programmatically focus something that should not sit in the normal tab sequence

That is especially useful for:

- modal headings or containers
- skip-link targets
- post-action status or region jumps

## Skip links are worth the small effort

Skip links help users bypass repeated navigation and jump to the part of the page they actually need.

Strong defaults:

- make the primary skip link the **first tab stop**
- hide it visually until focus, then show it clearly
- link to a meaningful target such as the main content region
- ensure the target can accept focus when browser quirks require it, often via `tabindex="-1"`

### Multiple skip links can be valid

They can also help users skip:

- to the footer
- past a long table of contents
- past an iframe or dense embedded region
- to a workspace or results region

If a page has unusually repetitive or laborious navigation zones, more than one skip link can be justified.

## Hide content responsibly

Different hiding techniques solve different problems.

### Hide visually and from assistive tech

Use when content is truly not available right now.

Prefer:

- `hidden`
- `display: none`

Typical cases:

- closed dialogs
- collapsed content that should not be discoverable
- offscreen navigation that is not active

### Hide from assistive tech but keep visible

Use only for presentational content that adds no meaning.

Prefer:

- `aria-hidden="true"`

Typical cases:

- decorative icons
- decorative SVGs that would otherwise produce noisy announcements

### Hide visually but keep available to assistive tech

Use a visually hidden utility when the hidden text provides necessary context.

Typical cases:

- icon button labels
- additional explanation for links or controls
- screen-reader-only supporting text

The more your visual and accessibility layers disagree, the more fragile the component becomes.

## Current-page and selected states need more than color

Color alone is not a reliable state cue.

For current-page navigation and similar selected states:

- add a second visible cue such as an icon, underline, border, or shape shift
- use `aria-current="page"` for the current page when appropriate
- keep presentational SVGs hidden from assistive tech with `aria-hidden="true"`
- prevent decorative inline SVGs from becoming stray tab stops with `focusable="false"` where needed

If the state marker is an inline SVG, define its dimensions in HTML and let it inherit color with `currentColor` so the cue stays resilient and themeable.

## Buttons and links are not interchangeable

Use a link when the user goes somewhere else.

Use a button when the user changes the current interface.

Typical button cases:

- opening a modal
- toggling an accordion
- revealing a submenu
- starting or stopping media
- switching interface state

Misusing links as faux buttons often produces keyboard, focus, and expectation problems across the whole product.

## Modal and overlay focus should tell a coherent story

When a modal opens, users need two things immediately:

- confirmation that a new interaction context opened
- a reliable keyboard boundary inside that context

### Good modal focus defaults

- move focus into the modal deliberately
- choose a first focus target that helps orientation, often the heading, container, or first meaningful control
- keep focus within the modal while it is active
- restore focus to the opener when the modal closes, unless the flow has clearly moved elsewhere

### Avoid

- dropping focus onto the page body
- trapping users in a true keyboard trap with no exit
- reopening the modal state without restoring context
- picking an initial focus target that is chatty but unhelpful

`inert` can help suppress background interaction, but support and performance must still be tested in the real browser mix.

## Programmatic focus after add/remove actions is a UX decision

When UI changes dynamically, do not let the browser choose the focus destination by accident.

### After removing an item

Move focus to the next **safe, logical** element.

Often this means:

- the surviving label or field near the deleted item
- the next relevant field
- the group heading when the last item in a group is removed

Avoid moving focus straight to another destructive control if a repeated keypress could cause accidental cascading deletes.

### After adding an item

If users added a new field because they likely want to fill it out now, move focus directly into that new field.

Avoid keeping focus on the `Add another` control when that encourages accidental double-add behavior.

### After dismissing a modal or temporary surface

Return focus to the element that opened it, unless the interaction clearly changes the next best step.

Good focus movement helps keyboard and assistive-technology users keep the same narrative continuity that pointer users get visually.

## Third-party component claims are not proof

“Accessible” can mean anything from “uses some ARIA” to “tested thoroughly with real users and assistive technologies.”

Ask:

- how was it tested?
- with which screen readers, browsers, and input modes?
- are the tradeoffs and known issues documented?
- are keyboard behaviors described clearly?
- are there demos that expose real focus order and announcements?
- does the component rely on patterns that are technically spec-aligned but still awkward in real use?

If the answer is vague marketing copy, treat the claim as unverified.

## Document accessibility in design handoff

Accessibility should not appear only after engineering implementation.

Useful design-handoff notes include:

- expected tab order where it matters
- focus entry and return points for overlays and dynamic UI
- keyboard behavior for tabs, menus, sliders, and complex widgets
- accessible names for icon-only controls
- hidden-content rules
- ARIA expectations when the pattern truly needs them
- error, status, and live-region expectations when dynamic feedback exists

The earlier these behaviors appear in design artifacts, the less likely they are to become last-minute retrofit work.

## Test components like components, not like screenshots

At a minimum, test by:

- tabbing through the interface without a mouse
- checking visible focus on every interactive control
- verifying that hover-only content is reachable by focus or another explicit action
- opening and closing overlays and checking where focus goes
- testing current-page and selected states without relying on color alone
- checking contrast for focus rings, icons, and state cues
- sampling a screen reader workflow for the highest-risk components

Useful references and support checks include:

- compatibility/support matrices such as a11ysupport-style resources
- WAI-ARIA authoring practices as a starting point, not an end-of-story guarantee
- component-specific testing in the actual browser / assistive-tech combinations your users rely on

## Practical checklist

- Are native elements doing as much of the work as possible?
- Can keyboard users operate every important reveal, switch, and dismissal path?
- Are focus indicators strong and consistent?
- Is tab order left to the DOM unless there is a very strong reason not to?
- Are skip links present where repeated chrome or long sections justify them?
- Is hidden content hidden with the right technique for the job?
- Do current-page and selected states use more than color alone?
- Does modal focus enter, trap, and restore coherently?
- After add/remove actions, does focus move somewhere safe and logical?
- Are third-party accessibility claims backed by evidence rather than branding?
- Are accessibility behaviors documented in handoff, not just hoped for in code review?

Good component accessibility feels predictable, calm, and explicit even when the UI is highly interactive.

For color-dependent states, legends, chart series, and selected/current cues that must remain understandable for people with color-vision deficiencies, also use [colorblindness UX](./colorblindness-ux.md).