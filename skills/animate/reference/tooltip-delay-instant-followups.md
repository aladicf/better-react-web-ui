# Delay the first tooltip, then speed up the rest

Tooltips need a small initial delay so they do not trigger accidentally during casual pointer movement. But once the user is clearly exploring tooltips, that same delay becomes friction.

The common solution is:

- delayed first tooltip
- instant or nearly instant follow-up tooltips while the user remains in tooltip-exploration mode

```css
.tooltip {
  transition: opacity 200ms ease-out;
  transition-delay: 300ms;
}

.tooltip[data-instant='true'] {
  transition-duration: 0ms;
  transition-delay: 0ms;
}
```

```tsx
const [instantTooltips, setInstantTooltips] = useState(false)
```

Why this feels good:

- the first delay prevents accidental noise
- subsequent tooltips keep the interface feeling quick during intentional exploration

This is especially useful in dense toolbars, icon-heavy controls, and inspection-style interfaces.