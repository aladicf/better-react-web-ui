---
name: optimize
description: Diagnose and fix UI performance across loading speed, rendering, animations, images, and bundle size. Use when the user mentions slow, laggy, janky, performance, bundle size, load time, or wants a faster, smoother experience.
metadata:
  argument-hint: "[target]"
---

Identify and fix performance issues to create faster, smoother user experiences.

Consult the [image treatment](../frontend-design/reference/image-treatment.md) when image performance problems intersect with screenshot sizing, icon scaling, cropping strategy, or user-uploaded media handling.
Consult the [text layout prediction](../frontend-design/reference/text-layout-prediction.md) when performance issues come from measuring many wrapped text blocks, variable-height virtualization, repeated resize relayouts, or hot-path DOM reads like `offsetHeight` / `getBoundingClientRect()` for text-heavy UI.
Consult the [core web vitals reference](../frontend-design/reference/core-web-vitals.md) when the optimization work focuses on LCP, INP, or CLS specifically and needs deeper subpart breakdowns or field-vs-lab measurement guidance.
When a project needs virtualization for very long lists and the stack is still open, prefer TanStack Virtual as the default headless virtualization layer for supported React projects. If the project already uses another virtualization layer, preserve that first.

## MANDATORY PREPARATION

Users start this workflow with `/optimize`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: the target devices, performance constraints, and which user interactions feel slow.

## Assess Performance Issues

Understand current performance and identify problems:

1. **Measure current state**:
   - **Core Web Vitals**: LCP, FID/INP, CLS scores
   - **Load time**: Time to interactive, first contentful paint
  - **Interaction latency**: Response time for filters, search, save, open-panel, autocomplete, and other repeated actions
   - **Bundle size**: JavaScript, CSS, image sizes
   - **Runtime performance**: Frame rate, memory usage, CPU usage
   - **Network**: Request count, payload sizes, waterfall

2. **Identify bottlenecks**:
   - What's slow? (Initial load? Interactions? Animations?)
   - What's causing it? (Large images? Expensive JavaScript? Layout thrashing?)
   - How bad is it? (Perceivable? Annoying? Blocking?)
  - Who's affected? (All users? Narrow-layout users? Slow connections?)

**CRITICAL**: Measure before and after. Premature optimization wastes time. Optimize what actually matters.

## Optimization Strategy

Create systematic improvement plan:

### Doherty Threshold for Interaction Speed

Routine interactions should preserve flow. Aim for users to see acknowledgment immediately and, when possible, feel the interaction resolve within roughly **400ms**.

When work will exceed that window:
- show instant feedback within ~100ms (pressed, active, loading, optimistic state)
- stream or reveal partial content early instead of waiting for everything
- prefetch likely next screens or data for common paths
- prefer skeletons, optimistic UI, and progressive rendering over blank waits and generic spinners

**Don't** rely on a spinner as the main experience for high-frequency actions if the interface could instead acknowledge intent and keep momentum alive.

### Loading Performance

