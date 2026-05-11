# Micro-interactions

Use this reference for small, high-frequency feedback moments: button presses, hover states, toggles, checkbox checks, focus transitions, tooltip reveals, and immediate input acknowledgment. Micro-interactions should feel responsive, not decorative.

## Core Principles

**Acknowledge user input immediately.** Aim for visible feedback within roughly **80ms** for micro-interactions whenever possible. Our brains buffer sensory input for ~80ms to synchronize perception. Anything under 80ms feels instant and simultaneous.

**Keep micro-interactions nearly invisible.** The best feedback is felt, not noticed. If the user is thinking about the animation, it is too heavy.

**Press should be faster than release.** Downward feedback should feel immediate; reset can be slightly softer.

## Anatomy of a Micro-interaction

Every useful micro-interaction has four parts:

- **trigger**: user or system event that starts it
- **rules**: conditions that decide what happens
- **feedback**: visible, audible, or haptic response
- **loop or mode**: what persists, repeats, or changes after the moment

In React, make those parts explicit in state instead of scattering animation classes randomly through markup. A toggle should know whether it is `checked`, `pending`, `success`, or `error`; Tailwind classes should reflect those states predictably.

Useful pattern:

```tsx
<button
  aria-pressed={liked}
  data-state={liked ? "on" : "off"}
  className="transition-[transform,color,background-color] duration-150 ease-out active:scale-[0.97] data-[state=on]:text-rose-600 motion-reduce:transition-colors motion-reduce:active:scale-100"
>
  <Heart className="size-4" aria-hidden="true" />
  <span className="sr-only">{liked ? "Remove from favorites" : "Add to favorites"}</span>
</button>
```

If a micro-interaction cannot name its trigger, rule, feedback, and after-state, it is probably decoration.

## Design Steps

Use this sequence before adding motion utilities:

1. Identify the user goal and friction point.
2. Define the purpose: progress, feedback, guidance, confirmation, error prevention, or small delight.
3. Choose the least motion that communicates the state.
4. Make behavior consistent with similar controls.
5. Test pointer, keyboard, reduced-motion, and slow-network states.

Micro-interactions should answer a real question: did the click land, did the value change, is the system working, what failed, or what can I do next?

## Button and Press Feedback

**Scale to `0.97` on press** for crisp tactile feedback. This is one of the highest-value micro-interactions in UI.

```css
.button {
  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.button:active {
  transform: scale(0.97);
}
```

Keep it subtle. The goal is tactile confirmation, not cartoon squash.

**Asymmetric press and release timing**: Press down should feel immediate (~100ms). Release can be slightly softer (~150-200ms). The user wants to know their press registered; they do not need to wait for the release animation.

See [asymmetric press release](asymmetric-press-release.md) for detailed timing splits.

## Hover States

**Gate hover motion to hover-capable pointers.** Hover animation that runs on touch devices is noise at best and sticky-state breakage at worst. Use Tailwind state utilities for simple cases, but put hover-only motion behind `@media (hover: hover) and (pointer: fine)` or an equivalent Tailwind custom variant.

```css
@custom-variant can-hover {
  @media (hover: hover) and (pointer: fine) {
    @slot;
  }
}
```

```html
<button class="transition-transform can-hover:hover:scale-[1.02] active:scale-[0.97]">
  Save
</button>
```

**Animate the child when parent hover causes flicker or layout uncertainty.** If scaling a card, row, or trigger changes the hit region enough to drop hover, keep the parent stable and animate an inner visual layer.

```html
<article class="group">
  <div class="transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
    ...
  </div>
</article>
```

**Fill hover gaps when groups should feel continuous.** If hover should persist while the pointer moves between stacked or adjacent elements, small physical gaps can cause the state to drop unexpectedly. Use a pseudo-element to fill the gap.

```css
.toast {
  position: relative;
  margin-bottom: 8px;
}

.toast::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 8px;
}
```

This helps when moving between stacked toasts, hovering adjacent cards with shared controls, or transitioning between trigger and floating UI.

## Tooltip and Helper Reveals

**Delay the first tooltip, but make followups instant.** The first hover-revealed helper can have a short delay (100-200ms) to avoid flashing on accidental passes. Subsequent related reveals should be much faster or instant so the interface does not feel sticky.

