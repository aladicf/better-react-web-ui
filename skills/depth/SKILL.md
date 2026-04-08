---
name: depth
description: Add or refine depth through elevation systems, raised and inset surfaces, layered overlap, and meaningful shadow behavior so interfaces feel structured instead of flat. Use when the user mentions depth, elevation, shadows, layering, flat cards, pressed states, drag feedback, or inset controls.
metadata:
   argument-hint: "[target]"
---

Create or improve visual depth so layers, surfaces, and states feel intentional, readable, and physically believable without drifting into over-styled noise.

## MANDATORY PREPARATION

Users start this workflow with `/depth`. Once this skill is active, load $frontend-design — it contains design principles, anti-patterns, and the **Context Gathering Protocol**. Follow that protocol before proceeding — if no design context exists yet, you MUST load $setup first.

---

## Assess Depth Problems

Analyze where the interface feels flat, confusing, or physically inconsistent:

1. **Elevation structure**:
   - Are all components using the same shadow regardless of job?
   - Is it hard to tell what sits on the page versus above it?

2. **Surface treatment**:
   - Which elements should feel raised?
   - Which should feel inset, like inputs or wells?
   - Are there places where color alone could suggest depth more cleanly than stronger effects?

3. **Interaction states**:
   - Do pressed buttons feel like they move inward or just change color?
   - Does dragging feel like an item pops forward above its neighbors?

4. **Restraint**:
   - Are shadows and effects helping users understand structure, or just making the UI look busier?

If any of these are unclear from the codebase, ask the user directly to clarify what you cannot infer.

**CRITICAL**: Depth should explain surfaces, states, and layering. If the effect is louder than the meaning, it has gone too far.

## Plan the Depth System

Consult the [elevation system](../frontend-design/reference/elevation-system.md) for shadow levels, two-part shadow logic, raised/inset mapping, and flat depth via color.
Consult the [surface separation](../frontend-design/reference/surface-separation.md) when deciding whether depth should come from spacing, background shifts, overlap, borders, or shadows.
Consult the [image treatment](../frontend-design/reference/image-treatment.md) when overlapping media or image boundaries need cleaner depth cues.

Create a plan around:
- **Elevation levels**: Which 3–5 semantic levels exist?
- **Surface roles**: Which things are base, raised, inset, pressed, or dragged?
- **Layering**: Where can overlap clarify structure?
- **Restraint**: Which effects should be reduced or removed entirely?

## Build Depth Systematically

### Establish an Elevation System
- Define a small set of semantic levels for surfaces, controls, menus, overlays, and temporary UI
- Keep similar components on the same elevation unless there is a real reason to separate them

### Raised and Inset Elements
- Raised elements should feel like they sit above the page with a shadow beneath them
- Inset elements should feel recessed through inner shadow, lip treatment, or darker surrounding surface
- Use raised and inset treatments deliberately — not every control needs obvious realism

### Two-Part Shadow Logic
- Use a larger, softer shadow to suggest distance from the surface
- Use a smaller, tighter shadow near the edge to suggest compressed ambient shadow
- As elevation increases, the tight near-edge shadow should usually become subtler

### Pressed and Dragged States
- Pressed states should reduce elevation and feel like the element moves inward/downward
- Dragged states should increase elevation so the item feels like it pops forward
- Match shadow, transform, and any color shift so the motion reads as a single physical change

### Overlap and Layering
- Use overlap when it helps clarify multiple layers of information
- Let cards, controls, or media cross boundaries when it reinforces depth and grouping
- Keep overlaps readable; add separation or background-matching edges if layers start to clash

### Flat Depth via Surface Color
- Lighter surfaces often feel closer, darker surfaces often feel further away
- Before adding more shadow, test whether a subtle surface-color shift communicates the same thing more cleanly

### Don’t Get Carried Away
- Borrow cues from the real world, but stop before the interface feels photo-realistic or busy
- If the structure is already clear, simpler depth usually wins

**NEVER**:
- Use the same drop shadow for every component
- Add heavy shadows where color or spacing would communicate depth better
- Make every button, card, panel, and modal feel equally elevated
- Let realism overpower clarity
- Use depth effects with no semantic meaning

## Verify Depth Quality

- **Layer clarity**: Is it obvious what sits on the page and what floats above it?
- **State clarity**: Do pressed and dragged states feel physically different?
- **Consistency**: Are similar components using the same elevation language?
- **Restraint**: Does the UI feel more understandable, not just more decorated?

Remember: Great depth creates structure, not spectacle. Use it to make layers and states feel obvious, then stop.