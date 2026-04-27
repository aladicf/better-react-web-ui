import { promises as fs } from 'node:fs';
import path from 'node:path';
import {
  buildWrapperContent,
  buildWrapperRootReadmeContent,
  getCanonicalSkills,
  normalizeForComparison,
  projectRoot,
  resolveWrapperRootPath,
  wrapperRoots,
} from './skill-library-utils.mjs';

const errors = [];
const skills = await getCanonicalSkills();

async function readText(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return null;
    }

    throw error;
  }
}

for (const wrapperRoot of wrapperRoots) {
  const wrapperRootPath = resolveWrapperRootPath(wrapperRoot);
  const rootReadmePath = path.join(wrapperRootPath, 'README.md');
  const expectedRootReadme = buildWrapperRootReadmeContent({ wrapperRoot });
  const actualRootReadme = await readText(rootReadmePath);

  if (actualRootReadme === null) {
    errors.push(`Missing wrapper root README: ${path.relative(projectRoot, rootReadmePath)}.`);
  } else if (normalizeForComparison(actualRootReadme) !== normalizeForComparison(expectedRootReadme)) {
    errors.push(`Wrapper root README drift detected in ${path.relative(projectRoot, rootReadmePath)}.`);
  }

  for (const skill of skills) {
    const wrapperFilePath = path.join(wrapperRootPath, skill.directoryName, 'SKILL.md');
    const expectedContent = buildWrapperContent({
      frontmatterBlock: skill.frontmatterBlock,
      skillName: skill.skillName,
      wrapperRoot,
    });
    const actualContent = await readText(wrapperFilePath);

    if (actualContent === null) {
      errors.push(`Missing wrapper file: ${path.relative(projectRoot, wrapperFilePath)}.`);
    } else if (normalizeForComparison(actualContent) !== normalizeForComparison(expectedContent)) {
      errors.push(`Wrapper drift detected in ${path.relative(projectRoot, wrapperFilePath)}.`);
    }
  }
}

if (errors.length > 0) {
  console.error('Generated wrapper drift check failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Generated wrappers match ${skills.length} canonical skills across ${wrapperRoots.length} wrapper roots.`);
