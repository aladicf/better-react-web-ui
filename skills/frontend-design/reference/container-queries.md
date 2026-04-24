# Container Queries

Container queries let a component respond to the size of its own container instead of the viewport. This shifts responsive design from page-level breakpoints to component-level adaptability.

## When to prefer container queries over media queries

Use container queries when:

- a component appears in multiple contexts (sidebar, main column, modal, card grid)
- the component's ideal layout depends on the space it actually has, not the device width
- you want reusable components that do not need to know where they are placed
- nested layouts need independent responsive behavior

Use media queries when:

- the change is truly global (navigation mode, overall page layout, theme)
- you need to respond to device characteristics like orientation, pointer type, or color scheme
- the component only ever lives in one context

## How to use container queries

### 1. Create a containment context

```css
.card-container {
  container-type: inline-size;
  /* or container-type: size; for both inline and block dimensions */
}
```

`inline-size` is the right default for most components. It creates a query container based on the inline dimension (width in horizontal writing modes) without applying extra layout constraints.

### 2. Write the container query

```css
@container (width > 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}
```

The `.card` styles apply only when its nearest query container is wider than 400px.

### 3. Name containers for precision

```css
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

.main {
  container-type: inline-size;
  container-name: main;
}

@container sidebar (width > 300px) {
  .widget { /* styles for sidebar context */ }
}

@container main (width > 600px) {
  .widget { /* styles for main context */ }
}
```

Named containers prevent unexpected matching when components are nested.

### 4. Use container query length units

```css
@container (width > 400px) {
  .card-title {
    font-size: clamp(1rem, 1rem + 2cqi, 1.5rem);
  }
}
```

Container query units:
- `cqi`: 1% of container's inline size
- `cqb`: 1% of container's block size
- `cqw`: 1% of container's width
- `cqh`: 1% of container's height
- `cqmin` / `cqmax`: smaller or larger of `cqi` and `cqb`

## Practical patterns

### Product card that adapts to its column

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.product-card {
  container-type: inline-size;
}

@container (width > 320px) {
  .product-card {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem;
  }
}

@container (width > 480px) {
  .product-card {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
}
```

The same product card component can show as a compact horizontal row in a narrow sidebar or as a full vertical card in a wide main column.

### Stats row that switches layout by container width

```css
.stats-bar {
  container-type: inline-size;
}

@container (width < 400px) {
  .stats-bar {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}

@container (width >= 400px) {
  .stats-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
```

### Fallback for unsupported browsers

Container queries are supported in all modern browsers. For the rare case you need a fallback:

```css
.card {
  /* Default layout */
  display: flex;
  flex-direction: column;
}

@supports (container-type: inline-size) {
  .card-container {
    container-type: inline-size;
  }

  @container (width > 400px) {
    .card {
      flex-direction: row;
    }
  }
}
```

In practice, most projects can use container queries directly without fallbacks. The baseline is strong.

## Common mistakes

- **Creating too many containment contexts**: every `container-type` adds some layout cost. Only create them where the component genuinely needs to query its container.
- **Forgetting that containment context is nearest ancestor**: if a parent also has `container-type`, the child query matches the parent, not the grandparent. Use `container-name` to target the right level.
- **Using container queries for global page layout**: media queries are still better for navigation breakpoints, overall grid changes, and device-specific adaptations.
- **Over-nesting queries**: if you find yourself writing deeply nested container queries, the component may be doing too much. Split it.

## Migration from media queries

When converting an existing component from media queries to container queries:

1. identify the component's breakpoints in `px` or `rem`
2. wrap the component in a container with `container-type: inline-size`
3. replace `@media (min-width: ...)` with `@container (width > ...)`
4. test the component in all its contexts (sidebar, modal, main, etc.)
5. remove media query breakpoints that were only compensating for the component being in a narrow column

## Browser support

Container queries are supported in Chrome 105+, Firefox 110+, Safari 16+. They are Baseline Widely Available.

For enterprise or legacy environments, check your analytics before relying on them for critical layouts. In most consumer-facing projects, they are safe to use without polyfills.
