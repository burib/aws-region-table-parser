const fs = require('fs');
const awsRegionTableParser = require('./index.js');
const chartGenerator = require('./chart-generator.js');

const sortArrayByProp = (array, prop, asc = true) => {
  return array.sort((a, b) => {
    return asc ? a[prop] - b[prop] : b[prop] - a[prop];
  });
};

async function generateRegionSummaryMarkdown(parseddata) {
  const regionSummary = sortArrayByProp(Object.values(parseddata.regionSummary), 'value', false);
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
    markdownTable += `${region.regionCode} | ${region.regionName} | ${region.value}\n`;

    chartConfig.data.labels.push(`${region.regionCode}`);
    chartConfig.data.datasets[0].data.push(region.value);
  });

  markdownTable += `\n\n`;

  return await chartGenerator.getChartUrl(chartConfig).then((chartUrl) => {
    markdownTable += `<img src='${chartUrl}'>\n\n`;

    return markdownTable;
  });
}

awsRegionTableParser.get().then(async function (servicesAndRegions) {
  let READMEheader = `### ${servicesAndRegions.servicesCount.toString().padStart(3)} Services\n\n`;
  READMEheader += `### ${servicesAndRegions.regionsCount.toString().padStart(3)} Regions \n`;
  READMEheader += `### ${servicesAndRegions.edgeLocationsTotalCount.toString().padStart(3)} Edge Locations in ${servicesAndRegions.edgeLocationsCount} cities.\n`;
  READMEheader += `### ${servicesAndRegions.regionalEdgeCachesCount.toString().padStart(3)} Regional Edge Caches\n`;

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

  fs.writeFileSync('./data/README.md', READMEtext, 'utf8');
});