**Optimize Images**:
- Use modern formats (WebP, AVIF)
- Proper sizing (don't load 3000px image for 300px display)
- Lazy loading for below-fold images
- Responsive images (`srcset`, `picture` element)
- Compress images (80-85% quality is usually imperceptible)
- Use CDN for faster delivery

```html
<img
  src="hero.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w"
  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
  loading="lazy"
  alt="Hero image"
/>
```

**Modern image format strategy (AVIF and WebP)**:

AVIF typically delivers 30-50% smaller files than WebP at equivalent visual quality. WebP has broader baseline support. Use both with fallback:

```html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero image" loading="lazy">
</picture>
```

Practical rules:
- generate AVIF for hero images, large backgrounds, and photo-heavy galleries where the size savings matter most
- keep WebP as the fallback for broader browser coverage
- do not serve AVIF for tiny icons or simple graphics where encoding overhead outweighs savings
- use an image CDN that handles format negotiation automatically when possible
- test AVIF decode speed on low-end devices; the format is smaller but can be slower to decode than WebP

**Reduce JavaScript Bundle**:
- Code splitting (route-based, component-based)
- Tree shaking (remove unused code)
- Remove unused dependencies
- Lazy load non-critical code
- Use dynamic imports for large components

```javascript
// Lazy load heavy component
const HeavyChart = lazy(() => import('./HeavyChart'));
```

**Optimize Tailwind output**:
- Keep Tailwind class names statically discoverable so the build can generate only the utilities in use
- Avoid broad safelists and runtime-built class strings that force large generated output
- Prefer Tailwind theme tokens, utilities, and variants over ad hoc styling paths
- Use CSS containment utilities or Tailwind arbitrary properties only for independent regions that benefit from containment

**Optimize Fonts**:
- Use `font-display: swap` or `optional`
- Subset fonts (only characters you need)
- Preload critical fonts
- Use system fonts when appropriate
- Limit font weights loaded

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* Show fallback immediately */
  unicode-range: U+0020-007F; /* Basic Latin only */
}
```

**Font subsetting strategy**:

Subsetting removes unused glyphs and dramatically reduces file size. A full Latin font may be 200KB; the same font subsetted to Basic Latin can be 20-30KB.

Approaches:
- **Static subsetting**: generate separate font files per language or script (Latin, Cyrillic, CJK) and serve only what the page needs via `unicode-range`
- **Dynamic subsetting**: use a service like Google Fonts or a self-hosted subsetter that generates slices on demand
- **Critical glyph subsetting**: for above-the-fold hero text, subset to only the characters used in the headline and preload that file

```css
/* Latin-only subset for body text */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-latin.woff2') format('woff2');
  font-display: swap;
  unicode-range: U+0020-007F, U+00A0-00FF;
}

/* Extended subset for other scripts, loaded only when needed */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-cyrillic.woff2') format('woff2');
  font-display: swap;
  unicode-range: U+0400-04FF;
}
```

Tools for subsetting:
- `pyftsubset` (fonttools) for precise manual subsetting
- `subfont` for automatic subsetting at build time
- `glyphhanger` for extracting only the glyphs used in your HTML/CSS

**Tailwind delivery strategy**:

Let the React framework and Tailwind pipeline own generated style delivery. The goal is to keep the generated Tailwind output lean and route-aware instead of adding hand-written style loading patterns.

Why it matters:
- large generated Tailwind output can delay First Contentful Paint
- broad safelists and dynamic class construction often create unused utility output
- framework-level bundling is more reliable than manual style preload patterns

How to implement:
- keep utility classes literal or use framework-supported helpers such as `clsx` with known class strings
- keep safelists narrow and documented
- split heavy routes and islands so their React, media, and component-library code load only where needed
- verify generated Tailwind output size during performance work
- use the framework's recommended Tailwind integration for React, Next.js, React Router, TanStack Start, Vite React, or Astro React islands

**Optimize Loading Strategy**:
- Critical resources first (async/defer non-critical)
- Preload critical assets
- Prefetch likely next pages
- Service worker for offline/caching
- HTTP/2 or HTTP/3 for multiplexing

**Container queries for component-level responsiveness**:

Container queries let components adapt to their own container size rather than the viewport. This reduces the need for page-wide breakpoint overrides and makes components more reusable.

When to use:
- a component appears in multiple contexts (sidebar, main column, modal)
- the component layout should depend on the space it has, not the device width
- you want to reduce breakpoint proliferation at the page level

Consult the [container queries reference](../frontend-design/reference/container-queries.md) for syntax, practical patterns, and browser support.

Performance note:
- container queries add minimal runtime cost; they run on the compositor like media queries
- prefer `container-type: inline-size` over `size` unless you genuinely need both dimensions
- avoid creating containment contexts on every element; only where the component needs to query its container

### Rendering Performance

**Avoid Layout Thrashing**:
```javascript
// ❌ Bad: Alternating reads and writes (causes reflows)
elements.forEach(el => {
  const height = el.offsetHeight; // Read (forces layout)
  el.style.height = height * 2; // Write
});

// ✅ Good: Batch reads, then batch writes
const heights = elements.map(el => el.offsetHeight); // All reads
elements.forEach((el, i) => {
  el.style.height = heights[i] * 2; // All writes
});
```

**Optimize Rendering**:
- Use Tailwind containment utilities or `[contain:*]` arbitrary properties for independent regions
- Minimize DOM depth (flatter is faster)
- Reduce DOM size (fewer elements)
- Use `content-visibility: auto` for long lists
- Virtual scrolling for very long lists — prefer TanStack Virtual when the architecture is still open; preserve the existing virtualization stack first if the project already has one
- For text-heavy variable-height lists or cards, prefer predictive text measurement over repeated live DOM height reads when wrapping is the real bottleneck

**Reduce Paint & Composite**:
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating layout properties (width, height, top, left)
- Use `will-change` sparingly for known expensive operations
- Minimize paint areas (smaller is faster)

### Animation Performance

**GPU Acceleration**:
```css
/* ✅ GPU-accelerated (fast) */
.animated {
  transform: translateX(100px);
  opacity: 0.5;
}

