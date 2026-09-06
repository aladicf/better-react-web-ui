import assert from 'node:assert/strict';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { findBrokenMarkdownLinks } from './skill-library-utils.mjs';

test('checks nested references and detects a missing installed companion', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'skill-links-test-'));
  try {
    const nested = path.join(root, 'add-ui', 'reference', 'requests');
    await fs.mkdir(nested, { recursive: true });
    await fs.mkdir(path.join(root, 'frontend-design'));
    await fs.writeFile(path.join(root, 'frontend-design', 'SKILL.md'), '# Design');
    const guide = path.join(nested, 'hero.md');
    await fs.writeFile(guide, '[Design](../../frontend-design/SKILL.md)');
    assert.deepEqual(await findBrokenMarkdownLinks(root), [
      { filePath: guide, target: '../../frontend-design/SKILL.md' },
    ]);
    await fs.writeFile(guide, [
      '[Design](../../../frontend-design/SKILL.md#context)',
      '[External](https://example.com/missing)',
      '[Section](#local)',
      '```md\n[Example](missing.md)\n```',
    ].join('\n'));
    assert.deepEqual(await findBrokenMarkdownLinks(root), []);
    await fs.unlink(path.join(root, 'frontend-design', 'SKILL.md'));
    assert.equal((await findBrokenMarkdownLinks(root)).length, 1);
  } finally {
    assert.equal(path.dirname(root), path.resolve(os.tmpdir()));
    await fs.rm(root, { recursive: true, force: true });
  }
});
