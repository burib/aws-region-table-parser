var fs = require('fs');
var awsRegionTableParser = require('./index.js');

function generateRegionSummary(parseddata) {
  const regionSummary = parseddata.regionSummary;
  const regions = Object.keys(regionSummary);
  let markdownTable =`# Region Summary # \n`;
  markdownTable += `| Region | Services | \n`;
  markdownTable += `| ------ | --------: | \n`;
  Object.entries(regionSummary).forEach(entry => {
    markdownTable += `${entry[0]} | ${entry[1]} \n`
  });

  markdownTable += `\n\n`

  return markdownTable;
}

awsRegionTableParser.get().then(function(servicesAndRegions) {
  fs.writeFileSync('./data/parseddata.json', JSON.stringify(servicesAndRegions, null, 2), 'utf8');

  // TODO: clean this up
  const services = Object.values(servicesAndRegions.services);
  const edgeLocations = servicesAndRegions.edgeLocations;
  const regionalEdgeCaches = servicesAndRegions.regionalEdgeCaches;

  const regions = services[0];

  let READMEheader = `### ${edgeLocations.length} Edge Locations\n`;
  READMEheader += `### ${regionalEdgeCaches.length} Regional Edge Caches\n`;
  READMEheader += `### ${services.length} Services\n\n`;
  READMEheader += generateRegionSummary(servicesAndRegions);
  READMEheader += `# Region and Service Table # \n`
  READMEheader += `| | ${Object.keys(regions).join(' | ')} |\n`;
  READMEheader += `| ------------- | ${Object.keys(regions).fill('-------------').join(' | ')}|`;
  const READMErows = [];

  for (var value in servicesAndRegions.services) {
    const longServiceName = servicesAndRegions.serviceNames[value];
    const row = `${longServiceName}|${Object.values(servicesAndRegions.services[value]).join(' | ')}`;

    READMErows.push(row);
  }

  const READMEtext = `${READMEheader}\n${READMErows.join('\n')}`;

  fs.writeFileSync('./data/README.md', READMEtext, 'utf8');
});
