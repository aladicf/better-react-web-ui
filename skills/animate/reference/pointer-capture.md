# Use pointer capture for drag interactions

During a drag, the pointer will often leave the original element bounds. If the interaction only works while the pointer stays inside the element, the gesture will feel unreliable.

Use pointer capture so the drag keeps ownership of the pointer until the interaction ends.

```tsx
function onPointerDown(event: React.PointerEvent<HTMLElement>) {
  event.currentTarget.setPointerCapture(event.pointerId)
  startDrag(event.clientY)
}

function onPointerUp(event: React.PointerEvent<HTMLElement>) {
  event.currentTarget.releasePointerCapture(event.pointerId)
  endDrag()
}
```

Why this matters:

- drag continues smoothly outside the element bounds
- dismissal gestures feel robust instead of fragile
- fast or sloppy real-world input still works

This is especially important for swipe, drag, and sheet interactions where overshoot is normal.