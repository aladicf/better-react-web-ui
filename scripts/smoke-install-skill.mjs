import { spawnSync } from 'node:child_process';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { findBrokenMarkdownLinks, getCanonicalSkills, projectRoot, wrapperRoots } from './skill-library-utils.mjs';
const expectedInstallRoot = process.env.SKILLS_EXPECTED_INSTALL_ROOT?.trim() || null;
const supportedInstallAgents = ['codex', 'cursor', 'github-copilot', 'opencode'];
const smokeTimeoutMs = Number.parseInt(process.env.SKILLS_SMOKE_TIMEOUT_MS || '180000', 10);

const skillNames = (await getCanonicalSkills()).map((skill) => skill.skillName);
const npmCli = process.env.npm_execpath;
if (!npmCli) throw new Error('Run this check with npm run smoke:install.');

if (!Number.isInteger(smokeTimeoutMs) || smokeTimeoutMs <= 0) {
  throw new Error('SKILLS_SMOKE_TIMEOUT_MS must be a positive integer when set.');
}

if (expectedInstallRoot && !wrapperRoots.includes(expectedInstallRoot)) {
  throw new Error(
    `SKILLS_EXPECTED_INSTALL_ROOT must be one of: ${wrapperRoots.join(', ')}. Received: ${expectedInstallRoot}`,
  );
}

const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'better-web-ui-smoke-'));

function run(args, options = {}) {
  const displayCommand = ['npm exec --', ...args].join(' ');
  const result = spawnSync(process.execPath, [npmCli, 'exec', '--yes', '--', ...args], {
    cwd: options.cwd,
    stdio: options.capture ? 'pipe' : 'inherit',
    encoding: 'utf8',
    shell: false,
    timeout: smokeTimeoutMs,
  });

  if (result.error?.code === 'ETIMEDOUT') {
    throw new Error(`${displayCommand} timed out after ${smokeTimeoutMs}ms.`);
  }

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(
      options.capture
        ? (result.stderr || result.stdout || `${displayCommand} failed.`)
        : `${displayCommand} failed.`,
    );
  }

  return result;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

try {
  console.log(`Running smoke install in temporary directory: ${tempDir}`);

  const agentFlags = supportedInstallAgents.flatMap((agent) => ['--agent', agent]);
  run(['skills', 'add', projectRoot, '--skill', '*', ...agentFlags, '-y'], {
    cwd: tempDir,
  });

  const detectedWrapperRoots = [];

  for (const wrapperRoot of wrapperRoots) {
    const installedSkillPath = path.join(tempDir, wrapperRoot, 'add-ui', 'SKILL.md');
    if (await pathExists(installedSkillPath)) {
      detectedWrapperRoots.push(wrapperRoot);
    }
  }

  if (detectedWrapperRoots.length === 0) {
    throw new Error(
      `Smoke install completed, but no installed skill was found under the known wrapper roots: ${wrapperRoots.join(', ')}.`,
    );
  }

  console.log(`Detected installed wrapper root(s): ${detectedWrapperRoots.join(', ')}`);

  if (expectedInstallRoot && !detectedWrapperRoots.includes(expectedInstallRoot)) {
    throw new Error(
      `Smoke install wrote to ${detectedWrapperRoots.join(', ')}, but SKILLS_EXPECTED_INSTALL_ROOT expected ${expectedInstallRoot} to be present.`,
    );
  }

  const listResult = run(['skills', 'list', '--json'], {
    cwd: tempDir,
    capture: true,
  });

  const listed = JSON.parse(listResult.stdout);
  if (!Array.isArray(listed)) throw new Error('skills list --json must return an array.');
  for (const wrapperRoot of detectedWrapperRoots) {
    const installedRoot = path.join(tempDir, wrapperRoot);
    for (const name of skillNames) {
      const installedPath = path.join(installedRoot, name);
      if (!(await pathExists(path.join(installedPath, 'SKILL.md')))) {
        throw new Error(`Missing installed companion: ${name}`);
      }
      if (!listed.some((entry) => entry.name === name && entry.scope === 'project'
        && typeof entry.path === 'string' && path.resolve(entry.path) === installedPath)) {
        throw new Error(`Installed skill not listed at its project path: ${name}`);
      }
    }
    const broken = await findBrokenMarkdownLinks(installedRoot);
    if (broken.length) {
      throw new Error(broken.map(({ filePath, target }) => `${filePath}: ${target}`).join('\n'));
    }
  }
  console.log(`Smoke install verified ${skillNames.length} skills and their local Markdown references.`);
  if (path.dirname(tempDir) !== path.resolve(os.tmpdir())) throw new Error('Unexpected cleanup path.');
  await fs.rm(tempDir, { recursive: true, force: true });
} catch (error) {
  console.error(`Smoke install failed. Temporary directory preserved at: ${tempDir}`);
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
