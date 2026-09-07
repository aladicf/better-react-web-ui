---
name: critique
description: Evaluate an interface from a UX perspective, assessing hierarchy, information architecture, emotional resonance, cognitive load, and overall quality with evidence-linked judgments and actionable feedback. Use when the user wants an overall design or UX review—not when the main need is measurable accessibility/performance diagnosis, or final micro-detail polish.
metadata:
  argument-hint: "[area (feature, page, component...)]"
---

## MANDATORY PREPARATION

Read [frontend-design](../frontend-design/SKILL.md) and follow its Context Gathering Protocol. Reuse available context and ask only about consequential gaps. Additionally gather: what the interface is trying to accomplish.

---

Conduct a holistic design critique, evaluating whether the interface actually works — not just technically, but as a designed experience. Think like a design director giving feedback.

Consult the [hierarchy checklist](../frontend-design/reference/hierarchy-checklist.md) for grayscale tests, action prioritization, and label/value treatment.
Consult the [text hierarchy and readability](../frontend-design/reference/text-hierarchy-and-readability.md) for line length, line-height, baseline, alignment, and title restraint.
Consult the [cognitive load](../frontend-design/reference/cognitive-load.md) for working-memory limits and the 8-item checklist.
Consult the [interaction design](../frontend-design/reference/interaction-design.md) when evaluating familiar patterns, target sizing, focus treatment, and overlay behavior.
Consult the [search and findability](../frontend-design/reference/search-and-findability.md) when the interface depends on site search, command palettes, autosuggest, result relevance, or no-results recovery.
Consult the [legacy modernization](../frontend-design/reference/legacy-modernization.md) when the critique involves legacy systems, old/new seams, migration candidates, or high-risk operational workflows.
Consult the [ai slop detection](../frontend-design/reference/ai-slop-detection.md) for the consolidated anti-pattern list.
Consult the [action hierarchy](../frontend-design/reference/action-hierarchy.md) when evaluating primary/secondary/tertiary actions.
Consult the [semantic color](../frontend-design/reference/semantic-color.md) when color is carrying meaning.
Consult the [surface separation](../frontend-design/reference/surface-separation.md) when judging borders, card usage, overlap, or background-shift decisions.
Consult the [image treatment](../frontend-design/reference/image-treatment.md) when screenshots, icons, and media affect readability or polish.

Treat the shared frontend-design references as canonical for hierarchy, readability, and cognitive-load doctrine, then keep this skill focused on evaluation, scoring, and prioritization.

When empty states are relevant, evaluate the zero-data surface itself through `empty-state` thinking, and evaluate broader activation, aha moments, and first-run education through `onboard` thinking.

Use [visual verification](../frontend-design/reference/visual-verification.md) for captures, evidence limits, and reusable finding records. Review and report by default. Fix issues only within explicit or prior implementation authorization. Do not create a saved report unless requested or already part of that workflow.

## Phase 1: Design Critique

Evaluate the interface across these dimensions:

### 1. Product and brand fit

Assess whether the composition supports this audience and task. Use [AI slop detection](../frontend-design/reference/ai-slop-detection.md) as diagnostic prompts, not automatic bans. Preserve approved fonts, colors, and familiar patterns. Report specific hierarchy, readability, or brand-fit problems rather than guessing whether a page was AI-generated.

### 2. Visual Hierarchy
- Does the eye flow to the most important element first?
- Is there a clear primary action? Can you spot it in 2 seconds?
- Does the right thing stand out, or is emphasis spread so evenly that nothing is memorable? (von Restorff effect)
- Do size, color, and position communicate importance correctly?
- Is there visual competition between elements that should have different weights?
- Is the hierarchy clear even if you imagine the screen in grayscale?
- Are section titles quieter than the content they introduce, or are they stealing focus?
- Has action hierarchy flattened so multiple buttons feel equally urgent?

