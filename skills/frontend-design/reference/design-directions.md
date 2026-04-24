# Design Directions

Use this reference when choosing or preserving a website design style.

Treat style as a deliberate constraint system, not a random mood-board adjective.

The right direction depends on three things lining up:

- the **content** and how dense or proof-heavy it is
- the **brand** and what it should feel like
- the **real context of use** including readability, performance, accessibility, and maintenance cost

Typography, spacing, hierarchy, content structure, and action order should be solid before you start layering stronger style signals on top.

## Non-negotiables

### Existing projects keep their visual system first

If the skill is being used inside an existing project, preserve the current look and feel unless the user explicitly asks for a rebrand or a bigger style shift.

Match the existing project before inventing a new direction:

- typography and weight strategy
- palette temperature and contrast style
- corner radius and border language
- elevation / shadow behavior
- spacing rhythm and density
- imagery treatment
- interaction and motion tone

Do not smuggle in a new style family just because it looks fashionable.

### Brand-new broad prompts should choose from the approved directions below

When a user says something broad like `create 5 landing pages for my product idea`, do not invent vague tone buckets.

Instead:

1. infer the likely brand promise, audience, and trust level from the company / product idea
2. choose directions from the approved list in this file
3. make the directions meaningfully different in structure and personality, not just color swaps
4. explain why each direction fits that specific company / product idea
5. say where the style should be strongest and where it should pull back

### Dense or high-stakes flows should stay clearer than the marketing shell

Even when the marketing site uses a stronger visual style, core flows should usually stay closer to minimalist, Swiss, flat, or other clarity-first behavior.

That especially applies to:

- forms and validation
- pricing comparison and checkout
- settings and tables
- authentication and recovery
- error states and recovery paths
- permission or admin surfaces

Glass, soft UI, clay, brutalist accents, 3D, and other louder treatments can work well on hero sections, proof cards, feature spotlights, or campaign moments. They usually work worse when every surface uses the same effect at full intensity.

### Do not use these directions in this library

Do not propose or generate retro, synthwave, cyber, terminal, or generic futuristic-neon directions in broad or default style selection.

This library is for strong web design direction, not nostalgia theater or HUD cosplay. Tiny mercy, big results.

## How to choose a direction

Judge each possible direction against these filters before committing:

1. **Brand fit** — does this feel native to the offer and audience?
2. **Content fit** — can this style support the amount of copy, proof, screenshots, and navigation the page needs?
3. **Trust fit** — will this help or hurt credibility for this category?
4. **Performance cost** — does the visual system rely on blur, heavy shadows, large imagery, or animation work that raises implementation cost?
5. **State complexity** — how hard will hover, focus, active, disabled, loading, error, and responsive states be to keep coherent?
6. **Longevity** — will the page still feel deliberate after the novelty wears off?

When the answer is mixed, keep the structure clearer and apply the louder style more selectively.

## Style stack model

Choose styles in layers instead of piling on random traits.

### 1. Start with one primary structural direction

This controls layout logic, hierarchy, density, and overall composition.

### 2. Optionally add one supporting surface treatment or expressive modifier

This controls surface feel, depth, or atmosphere.

That modifier can also be typographic or motion-led when the brand and content support it.

### 3. Keep personality consistent through implementation levers

Use typography, color temperature, radius, border language, imagery, and writing tone to reinforce the chosen direction.

Do not combine multiple loud directions at full strength.

Examples of good combinations:

- Swiss + Frost UI accents
- Minimalism + Mesh Gradients
- Editorial + restrained Glass hero treatment
- Bento + Outline / Skeletal detail language
- Organic + soft gradients and rounded surfaces
- Bauhaus + Bold Typography
- Japandi + Wabi Sabi texture cues
- Utilitarian + restrained Motion Design
- Mid-Century + Luxury Typography accents

Examples of bad combinations:

