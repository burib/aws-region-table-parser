const regionNames = require('./aws-region-names.js');
const serviceNames = {};
const cheerio = require('cheerio');

function parseAwsTable(html) {
  const $ = cheerio.load(html);
  let services = {};

  $('.aws-table').each(function(awsTableIndex) {
    let regions = [];

    if (awsTableIndex !== 3) {
      $(this).find('tbody tr').each(function(rowIndex) {
        const coloumns = $(this).find('td');

        if (rowIndex === 0) {
          coloumns.each(function (coloumnIndex,coloumn) {
            const parsedRegionName = $(coloumn).text().toLowerCase().trim().replace(/ /ig, '_').replace('*',''),
            region = regionNames[parsedRegionName] || {};
            
            if (parsedRegionName !== 'services_offered:' && typeof region.code === 'undefined') {
              console.log('\x1b[33m%s\x1b[0m', 'region name: ' + parsedRegionName + ' not found in "./aws-region-names.js"');
            } else {
              regions.push(region.code);
            }
          });
        } else {
          const parsedServiceName = coloumns.eq(0).find('a').eq(0).text().trim();
          let serviceName = parsedServiceName.toLowerCase().trim().replace(' - ', '_').replace(/[ .]/ig, '_').replace(/[()/]/ig, '').replace('__', '_').replace('amazon_', '').replace('aws_', '');

          coloumns.each(function (coloumnIndex,coloumn) {
            if (coloumnIndex === 0) {
              services[serviceName] = services[serviceName] || {};
            } else {
              let regionName = regions[coloumnIndex];

              services[serviceName][regionName] = $(coloumn).find('i.txt-green').length === 1;
            }

            serviceNames[serviceName] = parsedServiceName;
          });
        }
      });
    } else {
      //console.log('CDN Locations Table');
    }
  });

  console.log('\x1b[32m%s\x1b[0m',  Object.keys(services).length + ' AWS Services found.');

  return {
    services: services,
    serviceNames: serviceNames
  };
}

module.exports = parseAwsTable;