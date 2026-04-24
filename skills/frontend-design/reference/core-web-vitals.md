# Core Web Vitals

Core Web Vitals are the three metrics Google uses to measure real-world user experience. Treat them as diagnostic signals, not arbitrary targets. A good score means users perceive the site as fast and stable; a poor score means friction is measurable.

## The three metrics

| Metric | What it measures | Good | Needs improvement | Poor |
|--------|------------------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | How fast the main content renders | <= 2.5s | <= 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | How responsive interactions feel | <= 200ms | <= 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | Visual stability during load | <= 0.1 | <= 0.25 | > 0.25 |

**Important**: these thresholds apply to the 75th percentile of real user experiences. Lab tests like Lighthouse are useful for debugging, but field data from real users is the source of truth.

## LCP (Largest Contentful Paint)

LCP measures the time from navigation start until the largest image or text block in the viewport is rendered.

### What counts as the LCP element

- `<img>` elements
- `<image>` inside SVG
- Poster images for `<video>`
- Elements with a background image loaded via CSS
- Block-level text elements (`<p>`, `<h1>`, headings, etc.)

### The four subparts of LCP

LCP breaks down into sequential phases. Optimizing one phase without fixing the others may just shift the delay elsewhere.

1. **Time to First Byte (TTFB)** — time until the first byte of HTML arrives. Aim for < 600ms.
2. **Resource load delay** — time between TTFB and when the LCP resource starts loading. Should be near zero.
3. **Resource load duration** — time to download the LCP resource itself. Depends on file size and network.
4. **Element render delay** — time between the resource finishing and the element actually rendering. Often caused by render-blocking CSS or JavaScript.

**On a well-optimized page**, roughly 40% of LCP time is TTFB, 40% is resource load duration, and the two delay phases combined are under 20%.

### How to optimize LCP

**Eliminate resource load delay**:
- Make the LCP resource discoverable in the initial HTML. Do not inject hero images via JavaScript or lazy-load them.
- Preload the LCP resource if it is referenced from an external CSS file:
  ```html
  <link rel="preload" fetchpriority="high" as="image" href="hero.webp" type="image/webp">
  ```
- Set `fetchpriority="high"` on the LCP image:
  ```html
  <img src="hero.webp" fetchpriority="high" alt="...">
  ```
- Never lazy-load an above-the-fold LCP image.

**Eliminate element render delay**:
- Inline critical CSS for above-the-fold content.
- Defer non-critical JavaScript.
- Remove render-blocking resources from the `<head>` where possible.
- Use server-side rendering so content is in the initial HTML.

**Reduce resource load duration**:
- Compress and use modern formats (AVIF, WebP).
- Resize images to their display dimensions. Do not load a 3000px image for a 600px slot.
- Use responsive images with `srcset`.
- Use a CDN to reduce network distance.

**Reduce TTFB**:
- Minimize redirects, especially ad or shortened-link chains.
- Use a CDN for static assets and edge-cached HTML where possible.
- Enable caching so repeat visits skip origin requests.

## INP (Interaction to Next Paint)

INP replaced First Input Delay (FID) in 2024. It measures responsiveness across the entire page lifecycle, not just the first interaction.

### How INP works

INP observes the latency of all click, tap, and keyboard interactions during a page session and reports the worst (or near-worst) measured latency. A low INP means the page consistently feels responsive.

**What INP measures**: the time from interaction until the browser paints the next frame showing visual feedback.

**What INP does NOT measure**: the time until data fetching completes or the full UI updates. It only cares about the next frame. This means optimistic UI and skeletons help INP even if the real work takes longer.

### Common causes of poor INP

- Long JavaScript tasks (> 50ms) blocking the main thread
- Expensive event handlers that run synchronously
- Layout thrashing inside interaction handlers
- Large component re-renders (React, Vue, Angular)
- Third-party scripts executing during interactions

### How to optimize INP

**Break up long tasks**:
- Use `scheduler.yield()` or `setTimeout(..., 0)` to yield control back to the browser between chunks of work.
- Move heavy computation off the main thread with Web Workers.
- Defer non-urgent work until after the interaction feedback has painted.

**Optimize event handlers**:
- Keep click/key handlers lightweight. Do heavy work after yielding.
- Use `requestIdleCallback` or `requestAnimationFrame` for non-critical updates.
- Batch DOM reads and writes to avoid layout thrashing.