- Glass + Clay + Neumorphism + 3D all fighting for every card
- Neo-brutal borders plus luxury-editorial typography plus soft organic blobs with no unifying logic

## Approved structural directions

### Minimalism

**Use for:** premium products, productivity tools, consulting, finance, portfolios, or any offer that benefits from restraint and focus.

**Signals:** generous whitespace, strong content hierarchy, minimal decoration, few colors, disciplined type and spacing.

**Works best when:** the content and proof are already strong and the brand benefits from calm confidence.

**Use carefully:** minimalism is not empty space plus weak hierarchy. The page still needs contrast, rhythm, and clear action emphasis.

**Pull back when:** the brand needs warmth, playfulness, or obvious visual character that pure restraint cannot carry alone.

### Swiss Style

**Use for:** trustworthy B2B products, premium SaaS, professional services, design-conscious companies, and content that needs strong order.

**Signals:** modular grids, strong alignment, sans-serif typography, poster-like composition, disciplined photography, asymmetry used with control.

**Works best when:** clarity, order, and professionalism need to come through quickly.

**Use carefully:** Swiss structure can feel rigid or cold if the copy, photography, or accent moments never soften it.

**Pull back when:** the brand depends on looseness, hand-made warmth, or overt playfulness.

### Editorial Style

**Use for:** story-led products, fashion, culture, media, premium brands, founder-led narratives, and landing pages with strong photography or copy.

**Signals:** magazine-inspired composition, strong headline contrast, layered imagery, decorated type moments, asymmetrical spreads.

**Works best when:** the page needs to feel curated, expressive, and content-rich.

**Use carefully:** editorial style still needs scan structure. Do not turn the page into a collage that hides the CTA or obscures the message.

**Pull back when:** the product requires highly utilitarian reading speed or heavy operational UI.

### Bento

**Use for:** feature-rich product marketing, dashboards, product overviews, comparison-heavy pages, and dense information that needs chunking.

**Signals:** tile-based grouping, compact panels, clear content modules, efficient use of space, high comparability.

**Works best when:** multiple benefits, screenshots, stats, or proof snippets need to be scannable fast.

**Use carefully:** avoid turning bento into generic rounded-card wallpaper. Vary hierarchy, tile size, and emphasis.

**Pull back when:** the brand needs flowing narrative or spacious luxury rather than structured grouping.

### Constructivism

**Use for:** ambitious tech brands, cultural projects, launch campaigns, research labs, or companies that want energy, geometry, and directional momentum.

**Signals:** angular geometry, asymmetry, bold diagonals or offsets, strong directional composition, collage-like contrasts, energetic layout.

**Works best when:** the brand wants motion, ambition, and modernist edge without collapsing into chaotic noise.

**Use carefully:** the geometry should still support reading order and CTA clarity.

**Pull back when:** the audience needs high familiarity, conservatism, or low-cognitive-load defaults.

### Flat

**Use for:** clarity-first products, public-service sites, documentation-adjacent surfaces, practical software, or any interface that should feel straightforward and fast.

**Signals:** clean shapes, low-depth visuals, limited effect work, solid fills, crisp hierarchy.

**Works best when:** speed, clarity, and maintainability are more important than heavy atmosphere.

**Use carefully:** flat should not become dull. Use typography, spacing, color, and illustration more intentionally to prevent generic output.

**Pull back when:** the page needs stronger tactility, drama, or emotional atmosphere.

### Japandi

**Use for:** lifestyle products, home and interior brands, wellness services, calm productivity tools, hospitality, or any product that should feel peaceful and intentional.

**Signals:** warm neutrals, disciplined minimalism, soft curves, natural materials, quiet contrast, sparse but considered composition.

**Works best when:** the brand benefits from calm craft, low visual noise, and a lived-in premium feeling rather than glossy luxury.

**Use carefully:** Japandi needs genuine restraint and material sensitivity. If you add too many decorative accents, it turns into generic beige minimalism.

