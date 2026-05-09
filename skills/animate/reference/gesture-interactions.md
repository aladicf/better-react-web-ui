# Gesture Interactions

Use this reference when implementing drag, swipe, snap, dismiss, or any pointer-driven motion. This covers sheets, drawers, swipeable cards, draggable lists, carousels, and any surface where user input should feel physically connected to the UI response.

## Core Principles

**Gesture-linked movement should feel physically connected to input.** Use spring motion or velocity-aware interpolation rather than timed easing curves when movement follows a finger, cursor, or stylus.

**Use distance plus velocity, not distance alone.** A short fast flick should complete a dismissal; a slow long drag should not. The user's energy should influence the outcome.

**Add friction or damping near boundaries.** When users pull past a limit, do not hard-stop at an invisible wall. Let the surface keep moving with resistance so the boundary feels elastic rather than broken.

```tsx
function applyBoundaryResistance(offsetY: number) {
  if (offsetY >= 0) return offsetY

  const resistance = 0.3
  return offsetY * resistance
}
```

**Constrain the axis before the gesture starts.** A horizontal row action should drag on `x` only; a sheet should drag on `y` only. Do not let diagonal noise decide the interaction after the UI has already started moving.

**Disable uncontrolled fling when the interaction must land on exact snap points.** Momentum can be useful for free-scrolling or tossable objects, but row actions, reveal controls, and destructive affordances often need predictable settling. In Motion, that may mean `dragMomentum={false}` plus explicit snap animation on drag end.

## Damping and Boundaries

When a surface can be dragged past its resting point, allow controlled resistance. As the overshoot grows, the apparent movement should become increasingly expensive.

Use this for: sheets and drawers, swipeable toasts, draggable cards, any drag interaction with a hard visual boundary.

See [damp drag boundaries](damp-drag-boundaries.md) for the physics model and [upward drag friction](upward-drag-friction.md) for directional resistance patterns.

## Snap Points

Snap points should feel velocity-aware and purposefully chosen, not like arbitrary invisible walls.

- Use distance plus velocity to determine which snap point the surface settles into
- Provide at least one obvious resting state; ambiguous snap points confuse users
- Animate to the chosen snap point with a spring or deceleration curve, not linear
- For symmetric row actions, define named snap points such as `left`, `center`, and `right` rather than scattering magic numbers through the component
- Make the commit threshold visible through progressive reveal or other feedback before the action becomes eligible

See [velocity-aware snap points](velocity-aware-snap-points.md) for the decision math and [spring motion](spring-motion.md) for the settling physics.

## Progressive Reveal for Swipe Actions

Swipe rows should not reveal every possible action immediately. Reveal the primary action first, then secondary actions after deeper drag thresholds. This lets the user understand direction and commitment before seeing the full action set.

Good defaults:

- keep actions hidden at rest unless discoverability requires a visible affordance
- reveal first action after a small threshold
- reveal destructive or secondary actions only after a deeper threshold
- animate action opacity and scale from the side they belong to
- keep every revealed action reachable by click, keyboard, or menu as well as drag

## Momentum Dismissal

For swipe-to-dismiss, the gesture should respect the user's throw energy:

- Low velocity + short distance → snap back to rest (cancel)
- High velocity OR sufficient distance → complete dismissal
- The threshold should feel forgiving but decisive

See [momentum dismissal](momentum-dismissal.md) for threshold tuning.

## Scroll and Drag Conflicts

Nested surfaces should not feel like they are fighting over input. When a drawer contains a scrollable list, the interaction must decide whether the current gesture is a drag or a scroll.

Strategies:
- **Directional locking**: If the first few pixels are mostly vertical, treat as scroll; mostly horizontal, treat as drag
- **Threshold handoff**: Once a scroll reaches its boundary, hand off to the parent drag
- **Explicit handles**: Provide a visible drag handle so users know where to grab

See [scroll and drag conflicts](scroll-drag-conflicts.md) for detailed conflict resolution.

## Pointer Capture

