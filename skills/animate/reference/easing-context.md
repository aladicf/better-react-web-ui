# Match easing to the motion context

The same easing curve should not be used for every animation. A reveal, a hover change, and a repositioning move are different kinds of motion with different expectations.

## Recommended defaults by context

| Context | Starting point | Why |
| --- | --- | --- |
| Entering surface | `ease-out` or a custom out curve | Feels responsive and settles cleanly |
| Exiting surface | `ease-in` or a faster exit curve | Accelerates away and clears space decisively |
| On-screen movement | `ease-in-out` | Reads like real movement across visible distance |
| Tiny hover or color change | built-in `ease` is acceptable | Small polish does not always need bespoke physics |
| Gesture-linked movement | spring | Feels interruptible and physically connected |

## Quick rule of thumb

- If the user **caused something to appear**, start with `ease-out`.
- If something is **already visible and moving somewhere else**, start with `ease-in-out`.
- If the motion is **linked to drag or live input**, use spring behavior instead of pretending it is a fixed timeline.

```css
.menu[data-state='open'] {
  transition:
    opacity 180ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

.tabs__indicator {
  transition: transform 220ms cubic-bezier(0.65, 0, 0.35, 1);
}
```

The wrong easing can make an otherwise smooth animation feel hesitant, heavy, or oddly synthetic.