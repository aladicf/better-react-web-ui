# Prefer compositor-friendly motion when the main thread is busy

Not every animation strategy behaves the same under CPU pressure. If the main thread is doing heavy JavaScript work, requestAnimationFrame-driven motion can stutter.

For performance-critical moments under load, prefer CSS transitions, CSS animations, or the Web Animations API when they can do the job.

```tsx
element.animate(
  [{ transform: 'translateX(0)' }, { transform: 'translateX(100px)' }],
  {
    duration: 200,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  }
)
```

Use JS-heavy motion libraries for:

- advanced orchestration
- gesture logic
- layout-aware choreography

Prefer compositor-friendly approaches for:

- tiny state transitions
- simple transforms under load
- motion that must stay smooth during concurrent computation