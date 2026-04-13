# Use `clip-path` when you need reveal motion without layout churn

`clip-path` can reveal content without changing layout size, which makes it useful when height or width animation would otherwise trigger reflow and visual instability.

```css
.reveal {
  clip-path: inset(0 0 100% 0);
  transition: clip-path 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal[data-open='true'] {
  clip-path: inset(0 0 0 0);
}
```

Useful patterns:

- `inset(0 0 100% 0)` → reveal upward from the bottom
- `inset(100% 0 0 0)` → reveal downward from the top
- `inset(0 100% 0 0)` → reveal from right to left
- `inset(0 0 0 100%)` → reveal from left to right

Use this when you want reveal motion but cannot afford layout shifting or extra wrapper DOM.