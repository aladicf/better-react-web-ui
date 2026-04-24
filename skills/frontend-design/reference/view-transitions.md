# View Transitions

The View Transition API creates animated transitions between DOM states or page navigations. It handles the heavy lifting of capturing old and new views, positioning them, and running a cross-fade or custom animation.

## When view transitions help

Use view transitions when:

- users navigate between related views and continuity reduces cognitive load
- a list item expands into a detail view, and you want to morph between them
- page navigations in a multi-page app should feel like a single-page app
- you want shared-element transitions without managing FLIP animations manually

Do not use view transitions when:

- the transition would be slower than the instant state change
- users prefer reduced motion
- the pages are unrelated and continuity would be confusing
- you need to support browsers without a functional fallback

## Same-document transitions (SPA)

In a single-page app, call `document.startViewTransition()` before updating the DOM:

```javascript
function switchView(newContent) {
  document.startViewTransition(() => {
    // Update DOM here
    document.querySelector('.content').innerHTML = newContent;
  });
}
```

The browser captures the old view, updates the DOM, captures the new view, and runs a default cross-fade. The old view stays visible until the new view is ready, preventing layout shift.

## Cross-document transitions (MPA)

For multi-page apps, add the `@view-transition` at-rule to both pages:

```css
@view-transition {
  navigation: auto;
}
```

This opts both the current and destination pages into view transitions for same-origin navigations. The browser handles the transition automatically when the user clicks a link.

**Requirements**:
- both pages must have the `@view-transition` rule
- navigation must be same-origin
- the browser captures the outgoing page and animates to the incoming page

## Customizing transitions

### Named view transition elements

Assign `view-transition-name` to elements that should morph individually:

```css
.card-image {
  view-transition-name: card-image;
}

.detail-image {
  view-transition-name: card-image; /* same name = morph */
}
```

During the transition, the browser creates pseudo-elements for each named view transition:

```css
::view-transition-old(card-image) {
  animation: 300ms ease-out both fade-out;
}

::view-transition-new(card-image) {
  animation: 300ms ease-out both fade-in;
}
```

### Custom animation keyframes

```css
@keyframes fade-out {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
}

@keyframes fade-in {
  from { opacity: 0; transform: scale(1.05); }
  to { opacity: 1; transform: scale(1); }
}
```

### Transition types

Use types to vary transitions based on navigation direction:

```javascript
document.startViewTransition({
  update: () => updateDOM(),
  types: ['slide-left']
});
```

```css
:root:active-view-transition-type(slide-left) {
  &::view-transition-old(root) {
    animation: 300ms ease-out both slide-out-left;
  }
  &::view-transition-new(root) {
    animation: 300ms ease-out both slide-in-left;
  }
}
```

## Practical patterns

### Card-to-detail morph

```css
/* List page */
.product-card .thumbnail {
  view-transition-name: product-thumb;
}

/* Detail page */
.product-detail .hero-image {
  view-transition-name: product-thumb;
}
```

The thumbnail smoothly morphs into the hero image during navigation.

### Page fade with slide

```css
@view-transition {
  navigation: auto;
}

::view-transition-old(root) {
  animation: 400ms ease-out both fade-slide-out;
}

::view-transition-new(root) {
  animation: 400ms ease-out both fade-slide-in;
}

@keyframes fade-slide-out {
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-30px); }
}

@keyframes fade-slide-in {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
```

### Skip transition when preferred

```javascript
function switchView(newContent) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    updateDOM(newContent);
    return;
  }

  document.startViewTransition(() => updateDOM(newContent));
}
```

## Accessibility

View transitions can create accessibility issues if not handled carefully:

- **Focus management**: the browser preserves focus when possible, but test that focus lands in a sensible place after the transition
- **Screen readers**: the transition is visual. Ensure content changes are announced with ARIA live regions when the state change is meaningful
- **Reduced motion**: always respect `prefers-reduced-motion`. Skip the transition or use an instant cross-fade
- **Cognitive load**: excessive transitions between every page can be disorienting. Use them for related views, not every navigation

## Progressive enhancement

View transitions should never be required for functionality.

```javascript
function switchView(newContent) {
  if (!document.startViewTransition) {
    updateDOM(newContent);
    return;
  }

  document.startViewTransition(() => updateDOM(newContent));
}
```

Without the API, the DOM updates instantly. With it, the update is wrapped in a transition.

## Performance

- View transitions capture snapshots of the old and new states. Large or complex pages may have higher capture cost
- Keep transitions short (200-400ms). Long transitions feel sluggish
- Animating `transform` and `opacity` is cheapest. Avoid animating layout properties during transitions
- Test on low-end devices. Snapshot-based transitions can be memory-intensive

## Browser support

Same-document view transitions are supported in Chrome/Edge 111+, Safari 18+. Firefox does not yet support them.

Cross-document view transitions are supported in Chrome/Edge 126+. Safari and Firefox do not yet support them.

For current support, check [Can I use: View Transitions API](https://caniuse.com/view-transitions).

## Common mistakes

- **Naming too many elements**: every `view-transition-name` creates a separate snapshot layer. Name only the elements that genuinely need to morph
- **Ignoring fallback**: always provide instant-update fallback for unsupported browsers and reduced-motion preferences
- **Long transitions**: 500ms+ transitions between pages feel slow. Keep them snappy
- **Overusing**: not every state change needs a transition. Use them where continuity genuinely helps