**Reduce render overhead**:
- Use `React.memo`, `useMemo`, and `useCallback` judiciously to prevent unnecessary re-renders.
- Virtualize long lists so only visible items render.
- Split large components into smaller, independently renderable pieces.

**Use optimistic UI**:
- Update the interface immediately on user action, then sync with the server.
- Show skeletons or progress indicators within the first frame.
- Never leave the UI unresponsive while waiting for a network response.

## CLS (Cumulative Layout Shift)

CLS measures how much the visible content shifts around during page load. Unexpected movement is frustrating — users lose their place, misclick, or distrust the interface.

### Common causes of layout shift

- Images or videos without explicit dimensions
- Ads, embeds, or iframes injected after initial paint
- Content loaded dynamically (fonts, late-arriving data, infinite scroll items)
- Web fonts causing FOIT (Flash of Invisible Text) or FOUT (Flash of Unstyled Text)
- CSS animations that change layout properties

### How to optimize CLS

**Reserve space for images and media**:
- Always specify `width` and `height` attributes on `<img>` and `<video>`.
- Use `aspect-ratio` CSS property when dimensions are known:
  ```css
  .media-container {
    aspect-ratio: 16 / 9;
  }
  ```
- For responsive images, use `srcset` and `sizes` but still include dimensions.

**Reserve space for ads and embeds**:
- Use a placeholder or skeleton that matches the expected ad/embed size.
- Set `min-height` on containers for dynamically injected content.
- Avoid collapsing containers to zero height before content loads.

**Handle fonts carefully**:
- Use `font-display: optional` or `font-display: swap` to prevent invisible text.
- Preload critical fonts so they arrive before first paint.
- Use `size-adjust` in `@font-face` to reduce layout shift from font swaps.

**Avoid injecting content above existing content**:
- Do not insert banners, cookies, or promotional bars at the top of the page after initial render.
- If dynamic content must appear, reserve space for it from the start.

**Animate responsibly**:
- Animate `transform` and `opacity`, not layout properties.
- If height must change, prefer `grid-template-rows` transitions or similar layout-friendly patterns.

## Measuring Core Web Vitals

### Field data (real users)

- **Chrome User Experience Report (CrUX)**: Google-collected real-user data. Check [PageSpeed Insights](https://pagespeed.web.dev/) or [CrUX Dashboard](https://developer.chrome.com/docs/crux/dashboard/).
- **web-vitals JavaScript library**: collect your own RUM data:
  ```javascript
  import { onLCP, onINP, onCLS } from 'web-vitals';
  onLCP(console.log);
  onINP(console.log);
  onCLS(console.log);
  ```

### Lab data (synthetic tests)

- **Lighthouse**: good for debugging specific pages. Use the Performance category.
- **Chrome DevTools Performance panel**: record a trace to see LCP subparts, long tasks, and layout shifts frame by frame.
- **WebPageTest**: test on real devices and slow networks with detailed waterfalls.

### The right measurement strategy

1. Start with field data to understand if there is a real problem.
2. Use lab tools to reproduce and diagnose the specific bottleneck.
3. Fix the bottleneck.
4. Re-measure in the lab to confirm the fix.
5. Wait for field data to update (CrUX is on a 28-day rolling window).

## Practical checklist

- [ ] LCP resource is discoverable in initial HTML (not injected by JS)
- [ ] LCP image has `fetchpriority="high"` and is not lazy-loaded
- [ ] Critical CSS is inlined; non-critical CSS is deferred
- [ ] Images use modern formats and are sized to their display dimensions
- [ ] JavaScript tasks are broken up; no single task blocks for > 50ms
- [ ] Interaction handlers yield quickly and show feedback within one frame
- [ ] All images, videos, and embeds have explicit dimensions or aspect-ratio
- [ ] Dynamic content reserves space before it loads
- [ ] Fonts use `font-display: swap` or `optional` and are preloaded
- [ ] Layout shifts are measured in DevTools and addressed
- [ ] Field data confirms the 75th percentile meets Good thresholds

## Remember

Core Web Vitals are user-centric metrics. Optimizing them usually means removing friction that annoys everyone — not just meeting a Google threshold.
