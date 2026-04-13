# Allow the wrong-direction drag, but with friction

If users drag in a direction that should not fully dismiss or expand the surface, do not block them instantly. Allow a little travel with friction so the interface still responds to the gesture.

This is especially useful for swipe-to-dismiss toasts and cards where the user may briefly pull the wrong way.

```tsx
function projectToastDrag(deltaY: number) {
  if (deltaY < 0) {
    return deltaY * 0.3
  }

  return deltaY
}
```

Why this feels better than a hard stop:

- the UI acknowledges the gesture
- the user gets feedback immediately
- the constraint feels soft and intentional instead of brittle

Use friction when you want to guide behavior without pretending the gesture never happened.