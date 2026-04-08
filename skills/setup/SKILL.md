---
name: setup
description: One-time setup that gathers design context for your project and saves it for future design work. Use when starting a project, defining UI direction, or establishing persistent design guidelines for other better-web-ui skills.
---

Gather design context for this project, then persist it for all future sessions.

## Step 1: Explore the Codebase

Before asking questions, thoroughly scan the project to discover what you can:

- **README and docs**: Project purpose, target audience, any stated goals
- **Package.json / config files**: Tech stack, dependencies, existing design libraries
- **Existing components**: Current design patterns, spacing, typography in use
- **Brand assets**: Logos, favicons, color values already defined
- **Design tokens / CSS variables**: Existing color palettes, font stacks, spacing scales
- **Any style guides or brand documentation**

Note what you've learned and what remains unclear.

## Step 2: Ask UX-Focused Questions

ask the user directly to clarify what you cannot infer. Focus only on what you couldn't infer from the codebase:

### Users & Purpose
- Who uses this? What's their context when using it?
- What job are they trying to get done?
- What emotions should the interface evoke? (confidence, delight, calm, urgency, etc.)

### Brand & Personality
- How would you describe the brand personality in 3 words?
- Any reference sites or apps that capture the right feel? What specifically about them?
- What should this explicitly NOT look like? Any anti-references?
- Should the interface feel more serious, playful, elegant, utilitarian, editorial, or something else?
- Should the language be formal, neutral, or conversational?

### Aesthetic Preferences
- Any strong preferences for visual direction? (minimal, bold, elegant, playful, technical, organic, etc.)
- Light mode, dark mode, or both?
- Any colors that must be used or avoided?
- Should corners feel mostly square, gently rounded, or soft and playful?
- Should the palette lean warm, cool, or neutral?

### Accessibility & Inclusion
- Specific accessibility requirements? (WCAG level, known user needs)
- Considerations for reduced motion, color blindness, or other accommodations?

Skip questions where the answer is already clear from the codebase exploration.

## Step 3: Write Design Context

Synthesize your findings and the user's answers into a `## Design Context` section:

```markdown
## Design Context

### Users
[Who they are, their context, the job to be done]

### Brand Personality
[Voice, tone, 3-word personality, emotional goals]

### Aesthetic Direction
[Visual tone, references, anti-references, theme]

### Design Principles
[3-5 principles derived from the conversation that should guide all design decisions]
```

Derive the principles from concrete levers, not vague aspirations. Prefer things like:
- "Establish hierarchy with spacing and weight before adding color"
- "Use warm neutrals and restrained accent color"
- "Favor editorial typography and mostly square corners"
- "Keep one obvious primary action per screen"

Write this section to `.better-web-ui.md` in the project root. If that file already exists, update the Design Context section in place. If a legacy `.better-ui.md` or `.impeccable.md` file exists, migrate or mirror the Design Context section into `.better-web-ui.md` so better-web-ui has a single canonical project context file going forward.

Then ask the user directly to clarify what you cannot infer. whether they'd also like the Design Context appended to AGENTS.md. If yes, append or update the section there as well.

Confirm completion and summarize the key design principles that will now guide all future work.