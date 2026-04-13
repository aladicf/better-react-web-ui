# Stagger children when orchestration improves comprehension

Sequential child reveals can make a list or grouped surface feel more intentional than having every item arrive at once.

Use a small stagger so the motion reads as one orchestrated entrance rather than a slow domino effect.

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}
```

Good uses:

- compact menu content
- cards in a small group
- hero copy and supporting elements

Avoid overusing stagger on large lists. Too much delay turns polish into waiting.