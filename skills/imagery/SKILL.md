---
name: imagery
description: Improve how interfaces use photos, screenshots, icons, illustrations, and user-uploaded media so visuals support clarity instead of undermining it. Use when the user mentions images, screenshots, background photos, hero images, icon sizing, user-uploaded media, crops, overlays, or image readability.
metadata:
  argument-hint: "[image, media area, or page]"
---

Assess and improve image usage so photography, illustrations, screenshots, icons, and uploaded media feel intentional, readable, and well-contained.

## MANDATORY PREPARATION

Users start this workflow with `/imagery`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first. Additionally gather: what role imagery plays here (brand, explanation, proof, decoration, content).

Consult the [color and contrast](../frontend-design/reference/color-and-contrast.md) reference when images create readability problems, need overlays, or should be harmonized with the palette.
Consult the [semantic color](../frontend-design/reference/semantic-color.md) when imagery intersects with status, alerts, meaning, or tinted contextual surfaces rather than pure atmosphere.
Consult the [image treatment](../frontend-design/reference/image-treatment.md) as the canonical shared source for overlays, screenshot sizing, icon scaling, media containment, and background bleed prevention.
Consult the [surface separation](../frontend-design/reference/surface-separation.md) when images or media need cleaner separation from surrounding surfaces.

---

## Assess Imagery Problems

Analyze where visual media is helping or hurting:

1. **Photo quality and appropriateness**:
   - Are the images high quality enough to support the intended brand?
   - Do they feel generic, mismatched, or obviously placeholder?

2. **Text on images**:
   - Is text readable over background images?
   - Are contrast problems caused by the image rather than the typography?

3. **Screenshots and icons**:
   - Are screenshots scaled so small they become illegible?
   - Are tiny icons being enlarged beyond their intended visual size?
   - Are detailed icons being reduced until they turn mushy?

4. **User-uploaded content**:
   - Are user images breaking the layout with chaotic aspect ratios?
   - Are backgrounds bleeding into the interface?

5. **Harmony**:
   - Do photography, illustration, screenshots, and icons feel like part of the same product?

If any of these are unclear from the codebase, ask the user directly to clarify what you cannot infer.

**CRITICAL**: Bad imagery can ruin an otherwise good design. Images should support hierarchy and communication, not create readability problems or visual chaos.

## Plan Imagery Improvements

Create a plan around:
- **Role**: Is the image there for atmosphere, explanation, product proof, or user content?
- **Containment**: How should images be cropped, scaled, and framed?
- **Readability**: What needs to happen so overlaid text remains readable?
- **Visual consistency**: How should photos, illustrations, screenshots, and icons relate stylistically?

## Improve Imagery Systematically

### Use Appropriate Photos
- Use photos that genuinely match the product quality and audience expectations
- Avoid placeholder-quality imagery that drags the interface down
- Match the emotional tone of the product — playful, editorial, professional, etc.

### Improve Text Contrast on Images
- Add overlays when the image dynamics are too extreme
- Lower image contrast when the text needs more consistent support
- Colorize images when that helps them harmonize with the brand palette
- Use a subtle text shadow only when it improves local readability without turning into an obvious effect

### Screenshot Usage Rules
- Don’t scale full-app screenshots down until the interface becomes unreadable
- Prefer tighter crops, partial screenshots, or smaller-source-layout captures when detail matters
- If the goal is structure rather than detail, simplify the screenshot instead of cramming everything into tiny space

### Icon Scaling Rules
- Don’t blow small icons up far beyond the size they were drawn for
- Don’t shrink detailed icons until they become fuzzy or overly dense
- If you need larger visual presence, consider placing a smaller icon inside a larger shaped container instead

### User-Uploaded Media Containment
- Force uploaded images into deliberate containers with consistent aspect ratios
- Use `cover`-style cropping when preserving raw dimensions would damage the layout
- Accept that containment matters more than preserving every edge of the original upload

### Bleed Prevention
- When images blend into the page background, add a subtle inner shadow or inner border
- Prefer understated containment; a loud border often fights the image itself

### Illustration / Photo Harmony
- Keep illustration style consistent across the product
- Make sure illustrations and photography don’t feel like they come from unrelated brands
- If mixing photos and illustrations, unify them through palette, framing, or usage context

**NEVER**:
- Put unreadable text on a busy image and blame the type
- Use screenshots so small users want to zoom in with their eyeballs
- Enlarge tiny icons until they feel chunky and amateurish
- Let user-uploaded images dictate layout shape
- Mix photographic, illustrative, and icon styles with no unifying logic

## Verify Imagery Quality

- **Readability**: Is text on imagery consistently legible?
- **Containment**: Do uploaded and editorial images stay within the layout gracefully?
- **Scale**: Are screenshots and icons shown at sensible sizes?
- **Harmony**: Do all visual media feel like part of one system?
- **Appropriateness**: Does the imagery match the product’s quality and personality?

Remember: Imagery should support the design’s message and hierarchy. When it starts fighting the UI, the image treatment needs work.
