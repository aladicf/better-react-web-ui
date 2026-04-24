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

## Approved expressive directions and surface treatments

### Conceptual Sketch

**Use for:** portfolios, design tools, brainstorming products, innovation labs, early-concept storytelling, or brands that want to show thought process and imagination.

**Signals:** pencil or ink lines, crosshatching, grayscale tones, sketch-paper texture, annotations, unfinished ideation energy.

**Best use:** process callouts, hero illustrations, case-study framing, or selected storytelling surfaces.

**Cost:** can quickly feel unfinished or low-confidence if the whole interface looks like a draft instead of a designed product.

**Do not:** use conceptual-sketch roughness for dense operational UI, form-heavy flows, or places that need strong trust and precision.

### Glassmorphism

**Use for:** premium hero surfaces, spotlight cards, product landing pages, app-like marketing surfaces, modern OS-inspired navigation moments, and selected dashboard highlights.

**Signals:** blur, translucency, frosted backgrounds, soft shadows, subtle borders, floating surfaces, layered depth.

**Best use:** selective emphasis on a few important surfaces, especially when the brand benefits from sleek layering without losing hierarchy.

**Cost:** blur and transparency raise contrast, performance, and state-management complexity.

**Do not:** make every card glass. If everything blurs, nothing stands out and the interface starts to feel slower and less legible. In this library, prefer restrained or neutral tinting over neon-futuristic glass defaults.

### Frost UI (Soft Glass)

**Use for:** calmer premium work where you want some atmospheric softness without hard-selling the glass effect.

**Signals:** low blur, soft transparency, light diffusion, quiet layered surfaces.

**Best use:** restrained hero shells, navigation, spotlit callouts, or product frames.

**Cost:** still requires careful contrast discipline, but usually cheaper and safer than full glassmorphism.

**Do not:** treat it as permission to wash the whole interface in translucent haze.

### Neumorphism (Soft UI)

**Use for:** tactile control clusters, calculators, fintech or productivity controls, refined settings blocks, audio or wellness surfaces, and focused moments where soft physicality matters.

**Signals:** extruded softness, inner and outer shadows, rounded forms, low-contrast relief, subtle pressed states, touchable-looking surfaces.

**Best use:** small, selective controls or supportive panels where clarity and polish can coexist.

**Cost:** low-contrast states and accessibility are easy to get wrong; dense screens become mushy fast.

**Do not:** build whole product surfaces with nothing but soft shadows and same-tone panels. Start from clear flat hierarchy first, then add just enough relief to support tactility.

### Claymorphism

**Use for:** playful consumer brands, kids or family-friendly products, creative tools, event pages, or marketing moments that benefit from cheerful tactility.

**Signals:** chunky softness, bright color, bulbous shapes, strong rounded forms, playful depth.

**Best use:** illustrations, hero accents, feature highlights, or a small number of brand-defining surfaces.

**Cost:** custom component work increases quickly and can become toy-like when the product needs trust or seriousness.

**Do not:** force it onto serious, dense, or high-trust categories without a very good reason.

### Mesh Gradients

**Use for:** modern brand backdrops, hero sections, launch pages, and premium-feeling sites that need atmosphere without heavy component complexity.

**Signals:** fluid color blending, soft shape fields, vibrant but diffused background energy.

**Best use:** backgrounds and branding moments paired with clearer typography and layout.

**Cost:** relatively low when used as a background; much riskier when combined with weak contrast or too many extra effects.

**Do not:** stack mesh gradients with glow, blur, and noisy imagery all at once.

### Outline / Skeletal UI

**Use for:** lightweight modern marketing pages, technical-yet-clean product sites, previews, onboarding moments, or systems that want structure without heavy fill.

**Signals:** outlined components, hollow buttons, wireframe-like emphasis, restrained fills, crisp lines.

**Best use:** details, grouping, and lightweight modern atmosphere.

**Cost:** outlined surfaces can feel unfinished if hierarchy and fill usage are too weak.

**Do not:** rely on outlines alone to create importance.

### 3D UI / Isometric Design

**Use for:** product demos, technical explainers, fintech or infra marketing, feature storytelling, and visual systems that benefit from objects or diagrams with depth.

**Signals:** dimensional objects, isometric illustrations, layered depth, perspective, soft shadows, motion-friendly geometry.

**Best use:** hero visuals, explainer scenes, and selective product storytelling.

**Cost:** asset production and motion complexity rise quickly.

**Do not:** let decorative 3D steal attention from reading or action flow.

### Organic

**Use for:** wellness, healthcare, sustainability, lifestyle brands, community-focused products, and warm human-centered services.

**Signals:** natural curves, soft forms, rounded edges, calm palettes, fluid composition, gentle asymmetry.

**Best use:** warm brand framing, supportive illustrations, softer section transitions, and approachable components.

**Cost:** low to moderate, but can lose edge or structure if everything becomes blob-like and overly pastel.

**Do not:** confuse organic with vague. The hierarchy still needs crisp structure.

