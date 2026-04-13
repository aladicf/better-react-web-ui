# Remember that scale transforms affect all descendants

Scaling a container scales everything inside it, including text, icons, borders, and spacing perception. That can be useful, but it can also harm readability.

```tsx
function FadeContainer({ children, visible }: { children: React.ReactNode; visible: boolean }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
      }}
    >
      {children}
    </div>
  )
}
```

Use scale when you want the whole object to grow or shrink together, such as:

- button press feedback
- thumbnail zoom
- playful card hover effects

Avoid scale when the content should stay optically stable, such as long text, dense controls, or UI where readability matters more than a sense of physical expansion.