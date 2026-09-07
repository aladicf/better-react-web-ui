# Preserve an approved visual reference

Use this procedure when implementation is based on a selected mock, screenshot, composition, or other visual reference. For direct implementation without a reference, proceed from the brief. Do not require image generation, alternatives, or another approval round.

## Identify what the reference commits to

Read the reference image as well as its description. Distinguish an approved target from an inspiration image. Approval of a composition does not make invented testimonials, prices, logos, or capabilities true.

Record the material elements in the implementation plan or existing page brief:

| Element | Required visual quality | Implementation | Responsive treatment |
| --- | --- | --- | --- |
| Hero subject | [subject, crop, lighting, silhouette] | [asset path or production task] | [phone crop and placement] |
| Heading | [hierarchy, character, line breaks where important] | [existing type tokens] | [wrapping and unclipped leading] |
| Navigation and action | [placement and prominence] | [real controls and destinations] | [usable compact layout] |
| Page structure | [section order and proof sequence] | [target components] | [reading order] |

Include only elements present and material to the task. Avoid an exhaustive inventory of every pixel.

## Match the medium and preserve meaning

Use suitable existing assets first. Keep photography or textured artwork as credible image assets when those qualities define the reference. Use SVG or CSS for geometry, diagrams, and interface elements when they preserve the intended appearance and behavior.

Do not silently replace a photographic subject with generic shapes, a detailed product screenshot with an unreadable thumbnail, or a cut-out object with an unrelated circular crop. Keep interface text and controls in accessible HTML rather than baking them into an image.

If an asset is missing, state the gap and continue independent implementation. Use a labeled placeholder during development. Ask only when the substitution would materially change the approved direction and the user has not delegated that choice. Do not call the reference implemented while a defining asset is still absent.

## Check fidelity in the actual page

Use [visual verification](visual-verification.md) to compare composition, typography, imagery, and responsive behavior. Preserve hierarchy and reading order on narrow screens rather than mechanically shrinking a desktop mock.

Record meaningful deviations and their reason. Fix missing required elements or report them as open. Respect an approved accessibility or responsive adaptation even when it differs from the static reference.
