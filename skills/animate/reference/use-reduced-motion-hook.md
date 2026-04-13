# Use Motion's `useReducedMotion` hook for programmatic fallbacks

When using Motion / Framer Motion in React, `useReducedMotion` lets you change behavior instead of relying only on CSS overrides.

This is useful when the reduced-motion version should animate with different properties rather than simply canceling the original transform.

```tsx
import { motion, useReducedMotion } from 'motion/react'

function Sidebar({ isOpen }: { isOpen: boolean }) {
  const shouldReduceMotion = useReducedMotion()
  const closedX = shouldReduceMotion ? 0 : '-100%'

  return (
    <motion.div
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : closedX,
      }}
    />
  )
}
```

Use this when you want to:

- replace movement with opacity
- shorten or simplify choreography
- disable only the motion that is likely to trigger discomfort

This is usually better than pretending every environment needs the same animation recipe.