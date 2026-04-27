import path from 'node:path';
import {
  extractFrontmatterBlock,
  getCanonicalSkills,
  normalizeNewlines,
  projectRoot,
} from './skill-library-utils.mjs';

const errors = [];
const warnings = [];
const genericArgumentHints = new Set(['[target]', '[request]', '[project]']);

function addError(message) {
  errors.push(message);
}

function addWarning(message) {
  warnings.push(message);
}

async function main() {
  const skills = await getCanonicalSkills();
  let checked = 0;

  for (const skill of skills) {
    const relativeFilePath = path.relative(projectRoot, skill.skillFilePath);
    const { frontmatter } = skill;

    checked++;

    // 1. Check description length limits
    const description = frontmatter.description;
    if (typeof description === 'string') {
      const normalized = description.replace(/\s+/g, ' ').trim();

      if (normalized.length > 1024) {
        addError(
          `Description in ${relativeFilePath} exceeds the 1024-character Agent Skills spec limit (${normalized.length} chars).`,
        );
      } else if (normalized.length > 400) {
        addWarning(
          `Description in ${relativeFilePath} is ${normalized.length} characters. Consider tightening unless each clause improves triggering.`,
        );
      }
    } else {
      addError(`Missing or invalid description in ${relativeFilePath}.`);
    }

    // 2. Check for literal double-hyphen sequences used as dash punctuation
    const body = normalizeNewlines(skill.contents);
    const frontmatterBlock = extractFrontmatterBlock(body);
    const bodyText = body.slice(frontmatterBlock.length);

    const doubleHyphenDashPattern = /\s--\s/g;
    const matches = [...bodyText.matchAll(doubleHyphenDashPattern)];
    if (matches.length > 0) {
      for (const match of matches) {
        const pos = match.index;
        const lineNumber = bodyText.slice(0, pos).split('\n').length;
        addWarning(
          `Literal space double-hyphen space sequence found at line ${lineNumber} in ${relativeFilePath}. Rephrase with a comma, colon, semicolon, or separate sentence.`,
        );
      }
    }

    // Also check frontmatter description.
    if (typeof description === 'string') {
      const descMatches = [...description.matchAll(doubleHyphenDashPattern)];
      if (descMatches.length > 0) {
        addWarning(
          `Literal space double-hyphen space sequence found in description of ${relativeFilePath}. Rephrase with a comma, colon, semicolon, or separate sentence.`,
        );
      }
    }

    // 3. Check for missing argument-hint metadata
    const metadata = frontmatter.metadata;
    if (metadata === undefined) {
      addError(`Missing metadata block in ${relativeFilePath}. Add metadata with argument-hint.`);
    } else if (typeof metadata === 'object' && metadata !== null && !Array.isArray(metadata)) {
      if (!('argument-hint' in metadata)) {
        addError(
          `Missing metadata.argument-hint in ${relativeFilePath}. Add argument-hint for clearer host inline help.`,
        );
      } else {
        const hint = metadata['argument-hint'];
        if (typeof hint !== 'string' || hint.trim().length === 0) {
          addError(
            `Empty metadata.argument-hint in ${relativeFilePath}. Provide a non-empty hint.`,
          );
        } else if (genericArgumentHints.has(hint.trim())) {
          addWarning(
            `Generic metadata.argument-hint in ${relativeFilePath}. Prefer a more specific hint for slash-command help.`,
          );
        }
      }
    } else {
      addError(`Invalid metadata block in ${relativeFilePath}. Must be a YAML mapping.`);
    }
  }

  // Summary
  console.log(`\nChecked ${checked} canonical SKILL.md files.\n`);

  if (errors.length > 0) {
    console.error(`Errors (${errors.length}):`);
    for (const error of errors) {
      console.error(`  ✗ ${error}`);
    }
  }

  if (warnings.length > 0) {
    console.warn(`\nWarnings (${warnings.length}):`);
    for (const warning of warnings) {
      console.warn(`  ⚠ ${warning}`);
    }
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('All skill descriptions pass validation.');
  }

  process.exit(errors.length > 0 ? 1 : 0);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
