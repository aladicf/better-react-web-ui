import { getCanonicalSkills } from './skill-library-utils.mjs';

const skillCategories = new Map([
  ['a11y', 'Accessibility'],
  ['adapt', 'Responsive'],
  ['add-ui', 'Generation'],
  ['animate', 'Motion'],
  ['arrange', 'Layout'],
  ['audit', 'Audit'],
  ['bolder', 'Visual Direction'],
  ['clarify', 'Writing'],
  ['colorize', 'Color'],
  ['critique', 'Review'],
  ['data-viz', 'Data Viz'],
  ['delight', 'Delight'],
  ['depth', 'Depth'],
  ['distill', 'Simplification'],
  ['empty-state', 'Empty State'],
  ['extract', 'Components'],
  ['forms', 'Forms'],
  ['frontend-design', 'Core Design'],
  ['harden', 'Resilience'],
  ['hierarchy', 'Hierarchy'],
  ['imagery', 'Imagery'],
  ['localize', 'Localization'],
  ['normalize', 'Design System'],
  ['onboard', 'Onboarding'],
  ['optimize', 'Performance'],
  ['polish', 'Polish'],
  ['quieter', 'Visual Direction'],
  ['search', 'Search'],
  ['security-ux', 'Security'],
  ['setup', 'Setup'],
  ['showcase', 'Advanced UI'],
  ['test', 'Testing'],
  ['typeset', 'Typography'],
]);

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
  return value.replace(/[\u2013\u2014]/g, ' - ').replace(/\s+/g, ' ').trim();
}

function categorizeSkill(skillName) {
  const category = skillCategories.get(skillName);

  if (!category) {
    throw new Error(`Missing compatibility matrix category for skill: ${skillName}`);
  }

  return category;
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
      category: categorizeSkill(skill.skillName),
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
    'It is generated automatically from canonical SKILL.md metadata and content references.',
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
