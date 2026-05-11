# Personality Levers

Choose the broader design direction first using [design directions](./design-directions.md), then use these levers to express that direction consistently.

Personality should come from a few deliberate choices, not a random pile of effects.

## Emotional Intent

Before adding charm, humour, mascots, expressive color, or celebratory motion, name the emotion the interface should support.

Useful targets:

- trust for finance, healthcare, security, admin, and enterprise workflows
- confidence for setup, checkout, publishing, and irreversible decisions
- relief for recovery, support, error handling, and complex migration
- momentum for onboarding, learning, habit loops, and task completion
- pride for achievements, creative output, and public milestones
- curiosity for discovery, browsing, education, and editorial surfaces

React/Tailwind implementation rule: emotional intent should map to design tokens and component variants, not one-off decoration. If the desired feeling is `calm`, use quieter surface contrast, stable spacing, restrained motion, and direct copy. If it is `playful`, use warmer accent tokens, softer radius, richer empty states, and optional celebratory states. Do not mix emotional languages randomly inside one flow.

### Emotional stack

Strong emotional UX still follows the basic order:

1. functionality
2. reliability
3. usability
4. personality and delight

If the flow is broken, slow, confusing, or inaccessible, emotional polish is a cover-up. Fix the base experience first.

## Font Choice

Typography is one of the fastest ways to signal tone.

### Common signals
- **Serif / refined serif**: classic, editorial, elegant, premium
- **Neutral sans**: practical, modern, restrained, trustworthy
- **Rounded sans**: friendly, playful, softer
- **Condensed / high-contrast display**: dramatic, assertive, expressive

## Color Tone

Color changes the emotional temperature immediately.

### Common signals
- **Blue / cool neutrals**: calm, safe, trustworthy
- **Warm neutrals + gold / ochre**: luxurious, human, sophisticated
- **Bright multi-color accents**: playful, energetic, consumer-facing
- **Muted earth tones**: organic, grounded, calm
- **High-contrast black/white + one accent**: editorial, confident, sharp

## Radius Style

Corner treatment matters more than it seems.

### Common signals
- **Square / near-square**: serious, technical, formal, editorial
- **Small radius**: neutral, versatile, professional
- **Large radius**: friendly, playful, soft

Consistency matters more than the exact value. Mixing incompatible radius styles usually weakens the design.

## Language Tone

The words used in the interface are part of the design system.

### Common signals
- **Formal / precise**: authoritative, technical, serious
- **Neutral / concise**: practical, efficient, trustworthy
- **Conversational / warm**: friendly, approachable, helpful
- **Playful / expressive**: energetic, consumer, high-personality

## Common Combinations

### Trustworthy / Professional
- neutral sans
- cool neutrals with restrained accent
- small radius
- concise, formal or neutral language

### Playful / Friendly
- rounded sans
- warmer or brighter palette
- larger radius
- conversational language

### Editorial / Premium
- refined serif or strong display + restrained body face
- warm neutrals or sharp monochrome with one accent
- square or lightly rounded corners
- confident, minimal language

### Utilitarian / Technical
- neutral or slightly industrial sans
- tight palette, often cooler
- square or small-radius components
- direct, precise copy

## Use Personality Intentionally

Ask:
- What should this feel like in 3 words?
- Which 2–3 levers will carry most of that feeling?
- Are any decorative moves fighting the intended tone?

## Risk and Tone Fit

Emotional design must fit consequence level.

- low-risk consumer and creative products can carry more play, surprise, and expressive visuals
- productivity products usually need calm confidence with small rewards for progress
- finance, health, security, legal, and admin workflows should prefer reassurance, clarity, and restraint over whimsy
- destructive, failed, or blocked states need direct recovery before personality

Mascots, humour, and expressive illustrations are expensive commitments. They require consistent art direction, copy rules, fallback states, and cultural review. If the project cannot maintain them, use subtler personality levers instead: tone, spacing, color temperature, icon style, and micro-interactions.

---

**Avoid**: Expressing personality only through animation or decoration. Mixing soft playful corners with cold clinical copy unless the contrast is intentional.
