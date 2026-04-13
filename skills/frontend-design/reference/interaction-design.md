# Interaction Design

## Familiarity Beats Novelty (Jakob's Law)

Users spend most of their time in other products, so common interactions should feel familiar before they feel clever.

Use established patterns for common primitives:
- navigation where users expect it
- search that behaves like search
- tabs that look and act like tabs
- filters, tables, forms, dropdowns, pagination, and settings that follow recognizable conventions

When in doubt, innovate in workflow efficiency, defaults, or information density — not by reinventing how basic controls work.

### Apply Jakob's Law by default

- Keep icons conventional unless the label makes the meaning unmistakable
- Match category expectations for things like dashboard navigation, inline table actions, destructive confirmations, and account settings
- Use native platform behavior or strong platform conventions when they already solve the problem well
- Prefer familiar patterns first, then add personality through typography, tone, color, motion, and layout

### Suspicious moves

- Custom controls for standard tasks without a strong usability reason
- Hiding common actions behind surprising gestures or non-obvious entry points
- Inventing novel icon meanings for search, settings, notifications, share, or close
- Requiring users to learn a bespoke interaction model just to complete routine tasks

## The Eight Interactive States

Every interactive element needs these states designed:

| State | When | Visual Treatment |
|-------|------|------------------|
| **Default** | At rest | Base styling |
| **Hover** | Pointer over (not touch) | Subtle lift, color shift |
| **Focus** | Keyboard/programmatic focus | Visible ring (see below) |
| **Active** | Being pressed | Pressed in, darker |
| **Disabled** | Not interactive | Reduced opacity, no pointer |
| **Loading** | Processing | Spinner, skeleton |
| **Error** | Invalid state | Red border, icon, message |
| **Success** | Completed | Green check, confirmation |

**The common miss**: Designing hover without focus, or vice versa. They're different. Keyboard users never see hover states.

## Focus Rings: Do Them Right

**Never `outline: none` without replacement.** It's an accessibility violation. Instead, use `:focus-visible` to show focus only for keyboard users:

```css
/* Hide focus ring for mouse/touch */
button:focus {
  outline: none;
}

/* Show focus ring for keyboard */
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

**Focus ring design**:
- High contrast (3:1 minimum against adjacent colors)
- 2-3px thick
- Offset from element (not inside it)
- Consistent across all interactive elements

## Target Acquisition (Fitts's Law)

The faster an interface asks users to act, the less precision it should demand.

Primary and frequent actions should be large enough, close enough, and separated enough to hit confidently.

### Practical rules

- Keep touch targets at **44x44px minimum** on touch devices
- Expand the hit area for icon buttons, close controls, tiny toggles, and row actions even if the visible glyph stays small
- Place the next likely action near the content or cursor/focus location that leads to it
- Separate destructive actions from high-frequency safe actions so slips are less likely
- On mobile, keep important actions within comfortable thumb reach instead of pinning everything to the top edge

### Good tradeoffs

- A visually quiet icon button can still have a generous invisible hit area
- Dense data UIs can stay compact while preserving usable click targets through padding and row height
- Sticky action bars are often better than tiny floating controls when the action matters repeatedly

### Anti-patterns

- Tiny close buttons in modal corners
- Checkbox and radio layouts that require precision clicking on the control instead of the whole label row
- Multiple cramped icon actions jammed together without spacing or confirmation strategy
- Primary actions placed far from the context where the user decides to act

## Form Design: The Non-Obvious

**Placeholders aren't labels**—they disappear on input. Always use visible `<label>` elements. **Validate on blur**, not on every keystroke (exception: password strength). Place errors **below** fields with `aria-describedby` connecting them.

## Loading States

**Optimistic updates**: Show success immediately, rollback on failure. Use for low-stakes actions (likes, follows), not payments or destructive actions. **Skeleton screens > spinners**—they preview content shape and feel faster than generic spinners.

When the product has a reusable skeleton primitive, prefer **layout-faithful skeleton wrappers** over manually sizing gray rectangles for every screen. Rendering the real component with mock content inside a skeleton treatment preserves authentic wrapping, media proportions, and spacing.

## Modals: The Inert Approach

Focus trapping in modals used to require complex JavaScript. Now use the `inert` attribute:

```html
<!-- When modal is open -->
<main inert>
  <!-- Content behind modal can't be focused or clicked -->
</main>
<dialog open>
  <h2>Modal Title</h2>
  <!-- Focus stays inside modal -->
</dialog>
```

Or use the native `<dialog>` element:

```javascript
const dialog = document.querySelector('dialog');
dialog.showModal();  // Opens with focus trap, closes on Escape
```

## The Popover API

For tooltips, dropdowns, and non-modal overlays, use native popovers:

```html
<button popovertarget="menu">Open menu</button>
<div id="menu" popover>
  <button>Option 1</button>
  <button>Option 2</button>
