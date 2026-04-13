# Use ease-out as the default for most UI responses

When an element appears or reacts to user input, `ease-out` is the safest default. It starts quickly, which makes the interface feel responsive, then settles gently so the finish still feels polished.

This is especially useful for:

- dropdowns, popovers, and tooltips
- modal and sheet entrances
- button feedback and lightweight state transitions
- most user-triggered show/hide behavior

Why it works:

- the fast start acknowledges user intent immediately
- the slower finish avoids a harsh stop
- it feels more natural than `linear`, which often reads as robotic

Use `ease-out` when the UI is **responding to the user**.

```css
.popover {
  transition:
    opacity 180ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

.popover[data-open='true'] {
  opacity: 1;
  transform: translateY(0);
}
```

If the motion is a large on-screen repositioning rather than an enter/exit response, move to [easing by context](easing-context.md) and [on-screen movement easing](ease-in-out-on-screen-movement.md).