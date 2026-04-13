# Prefer percentage-based `translateY()` when the distance should track the element

Fixed pixel offsets break when component height varies. If the motion should move by the element's own height, use percentage values instead.

```css
.toast {
  transform: translateY(100%);
}
```

This is useful for:

- toasts with variable content height
- drawers or sheets with content-dependent dimensions
- reveal and dismiss transitions where the travel distance should scale with the component

Why percentages help:

- the motion adapts automatically to the element size
- you avoid hard-coded assumptions about content height
- the transition stays more robust across responsive and dynamic content