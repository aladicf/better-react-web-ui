import { promises as fs } from 'node:fs';
import path from 'node:path';
import { getCanonicalSkills, projectRoot } from './skill-library-utils.mjs';

async function main() {
  const skills = await getCanonicalSkills();

  // Build relationship data from skill content analysis
  const skillRelationships = [];
  const skillNames = skills.map((s) => s.skillName);

  for (const skill of skills) {
    const content = skill.contents.toLowerCase();
    const skillName = skill.skillName;

    // Find which other skills are referenced in this skill's content
    const referencedSkills = [];
    for (const otherName of skillNames) {
      if (otherName === skillName) continue;

      // Check for direct references to other skills
      const patterns = [
        new RegExp(`\\$${otherName}\\b`),
        new RegExp(`load \\$${otherName}\\b`),
        new RegExp(`also load \\$?${otherName}\\b`),
        new RegExp(`consult the \\[` + otherName.replace(/-/g, '[- ]') + `\\]`, 'i'),
        new RegExp(`\\b${otherName.replace(/-/g, '[- ]')}\\b.*skill`, 'i'),
      ];

      const isReferenced = patterns.some((pattern) => pattern.test(content));
      if (isReferenced) {
        referencedSkills.push(otherName);
      }
    }

    // Categorize the skill
    let category = 'Other';
    const desc = (skill.frontmatter.description || '').toLowerCase();
    if (/accessibility|a11y|keyboard|screen reader|aria|wcag/i.test(desc)) {
      category = 'Accessibility';
    } else if (/test|testing|visual regression|assertion/i.test(desc)) {
      category = 'Testing';
    } else if (/performance|optimize|speed|bundle|loading/i.test(desc)) {
      category = 'Performance';
    } else if (/i18n|localiz|translat|multilingual|locale/i.test(desc)) {
      category = 'Localization';
    } else if (/motion|animation|transition|gesture|micro-interaction/i.test(desc)) {
      category = 'Motion';
    } else if (/color|palette|contrast|semantic color/i.test(desc)) {
      category = 'Color';
    } else if (/typography|font|type scale|readability/i.test(desc)) {
      category = 'Typography';
    } else if (/layout|spacing|composition|grouping|arrange/i.test(desc)) {
      category = 'Layout';
    } else if (/hierarchy|priority|emphasis|weight/i.test(desc)) {
      category = 'Hierarchy';
    } else if (/form|validation|field|input/i.test(desc)) {
      category = 'Forms';
    } else if (/search|filter|findability|autocomplete/i.test(desc)) {
      category = 'Search';
    } else if (/chart|data|visualization|dashboard|metric/i.test(desc)) {
      category = 'Data Viz';
    } else if (/security|mfa|password|breach|trust|auth/i.test(desc)) {
      category = 'Security';
    } else if (/responsive|adapt|breakpoint|narrow|wide/i.test(desc)) {
      category = 'Responsive';
    } else if (/error|edge case|overflow|resilien|harden/i.test(desc)) {
      category = 'Resilience';
    } else if (/onboard|activation|first-run|getting started/i.test(desc)) {
      category = 'Onboarding';
    } else if (/empty state|zero-data|no-results/i.test(desc)) {
      category = 'Empty State';
    } else if (/component|extract|reusable|design system|token/i.test(desc)) {
      category = 'Components';
    } else if (/image|photo|icon|screenshot|media/i.test(desc)) {
      category = 'Imagery';
    } else if (/depth|elevation|shadow|layer/i.test(desc)) {
      category = 'Depth';
    } else if (/polish|alignment|consistency|micro-detail/i.test(desc)) {
      category = 'Polish';
    } else if (/critique|review|assess|heuristic|score/i.test(desc)) {
      category = 'Review';
    } else if (/audit|check|measure|anti-pattern/i.test(desc)) {
      category = 'Audit';
    } else if (/delight|joy|personality|surprise|celebration/i.test(desc)) {
      category = 'Delight';
    } else if (/simplify|declutter|remove|distill/i.test(desc)) {
      category = 'Simplification';
    } else if (/copy|writing|label|microcopy|text|clarify/i.test(desc)) {
      category = 'Writing';
    }

    skillRelationships.push({
      name: skillName,
      category,
      description: skill.frontmatter.description || '',
      referencedSkills,
    });
  }

  // Build the matrix
  const matrixLines = [
    '# Skill Compatibility Matrix',
    '',
    'This matrix shows which skills reference each other and which skill categories commonly work together.',
    'It is generated automatically from canonical SKILL.md content analysis.',
    '',
    '## Skills by Category',
    '',
  ];

  const categories = [...new Set(skillRelationships.map((s) => s.category))].sort();
  for (const category of categories) {
    matrixLines.push(`### ${category}`);
    matrixLines.push('');
    const categorySkills = skillRelationships.filter((s) => s.category === category);
    for (const skill of categorySkills) {
      const refText =
        skill.referencedSkills.length > 0
          ? ` → commonly used with: ${skill.referencedSkills.join(', ')}`
          : '';
      matrixLines.push(`- **${skill.name}** — ${skill.description.slice(0, 120)}...${refText}`);
    }
    matrixLines.push('');
  }

  // Cross-category collaboration table
  matrixLines.push('## Cross-Category Collaboration');
  matrixLines.push('');
  matrixLines.push(
    'Skills in adjacent categories often work together on the same task. When two skills overlap, the matrix notes the boundary.',
  );
  matrixLines.push('');

  const collaborations = [
    ['Accessibility', 'a11y', 'Resilience', 'harden', 'a11y focuses on systematic remediation; harden covers broader edge cases'],
    ['Testing', 'test', 'Audit', 'audit', 'test builds testing strategy; audit runs cross-dimensional quality checks'],
    ['Performance', 'optimize', 'Motion', 'animate', 'optimize fixes jank; animate adds purposeful motion'],
    ['Data Viz', 'data-viz', 'Color', 'colorize', 'data-viz uses color strategically; colorize builds color systems'],
    ['Forms', 'forms', 'Resilience', 'harden', 'forms structures inputs; harden handles edge cases and overflow'],
    ['Search', 'search', 'Layout', 'arrange', 'search presents results; arrange handles list rhythm'],
    ['Security', 'security-ux', 'Resilience', 'harden', 'security-ux designs flows; harden handles error recovery'],
    ['Motion', 'animate', 'Delight', 'delight', 'animate implements motion; delight adds personality moments'],
    ['Hierarchy', 'hierarchy', 'Polish', 'polish', 'hierarchy fixes priority; polish cleans details'],
    ['Writing', 'clarify', 'Forms', 'forms', 'clarify improves copy; forms structures the flow'],
  ];

  matrixLines.push('| Category A | Skill A | Category B | Skill B | Boundary |');
  matrixLines.push('|------------|---------|------------|---------|----------|');
  for (const [catA, skillA, catB, skillB, boundary] of collaborations) {
    matrixLines.push(`| ${catA} | ${skillA} | ${catB} | ${skillB} | ${boundary} |`);
  }
  matrixLines.push('');

  // Overlap warnings
  matrixLines.push('## Potential Overlap Boundaries');
  matrixLines.push('');
  matrixLines.push(
    'These skill pairs have similar trigger language. Descriptions should be tightened if near-miss activations occur.',
  );
  matrixLines.push('');

  const overlaps = [
    ['a11y', 'audit', 'Both mention accessibility. a11y is remediation; audit is scoring.'],
    ['harden', 'polish', 'Both improve quality. harden is edge cases; polish is micro-details.'],
    ['distill', 'quieter', 'Both reduce noise. distill removes elements; quieter reduces intensity.'],
    ['delight', 'animate', 'Both add personality. delight is moments; animate is systematic motion.'],
    ['test', 'audit', 'Both check quality. test is testing strategy; audit is scored findings.'],
    ['forms', 'harden', 'Both handle validation. forms designs flows; harden handles edge cases.'],
    ['data-viz', 'colorize', 'Both use color. data-viz is chart-specific; colorize is system-wide.'],
  ];

  for (const [skillA, skillB, note] of overlaps) {
    matrixLines.push(`- **${skillA}** ↔ **${skillB}**: ${note}`);
  }
  matrixLines.push('');

  // Write output
  const outputPath = path.join(projectRoot, 'SKILL_COMPATIBILITY_MATRIX.md');
  await fs.writeFile(outputPath, matrixLines.join('\n'), 'utf8');

  console.log(`Generated ${outputPath}`);
  console.log(`  ${skillRelationships.length} skills across ${categories.length} categories`);
  console.log(`  ${collaborations.length} cross-category collaborations`);
  console.log(`  ${overlaps.length} overlap boundaries flagged`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
