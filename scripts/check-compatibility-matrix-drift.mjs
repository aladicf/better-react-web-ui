import { promises as fs } from 'node:fs';
import path from 'node:path';
import { buildCompatibilityMatrixContent } from './compatibility-matrix-utils.mjs';
import { normalizeForComparison, projectRoot } from './skill-library-utils.mjs';

const matrixPath = path.join(projectRoot, 'SKILL_COMPATIBILITY_MATRIX.md');
const expected = await buildCompatibilityMatrixContent();

let actual;

try {
  actual = await fs.readFile(matrixPath, 'utf8');
} catch (error) {
  if (error?.code === 'ENOENT') {
    console.error('Missing SKILL_COMPATIBILITY_MATRIX.md. Run npm run generate:compatibility-matrix.');
    process.exit(1);
  }

  throw error;
}

if (normalizeForComparison(actual) !== normalizeForComparison(expected.content)) {
  console.error('SKILL_COMPATIBILITY_MATRIX.md is stale. Run npm run generate:compatibility-matrix.');
  process.exit(1);
}

console.log('SKILL_COMPATIBILITY_MATRIX.md is up to date.');
