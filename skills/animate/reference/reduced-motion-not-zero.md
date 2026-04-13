# Reduced motion should simplify movement, not erase all feedback

Removing every animation can make the interface harder to understand. Some motion supports accessibility by making state changes, loading, and feedback more legible.

The goal of reduced motion is usually:

- less spatial travel
- fewer large transforms
- gentler feedback
- preserved clarity

```css
@media (prefers-reduced-motion: reduce) {
  .slide-in {
    transform: none;
    transition: opacity 200ms ease-out;
  }

  .spinner {
    animation: pulse 1s ease-in-out infinite;
  }

  .error-shake {
    animation: error-pulse 200ms ease-out;
  }
}
```

Keep functional cues when possible:

- loading indicators
- success and error acknowledgment
- focus and selection changes
- visibility changes that would otherwise feel abrupt or invisible

Reduced motion should stay communicative. It just should not make the room spin.