# Scale buttons to `0.97` on press for crisp tactile feedback

A tiny scale-down on press is one of the highest-value micro-interactions in UI. It makes the control feel responsive without calling attention to itself.

`scale(0.97)` is a strong starting point.

```css
.button {
  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.button:active {
  transform: scale(0.97);
}
```

Why it works:

- it acknowledges the press immediately
- it adds a subtle physical feel
- it improves perceived responsiveness with almost no complexity

Keep it subtle. The goal is tactile confirmation, not cartoon squash.