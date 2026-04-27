const requiredMajor = 24;
const requiredMinor = 14;
const requiredPatch = 1;
const current = process.versions.node;
const [major, minor, patch] = current.split('.').map((part) => Number.parseInt(part, 10));

if (
  major !== requiredMajor ||
  minor < requiredMinor ||
  (minor === requiredMinor && patch < requiredPatch)
) {
  console.error(
    `Unsupported Node.js version ${current}. Use Node.js >=24.14.1 <25 for repository tooling.`,
  );
  process.exit(1);
}

console.log(`Node.js ${current} satisfies repository tooling requirements.`);
