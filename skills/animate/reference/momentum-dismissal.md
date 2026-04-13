# Use momentum-based dismissal

A quick flick should be able to dismiss a surface even if the final travel distance is short. Relying on distance alone makes gesture UIs feel stubborn.

Instead, decide dismissal using **distance or velocity**.

```tsx
function shouldDismiss(distance: number, durationMs: number) {
  const velocity = Math.abs(distance) / Math.max(durationMs, 1)

  return Math.abs(distance) > 100 || velocity > 0.11
}
```

This works well for:

- swipe-to-dismiss toasts
- dismissible cards
- drawers and bottom sheets
- any gesture where users expect a flick to carry momentum

The exact threshold can vary by component size and device context, but a value around `0.11 px/ms` is a useful starting point for many dismissal gestures.