### Hand-Drawn Style

**Use for:** artisan brands, kids-focused projects, local businesses, creative portfolios, playful campaigns, and products that benefit from clear human-made character.

**Signals:** sketch marks, handwritten accents, imperfect outlines, loose composition, crafted imperfection.

**Best use:** accents, section dividers, illustrative moments, badges, and brand flourishes.

**Cost:** readability and polish can collapse if the body copy or core UI adopts the same looseness.

**Do not:** use hand-drawn typography or roughness for dense UI copy, complex forms, or serious operational surfaces.

### Graffiti

**Use for:** streetwear brands, music festivals, youth campaigns, community culture work, sports drops, or products that genuinely benefit from urban energy and social voice.

**Signals:** spray-paint textures, dripping letters, concrete or wall surfaces, neon or sharp accent color, freestyle type, raw layered mark-making.

**Best use:** launch pages, campaign splashes, headline treatments, posters, merch-driven sections, or selected hype moments.

**Cost:** readability, contrast, and broad brand trust can collapse fast if graffiti energy takes over navigation, forms, or long-form reading.

**Do not:** use graffiti styling as the default language for serious product UX, dense copy, or conversion-critical forms.

### Tenebrism

**Use for:** cinematic storytelling, dark editorial launches, gothic or luxury campaigns, art and culture brands, or emotionally dramatic hero sections.

**Signals:** intense chiaroscuro, black fields, spotlighted imagery, deep shadow, dramatic contrast, painterly atmosphere.

**Best use:** hero art direction, key visuals, cinematic scrollytelling, or emotionally charged campaign moments.

**Cost:** deep darkness and spotlight treatment can hurt readability, reduce comparability, and push the page toward theatrical excess if applied too widely.

**Do not:** let tenebrism govern dense information architecture, product comparison blocks, or utility-heavy interface zones.

### Neo-Brutalism

**Use for:** bold portfolios, agencies, campaign pages, challenger brands, or products that genuinely benefit from confrontation and punch.

**Signals:** thick borders, hard shadows, loud contrast, assertive type, intentionally raw accents.

**Best use:** emphasis moments, hero framing, standout calls to action, and personality-led marketing sections.

**Cost:** can fatigue the eye quickly and makes dense or high-trust flows feel harsher than necessary.

**Do not:** let every block shout. Strong brutalist accents often work better over a clearer underlying structure.

## Approved typographic and motion-led modifiers

### Bold Typography

**Use for:** hero-first landing pages, fashion and beauty brands, consumer launches, editorial marketing, design-led tech, or any site where the message should hit immediately.

**Signals:** oversized headlines, assertive scale contrast, dynamic type layering, variable-font expression, headline-led composition, occasional kinetic lettering.

**Best use:** hero sections, section openers, navigation emphasis, and short message-led campaigns where typography can carry brand identity.

**Cost:** large expressive type increases layout pressure, wrap risk, and narrow-layout tuning work.

**Do not:** use bold typography as an excuse to crush line-height, ignore readability, or turn every heading into a shouting contest.

### Luxury Typography

**Use for:** luxury fashion, beauty, jewelry, hospitality, premium editorial brands, and products that should feel elegant, exclusive, and timeless.

**Signals:** refined serif or couture-like display type, high letter spacing, bespoke ligature feeling, monochrome or restrained palettes, sparse composition.

**Best use:** short-copy heroes, premium brand statements, logotype-adjacent layouts, and sections where typography is the main luxury signal.

**Cost:** this style needs disciplined spacing, calm composition, and genuinely strong font choices; otherwise it becomes generic faux-luxury.

**Do not:** apply luxury-typography restraint to dense utilitarian product flows that need faster scanning and stronger action clarity.

### Modular Typography

**Use for:** design systems, architecture and culture brands, experimental tech marketing, poster-like landing pages, and brands that want structure to become part of the identity.

**Signals:** typographic grids, geometric letterforms, repeatable modules, uniform spacing, variable layout rhythm, letters behaving like system blocks.

**Best use:** headlines, brand systems, section markers, visual rhythm devices, and short-message compositions.

**Cost:** modular experiments can hurt legibility and become visually brittle if body text or long-form reading inherits too much of the same rigidity.

**Do not:** force modular typography into body copy, dense tables, or long explanatory sections.

### Motion Design and Animation

**Use for:** storytelling-heavy launches, premium brand moments, product demos, guided onboarding moments, and interfaces where motion can clarify state and attention.

**Signals:** scroll-triggered reveals, micro-interactions, animated states, controlled scrollytelling, tone-matched easing, purposeful rhythm.

**Best use:** state transitions, hover and press feedback, hero reveals, controlled scroll narratives, and selective guidance through complex content.

**Cost:** motion raises implementation and performance tuning cost, and it multiplies the number of states the team must keep coherent.

**Do not:** animate everything. Motion should guide, reassure, or delight without slowing the interface or making reduced-motion users miserable.

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