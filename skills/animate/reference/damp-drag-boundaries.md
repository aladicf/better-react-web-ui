# Damp drag at boundaries

When users pull a surface past its intended limit, do not freeze it at an invisible wall. Let it keep moving, but with strong resistance.

This creates the rubber-band feel users expect from coarse-pointer drag interfaces and makes the boundary feel physical instead of broken.

```tsx
function applyBoundaryResistance(offsetY: number) {
  if (offsetY >= 0) return offsetY

  const resistance = 0.3
  return offsetY * resistance
}
```

Why this works:

- user input is still acknowledged
- the surface communicates that it has reached a limit
- the interaction feels elastic rather than dead

Use this for:

- sheets and drawers
- swipeable toasts
- draggable cards
- any drag interaction with a hard visual boundary

As the overshoot grows, the apparent movement should become increasingly expensive.
