import { promises as fs } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { getCanonicalSkills, projectRoot } from './skill-library-utils.mjs';

const fixturePath = path.join(projectRoot, 'test-fixtures', 'skill-routing-prompts.yml');
const minimumTriggerPrompts = 3;
const minimumNegativePrompts = 2;
const errors = [];

function addError(message) {
  errors.push(message);
}

function validateSkillList({ list, fieldName, caseIndex, skillNames }) {
  if (!Array.isArray(list) || list.length === 0) {
    addError(`Case ${caseIndex} has missing or empty ${fieldName}.`);
    return [];
  }

  const normalizedSkills = [];

  for (const skillName of list) {
    if (typeof skillName !== 'string' || skillName.trim().length === 0) {
      addError(`Case ${caseIndex} has a non-string value in ${fieldName}.`);
      continue;
    }

    const normalizedSkillName = skillName.trim();

    if (!skillNames.has(normalizedSkillName)) {
      addError(`Case ${caseIndex} references unknown skill ${normalizedSkillName} in ${fieldName}.`);
    }

    normalizedSkills.push(normalizedSkillName);
  }

  return normalizedSkills;
}

const skills = await getCanonicalSkills();
const skillNames = new Set(skills.map((skill) => skill.skillName));
const triggerCounts = new Map(skills.map((skill) => [skill.skillName, 0]));
const negativeCounts = new Map(skills.map((skill) => [skill.skillName, 0]));
const prompts = new Set();

let fixtureCases;

try {
  fixtureCases = parse(await fs.readFile(fixturePath, 'utf8'));
} catch (error) {
  if (error?.code === 'ENOENT') {
    console.error('Missing test-fixtures/skill-routing-prompts.yml.');
    process.exit(1);
  }

  throw error;
}

if (!Array.isArray(fixtureCases)) {
  addError('test-fixtures/skill-routing-prompts.yml must contain a YAML list.');
} else {
  fixtureCases.forEach((fixtureCase, index) => {
    const caseIndex = index + 1;

    if (!fixtureCase || typeof fixtureCase !== 'object' || Array.isArray(fixtureCase)) {
      addError(`Case ${caseIndex} must be a YAML mapping.`);
      return;
    }

    const prompt = fixtureCase.prompt;

    if (typeof prompt !== 'string' || prompt.trim().length === 0) {
      addError(`Case ${caseIndex} has missing or empty prompt.`);
    } else {
      const normalizedPrompt = prompt.trim().toLowerCase();

      if (prompts.has(normalizedPrompt)) {
        addError(`Case ${caseIndex} repeats prompt: ${prompt}`);
      }

      prompts.add(normalizedPrompt);
    }

    const shouldTrigger = validateSkillList({
      list: fixtureCase.should_trigger,
      fieldName: 'should_trigger',
      caseIndex,
      skillNames,
    });
    const shouldNotTrigger = validateSkillList({
      list: fixtureCase.should_not_trigger,
      fieldName: 'should_not_trigger',
      caseIndex,
      skillNames,
    });

    for (const skillName of shouldTrigger) {
      triggerCounts.set(skillName, triggerCounts.get(skillName) + 1);
    }

    for (const skillName of shouldNotTrigger) {
      negativeCounts.set(skillName, negativeCounts.get(skillName) + 1);
    }
  });
}

for (const skillName of skillNames) {
  const triggerCount = triggerCounts.get(skillName);
  const negativeCount = negativeCounts.get(skillName);

  if (triggerCount < minimumTriggerPrompts) {
    addError(`${skillName} has ${triggerCount} should_trigger prompts. Expected at least ${minimumTriggerPrompts}.`);
  }

  if (negativeCount < minimumNegativePrompts) {
    addError(`${skillName} has ${negativeCount} should_not_trigger prompts. Expected at least ${minimumNegativePrompts}.`);
  }
}

if (errors.length > 0) {
  console.error('Skill routing fixture validation failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validated ${fixtureCases.length} skill routing prompt fixtures.`);
