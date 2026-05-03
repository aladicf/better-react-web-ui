# Image Treatment

Use this reference when photos, screenshots, icons, illustrations, or user-uploaded media need to support clarity instead of fight it.

Consult [aspect ratio and card orientation](./aspect-ratio-and-card-orientation.md) when the problem is not just image legibility, but also which media proportions should exist in the system, how cards should adapt across breakpoints, or how cropping rules affect rhythm and comparison.
Consult [hero sections UX](./hero-sections-ux.md) when the question is whether a large above-the-fold image should exist at all, how much explanatory work the top of the page should do before a visual appears, or whether product clarity is being sacrificed for decorative first impressions.

## Text Needs Consistent Contrast

When text is unreadable on an image, the problem is usually the image treatment, not the typography.

Photos are often too dynamic:
- dark in one area
- bright in another
- high-contrast in ways text can’t survive consistently

The job is to make contrast more predictable.

## The Problem with Background Images

A busy photo can make both dark text and light text fail in different regions.

If the image carries too much local contrast, fix the image first.

## Choose a calmer image before stacking fixes

If there is no believable text-safe zone, choose a different crop or a different asset before piling on heavier treatments.

Useful signs of a friendlier image:

- larger, simpler shapes
- quieter negative space where copy can sit
- fewer tiny repeating details behind text
- focal points that stay visible instead of being covered by the message

Avoid placing headline copy on top of faces, product details, or other focal points users actually need to inspect.

## Add an Overlay

Use an overlay when you need to compress the dynamic range of an image quickly.

Typical uses:
- dark overlay behind light text
- light overlay behind dark text

Overlays are blunt, but effective.

Pure black is not the only option.

A brand-tinted overlay or gradient can sometimes preserve the mood better than flattening the whole image into generic darkness.

## Lower the Image Contrast

When an overlay feels too heavy-handed, lower the image contrast itself.

This often gives a cleaner result because:
- highlights stop screaming
- shadows stop swallowing text
- the image still reads, but supports content instead of competing with it

Adjust brightness if needed after reducing contrast.

## Colorize the Image

Colorizing an image can help it:
- fit the palette
- feel more branded
- support text with more predictable contrast

Typical process:
1. reduce contrast
2. reduce or remove saturation
3. apply a brand-tinted color treatment

## Add a Text Shadow

A soft text shadow can help when you want to preserve more of the image’s natural variation.

Use it like a glow, not a theatrical shadow:
- no big offset
- generous blur
- subtle opacity

This works best as support, not as the only fix.

## Everything Has an Intended Size

Images and icons have a size range where they feel right.

Even vector artwork can feel wrong when scaled too far away from the size it was designed for.

## Don’t Scale Up Icons

Small icons scaled up too far become chunky, simplistic, and amateur-looking.

If you need more presence:
- keep the icon closer to its natural size
- place it inside a larger container
- use a purpose-drawn illustration or larger icon set instead

## Don’t Scale Down Screenshots

Screenshots shrink badly because they contain lots of small detail.

When screenshots become too small:
- text turns illegible
- structure becomes mush
- users try to read details that are no longer readable

Prefer:
- tighter crops
- partial screenshots
- smaller-source captures
- simplified redraws when only structure matters

## Don’t Scale Down Icons, Either

Detailed icons or logos reduced too far lose clarity.

At very small sizes, redraw or simplify rather than asking the browser to compress detail into mush.

## Theme-Aware Favicons

Favicons are tiny brand assets, but they still need to survive light and dark browser chrome. When a site ships both light and dark themes, provide theme-aware favicon assets instead of relying on one mark to work everywhere.

For Next.js App Router metadata, use media-specific icon entries:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};
```

For framework-agnostic HTML, use equivalent `<link rel="icon">` tags with `media="(prefers-color-scheme: ...)"`.

Keep the light and dark versions intentionally paired:

- same silhouette and optical size
- enough edge contrast against browser tab backgrounds
- simplified geometry at 16px and 32px
- no fragile low-contrast detail

## Beware User-Uploaded Content

User media is unpredictable:
- wild aspect ratios
- awkward crops
- clashing backgrounds
- poor quality

Design for containment, not wishful thinking.

## Control the Shape and Size

Force user-uploaded media into controlled containers.

Use deliberate aspect ratios and cropping rules.

In most UI:
- containment matters more than preserving every pixel of the original image
- cover-style cropping is often the right default

## Prevent Background Bleed

When an image’s background matches the UI, it can visually disappear into the page.

Use subtle containment cues:
- inner shadow
- faint inner border
- background-matching spacer edge

Prefer understated separation over loud framing.

## Overlapping Images

If images overlap other surfaces or one another, keep the layer boundaries readable.

Use:
- tiny gaps
- subtle shadows
- matching edge colors
- clean framing logic

Depth should feel intentional, not accidental.

## Illustration / Photo Harmony

If photos, illustrations, screenshots, and icons appear together, they should feel like part of one product.

Unify through:
- palette
- framing
- corner treatment
- background treatment
- contrast level
- level of realism/detail

## Quick Checks

- Is text consistently readable on imagery?
- Are screenshots large enough to be useful?
- Are icons shown at sensible sizes?
- Are uploaded images contained instead of dictating layout?
- Do media types feel like one system instead of random assets?
- Do overlapping images remain readable?

---

**Avoid**: blaming unreadable text on typography when the image is the problem, shrinking screenshots until they become eye tests, enlarging tiny icons into chunky blobs, and letting user-uploaded media determine your layout rules.
