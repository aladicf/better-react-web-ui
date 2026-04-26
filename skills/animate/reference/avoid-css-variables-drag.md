# Avoid inherited token mutation in hot drag loops

Tailwind theme variables and other inherited custom properties are useful for tokens, but they are a poor fit for per-frame drag state. When you update a drag-related variable on a parent during pointer movement, every inheriting descendant may need style recalculation.

That makes inherited token mutation a poor fit for hot drag loops on complex surfaces such as drawers with long lists.

```tsx
function Drawer() {
  const drawerRef = useRef<HTMLDivElement>(null)

  function onDrag(y: number) {
    if (!drawerRef.current) return
    drawerRef.current.style.transform = `translateY(${y}px)`
  }

  return <div ref={drawerRef} />
}
```

Prefer:

- direct style updates on the moving element
- transforms on the smallest possible animated surface
- avoiding inherited state changes during per-frame gesture updates
- Tailwind utilities for stable resting, hover, active, and reduced-motion states

This matters most when the dragged surface contains many children or rich content.