Use robust pointer handling such as pointer capture or equivalent gesture ownership when implementing drag interactions. Without capture, releasing the pointer outside the element can leave the gesture orphaned and the surface stuck mid-drag.

See [pointer capture](pointer-capture.md) for implementation patterns.

## Interruptible Animations

Make interactive animations interruptible. Users should not have to wait for a snap or dismiss animation to finish before expressing new intent. If a user starts dragging while a snap animation is still settling, the animation should cancel and follow the new input immediately.

See [interruptible animations](interruptible-animations.md) for cancellation patterns.

## Visual Feedback During Drag

Visually lift dragged items with depth cues:

- **Shadow increase**: A larger, softer shadow implies elevation
- **Slight scale up**: `scale(1.02)` to `scale(1.05)` suggests the item has been picked up
- **Elevated z-index**: Ensure the dragged item renders above siblings
- **Opacity change on siblings**: Dim non-dragged items slightly to emphasize the active one

## Spring Motion for Gestures

Springs are especially helpful for drag-following elements, handles, pills, or indicators that should feel attached to motion.

```tsx
import { motion, useSpring } from 'motion/react'

function DragFollower({ value }: { value: number }) {
  const spring = useSpring(value, {
    stiffness: 140,
    damping: 24,
  })

  return <motion.div style={{ x: spring }} />
}
```

Use springs when you want motion to feel organic, interruptible, attached to input, and less like a pre-recorded timeline. Avoid springing everything — in fast, utilitarian interfaces, spring motion can add softness where speed and clarity matter more.

## Performance During Drag

- During drag loops, avoid animation setups that route every frame through expensive CSS-variable or layout recalculation paths
- Use `transform` for position updates, not `left`/`top`
- Avoid `will-change` on elements that are not about to animate; on dragged elements, it is usually justified
- Use hardware-friendly transforms when the main thread is busy
- Put `overflow-clip` or equivalent clipping on the row container when hidden actions should not create scrollbars. Use `overflow-hidden` only when its scroll-container behavior is acceptable.

See [avoid inherited token mutation in drag loops](avoid-css-variables-drag.md) and [hardware-accelerated motion under load](hardware-accelerated-busy-main-thread.md).

## Accessibility

- Respect `prefers-reduced-motion`: replace gesture physics with instant state changes or short fades
- Provide non-gesture alternatives: every swipe action should also be reachable by button, menu, or keyboard
- Do not rely on gestures as the only way to perform actions
- Ensure drag targets are large enough for coarse pointers (minimum 44×44px)

## Anti-Patterns

- **Hard boundaries without resistance**: An invisible wall feels broken, not like a limit.
- **Distance-only dismissal**: Ignoring velocity makes gestures feel mechanical.
- **Scroll and drag fighting**: Nested surfaces that steal input from each other feel chaotic.
- **Lost pointer events**: Releasing outside the drag target should not orphan the gesture.
- **Uninterruptible snaps**: Users should be able to override a settling animation immediately.
- **No non-gesture alternative**: Swipe-to-delete without a visible delete button is invisible to many users.
- **Tiny drag targets**: Fingers are imprecise. Drag handles should be generously sized.

## Consult Also

- [damp drag boundaries](damp-drag-boundaries.md) — elastic resistance at limits
- [upward drag friction](upward-drag-friction.md) — directional damping patterns
- [velocity-aware snap points](velocity-aware-snap-points.md) — gesture energy determines resting point
- [momentum dismissal](momentum-dismissal.md) — swipe-to-dismiss thresholds
- [scroll drag conflicts](scroll-drag-conflicts.md) — nested gesture resolution
- [pointer capture](pointer-capture.md) — robust gesture ownership
- [interruptible animations](interruptible-animations.md) — canceling in-flight motion
- [spring motion](spring-motion.md) — physically connected movement
- [avoid inherited token mutation in drag loops](avoid-css-variables-drag.md): performance-safe drag loops
- [respect reduced motion](respect-reduced-motion.md) — accessibility for gesture users
