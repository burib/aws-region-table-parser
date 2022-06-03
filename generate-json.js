const fs = require('fs');
const path = require('path');
const awsRegionTableParser = require('./index.js');
const chartGenerator = require('./chart-generator.js');
const regionNames = {
  "af-south-1": "Africa (Cape Town)",
  "ap-east-1": "Asia Pacific (Hong Kong)",
  "ap-northeast-1": "Asia Pacific (Tokyo)",
  "ap-northeast-2": "Asia Pacific (Seoul)",
  "ap-northeast-3": "Asia Pacific (Osaka-Local)",
  "ap-south-1": "Asia Pacific (Mumbai)",
  "ap-southeast-1": "Asia Pacific (Singapore)",
  "ap-southeast-2": "Asia Pacific (Sydney)",
  "ap-southeast-3": " Asia Pacific (Jakarta)",
  "ca-central-1": "Canada (Central)",
  "cn-north-1": "China (Beijing)",
  "cn-northwest-1": "China (Ningxia)",
  "eu-central-1": "Europe (Frankfurt)",
  "eu-central-2": "Europe (Zurich)",
  "eu-north-1": "Europe (Stockholm)",
  "eu-south-1": "Europe (Milan)",
  "eu-west-1": "Europe (Ireland)",
  "eu-west-2": "Europe (London)",
  "eu-west-3": "Europe (Paris)",
  "me-south-1": "Middle East (Bahrain)",
  "sa-east-1": "South America (Sao Paulo)",
  "us-east-1": "US East (N. Virginia)",
  "us-east-2": "US East (Ohio)",
  "us-gov-east-1": "AWS GovCloud (US-East)",
  "us-gov-west-1": "AWS GovCloud (US)",
  "us-west-1": "US West (N. California)",
  "us-west-2": "US West (Oregon)"
};

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

  let markdownTable = `### Region Summary # \n`;
  markdownTable += `| Region Code | Region Name | no. of Supported Services | \n`;
  markdownTable += `| ------ | -------- | -------- | \n`;
  regionSummary.forEach(region => {
    markdownTable += `${region.code} | ${region.name} | ${region.count}\n`;

    chartConfig.data.labels.push(`${region.code}`);
    chartConfig.data.datasets[0].data.push(region.count);
  });

  markdownTable += `\n\n`;

  return await chartGenerator.getChartUrl(chartConfig).then((chartUrl) => {
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

  return regionSummary
}

awsRegionTableParser.get().then(async function (servicesAndRegions) {
  servicesAndRegions.regionSummary = getRegionSummary(servicesAndRegions);

  let READMEheader = `### ${servicesAndRegions.servicesCount.toString().padStart(3)} Services\n\n`;
  READMEheader += `### ${servicesAndRegions.regionsCount.toString().padStart(3)} Regions \n`;

  READMEheader += await generateRegionSummaryMarkdown(servicesAndRegions);
  READMEheader += `# Region and Service Table # \n`
  READMEheader += `| | ${Object.keys(servicesAndRegions.regionSummary || {}).join(' | ')} |\n`;
  READMEheader += `| ------------- | ${Object.keys(servicesAndRegions.regionSummary).fill('-------------').join(' | ')}|`;
  const READMErows = [];

  for (const value in servicesAndRegions.services) {
    const longServiceName = servicesAndRegions.serviceNames[value];
    const row = `${longServiceName}|${Object.values(servicesAndRegions.services[value]).map(value => value ? ':white_check_mark:' : ':x:').join(' | ')}`;

    READMErows.push(row);
  }

  const READMEtext = `${READMEheader}\n${READMErows.join('\n')}`;

  const README_FILE_PATH = path.join(__dirname, 'README.md');
  let README_FILE_CONTEXT = fs.readFileSync(README_FILE_PATH, 'utf8');
  README_FILE_CONTEXT = README_FILE_CONTEXT.replace('# Region Summary:  \r\n', `# Region Summary:  \r\n\r\n${READMEtext}`);

  fs.writeFileSync(README_FILE_PATH, README_FILE_CONTEXT, 'utf8');
});
