# Every animation should have a job

Animation should not exist just because motion looks impressive in isolation. It should support the product by doing something useful.

The most defensible jobs are:

- **feedback** → confirming that an action happened
- **orientation** → showing where something came from or went
- **attention** → drawing focus to a meaningful change
- **continuity** → preserving context through state changes

```tsx
<motion.div animate={isSuccess ? { scale: [1, 1.08, 1] } : {}}>
  <CheckIcon />
</motion.div>
```

If you cannot explain what the motion is helping the user understand, reconsider whether it belongs.

Motion should clarify, reinforce, or delight with intention. Otherwise it risks becoming noise.