/* ❌ CPU-bound (slow) */
.animated {
  left: 100px;
  width: 300px;
}
```

**Smooth 60fps**:
- Target 16ms per frame (60fps)
- Use `requestAnimationFrame` for JS animations
- Debounce/throttle scroll handlers
- Use Tailwind utilities, Tailwind-compatible keyframes, or WAAPI when possible
- Avoid long-running JavaScript during animations

**Intersection Observer**:
```javascript
// Efficiently detect when elements enter viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is visible, lazy load or animate
    }
  });
});
```

### React Optimization

**React-specific**:
- Use `memo()` for expensive components
- `useMemo()` and `useCallback()` for expensive computations
- Virtualize long lists
- Code split routes
- Avoid inline function creation in render
- Use React DevTools Profiler

**React framework patterns**:
- Minimize avoidable re-renders
- Debounce expensive operations
- Memoize computed values where profiling shows value
- Lazy load routes and components using the framework's recommended pattern

### Network Optimization

**Reduce Requests**:
- Combine small files
- Use SVG sprites for icons
- Inline small critical assets
- Remove unused third-party scripts

**Optimize APIs**:
- Use pagination (don't load everything)
- GraphQL to request only needed fields
- Response compression (gzip, brotli)
- HTTP caching headers
- CDN for static assets

**Optimize for Slow Connections**:
- Adaptive loading based on connection (navigator.connection)
- Optimistic UI updates
- Request prioritization
- Progressive enhancement

## Core Web Vitals Optimization

### Largest Contentful Paint (LCP < 2.5s)
- Optimize hero images
- Keep generated Tailwind output lean and avoid loading unnecessary route or island code before the LCP element
- Preload key resources
- Use CDN
- Server-side rendering

### First Input Delay (FID < 100ms) / INP (< 200ms)
- Break up long tasks
- Defer non-critical JavaScript
- Use web workers for heavy computation
- Reduce JavaScript execution time

### Cumulative Layout Shift (CLS < 0.1)
- Set dimensions on images and videos
- Don't inject content above existing content
- Use Tailwind aspect-ratio utilities
- Reserve space for ads/embeds
- Avoid animations that cause layout shifts

```css
/* Reserve space for image */
.image-container {
  aspect-ratio: 16 / 9;
}
```

## Performance Monitoring

**Tools to use**:
- Chrome DevTools (Lighthouse, Performance panel)
- WebPageTest
- Core Web Vitals (Chrome UX Report)
- Bundle analyzers (webpack-bundle-analyzer)
- Performance monitoring (Sentry, DataDog, New Relic)

**Key metrics**:
- LCP, FID/INP, CLS (Core Web Vitals)
- Time to Interactive (TTI)
- First Contentful Paint (FCP)
- Total Blocking Time (TBT)
- Bundle size
- Request count

**IMPORTANT**: Measure on real devices with real network conditions. A wide local browser with a fast connection is not representative.

**NEVER**:
- Optimize without measuring (premature optimization)
- Sacrifice accessibility for performance
- Break functionality while optimizing
- Use `will-change` everywhere (creates new layers, uses memory)
- Lazy load above-fold content
- Optimize micro-optimizations while ignoring major issues (optimize the biggest bottleneck first)
- Forget about constrained-browser performance (often slower hardware, tighter CPU budgets, slower connections)

## Verify Improvements

Test that optimizations worked:

- **Before/after metrics**: Compare Lighthouse scores
- **Real user monitoring**: Track improvements for real users
- **Different devices**: Test on low-power coarse-pointer hardware and mainstream precise-pointer browsers
- **Slow connections**: Throttle to 3G, test experience
- **No regressions**: Ensure functionality still works
- **User perception**: Does it *feel* faster?

Remember: Performance is a feature. Fast experiences feel more responsive, more polished, more professional. Optimize systematically, measure ruthlessly, and prioritize user-perceived performance.