**Pull back when:** the product needs louder energy, obvious youthfulness, or heavy information density with sharper comparability.

### Bauhaus

**Use for:** architecture, product design, modern cultural brands, design tools, education, or systems that benefit from geometric clarity and modernist order.

**Signals:** grid systems, primary-color accents, geometric shapes, sans-serif typography, form-follows-function composition.

**Works best when:** the brand wants rational clarity with enough visual identity to avoid default SaaS blandness.

**Use carefully:** keep the geometry purposeful. Bauhaus should feel structured and alive, not like a school poster glued on top of a website.

**Pull back when:** the audience needs softer warmth, more editorial richness, or highly organic composition.

### Utilitarian

**Use for:** technical products, operations tools, utility apps, manuals, logistics, infrastructure, or any offer where directness matters more than atmosphere.

**Signals:** rugged clarity, muted palettes, industrial or direct typography, obvious grouping, minimal decoration, task-first layout.

**Works best when:** users need speed, confidence, and no-nonsense wayfinding.

**Use carefully:** utilitarian does not mean ugly by default. It should feel disciplined and dependable, not like a lazy terminal cosplay or unfinished wireframe.

**Pull back when:** the brand depends on emotional warmth, aspiration, or expressive storytelling.

### Wabi Sabi

**Use for:** wellness brands, mindful products, tea or food brands, creative studios, artisan businesses, and services that should feel humble, tactile, and contemplative.

**Signals:** earthy tones, asymmetry, natural textures, quiet spacing, imperfect forms, subtle visual age and material honesty.

**Works best when:** the brand benefits from calm imperfection, softness, and human touch rather than glossy polish.

**Use carefully:** Wabi Sabi still needs intention. Imperfection should feel crafted, not sloppy or broken.

**Pull back when:** the product needs high comparability, sharp data readability, or overtly high-tech trust signals.

### Mid-Century

**Use for:** home and furniture brands, editorial products, lifestyle businesses, design-forward consumer products, or warm modern brands that want optimism without generic minimalism.

**Signals:** clean lines, warm retro-inspired color families, organic geometry, restrained pattern, modernist optimism, approachable typography.

**Works best when:** you want warmth and personality with strong compositional order.

**Use carefully:** use Mid-Century as warm modernism, not as a cue to slide into broad retro nostalgia. Keep the shapes and palette disciplined.

**Pull back when:** the product needs ultra-contemporary sharpness or highly conservative trust language.

## Expressive and modifier directions

For surface treatments, depth systems, typographic-led modifiers, and motion-led modifiers, see [expressive-directions](expressive-directions.md).

## Quick default guidance

When the prompt is broad and the product idea does not strongly suggest something else:

- default toward **Minimalism**, **Swiss Style**, **Editorial Style**, **Bento**, **Flat**, **Organic**, **Japandi**, **Bauhaus**, **Utilitarian**, or **Wabi Sabi** depending on the audience and content
- use **Glassmorphism**, **Frost UI**, **Mesh Gradients**, **Outline / Skeletal UI**, **Neo-Brutalism**, **Claymorphism**, **Neumorphism**, **3D UI**, **Bold Typography**, **Luxury Typography**, **Modular Typography**, or **Motion Design and Animation** as selective modifiers when the brand truly supports them

## Recommended output language for style selection

When presenting directions, describe them like this:

- **Primary structural direction**
- **Optional supporting treatment**
- **Why it fits this company / product idea**
- **Where to use it strongly**
- **Where to keep it calmer**
- **Main implementation or performance cost**

This keeps style decisions concrete instead of hand-wavy.

## Final check before committing

Ask:

- Would this style still work if blur, glow, shadows, or decorative layers were temporarily removed?
- Does the typography and spacing still carry the page?
- Is the style helping the content, or competing with it?
- Are dense or risky flows calmer than the hero?
- Does this feel specific to the brand, or just trend-aware?

If the answer is weak, simplify the structure and reapply the style more selectively.
