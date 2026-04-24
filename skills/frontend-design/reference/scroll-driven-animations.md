# Scroll-Driven Animations

Scroll-driven animations tie animation progress directly to scroll position instead of time. This creates effects like parallax, progress bars, and reveal sequences that feel connected to user input.

## When to use CSS scroll-driven animations

Prefer CSS scroll-driven animations when:

- the effect is purely presentational (progress bars, parallax layers, fade-in reveals)
- you want smooth 60fps motion without JavaScript overhead
- the animation does not need complex logic or user interaction beyond scrolling
- you can express the effect with CSS keyframes and timeline properties

Prefer JavaScript observers or libraries when:

- you need complex choreography or sequencing
- the animation must interact with other state (hover, click, form input)
- you need to support Firefox with no flag (as of early 2025, Firefox requires a flag)
- you are animating values that CSS cannot interpolate easily

## Core concepts

### Scroll timelines

A scroll timeline links animation progress to the scroll position of a scroll container.

```css
.parallax-layer {
  animation: parallax-move linear;
  animation-timeline: scroll();
}

@keyframes parallax-move {
  from { transform: translateY(0); }
  to { transform: translateY(-100px); }
}
```

`scroll()` creates an anonymous scroll timeline tied to the nearest ancestor scroll container. The animation progress goes from 0% to 100% as the container scrolls from top to bottom.

### View timelines

A view timeline links animation progress to an element's position within the viewport as it scrolls into and out of view.

```css
.reveal-item {
  animation: fade-in-up linear;
  animation-timeline: view();
  animation-range: entry 0% cover 50%;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

`view()` creates a timeline based on the element's visibility in the viewport. `animation-range` controls when the animation starts and ends relative to the element entering and leaving the viewport.

### Named scroll timelines

For more control, name the timeline on the scroll container and reference it explicitly:

```css
.scroll-wrapper {
  scroll-timeline: --main-scroll;
}

.animated-element {
  animation: slide-in linear;
  animation-timeline: --main-scroll;
}
```

## Animation range values

The `animation-range` property defines which portion of the timeline drives the animation:

| Range | Meaning |
|-------|---------|
| `entry` | Element entering the viewport |
| `exit` | Element leaving the viewport |
| `cover` | Element fully covers the viewport |
| `contain` | Element is fully contained in the viewport |
| `entry-crossing` | Element's leading edge crosses viewport edge |
| `exit-crossing` | Element's trailing edge crosses viewport edge |

Common patterns:

```css
/* Fade in as element enters, complete when it reaches center */
animation-range: entry 0% cover 50%;

/* Animate only while element is fully visible */
animation-range: contain 0% contain 100%;

/* Animate from entry to exit */
animation-range: entry 0% exit 100%;
```

## Practical patterns

### Scroll progress indicator

```css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: var(--color-accent);
  transform-origin: left;
  animation: progress-grow linear;
  animation-timeline: scroll();
}

@keyframes progress-grow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
```

### Staggered section reveals

```css
.section {
  animation: reveal-section linear;
  animation-timeline: view();
  animation-range: entry 10% cover 40%;
}

@keyframes reveal-section {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Parallax background

```css
.parallax-bg {
  animation: parallax-shift linear;
  animation-timeline: scroll();
}

@keyframes parallax-shift {
  from { transform: translateY(0); }
  to { transform: translateY(-200px); }
}
```

### Image zoom on scroll

```css
.hero-image {
  animation: zoom-out linear;
  animation-timeline: view();
  animation-range: entry 100% cover 50%;
}

@keyframes zoom-out {
  from { transform: scale(1.2); }
  to { transform: scale(1); }
}
```

## Graceful degradation

Always provide a static fallback. Browsers that do not support scroll-driven animations should still show fully functional content.

```css
.reveal-item {
  /* Static fallback: visible by default */
  opacity: 1;
  transform: none;
}

@supports (animation-timeline: scroll()) {
  .reveal-item {
    opacity: 0;
    transform: translateY(40px);
    animation: fade-in-up linear;
    animation-timeline: view();
    animation-range: entry 0% cover 50%;
  }
}
```

For Firefox (which may require a flag), consider a JavaScript fallback using Intersection Observer for critical effects:

```javascript
if (!CSS.supports('animation-timeline', 'scroll()')) {
  // Use Intersection Observer as fallback
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}
```

## Performance considerations

- Scroll-driven animations run on the compositor thread when animating `transform` and `opacity`, so they are typically smooth at 60fps
- Avoid animating layout properties (width, height, top, left) with scroll timelines. These force main-thread recalculation on every scroll event
- Keep the number of simultaneous scroll-driven animations reasonable. Hundreds of animated elements can still overwhelm the GPU
- Use `content-visibility: auto` for off-screen sections to reduce rendering cost

## When not to use scroll-driven animations

- **Critical content**: never hide important information behind a scroll animation. The fallback must show all content immediately
- **Motion-sensitive users**: respect `prefers-reduced-motion`. Disable or simplify scroll-driven effects for users who need reduced motion
- **Complex state machines**: if the animation depends on multiple inputs (scroll + hover + drag), use JavaScript
- **Firefox-first audiences**: if your audience is primarily Firefox users, test thoroughly or use JavaScript fallbacks

## Browser support

Scroll-driven animations are supported in Chrome/Edge 115+, Safari 17.4+. Firefox requires the `layout.css.scroll-driven-animations.enabled` flag as of early 2025.

For current support details, check [Can I use: scroll-driven animations](https://caniuse.com/mdn-css_properties_animation-timeline).
