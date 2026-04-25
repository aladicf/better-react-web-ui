import { promises as fs } from 'node:fs';
import path from 'node:path';
import { projectRoot } from './skill-library-utils.mjs';

const indexes = [
  'skills/frontend-design/reference',
  'skills/animate/reference',
];

const errors = [];

function normalizeLinkTarget(target) {
  const pathOnly = target.trim().split('#')[0];
  return pathOnly.replace(/^\.?\//, '');
}

function collectMarkdownLinks(contents) {
  return new Set(
    [...contents.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)]
      .map((match) => normalizeLinkTarget(match[1]))
      .filter((target) => target.length > 0),
  );
}

async function getReferenceFiles(directoryPath) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => fileName.endsWith('.md') && fileName !== 'README.md')
    .sort((a, b) => a.localeCompare(b));
}

for (const indexDirectory of indexes) {
  const absoluteDirectory = path.join(projectRoot, indexDirectory);
  const readmePath = path.join(absoluteDirectory, 'README.md');
  const readmeContents = await fs.readFile(readmePath, 'utf8');
  const linkedTargets = collectMarkdownLinks(readmeContents);
  const referenceFiles = await getReferenceFiles(absoluteDirectory);

  for (const fileName of referenceFiles) {
    if (!linkedTargets.has(fileName)) {
      errors.push(`${indexDirectory}/README.md does not link to ${fileName}.`);
    }
  }
}

if (errors.length > 0) {
  console.error('Reference index validation failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Reference indexes include every reference file.');
