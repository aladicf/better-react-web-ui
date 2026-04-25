import { getCanonicalSkills } from './skill-library-utils.mjs';

const categoryRules = [
  ['Accessibility', /accessibility|a11y|keyboard|screen reader|aria|wcag/i],
  ['Testing', /test|testing|visual regression|assertion/i],
  ['Performance', /performance|optimize|speed|bundle|loading/i],
  ['Localization', /i18n|localiz|translat|multilingual|locale/i],
  ['Motion', /motion|animation|transition|gesture|micro-interaction/i],
  ['Color', /color|palette|contrast|semantic color/i],
  ['Typography', /typography|font|type scale|readability/i],
  ['Layout', /layout|spacing|composition|grouping|arrange/i],
  ['Hierarchy', /hierarchy|priority|emphasis|weight/i],
  ['Forms', /form|validation|field|input/i],
  ['Search', /search|filter|findability|autocomplete/i],
  ['Data Viz', /chart|data|visualization|dashboard|metric/i],
  ['Security', /security|mfa|password|breach|trust|auth/i],
  ['Responsive', /responsive|adapt|breakpoint|narrow|wide/i],
  ['Resilience', /error|edge case|overflow|resilien|harden/i],
  ['Onboarding', /onboard|activation|first-run|getting started/i],
  ['Empty State', /empty state|zero-data|no-results/i],
  ['Components', /component|extract|reusable|design system|token/i],
  ['Imagery', /image|photo|icon|screenshot|media/i],
  ['Depth', /depth|elevation|shadow|layer/i],
  ['Polish', /polish|alignment|consistency|micro-detail/i],
  ['Review', /critique|review|assess|heuristic|score/i],
  ['Audit', /audit|check|measure|anti-pattern/i],
  ['Delight', /delight|joy|personality|surprise|celebration/i],
  ['Simplification', /simplify|declutter|remove|distill/i],
  ['Writing', /copy|writing|label|microcopy|text|clarify/i],
];

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

const overlaps = [
  ['a11y', 'audit', 'Both mention accessibility. a11y is remediation; audit is scoring.'],
  ['harden', 'polish', 'Both improve quality. harden is edge cases; polish is micro-details.'],
  ['distill', 'quieter', 'Both reduce noise. distill removes elements; quieter reduces intensity.'],
  ['delight', 'animate', 'Both add personality. delight is moments; animate is systematic motion.'],
  ['test', 'audit', 'Both check quality. test is testing strategy; audit is scored findings.'],
  ['forms', 'harden', 'Both handle validation. forms designs flows; harden handles edge cases.'],
  ['data-viz', 'colorize', 'Both use color. data-viz is chart-specific; colorize is system-wide.'],
];

function sanitizeInlineText(value) {
  return value.replace(/[—–]/g, ' - ').replace(/\s+/g, ' ').trim();
}

function categorizeSkill(description) {
  for (const [category, pattern] of categoryRules) {
    if (pattern.test(description)) {
      return category;
    }
  }

  return 'Other';
}

function getReferencedSkills({ content, skillName, skillNames }) {
  const referencedSkills = [];

  for (const otherName of skillNames) {
    if (otherName === skillName) {
      continue;
    }

    const readableOtherName = otherName.replace(/-/g, '[- ]');
    const patterns = [
      new RegExp(`\\$${otherName}\\b`),
      new RegExp(`load \\$${otherName}\\b`),
      new RegExp(`also load \\$?${otherName}\\b`),
      new RegExp(`consult the \\[${readableOtherName}\\]`, 'i'),
      new RegExp(`\\b${readableOtherName}\\b.*skill`, 'i'),
    ];

    if (patterns.some((pattern) => pattern.test(content))) {
      referencedSkills.push(otherName);
    }
  }

  return referencedSkills;
}

export async function buildCompatibilityMatrixContent() {
  const skills = await getCanonicalSkills();
  const skillNames = skills.map((skill) => skill.skillName);
  const skillRelationships = skills.map((skill) => {
    const description = skill.frontmatter.description || '';

    return {
      name: skill.skillName,
      category: categorizeSkill(description),
      description: sanitizeInlineText(description),
      referencedSkills: getReferencedSkills({
        content: skill.contents.toLowerCase(),
        skillName: skill.skillName,
        skillNames,
      }),
    };
  });

  const lines = [
    '# Skill Compatibility Matrix',
    '',
    'This matrix shows which skills reference each other and which skill categories commonly work together.',
    'It is generated automatically from canonical SKILL.md content analysis.',
    '',
    '## Skills by Category',
    '',
  ];

  const categories = [...new Set(skillRelationships.map((skill) => skill.category))].sort();

  for (const category of categories) {
    lines.push(`### ${category}`);
    lines.push('');

    for (const skill of skillRelationships.filter((item) => item.category === category)) {
      const referenceText =
        skill.referencedSkills.length > 0
          ? ` Commonly used with: ${skill.referencedSkills.join(', ')}.`
          : '';

      lines.push(`- **${skill.name}**: ${skill.description.slice(0, 120)}...${referenceText}`);
    }

    lines.push('');
  }

  lines.push('## Cross-Category Collaboration');
  lines.push('');
  lines.push('Skills in adjacent categories often work together on the same task. When two skills overlap, the matrix notes the boundary.');
  lines.push('');

  for (const [catA, skillA, catB, skillB, boundary] of collaborations) {
    lines.push(`- **${skillA}** (${catA}) with **${skillB}** (${catB}): ${boundary}.`);
  }

  lines.push('');
  lines.push('## Potential Overlap Boundaries');
  lines.push('');
  lines.push('These skill pairs have similar trigger language. Descriptions should be tightened if near-miss activations occur.');
  lines.push('');

  for (const [skillA, skillB, note] of overlaps) {
    lines.push(`- **${skillA}** and **${skillB}**: ${note}`);
  }

  lines.push('');

  return {
    content: `${lines.join('\n')}`,
    skillCount: skillRelationships.length,
    categoryCount: categories.length,
    collaborationCount: collaborations.length,
    overlapCount: overlaps.length,
  };
}