### 3. Information Architecture & Cognitive Load
> *Consult [cognitive-load](../frontend-design/reference/cognitive-load.md) for the working memory rule and 8-item checklist*
- Is the structure intuitive? Would a new user understand the organization?
- Is related content grouped logically?
- Do common patterns behave the way users already expect? Check navigation, search, tables, filters, forms, tabs, dropdowns, pagination, and settings for unnecessary novelty.
- Is avoidable complexity pushed into the system through defaults, prefills, and guidance, or dumped on the user to manage manually? (Tesler's Law)
- Do the visible choices make the decision harder? Assess grouping, familiarity, and task complexity rather than using a universal option-count limit.
- Is the navigation clear and predictable?
- If search is present, does it understand intent, synonyms, typos, and likely destinations, or does it punish users for not knowing internal vocabulary?
- In mixed legacy/modern flows, does one fragile step make the entire product feel unreliable or inconsistent?
- **Progressive disclosure**: Is complexity revealed only when needed, or dumped on the user upfront?
- **Run the 8-item cognitive load checklist** from the reference. Report failure count: 0–1 = low (good), 2–3 = moderate, 4+ = critical.

### 4. Emotional Journey
- What emotion does this interface evoke? Is that intentional?
- Does it match the brand personality?
- Does it feel trustworthy, approachable, premium, playful — whatever it should feel?
- Would the target user feel "this is for me"?
- Do frequent interactions respond fast enough to preserve flow, or do repeated waits keep breaking concentration? (Doherty Threshold)
- **Peak-end rule**: Is the most intense moment positive? Does the experience end well (confirmation, celebration, clear next step)?
- **Emotional valleys**: Check for onboarding frustration, error cliffs, feature discovery gaps, or anxiety spikes at high-stakes moments (payment, delete, commit)
- **Interventions at negative moments**: Are there design interventions where users are likely to feel frustrated or anxious? (progress indicators, reassurance copy, undo options, social proof)

### 5. Discoverability & Affordance
- Are interactive elements obviously interactive?
- Would a user know what to do without instructions?
- Are primary and frequent targets large enough and close enough to use confidently, especially in coarse-pointer contexts?
- Do powerful features have safeguards proportional to their risk — permissions, previews, undo, confirmation, history, or explicit consequence language?
- Are hover/focus states providing useful feedback?
- Are there hidden features that should be more visible?

### 6. Composition & Balance
- Does the layout feel balanced or uncomfortably weighted?
- Is whitespace used intentionally or just leftover?
- Is there visual rhythm in spacing and repetition?
- Does asymmetry feel designed or accidental?
- Is there more space around groups than within them, or do group boundaries feel ambiguous?
- Are borders doing necessary structural work, or just compensating for weak spacing/background contrast?
- Are cards, shadows, overlap, and background shifts being used with a clear separation strategy, or are multiple methods piling up noisily?

### 7. Typography as Communication
- Does the type hierarchy clearly signal what to read first, second, third?
- Is body text comfortable to read? (line length, spacing, size)
- Do font choices reinforce the brand/tone?
- Is there enough contrast between heading levels?
- Are there too many near-identical font sizes to feel like a real type scale?
- Does line-height match line length, or do long paragraphs feel cramped?
- Are section titles visually too loud for the role they play?
- Are links drawing too much attention through color when weight, underline, or hover treatment would be calmer?
- Are number columns aligned for comparison when numeric scanning matters?

### 8. Color with Purpose
- Is color used to communicate, not just decorate?
- Does the palette feel cohesive?
- Are accent colors drawing attention to the right things?
- Does it work for colorblind users? (not just technically — does meaning still come through?)
- Are tinted surfaces using appropriate text colors, or is there washed-out gray-on-color behavior?
- Are there too many improvised shades for the palette to feel systematic?

### 9. States & Edge Cases
- Empty states: Do they guide users toward action, or just say "nothing here"?
- Loading states: Do they reduce perceived wait time?
- Do forms and searches accept harmless input variation gracefully, or do they reject users for formatting trivia that could be normalized? (Postel's Law)
- Error states: Are they helpful and non-blaming?
- Success states: Do they confirm and guide next steps?
- Are screenshots readable at the size shown?
- Are icons being scaled in a way that feels intentional rather than chunky or mushy?

### 10. Microcopy & Voice
- Is the writing clear and concise?
- Does it sound like a human (the right human for this brand)?
- Are labels and buttons unambiguous?
- Is any part of the flow manipulative — confusing consent, obstructed cancellation, guilt copy, fake urgency, or hierarchy that pressures the wrong choice?
- Does error copy help users fix the problem?

## Phase 2: Present Findings

Structure your feedback as a design director would:

### Design Health Score
> *Consult [heuristics-scoring](reference/heuristics-scoring.md)*

Score inspected, relevant heuristics from 0 to 4 using the reference criteria. Mark others untested or not applicable. Present the available evidence beside each judgment:

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | ? | [specific finding or "—" if sound] |
| 2 | Match System / Real World | ? | |
| 3 | User Control and Freedom | ? | |
| 4 | Consistency and Standards | ? | |
| 5 | Error Prevention | ? | |
| 6 | Recognition Rather Than Recall | ? | |
| 7 | Flexibility and Efficiency | ? | |
| 8 | Aesthetic and Minimalist Design | ? | |
| 9 | Error Recovery | ? | |
| 10 | Help and Documentation | ? | |
| **Total** | | **??/40** | **[Rating band]** |

Scores describe the reviewed scope, not measured user outcomes. Show a total out of 40 only when all ten heuristics were relevant and inspected. Otherwise omit the total and rating band.

### Composition verdict

State whether the hierarchy and visual system support the task. Name concrete defects and preserve explicit constraints. A font or palette alone is not a failure.

### Overall Impression
A brief gut reaction — what works, what doesn't, and the single biggest opportunity.

### What's Working
Highlight 2–3 things done well. Be specific about why they work.

### Priority Issues
Report up to five material design problems, ordered by impact. Report fewer when the evidence supports fewer; do not invent findings to fill a quota.

For each issue, tag with **P0–P3 severity** (consult [heuristics-scoring](reference/heuristics-scoring.md) for severity definitions):
- **[P?] What**: Name the problem clearly
- **Why it matters**: How this hurts users or undermines goals
- **Fix**: What to do about it (be concrete)
- **Suggested command**: Which command could address this (from: /animate, /arrange, /critique, /extract, /polish, /optimize, /audit, /typeset, /bolder, /clarify, /delight, /adapt, /colorize, /quieter, /harden, /distill, /onboard, /normalize, /showcase)

Favor issues related to weak hierarchy, arbitrary systems, unclear action priority, and noisy decoration over surface-level nitpicks.

When relevant, explicitly call out: too many borders, ambiguous grouping, too many font sizes, too many unsystematic shades, loud section titles, flattened action hierarchy, line-length/line-height mismatches, label:value anti-patterns, unnecessary colored-link emphasis, non-right-aligned number columns, weak surface-separation strategy, scaled-down screenshot legibility failures, scaled-up icon chunkiness, and overlap clashes where layers are not cleanly separated.

### Persona Red Flags
> *Consult [personas](reference/personas.md)*

Select relevant hypothetical personas from the reference or confirmed audience context. Label the walkthrough as a heuristic assessment, not user research.

For each selected persona, walk through the primary user action and list specific red flags found:

**Power-user walkthrough:** The tested primary action requires eight clicks and offers no observed shortcut. Consider a shorter path if this is a frequent task.

**First-time-user walkthrough:** The sidebar icons have no visible labels. This may hinder discovery; confirm with a task-based usability test. Do not predict abandonment without evidence.

Be specific — name the exact elements and interactions that fail each persona. Don't write generic persona descriptions; write what broke for them.

### Minor Observations
Quick notes on smaller issues worth addressing.

**Remember**:
- Be direct — vague feedback wastes everyone's time
- Be specific — "the submit button" not "some elements"
- Say what's wrong AND why it matters to users
- Give concrete suggestions, not just "consider exploring..."
- Prioritize ruthlessly — if everything is important, nothing is
- Don't soften criticism — developers need honest feedback to ship great design

## Phase 3: Recommend the next action

Present findings and a prioritized action plan in the same response. Reuse known priorities, scope, and delegated choices. Ask only about an unresolved decision that materially changes the proposed work; do not make a questionnaire a required closing step.

Map each material finding to an appropriate installed skill, such as `a11y`, `arrange`, `clarify`, `normalize`, or `polish`. Include enough target and evidence detail for the fix to continue. Skip commands with no relevant finding. Recommend polish only if finishing work remains.

If fixes are already authorized, continue within that scope rather than asking again. Otherwise leave implementation as a recommendation. A later review must use current evidence, not promise a higher score.
