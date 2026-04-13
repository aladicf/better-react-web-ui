# Create toast depth with offset and scale

Flat toast stacks can feel visually noisy or ambiguous. Adding vertical offset plus a slight scale difference creates depth and makes the active toast feel foremost.

This is part of what makes toast systems like [Sonner](https://github.com/emilkowalski/sonner) feel polished.

```css
.toast {
  --lift-amount: 14px;
  --toasts-before: 0;

  position: absolute;
  transform:
    translateY(calc(var(--lift-amount) * var(--toasts-before) * -1))
    scale(calc(1 - (var(--toasts-before) * 0.05)));
}
```

```tsx
toasts.map((toast, index) => (
  <div
    key={toast.id}
    className="toast"
    style={{ '--toasts-before': index } as React.CSSProperties}
  />
))
```

Why it works:

- the front toast feels primary
- the stack communicates depth instead of looking like a collision
- repeated notifications feel more composed and less chaotic

Keep the scale delta subtle so the stack still reads as one system instead of a collapsing staircase.