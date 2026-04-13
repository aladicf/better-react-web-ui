# Use opacity as the safest reduced-motion fallback

Opacity changes are often the best reduced-motion fallback because they do not create strong sensations of travel, scale, or spatial displacement.

That makes them a good replacement for slides, lifts, and reveals that would otherwise create vestibular discomfort.

```css
.sidebar {
  transition:
    transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-reduced-motion: reduce) {
  .sidebar {
    transform: none;
    transition: opacity 200ms ease-out;
  }
}
```

Use opacity-only fallbacks when you want to preserve:

- visibility feedback
- open/close clarity
- lightweight confirmation that state changed

without relying on movement through space.