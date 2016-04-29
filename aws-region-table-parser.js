const regionNames = require('./aws-region-names.js');
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

            regions.push(region.code || 'unknown');
          });
        } else {
          const serviceName = coloumns.eq(0).find('a').eq(0).text().toLowerCase().trim().replace(/ /ig, '_').replace('amazon_', '').replace('aws_', '');
          coloumns.each(function (coloumnIndex,coloumn) {
            if (coloumnIndex === 0) {
              services[serviceName] = services[serviceName] || {};
            } else {
              let regionName = regions[coloumnIndex];
              services[serviceName][regionName] = $(coloumn).find('i.txt-green').length === 1;
            }
          });
        }
      });
    } else {
      //console.log('CDN Locations Table');
    }
  });

  return services;
}

module.exports = parseAwsTable;