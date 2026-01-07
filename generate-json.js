const fs = require('fs');
const path = require('path');
const awsRegionTableParser = require('./index.js');
const chartGenerator = require('./chart-generator.js');

let regionNames = {};
const REGION_MAP_FILE = path.join(__dirname, 'region_code_to_name_map.json');

// Helper to generate a unique HSL color for each region
function generateDynamicColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        // Rotates the hue around the color wheel based on the total count
        const hue = (i * (360 / count)) % 360;
        colors.push(`hsl(${hue}, 70%, 50%)`);
    }
    return colors;
}

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

async function saveRegionMap(map) {
    try {
        fs.writeFileSync(REGION_MAP_FILE, JSON.stringify(map, null, 2));
        console.log('Region map file updated');
    } catch (error) {
        console.error('Error saving region map:', error);
    }
}

async function resolveRegionNames() {
    const localMap = await getLocalRegionMap();
    let htmlMap = {};
    try {
        htmlMap = await awsRegionTableParser.getRegionCodeToNameMap();
        let hasNewRegions = false;
        Object.entries(htmlMap).forEach(([code, name]) => {
            if (!localMap[code]) {
                localMap[code] = name;
                hasNewRegions = true;
                console.log(`Found new region: ${code} - ${name}`);
            }
        });
        if (hasNewRegions) await saveRegionMap(localMap);
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
    return array.sort((a, b) => asc ? a[prop] - b[prop] : b[prop] - a[prop]);
};

async function generateRegionSummaryMarkdown(parseddata) {
    const regionSummary = sortArrayByProp(Object.values(parseddata.regionSummary), 'count', false);

    // Optimized for many categories: horizontalBar + increased height
    const chartConfig = {
        "type": "horizontalBar", 
        "data": {
            "labels": regionSummary.map(r => r.code),
            "datasets": [{
                "label": "Supported Services",
                "backgroundColor": generateDynamicColors(regionSummary.length),
                "data": regionSummary.map(r => r.count)
            }]
        },
        "options": {
            "legend": { "display": false },
            "title": {
                "display": true,
                "text": "No. of supported services per region",
                "fontSize": 18
            },
            "scales": {
                "xAxes": [{
                    "ticks": { "beginAtZero": true }
                }],
                "yAxes": [{
                    "ticks": { "fontSize": 10 }
                }]
            }
        }
    };

    let markdownTable = `### Summary # \n`;
    markdownTable += `| Region Code | Region Name | no. of Supported Services | \n`;
    markdownTable += `| ------ | -------- | -------- | \n`;
    regionSummary.forEach(region => {
        markdownTable += `| [${region.code}](./data/region_info/${region.code}.json) | ${region.name} | ${region.count} |\n`;
    });

    markdownTable += `\n\n`;

    // We increase height (e.g., 800) to ensure bars aren't squashed
    const chartUrl = await chartGenerator.getChartUrl(chartConfig, 800);
    markdownTable += "### Number of Supported Services Per Region\n\n";
    markdownTable += `<img src='${chartUrl}' width='800'>\n\n`;
    return markdownTable;
}

async function main() {
    try {
        console.log('Resolving region names...');
        regionNames = await resolveRegionNames();
        const servicesAndRegions = await awsRegionTableParser.get();
        servicesAndRegions.regionSummary = getRegionSummary(servicesAndRegions);

        let READMEheader = `### ${servicesAndRegions.servicesCount} Services\n\n`;
        READMEheader += `### ${servicesAndRegions.regionsCount} Regions \n`;
        READMEheader += await generateRegionSummaryMarkdown(servicesAndRegions);
        READMEheader += `# Region and Service Table # \n`;

        const regionCodes = servicesAndRegions.regionCodes;
        READMEheader += `| Service | ${regionCodes.join(' | ')} |\n`;
        READMEheader += `| ------------- | ${regionCodes.map(() => '---').join(' | ')} |\n`;

        const READMErows = [];
        Object.entries(servicesAndRegions.services).forEach(([serviceCode, serviceData]) => {
            const serviceName = servicesAndRegions.serviceNames[serviceCode];
            const regionChecks = regionCodes.map(code => serviceData.regions.includes(code) ? '✅' : '❌');
            READMErows.push(`| ${serviceName} | ${regionChecks.join(' | ')} |`);
        });

        const README_FILE_PATH = path.join(__dirname, 'README.md');
        let README_FILE_CONTEXT = fs.readFileSync(README_FILE_PATH, 'utf8');
        const finalContent = README_FILE_CONTEXT.replace(
            /()([\s\S]*)()/,
            `$1\n${READMEheader}${READMErows.join('\n')}\n$3`
        );

        fs.writeFileSync(README_FILE_PATH, finalContent, 'utf8');
        console.log('README.md updated successfully');
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
