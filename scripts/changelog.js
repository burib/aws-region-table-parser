// Writes Markdown release notes describing what changed between two versions of service_info.json.
// Usage: node scripts/changelog.js <old service_info.json> <new service_info.json>

const fs = require('fs');
const path = require('path');

const regionNames = (() => {
  try { return require(path.join(__dirname, '..', 'region_code_to_name_map.json')); } catch { return {}; }
})();

// { serviceName: Set(regionCodes) }; duplicates in old data are ignored
const byName = (data) => Object.fromEntries(
  Object.values(data.services || {}).map((s) => [s.name, new Set(s.regions)])
);
const minus = (a, b) => [...a].filter((x) => !b.has(x)).sort();
const region = (code) => (regionNames[code] ? `${code} · ${regionNames[code]}` : code);
const regionCount = (n) => `${n} region${n === 1 ? '' : 's'}`;
const allRegions = (services) => new Set(Object.values(services).flatMap((set) => [...set]));

function changelog(oldData, newData) {
  const before = byName(oldData);
  const after = byName(newData);
  const sections = [];
  const add = (title, lines) => { if (lines.length) sections.push(`### ${title}\n\n${lines.map((l) => `- ${l}`).join('\n')}`); };

  const regionsBefore = allRegions(before);
  const regionsAfter = allRegions(after);
  add('New regions', minus(regionsAfter, regionsBefore).map(region));
  add('Removed regions', minus(regionsBefore, regionsAfter).map(region));

  const namesBefore = new Set(Object.keys(before));
  const namesAfter = new Set(Object.keys(after));
  add('New services', minus(namesAfter, namesBefore).map((n) => `**${n}** in ${regionCount(after[n].size)}`));
  add('Removed services', minus(namesBefore, namesAfter).map((n) => `**${n}**`));

  const common = [...namesAfter].filter((n) => namesBefore.has(n)).sort((a, b) => a.localeCompare(b));
  add('Services available in more regions', common
    .map((n) => [n, minus(after[n], before[n])]).filter(([, r]) => r.length)
    .map(([n, r]) => `**${n}**: ${r.join(', ')}`));
  add('Services no longer listed in some regions', common
    .map((n) => [n, minus(before[n], after[n])]).filter(([, r]) => r.length)
    .map(([n, r]) => `**${n}**: ${r.join(', ')}`));

  const totals = `**${namesAfter.size} services** in **${regionCount(regionsAfter.size)}** (before: ${namesBefore.size} services in ${regionCount(regionsBefore.size)})`;
  const body = sections.length ? sections.join('\n\n') : 'No availability changes; the data was refreshed.';
  return `${totals}\n\n${body}\n`;
}

module.exports = { changelog };

if (require.main === module) {
  const [oldFile, newFile] = process.argv.slice(2);
  if (!oldFile || !newFile) {
    console.error('usage: node scripts/changelog.js <old service_info.json> <new service_info.json>');
    process.exit(2);
  }
  const read = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
  process.stdout.write(changelog(read(oldFile), read(newFile)));
}
