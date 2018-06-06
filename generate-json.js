var fs = require('fs');
var awsRegionTableParser = require('./index.js');

awsRegionTableParser.get().then(function(servicesAndRegions) {
  fs.writeFileSync('./data/parseddata.json', JSON.stringify(servicesAndRegions, null, 2), 'utf8');

  // TODO: clean this up
  const regions = Object.values(servicesAndRegions.services)[0];
  let READMEheader = `| | ${Object.keys(regions).join(' | ')} |\n`;
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
