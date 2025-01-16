const fs = require('fs');
const path = require('path');
const awsRegionTableParser = require('./index.js');
const chartGenerator = require('./chart-generator.js');
const regionNames = require('./region_code_to_name_map.json');

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
    markdownTable += `| ${region.code} | ${region.name} | ${region.count} |\n`;

    chartConfig.data.labels.push(`${region.code}`);
    chartConfig.data.datasets[0].data.push(region.count);
  });

  markdownTable += `\n\n`;

  return await chartGenerator.getChartUrl(chartConfig).then((chartUrl) => {
    markdownTable += "### Number of Supported Services Per Region\n\n";
    markdownTable += `<img src='${chartUrl}'>\n\n`;

    return markdownTable;
  });
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

awsRegionTableParser.get().then(async function (servicesAndRegions) {
  servicesAndRegions.regionSummary = getRegionSummary(servicesAndRegions);

  let READMEheader = `### ${servicesAndRegions.servicesCount.toString().padStart(3)} Services\n\n`;
  READMEheader += `### ${servicesAndRegions.regionsCount.toString().padStart(3)} Regions \n`;

  READMEheader += await generateRegionSummaryMarkdown(servicesAndRegions);
  READMEheader += `# Region and Service Table # \n`;

  // Get all region codes in a consistent order
  const regionCodes = servicesAndRegions.regionCodes;

  // Create header row
  READMEheader += `| Service | ${regionCodes.join(' | ')} |\n`;
  READMEheader += `| ------------- | ${regionCodes.map(() => '-------------').join(' | ')} |\n`;

  const READMErows = [];

  // Generate rows for each service
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
});