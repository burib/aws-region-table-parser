var fs = require('fs');
var awsRegionTableParser = require('./index.js');

awsRegionTableParser.get().then(function(servicesAndRegions) {
  fs.writeFileSync('./data/parseddata.json', JSON.stringify(servicesAndRegions, null, 2), 'utf8');
});

