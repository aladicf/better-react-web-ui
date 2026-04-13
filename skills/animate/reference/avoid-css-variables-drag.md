# Avoid CSS variables in hot drag loops

CSS custom properties are inherited. When you update a drag-related variable on a parent during pointer movement, every inheriting descendant may need style recalculation.

That makes CSS variables a poor fit for hot drag loops on complex surfaces such as drawers with long lists.

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

This matters most when the dragged surface contains many children or rich content.