</div>
```

**Benefits**: Light-dismiss (click outside closes), proper stacking, no z-index wars, accessible by default.

## Dropdown & Overlay Positioning

Dropdowns rendered with `position: absolute` inside a container that has `overflow: hidden` or `overflow: auto` will be clipped. This is the single most common dropdown bug in generated code.

### CSS Anchor Positioning

The modern solution uses the CSS Anchor Positioning API to tether an overlay to its trigger without JavaScript:

```css
.trigger {
  anchor-name: --menu-trigger;
}

.dropdown {
  position: fixed;
  position-anchor: --menu-trigger;
  position-area: block-end span-inline-end;
  margin-top: 4px;
}

/* Flip above if no room below */
@position-try --flip-above {
  position-area: block-start span-inline-end;
  margin-bottom: 4px;
}
```

Because the dropdown uses `position: fixed`, it escapes any `overflow` clipping on ancestor elements. The `@position-try` block handles viewport edges automatically. **Browser support**: Chrome 125+, Edge 125+. Not yet in Firefox or Safari - use a fallback for those browsers.

### Popover + Anchor Combo

Combining the Popover API with anchor positioning gives you stacking, light-dismiss, accessibility, and correct positioning in one pattern:

```html
<button popovertarget="menu" class="trigger">Open</button>
<div id="menu" popover class="dropdown">
  <button>Option 1</button>
  <button>Option 2</button>
</div>
```

The `popover` attribute places the element in the **top layer**, which sits above all other content regardless of z-index or overflow. No portal needed.

### Portal / Teleport Pattern

In component frameworks, render the dropdown at the document root and position it with JavaScript:

- **React**: `createPortal(dropdown, document.body)`
- **Vue**: `<Teleport to="body">`
- **Svelte**: Use a portal library or mount to `document.body`

Calculate position from the trigger's `getBoundingClientRect()`, then apply `position: fixed` with `top` and `left` values. Recalculate on scroll and resize.

### Fixed Positioning Fallback

For browsers without anchor positioning support, `position: fixed` with manual coordinates avoids overflow clipping:

```css
.dropdown {
  position: fixed;
  /* top/left set via JS from trigger's getBoundingClientRect() */
}
```

Check viewport boundaries before rendering. If the dropdown would overflow the bottom edge, flip it above the trigger. If it would overflow the right edge, align it to the trigger's right side instead.

### Anti-Patterns

- **`position: absolute` inside `overflow: hidden`** - The dropdown will be clipped. Use `position: fixed` or the top layer instead.
- **Arbitrary z-index values** like `z-index: 9999` - Use a semantic z-index scale: `dropdown (100) -> sticky (200) -> modal-backdrop (300) -> modal (400) -> toast (500) -> tooltip (600)`.
- **Rendering dropdown markup inline** without an escape hatch from the parent's stacking context. Either use `popover` (top layer), a portal, or `position: fixed`.

## Async Combobox Stability

Async comboboxes can break selection integrity if result updates keep reindexing the list while the user is navigating it.

The common bug looks like this:

- user types
- fetch starts
- user arrows through results
- fetch lands and reorders items
- the highlighted **index** stays the same, but the **item at that index** changed

### Safer behavior

- track active option by a stable item id/value, not by index
- once the user starts navigating the menu, freeze automatic highlight updates until they select, dismiss, blur, or explicitly resume input editing
- if the same item is still present after the fetch, keep that same item highlighted
- if it is gone, clear the highlight instead of silently moving to a new occupant at the old index
- for touch-heavy lists where options can move under the finger, consider suppressing list interactions briefly after async result updates when items are newly inserted or repositioned

This is one of those tiny edge cases that makes a combobox feel either trustworthy or haunted.

## Destructive Actions: Undo > Confirm

**Undo is better than confirmation dialogs**—users click through confirmations mindlessly. Remove from UI immediately, show undo toast, actually delete after toast expires. Use confirmation only for truly irreversible actions (account deletion), high-cost actions, or batch operations.

## Keyboard Navigation Patterns

### Roving Tabindex

For component groups (tabs, menu items, radio groups), one item is tabbable; arrow keys move within:

```html
<div role="tablist">
  <button role="tab" tabindex="0">Tab 1</button>
  <button role="tab" tabindex="-1">Tab 2</button>
  <button role="tab" tabindex="-1">Tab 3</button>
</div>
```

Arrow keys move `tabindex="0"` between items. Tab moves to the next component entirely.

### Skip Links

Provide skip links (`<a href="#main-content">Skip to main content</a>`) for keyboard users to jump past navigation. Hide off-screen, show on focus.

## Gesture Discoverability

Swipe-to-delete and similar gestures are invisible. Hint at their existence:

- **Partially reveal**: Show delete button peeking from edge
- **Onboarding**: Coach marks on first use
- **Alternative**: Always provide a visible fallback (menu with "Delete")

Don't rely on gestures as the only way to perform actions.

---

**Avoid**: Removing focus indicators without alternatives. Using placeholder text as labels. Touch targets <44x44px. Generic error messages. Custom controls without ARIA/keyboard support.
