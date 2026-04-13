# Use spring motion when movement should feel alive

Timed easing curves are great for predictable UI transitions. Springs are better when movement should feel continuous, interruptible, or physically linked to user input.

Springs are especially helpful for:

- drag-following elements
- counters or values that should interpolate smoothly
- handles, pills, or indicators that should feel attached to motion
- interface moments where lifelike feel matters more than raw speed

```tsx
import { motion, useSpring } from 'motion/react'

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, {
    stiffness: 140,
    damping: 24,
  })

  return <motion.span>{spring}</motion.span>
}
```

Use springs when you want motion to feel:

- organic
- interruptible
- attached to input
- less like a pre-recorded timeline

Avoid springing everything. In fast, utilitarian interfaces such as dense admin tools, banking flows, or repeated data-entry tasks, spring motion can add softness where speed and clarity matter more.