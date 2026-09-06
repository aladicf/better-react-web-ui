import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { projectRoot } from './skill-library-utils.mjs';

test('release checks detect wrapper drift without repairing it', async () => {
  const pkg = JSON.parse(await fs.readFile(path.join(projectRoot, 'package.json'), 'utf8'));
  assert.ok(pkg.scripts.verify.includes('npm run check:wrapper-drift'));
  assert.ok(!pkg.scripts.verify.includes('generate:wrappers'));
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'wrapper-drift-test-'));
  try {
    await fs.mkdir(path.join(root, 'scripts'));
    await fs.mkdir(path.join(root, 'skills', 'example'), { recursive: true });
    await fs.writeFile(path.join(root, 'skills', 'example', 'SKILL.md'),
      '---\nname: example\ndescription: Example\n---\nOriginal instructions.\n');
    for (const file of ['skill-library-utils.mjs', 'generate-wrappers.mjs', 'check-generated-wrapper-diff.mjs']) {
      await fs.copyFile(path.join(projectRoot, 'scripts', file), path.join(root, 'scripts', file));
    }
    await fs.cp(path.join(projectRoot, 'node_modules', 'yaml'), path.join(root, 'node_modules', 'yaml'), { recursive: true });
    const run = (script) => spawnSync(process.execPath, [path.join(root, 'scripts', script)], { encoding: 'utf8' });
    assert.equal(run('generate-wrappers.mjs').status, 0);
    assert.equal(run('check-generated-wrapper-diff.mjs').status, 0);
    const wrapper = path.join(root, '.agents', 'skills', 'example', 'SKILL.md');
    await fs.appendFile(wrapper, 'Uncommitted drift.\n');
    const result = run('check-generated-wrapper-diff.mjs');
    assert.equal(result.status, 1);
    assert.match(result.stderr, /Wrapper drift detected/);
    assert.match(await fs.readFile(wrapper, 'utf8'), /Uncommitted drift/);
  } finally {
    assert.equal(path.dirname(root), path.resolve(os.tmpdir()));
    await fs.rm(root, { recursive: true, force: true });
  }
});
