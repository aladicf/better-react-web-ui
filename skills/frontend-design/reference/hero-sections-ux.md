# Hero Sections UX

Use this reference when the work involves homepage heroes, landing-page openings, above-the-fold first impressions, or deciding whether a hero image or large media treatment should exist at all.

The hero section is the most expensive real estate on many pages.

Do not spend it on mood alone.

## A hero is optional

Many products do not need a cinematic full-bleed opening.

They need clarity.

If the page can answer the core questions faster with a headline, proof, and a simple product view, do that instead of forcing a giant decorative banner.

Users should be able to answer quickly:

- what is this?
- is it for me?
- why should I care?

## Hero images are not a substitute for strategy

Abstract imagery often appears when:

- the value proposition is still vague
- the product is hard to explain
- the team is filling space before the message is ready

That usually creates a surface that looks polished but explains little.

If the image cannot help users understand the product, trust the offer, or choose a next step, it is probably decorative debt.

## Clarity should lead the first screen

Good first-screen defaults:

- a concrete headline
- a subhead that explains who the product is for or how it works
- one clear primary action
- proof or specificity near the claim
- a supporting visual only if it clarifies the offer

The first screen should reduce interpretation work, not add it.

## Hero copy needs a safe text box

Hero text often looks fine in a static mock and then breaks the moment the real font loads, the viewport narrows, or the headline wraps onto an extra line.

Treat wrapped hero copy as a real text block, not as a single-line poster that got unlucky.

Practical rules:

- if a headline or subhead wraps to multiple lines, reduce the type size before forcing the line-height so tight that letters collide or clip
- keep enough top and bottom padding around the text block that ascenders, descenders, and nearby CTA spacing still breathe
- avoid relying on `overflow: hidden` around live hero text unless the effect truly needs it and the actual font rendering has been tested carefully
- re-check the hero at wide, medium, and narrow widths; a headline that was safe in a wide viewport can clip or crowd instantly once it becomes two or three lines

Common failure mode:

- choosing a single-line display size
- letting the headline wrap anyway
- tightening the leading until the first line kisses the container edge or the descenders get shaved off

That is not bold typography.

That is a broken text box wearing a nice font.

## Stronger alternatives to the generic hero image

When the top of the page needs visual support, better options often include:

- the product UI in use
- a focused product screenshot or crop
- a short interactive demo
- a customer story or credible proof block
- a diagram that explains the workflow
- a small illustration or artifact that supports the message instead of dominating it

Choose visuals that explain, not visuals that merely decorate.

## Put text in the quiet part of the image

If hero copy sits on photography or illustration, it needs a calm zone.

Prefer:

- open sky, wall, background gradient, or other quieter negative space
- crops where text sits away from faces, hands, product details, or other high-attention areas
- overlays or filters that improve readability without turning the whole hero muddy

Avoid:

- centering text over the most important part of the image just because the template centers everything
- placing copy on top of faces, product interfaces, or fine-detail regions that users actually need to inspect
- keeping a busy image when no believable text-safe zone exists; use a different crop, a different asset, or a non-image hero instead

## Performance is part of the hero decision

Above-the-fold media often becomes the largest contentful paint bottleneck.

That means hero design is a performance decision, not just a visual one.

Ask:

- is this image or video worth the LCP cost?
- can the same message be communicated with a lighter asset?
- can the product screenshot be cropped tighter or deferred lower on the page?

Do not let a vague image slow the page down while also failing to explain the product.

## Narrow layouts expose weak heroes quickly

On small screens, decorative hero media often:

- pushes the primary CTA too far down
- breaks careful composition through awkward crops
- turns useful copy into overlaid contrast problems
- consumes too much of the viewport before any real information appears

If the hero stops helping in narrow layouts, it is not a strong hero.

## Accessibility applies at the top of the page too

Common hero failures:

- text over images with unstable contrast
- autoplaying background video without pause or caption support
- critical information baked into decorative imagery
- semantic heading and reading order compromised for layout theater

Good defaults:

- treat the hero as content, not just decoration
- keep headline and CTA readable without relying on lucky image regions
- ensure the first meaningful heading is actually discoverable in the document structure
- provide pause controls and captions when moving media matters

## Use visuals only when they earn the space

A hero visual is justified when it does one or more of these jobs clearly:

- demonstrates the product quickly
- makes the audience identifiable
- increases trust through realness or proof
- simplifies a complex concept

If the visual only adds atmosphere, question whether atmosphere is worth the cost.

## Practical checklist

- Can users tell what the product is within a few seconds?
- Does the first screen make the primary action obvious?
- If the headline or subhead wraps, does it still have enough line-height and text-box padding to avoid clipping at every breakpoint?
- Does the visual clarify the message instead of replacing it?
- Is the copy placed over a visually quiet region rather than over the image's key focal point?
- Is the hero still useful in narrow layouts, not just in a wide-layout mock?
- Does the above-the-fold media earn its performance budget?
- Is the content readable, accessible, and semantically structured?

## Anti-patterns

Avoid:

- defaulting to a full-bleed hero image because the template expects one
- abstract slogans paired with abstract imagery
- keeping a single-line headline size after the copy wraps into two or three lines, then crushing the leading until the text clips
- pushing the real explanation below the fold while the top of the page performs brand mood
- making the visual so dominant that the product, proof, and CTA become secondary
- placing hero copy on top of faces, product details, or busy focal points that should stay visible
- using above-the-fold media that slows the page and says little

The best hero is often the one that makes the product instantly understandable rather than merely photogenic.
