# Trigger scroll reveals only when the element is meaningfully visible

Scroll-driven reveals should not start the instant one pixel touches the viewport. That usually feels premature and disconnected from what the user can actually perceive.

Wait until a meaningful portion of the element is visible. A practical starting point is roughly `100px` into the viewport.

```tsx
const { ref, inView } = useInView({
  threshold: 0,
  rootMargin: '-100px 0px',
  once: true,
})

<motion.div ref={ref} animate={{ opacity: inView ? 1 : 0 }} />
```

Why this feels better:

- the animation starts when the user can actually notice it
- reveals feel less trigger-happy
- long pages avoid the “everything is animating at the viewport edge” problem

Use `once: true` for decorative or introductory reveals that should not replay during routine scrolling.