const fs = require('fs');
const path = require('path');
const awsRegionTableParser = require('./index.js');
const { getChartSvg, THEMES } = require('./chart-generator.js');
// Region code -> name from the AWS SDK's public region list (botocore). It covers the public partitions,
// including AWS GovCloud (US), China and the AWS European Sovereign Cloud, and needs no AWS account.
const BOTOCORE_ENDPOINTS = 'https://raw.githubusercontent.com/boto/botocore/develop/botocore/data/endpoints.json';

async function fetchRegionNamesFromBotocore() {
 const res = await fetch(BOTOCORE_ENDPOINTS, { signal: AbortSignal.timeout(30_000) });
 if (!res.ok) throw new Error(`botocore endpoints.json returned HTTP ${res.status}`);
 const { partitions } = await res.json();
 const map = {};
 for (const partition of partitions || []) {
   if (/^aws-iso/.test(partition.partition)) continue; // closed government partitions, never in the service data
   for (const [code, region] of Object.entries(partition.regions || {})) {
     if (/^[a-z0-9-]+$/.test(code) && typeof region.description === 'string') map[code] = region.description;
   }
 }
 return map;
}

const REGION_MAP_FILE = path.join(__dirname, 'region_code_to_name_map.json');

// New function to read the local region map file
async function getLocalRegionMap() {
 try {
   if (fs.existsSync(REGION_MAP_FILE)) {
     return JSON.parse(fs.readFileSync(REGION_MAP_FILE, 'utf8'));
   }
   return {};
 } catch (error) {
   console.error('Error reading local region map:', error);
   return {};
 }
}

// New function to save updated region map
async function saveRegionMap(map) {
 try {
   fs.writeFileSync(REGION_MAP_FILE, JSON.stringify(map, null, 2));
   console.log('Region map file updated');
 } catch (error) {
   console.error('Error saving region map:', error);
 }
}

// Modified region resolution function
async function resolveRegionNames() {
 // 1. First try to read from local file
 const localMap = await getLocalRegionMap();
 console.log('Loaded local region map');

 // 2. Add regions the local map doesn't have yet
 let remoteMap = {};
 try {
   remoteMap = await fetchRegionNamesFromBotocore();
   console.log('Fetched region names from botocore');

   // Check for new regions and update local map
   let hasNewRegions = false;
   Object.entries(remoteMap).forEach(([code, name]) => {
     if (!localMap[code]) {
       localMap[code] = name;
       hasNewRegions = true;
       console.log(`Found new region: ${code} - ${name}`);
     }
   });

   // Save if we found new regions
   if (hasNewRegions) {
     await saveRegionMap(localMap);
   }
 } catch (error) {
   console.error('Error fetching region names from botocore:', error);
 }

 return localMap;
}

// Names come from remote data; keep them from breaking the markdown table or injecting HTML.
const md = (text) => String(text).replace(/[|<>\[\]]/g, (c) => ({ '|': '\\|', '<': '&lt;', '>': '&gt;', '[': '\\[', ']': '\\]' })[c]);
const isSafeUrl = (url) => typeof url === 'string' && /^https?:\/\/[^\s()<>]+$/.test(url);

const ASSETS_DIR = path.join(__dirname, 'assets');
const README_FILE = path.join(__dirname, 'README.md');

// [{ code, name, count }] sorted by count, most services first
function getRegionSummary(data, regionNames) {
 const counts = {};
 Object.values(data.services).forEach(service => {
   new Set(service.regions).forEach(code => { counts[code] = (counts[code] || 0) + 1; });
 });
 return Object.entries(counts)
   .map(([code, count]) => ({ code, name: regionNames[code] || code, count }))
   .sort((a, b) => b.count - a.count || a.code.localeCompare(b.code));
}

// "all", "all except a, b" or "a, b, c", whichever is shortest
function describeRegions(regions, allRegions) {
 if (regions.length === allRegions.length) return 'all';
 if (regions.length > allRegions.length / 2) {
   return 'all except ' + allRegions.filter(r => !regions.includes(r)).join(', ');
 }
 return regions.join(', ');
}

function buildReadmeSection(data, regionSummary) {
 const allRegions = data.regionCodes;
 const lines = [];

 lines.push(`**${data.servicesCount} services** in **${data.regionsCount} regions** · data as of ${new Date().toISOString().slice(0, 10)}`, '');

 lines.push('## Services per region', '');
 lines.push('<p>', '<picture>');
 lines.push('  <source media="(prefers-color-scheme: dark)" srcset="./assets/services-per-region-dark.svg">');
 lines.push('  <img alt="Number of AWS services available in each region" src="./assets/services-per-region-light.svg">');
 lines.push('</picture>', '</p>', '');
 lines.push('| Region | Name | Services |', '| --- | --- | ---: |');
 regionSummary.forEach(r => {
   lines.push(`| [${md(r.code)}](./data/region_info/${encodeURIComponent(r.code)}.json) | ${md(r.name)} | ${r.count} |`);
 });
 lines.push('');

 lines.push('## Where each service is available', '');
 lines.push('| Service | Regions | Where |', '| --- | ---: | --- |');
 Object.values(data.services)
   .map(s => ({ ...s, regions: [...new Set(s.regions)].sort() }))
   .sort((a, b) => a.name.localeCompare(b.name))
   .forEach(s => {
     const name = isSafeUrl(s.url) ? `[${md(s.name)}](${s.url})` : md(s.name);
     lines.push(`| ${name} | ${s.regions.length} | ${describeRegions(s.regions, allRegions)} |`);
   });

 return lines.join('\n');
}

async function main() {
 try {
   console.log('Resolving region names...');
   const regionNames = await resolveRegionNames();

   const data = await awsRegionTableParser.get();
   const regionSummary = getRegionSummary(data, regionNames);

   fs.mkdirSync(ASSETS_DIR, { recursive: true });
   THEMES.forEach(theme => {
     fs.writeFileSync(path.join(ASSETS_DIR, `services-per-region-${theme}.svg`), getChartSvg(regionSummary, theme), 'utf8');
   });
   console.log('Charts written');

   const section = buildReadmeSection(data, regionSummary);
   const readme = fs.readFileSync(README_FILE, 'utf8').replace(
     /(<!--START_SECTION:region_summary-->)([\s\S]*)(<!--END_SECTION:region_summary-->)/,
     // function replacement so `$&`, `$'` etc. in remote data are not treated as patterns
     (_, start, _old, end) => `${start}\n${section}\n${end}`
   );
   fs.writeFileSync(README_FILE, readme, 'utf8');
   console.log('README.md updated successfully');
 } catch (error) {
   console.error('Error:', error);
   process.exit(1);
 }
}

main();
