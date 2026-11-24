// AWS China (Beijing cn-north-1, Ningxia cn-northwest-1) is not in AWS's global feed, so its services come from
// the amazonaws.cn "regional product services" page. Names are AWS China's own and often differ from the global ones.
// Writes data/china.json, then adds the two regions to data/region_info.json and data/region_info/<region>.json.
// Usage: node scripts/china.js   (after `parser.sh update_data`)

const fs = require('fs');
const path = require('path');

const SOURCE = 'https://www.amazonaws.cn/en/about-aws/regional-product-services/';
const COLUMNS = { Beijing: 'cn-north-1', Ningxia: 'cn-northwest-1' };
const DATA_DIR = path.join(__dirname, '..', 'data');
const CHINA_FILE = path.join(DATA_DIR, 'china.json');
const REGION_INFO_FILE = path.join(DATA_DIR, 'region_info.json');

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const decode = (s) => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, e) => {
  const key = e.toLowerCase();
  if (key.startsWith('#x')) return String.fromCodePoint(parseInt(key.slice(2), 16));
  if (key.startsWith('#')) return String.fromCodePoint(parseInt(key.slice(1), 10));
  return ENTITIES[key] ?? match;
});
const text = (html) => decode(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();

// { "Service name": ["cn-north-1", ...] } from the first table whose header has the Beijing/Ningxia columns
function parseChinaTable(html) {
  for (const table of html.match(/<table[\s\S]*?<\/table>/gi) || []) {
    const rows = (table.match(/<tr[\s\S]*?<\/tr>/gi) || [])
      .map((row) => (row.match(/<t[hd][\s\S]*?<\/t[hd]>/gi) || []).map(text));
    const columns = (rows[0] || []).map((heading) => COLUMNS[heading]);
    if (!columns.some(Boolean)) continue;

    const services = {};
    for (const [name, ...cells] of rows.slice(1)) {
      if (!name) continue;
      const regions = cells.map((cell, i) => (columns[i + 1] && cell ? columns[i + 1] : null)).filter(Boolean);
      if (regions.length) services[name] = regions;
    }
    return services;
  }
  return {};
}

const writeJson = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n', 'utf8');

async function main() {
  try {
    const res = await fetch(SOURCE, { signal: AbortSignal.timeout(30_000) });
    if (!res.ok) throw new Error(`amazonaws.cn returned HTTP ${res.status}`);
    const services = parseChinaTable(await res.text());
    const names = Object.keys(services).sort((a, b) => a.localeCompare(b));
    if (names.length < 50) throw new Error(`only ${names.length} services found; the page layout may have changed`);
    writeJson(CHINA_FILE, {
      source: SOURCE,
      regionCodes: Object.values(COLUMNS),
      servicesCount: names.length,
      services: Object.fromEntries(names.map((n) => [n, services[n]])),
    });
    console.log(`AWS China: ${names.length} services`);
  } catch (error) {
    // never fail the daily job because of China; keep the last good copy
    console.warn(`::warning::AWS China data not updated, keeping the previous copy: ${error.message}`);
  }

  if (!fs.existsSync(CHINA_FILE)) return;
  const china = JSON.parse(fs.readFileSync(CHINA_FILE, 'utf8'));
  const regionInfo = JSON.parse(fs.readFileSync(REGION_INFO_FILE, 'utf8'));
  for (const code of china.regionCodes) {
    const serviceNames = Object.keys(china.services).filter((name) => china.services[name].includes(code));
    const entry = { count: serviceNames.length, serviceNames };
    regionInfo[code] = entry;
    writeJson(path.join(DATA_DIR, 'region_info', `${code}.json`), entry);
  }
  writeJson(REGION_INFO_FILE, Object.fromEntries(Object.keys(regionInfo).sort().map((k) => [k, regionInfo[k]])));
}

module.exports = { parseChinaTable };

if (require.main === module) main();
