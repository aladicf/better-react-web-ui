# Before-and-after review examples

These authored examples illustrate the review criteria. They are not captured agent outputs, rendered screenshots, or evidence of measured improvements. Each pair holds the stated constraints constant.

## Preserve a brand while improving hierarchy

The brief requires Arial, black text, a white background, and unchanged wording. Replacing the font or tinting the background would violate the brief.

Before:

```tsx
<section className="bg-white p-2 text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
	<h1 className="text-base">Shift notes for café teams</h1>
	<p>Keep opening tasks and unfinished work together.</p>
</section>
```

After:

```tsx
<section className="bg-white px-6 py-12 text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
	<div className="mx-auto max-w-3xl">
		<h1 className="text-3xl font-bold leading-tight sm:text-5xl">Shift notes for café teams</h1>
		<p className="mt-4 max-w-prose text-lg leading-relaxed">Keep opening tasks and unfinished work together.</p>
	</div>
</section>
```

Source review confirms that the palette, font, and wording stay intact. Heading emphasis and grouping change. Browser review must still check wrapping, zoom, and narrow layouts.

## Load a visible hero image without delaying discovery

The image is visible on initial load and is the likely LCP element. Its actual source dimensions are 1600 by 900.

Before:

```tsx
<img src="/product.webp" alt="The shift notebook showing open tasks" loading="lazy" />
```

After:

```tsx
<img
	src="/product.webp"
	alt="The shift notebook showing open tasks"
	width={1600}
	height={900}
	loading="eager"
	fetchPriority="high"
	className="h-auto w-full"
/>
```

The change removes lazy loading and reserves the image's aspect ratio. It does not establish an LCP improvement without a browser trace. Keep lower-priority, below-fold media lazy where appropriate.

## Keep content visible when motion is reduced

The default hidden state must not survive after the animation is disabled.

Before:

```css
.feature { opacity: 0; animation: enter 400ms ease-out forwards; }
@keyframes enter { to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
	.feature { animation: none; }
}
```

After:

```css
.feature { opacity: 1; }
@media (prefers-reduced-motion: no-preference) {
	.feature { animation: enter 400ms ease-out both; }
}
@keyframes enter { from { opacity: 0; } to { opacity: 1; } }
```

The content is visible by default. The opt-in animation owns its temporary opacity state. Verify both motion preferences in the browser and check that ordinary scrolling reaches every feature.

Use the repository's [behavioral evaluation procedure](https://github.com/aladicf/better-react-web-ui/blob/main/evaluations/README.md) to collect actual agent and browser evidence.
