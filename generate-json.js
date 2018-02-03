var fs = require('fs');
var awsRegionTableParser = require('./index.js');

awsRegionTableParser.get().then(function(servicesAndRegions) {
  const services = {services: servicesAndRegions};
  fs.writeFileSync('./data/parseddata.json', JSON.stringify(services, null, 2), 'utf8');
});