See [tooltip delay instant followups](tooltip-delay-instant-followups.md) for the escalation pattern.

## Toggle and Checkbox Transitions

**Toggle switches**: Smooth slide + color transition. The thumb should move with a spring or ease-out, and the track color should transition in parallel.

**Checkboxes and radios**: Clear state change with tight timing (~150ms). A small scale pulse on check can add satisfaction without noise.

**Like / favorite**: Small scale or icon motion only if it fits the product tone. A brief `scale(1.2)` settling to `scale(1)` with a color change is a common pattern.

## Focus Transitions

**Input focus**: Border, background, or elevation transition that clarifies focus without being distracting. The focused element should feel slightly more present, not like it is celebrating.

**Do not animate focus for keyboard users just because pointer interactions animate.** Keyboard users usually want predictable state change with minimal delay. See [no animation for keyboard](no-animation-for-keyboard.md).

## Immediate Feedback Actions

For high-frequency interactions (rapid clicking, typing, toggling), the feedback should be so fast it reads as instantaneous:

- Color or background shift: 80-100ms
- Scale press: 100-150ms
- Icon state change: instant or 50-80ms

The more often an interaction happens, the less motion it usually needs.

## Exponential Curves for Micro-interactions

For micro-interactions, use exponential curves — they feel natural because they mimic real physics (friction, deceleration):

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
```

**Easing affects perceived duration**: Ease-in (accelerating toward completion) makes tasks feel shorter because the peak-end effect weights final moments heavily. Ease-out feels satisfying for entrances, but ease-in toward a task's end compresses perceived time.

## Blur to Bridge States

When a micro-interaction transition still feels harsh, a tiny amount of blur can smooth the handoff:

```css
.button {
  transition:
    background-color 200ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.button:active {
  filter: blur(2px);
}
```

Use around 1-2px, remove once settled, and do not blur text long enough to hurt readability. See [blur bridge states](blur-bridge-states.md).

## Reduced Motion for Micro-interactions

When `prefers-reduced-motion` is active, replace scale and spatial motion with instant state changes or very short color/opacity transitions. Preserve functional cues such as focus states and pressed states.

```css
@media (prefers-reduced-motion: reduce) {
  .button {
    transition: background-color 80ms ease;
    transform: none;
  }
}
```

## Accessibility Checklist

- keyboard users can trigger the same state change
- focus states remain visible and do not depend on hover
- color changes are paired with text, icon, shape, or position changes when meaning matters
- decorative animation is hidden from assistive tech; meaningful state changes are exposed through labels, ARIA state, or live regions when needed
- users who prefer reduced motion still receive feedback through color, opacity, text, or state changes
- timing does not block task completion or force users to wait for decorative motion

## Anti-Patterns

- **Slow press feedback**: A 300ms button press feels laggy, not tactile.
- **Symmetric press and release**: Release does not need the same urgency as press.
- **Hover motion on touch devices**: Sticky hover behavior makes mobile UI feel broken.
- **Parent hover scale that changes the hit region**: Animate a stable child layer instead.
- **Hover gaps that drop state**: Moving between adjacent hover targets should not feel like crossing a canyon.
- **Tooltips that flash on every pass**: Without delay, accidental hovers create noise.
- **Animated keyboard focus**: Keyboard users want predictability, not motion.
- **Decorative micro-interactions**: If the user notices the animation, it is too heavy.
- **No feedback at all**: Silent buttons feel broken, especially in coarse-pointer contexts.
- **State-free Tailwind animation**: Random `hover:*`, `animate-*`, and `group-hover:*` utilities that do not map to a clear user or system state become noise fast.

## Consult Also

- [button press scale 0.97](button-press-scale-097.md) — tactile press feedback
- [asymmetric press release](asymmetric-press-release.md) — press vs release timing
- [hover gap fill](hover-gap-fill.md) — continuous hover regions
- [tooltip delay instant followups](tooltip-delay-instant-followups.md) — tooltip escalation pattern
- [immediate feedback actions](immediate-feedback-actions.md) — high-frequency interaction speed
- [no animation for keyboard](no-animation-for-keyboard.md) — keyboard accessibility
- [blur bridge states](blur-bridge-states.md) — smoothing harsh state changes
- [interaction frequency](interaction-frequency.md) — how often matters for how much motion
- [ui under 300ms](ui-under-300ms.md) — default duration discipline
