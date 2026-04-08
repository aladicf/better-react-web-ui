# AGENTS.md

This file gives repository-specific guidance to AI coding agents working on `better-web-ui`.

## Repository purpose

`better-web-ui` is a public Agent Skills package focused on high-quality frontend design work.

It ships:

- a canonical skill package in `skills/`
- shared design doctrine in `skills/frontend-design/reference/`
- generated compatibility wrapper trees for agent-specific layouts
- human-facing docs in `README.md`
- attribution and license context in `NOTICE.md` and `LICENSE`

This is **not** a generic skills starter and **not** a Vercel deployment repo. Keep docs, examples, and contribution guidance specific to this project.

## Source of truth

The canonical source of truth is always:

```text
skills/{skill-name}/
```

Edit canonical skills there.

If a wrapper tree and `skills/` ever disagree, `skills/` is the source of truth.

Wrapper trees such as `.github/skills/...` or `.claude/skills/...` are generated compatibility shims and should not contain original doctrine.

## Repository layout

```text
skills/
  {skill-name}/
    SKILL.md
    reference/        # optional shared or skill-specific docs
    references/       # also acceptable if used intentionally
    scripts/          # optional deterministic helpers
    assets/           # optional templates or static assets

.agents/skills/
.github/skills/
.claude/skills/
.codex/skills/
.cursor/skills/
.opencode/skills/
.pi/skills/
  {skill-name}/
    SKILL.md          # generated wrapper pointing back to skills/{skill-name}/SKILL.md

README.md
AGENTS.md
CLAUDE.md             # should remain a pointer to AGENTS.md
NOTICE.md
LICENSE
```

## Working rules

### 1. Edit canonical skills first

- Make content changes only in `skills/`
- Regenerate wrappers after adding, removing, renaming, or changing frontmatter for any skill
- Do not hand-maintain divergent logic across wrapper trees

### 2. Keep skill metadata portable

For each `SKILL.md`:

- `name` must match the directory name
- `description` must explain both **what the skill does** and **when to use it**
- keep names lowercase and hyphenated
- prefer concise, trigger-friendly descriptions

If a skill needs an argument hint, store it under `metadata.argument-hint` rather than as a top-level frontmatter field so the skill remains valid against the current Agent Skills validator.

### 3. Prefer progressive disclosure

- Keep `SKILL.md` focused on workflow
- Move reusable doctrine into reference files when a concept appears in 3+ skills
- Prefer pointing multiple skills to `skills/frontend-design/reference/` over duplicating long guidance blocks

### 4. Keep wrappers thin

Each wrapper should:

- copy the canonical frontmatter
- state that it is a compatibility wrapper
- link to `../../../skills/{skill-name}/SKILL.md`

Do not duplicate the full skill body into wrapper trees.

### 5. Preserve project identity

- `README.md` should describe `better-web-ui`, not the general skills ecosystem
- examples should use this skill library's commands and purpose
- docs should reflect the actual repository contents, not hypothetical directories

## Adding or updating a skill

When creating a new skill:

1. Create `skills/{skill-name}/SKILL.md`
2. Add any supporting docs under `reference/`, `references/`, `scripts/`, or `assets/` as needed
3. Update `README.md` so the skill is discoverable to humans
4. Regenerate all wrapper trees
5. Validate canonical skills
6. Smoke-test local installation via the `skills` CLI

## Wrapper generation contract

Generated wrapper body format should stay consistent:

```md
This compatibility wrapper exposes the `{skill-name}` skill for the `{wrapper-root}` layout while keeping `skills/{skill-name}/SKILL.md` as the canonical source of truth.

Follow the canonical instructions in [../../../skills/{skill-name}/SKILL.md](../../../skills/{skill-name}/SKILL.md).
```

## Validation and release workflow

Before release or after significant skill changes:

1. Validate canonical skills with `skills-ref`
2. Smoke-test discovery with `npx skills add <local-path> --list`
3. Smoke-test an actual local install of at least one skill into a temporary directory
4. Ensure README install instructions still match observed behavior

There is no special `skills.sh` publish command. A public repo plus successful installs is the publish mechanism.

## Attribution and licensing

- Keep attribution in `NOTICE.md`
- Do not remove the Anthropic / Impeccable lineage notes without a strong reason
- When editing `frontend-design`, preserve attribution context unless the underlying dependency story truly changes

## CLAUDE.md

`CLAUDE.md` should remain a simple pointer to `AGENTS.md` unless there is a very specific reason to diverge.