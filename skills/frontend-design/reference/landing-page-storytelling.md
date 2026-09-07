# Design landing pages around the visitor's decision

Use this workflow for React and Tailwind marketing pages, product launches, and scroll-driven stories. Apply only the steps the requested page needs.

Use [marketing copywriting](./marketing-copywriting.md) for positioning, proof, and CTA wording. Use [design directions](./design-directions.md) for the visual system. This workflow connects those decisions to page structure, media preparation, and browser verification.

## Establish the offer and available evidence

1. Reuse the confirmed audience, brand context, and constraints from the conversation or `.better-react-web-ui.md`.
2. Inspect supplied brand assets and actual product materials before choosing imagery. Check their contents, including product versions and logo variants.
3. Record the visitor's likely starting knowledge, the claim the page must substantiate, and the primary next action.
4. Separate verified facts from assumptions. Use labeled sample data for demos, and never present generated imagery as customer evidence.

Ask only for missing decisions that affect the result. Honor creative authority already granted by the user. Keep page-specific planning in the existing task notes rather than creating a separate brief system.

## Plan the argument before the sections

For each proposed section, write the visitor question, the evidence that answers it, and what the visitor can understand or do afterward.

For example, a migration tool might first show the supported source systems, then demonstrate a transfer, then explain recovery before offering a trial. A portfolio might lead with selected work and end with project availability. Choose the sequence from the actual offer.

Remove sections that repeat an answer without adding useful evidence. Keep specifications, pricing, and practical objections easy to scan. Do not stretch them into pinned scenes to meet a page-length target.

For an expressive campaign, identify one moment worth remembering and the concrete content that makes it matter. Give that moment emphasis through composition or pacing. A working demonstration or a clear comparison can carry the moment without animation. Keep the final action readable after the story ends.

## Choose structure independently of palette

Compare plausible structures before filling a standard hero, card grid, and CTA sequence. Consider these options according to the visitor's task:

- For an evidence-heavy service, organize the page as an editorial explanation with headings, captions, and direct access to key details.
- For software whose behavior proves the claim, lead with a usable demonstration and explain its inputs and outputs. Label simulated behavior.
- For a portfolio or product range, organize around a browsable collection with consistent factual labels and useful selection controls.
- For a replacement product, use a fair comparison with explicit assumptions and a readable stacked layout on narrow screens.
- For a concise campaign with strong wording, let typography carry the opening and use media only where it adds information.
- For a physical process or spatial story, consider a scroll sequence when movement explains something a still cannot.

These are content structures within the approved design directions, not mandatory themes or effect recipes. Preserve navigation that helps visitors evaluate the offer or reach the action directly.

When comparing new-page variants, review their opening, navigation, evidence order, section rhythm, ending, and useful interaction. If the same outline describes every variant, change the flexible structural choices before recoloring them. Use the existing comparison notes. Do not create a historical registry or enforce an arbitrary novelty score.

When the user requests a familiar structure, keep it. Vary the permitted typography, imagery, density, and emphasis instead. Do not add bespoke interactions solely to make variants different.

## Prepare layered heroes only when depth helps

First apply [hero sections UX](./hero-sections-ux.md). If a static product view communicates the offer well, use it. When the chosen direction needs layered depth:

1. Describe the opening, middle, and exit composition before requesting assets.
2. List each required plane, its asset, its movement, and any overlap or shared contact point. Use only the planes the scene needs.
3. Prepare a background without the extracted subject. Otherwise, moving a cutout reveals a duplicate subject underneath.
4. Inspect actual transparency and cutout edges against light and dark backgrounds. Painted checkerboards, matte halos, and clipped silhouettes need asset fixes.
5. Align perspective, lighting, and scale across layers. Keep a subject attached to its support through the motion, including its contact shadow.
6. Keep headings and controls as semantic HTML. Reserve readable space throughout the sequence, including positions between planned frames.
7. Compose the phone view separately. Adjust the crop, subject position, text placement, and travel rather than uniformly shrinking the desktop scene.
8. Prepare a complete static composition before enabling motion. Retain it if required layers, video, or rendering features fail to load.

Use [image treatment](./image-treatment.md) for media containment and overlays. Use an authorized asset workflow and preserve source files. Asset generation is optional.

## Implement the smallest useful motion

Follow [motion design](./motion-design.md) and the project's existing React framework and Tailwind conventions. Start with document flow and native sticky positioning. Use existing motion dependencies when the sequence needs more control.

- Keep scroll progress out of page-wide React state. Limit updates to the animated elements, and clean up observers, listeners, and animation frames on unmount.
- Define the intended progress interval for each scene. Distinguish sticky travel from the interval during which a normal section is visible. Handle zero travel without division by zero or a sudden jump.
- Preserve normal scrolling, keyboard navigation, and direct access to the CTA. Keep pointer effects optional and exclude them from essential meaning.
- Under reduced motion, show the complete story and remove surplus pinned space. Restore access to every item in horizontal sequences.
- For video scrubbing, evaluate seeking cost and delivery size using the actual footage. A file that plays smoothly may still seek poorly. Keep a poster fallback and defer nonessential media.
- Pause rendering when offscreen or when the document is hidden. Add WebGL or generated video only when the chosen scene requires it.

If a useful selector or demo changes the offer, carry that selection into the next step where appropriate. Verify the handoff. Do not imply a booking, submission, or purchase succeeded unless its integration confirms that result.

## Verify the rendered journey

Use [visual verification](visual-verification.md) to record the target, evidence, and status of fixes. These scroll-specific checks extend that procedure.

Use the project's existing browser tools against the actual page and assets. Confirm the URL serves the intended revision before trusting screenshots.

1. Capture each animated section at entry, intermediate positions, exit, and its handoff to the next section. Add samples around fades, overlaps, and reported defects.
2. Inspect a contact sheet and full-size problem frames. Then scroll forward and backward at normal and fast speeds to check timing and continuity.
3. Look for pinned travel with no useful visible change, copy that never becomes fully readable, frozen video, duplicate subjects, and abrupt layer seams. Shorten unnecessary holds.
4. Check contrast over the rendered background throughout motion, including overlays and the least favorable image regions under each text line. Apply the existing [color and contrast](./color-and-contrast.md) requirements. Passing against a poster alone is insufficient.
5. Tab through every control, including pinned content. Confirm focus becomes visible and usable. `pointer-events: none` alone does not prevent keyboard focus on invisible elements.
6. Test narrow and compact viewports, reduced motion, and failed media. Confirm the full story, horizontal content, and final action remain reachable.
7. If the experience relies on video or touch behavior, test the target browser on a real device when available. Desktop viewport emulation does not establish mobile decoder or gesture behavior.
8. Exercise CTA destinations, selections, menus, and forms. Check console errors and failed requests. Rerun affected checks after fixes.

Report what you inspected and any untested states. Sampled screenshots cannot prove every frame, and a changed progress value cannot prove that video actually painted. Do not adjust sample positions to hide defects.

## Source

This workflow adapts ideas from [Scroll Craft](https://github.com/nateherkai/scroll-craft/tree/0b816225945e45380397d6a0487efa3c98916858/plugins/nateherk-design/skills/scroll-craft), including its structure, hero-depth, and verification references. See [NOTICE.md](https://github.com/aladicf/better-react-web-ui/blob/main/NOTICE.md) for attribution. It uses this library's React and Tailwind workflow without requiring Scroll Craft's engine, generation provider, or effect quotas.
