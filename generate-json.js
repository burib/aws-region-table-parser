const fs = require('fs');
const path = require('path');
const awsRegionTableParser = require('./index.js');
const chartGenerator = require('./chart-generator.js');

let regionNames = {};
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

 // 2. Try to fetch from HTML table
 let htmlMap = {};
 try {
   htmlMap = await awsRegionTableParser.getRegionCodeToNameMap();
   console.log('Fetched region names from HTML');

   // Check for new regions and update local map
   let hasNewRegions = false;
   Object.entries(htmlMap).forEach(([code, name]) => {
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
   console.error('Error fetching HTML region map:', error);
 }

 return localMap;
}

function getRegionSummary(parseddata) {
 let regionSummary = {};

 Object.values(parseddata.services).forEach(service => {
   service.regions.forEach(regionCode => {
     if (!regionSummary[regionCode]) {
       regionSummary[regionCode] = {
         code: regionCode,
         name: regionNames[regionCode] || regionCode,
         count: 0
       };
     }

     regionSummary[regionCode].count += 1;
   });
 });

 return regionSummary;
}

const sortArrayByProp = (array, prop, asc = true) => {
 return array.sort((a, b) => {
   return asc ? a[prop] - b[prop] : b[prop] - a[prop];
 });
};

async function generateRegionSummaryMarkdown(parseddata) {
 const regionSummary = sortArrayByProp(Object.values(parseddata.regionSummary), 'count', false);

 const chartConfig = {
   "type": "bar",
   "data": {
     "labels": [],
     "datasets": [
       {
         "label": "Regions",
         "backgroundColor": ["#7f0000", "#330000", "#ff2200", "#d97b6c", "#d9b1a3", "#a64200", "#331400", "#66381a", "#99754d", "#cc8800", "#33260d", "#ffeabf", "#5f6600", "#a3bf30", "#20331a", "#c8ffbf", "#40ff59", "#1d733f", "#66ccb8", "#39736f", "#80e6ff", "#002233", "#267399", "#80b3ff", "#0044ff", "#405180", "#241966", "#8273e6", "#ad00d9", "#daace6", "#ff80f6", "#661a4d", "#ff80b3", "#ff0044", "#a6294b", "#73565e"],
         "data": []
       }
     ]
   },
   "options": {
     "legend": { "display": false },
     "title": {
       "display": true,
       "text": "No. of supported services per region."
     }
   }
 };

 let markdownTable = `### Summary # \n`;
 markdownTable += `| Region Code | Region Name | no. of Supported Services | \n`;
 markdownTable += `| ------ | -------- | -------- | \n`;
 regionSummary.forEach(region => {
   markdownTable += `| [${region.code}](./data/region_info/${region.code}.json) | ${region.name} | ${region.count} |\n`;

   chartConfig.data.labels.push(`${region.code}`);
   chartConfig.data.datasets[0].data.push(region.count);
 });

 markdownTable += `\n\n`;

 const chartUrl = await chartGenerator.getChartUrl(chartConfig);
 markdownTable += "### Number of Supported Services Per Region\n\n";
 markdownTable += `<img src='${chartUrl}'>\n\n`;
 return markdownTable;
}

async function main() {
 try {
   // Get region names with new resolution strategy
   console.log('Resolving region names...');
   regionNames = await resolveRegionNames();
   console.log('Region names resolved');

   const servicesAndRegions = await awsRegionTableParser.get();
   console.log('Services and regions data fetched');

   servicesAndRegions.regionSummary = getRegionSummary(servicesAndRegions);

   let READMEheader = `### ${servicesAndRegions.servicesCount.toString().padStart(3)} Services\n\n`;
   READMEheader += `### ${servicesAndRegions.regionsCount.toString().padStart(3)} Regions \n`;

   READMEheader += await generateRegionSummaryMarkdown(servicesAndRegions);
   READMEheader += `# Region and Service Table # \n`;

   const regionCodes = servicesAndRegions.regionCodes;

   READMEheader += `| Service | ${regionCodes.join(' | ')} |\n`;
   READMEheader += `| ------------- | ${regionCodes.map(() => '-------------').join(' | ')} |\n`;

   const READMErows = [];

   Object.entries(servicesAndRegions.services).forEach(([serviceCode, serviceData]) => {
     const serviceName = servicesAndRegions.serviceNames[serviceCode];
     const regionChecks = regionCodes.map(regionCode =>
       serviceData.regions.includes(regionCode) ? ':white_check_mark:' : ':x:'
     );

     const row = `| ${serviceName} | ${regionChecks.join(' | ')} |`;
     READMErows.push(row);
   });

   const READMEtext = `${READMEheader}${READMErows.join('\n')}`;

   const README_FILE_PATH = path.join(__dirname, 'README.md');
   let README_FILE_CONTEXT = fs.readFileSync(README_FILE_PATH, 'utf8');
   README_FILE_CONTEXT = README_FILE_CONTEXT.replace(
     /(<!--START_SECTION:region_summary-->)([\s\S]*)(<!--END_SECTION:region_summary-->)/,
     `$1\n${READMEtext}\n$3`
   );

   fs.writeFileSync(README_FILE_PATH, README_FILE_CONTEXT, 'utf8');
   console.log('README.md updated successfully');
 } catch (error) {
   console.error('Error:', error);
   process.exit(1);
 }
}

main();