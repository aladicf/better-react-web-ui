import { promises as fs } from 'node:fs';
import path from 'node:path';
import { projectRoot, skillsDir } from './skill-library-utils.mjs';

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

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getSkillReferenceDirectories() {
  const skillEntries = await fs.readdir(skillsDir, { withFileTypes: true });
  const referenceDirectories = [];

  for (const skillEntry of skillEntries) {
    if (!skillEntry.isDirectory()) {
      continue;
    }

    const skillPath = path.join(skillsDir, skillEntry.name);

    for (const directoryName of ['reference', 'references']) {
      const referencePath = path.join(skillPath, directoryName);

      if (await pathExists(referencePath)) {
        referenceDirectories.push(...await getMarkdownDirectories(referencePath));
      }
    }
  }

  return referenceDirectories.sort((a, b) => a.localeCompare(b));
}

async function getMarkdownDirectories(directoryPath) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  const hasReferenceFiles = entries.some(
    (entry) => entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'README.md',
  );
  const directories = hasReferenceFiles ? [directoryPath] : [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      directories.push(...await getMarkdownDirectories(path.join(directoryPath, entry.name)));
    }
  }

  return directories;
}

async function getReferenceFiles(directoryPath) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => fileName.endsWith('.md') && fileName !== 'README.md')
    .sort((a, b) => a.localeCompare(b));
}

for (const absoluteDirectory of await getSkillReferenceDirectories()) {
  const relativeDirectory = path.relative(projectRoot, absoluteDirectory);
  const readmePath = path.join(absoluteDirectory, 'README.md');

  if (!(await pathExists(readmePath))) {
    errors.push(`${relativeDirectory}/README.md is missing.`);
    continue;
  }

  const readmeContents = await fs.readFile(readmePath, 'utf8');
  const linkedTargets = collectMarkdownLinks(readmeContents);
  const referenceFiles = await getReferenceFiles(absoluteDirectory);

  for (const fileName of referenceFiles) {
    if (!linkedTargets.has(fileName)) {
      errors.push(`${relativeDirectory}/README.md does not link to ${fileName}.`);
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
