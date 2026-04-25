import { promises as fs } from 'node:fs';
import path from 'node:path';
import { buildCompatibilityMatrixContent } from './compatibility-matrix-utils.mjs';
import { projectRoot } from './skill-library-utils.mjs';

const outputPath = path.join(projectRoot, 'SKILL_COMPATIBILITY_MATRIX.md');
const result = await buildCompatibilityMatrixContent();

await fs.writeFile(outputPath, result.content, 'utf8');

console.log(`Generated ${outputPath}`);
console.log(`  ${result.skillCount} skills across ${result.categoryCount} categories`);
console.log(`  ${result.collaborationCount} cross-category collaborations`);
console.log(`  ${result.overlapCount} overlap boundaries flagged`);
