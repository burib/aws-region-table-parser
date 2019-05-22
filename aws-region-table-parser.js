const regionNames = require('./aws-region-names.js');
const serviceNames = {};
const regionSummary = {};
const locationsMap = {
  edgeLocations: [],
  regionalEdgeCaches: []
};

const transpose = array => array[0].map((_, c) => array.map(r => r[c]));
const flatten = (array) => {
  return array.reduce(
    (acc, cur) => acc.concat(cur),
    []
  ).filter((item) => {
    return item.length > 0;
  });
};
const cheerio = require('cheerio');

function parseAwsTable(html) {
  const $ = cheerio.load(html);
  let services = {};

  $('table').each(function(awsTableIndex) {
    let regions = [];

    if (awsTableIndex !== 3) {
      $(this).find('tbody tr').each(function(rowIndex) {
        const coloumns = $(this).find('td');

        if (rowIndex === 0) {
          coloumns.each(function (coloumnIndex,coloumn) {
            const parsedRegionName = $(coloumn).text().toLowerCase().trim()
                .replace(/ /ig, '_')
                .replace(/[()* ]/ig, ''),
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

          if (parsedServiceName) {
            coloumns.each(function (coloumnIndex,coloumn) {
              if (coloumnIndex === 0) {
                services[serviceName] = services[serviceName] || {};
              } else {
                let regionCode = regions[coloumnIndex];
                let isServiceSupportedInRegion = $(coloumn).text() === '✓';
                services[serviceName][regionCode] = isServiceSupportedInRegion;

                regionSummary[regionCode] = regionSummary[regionCode] || {
                      regionCode: regionCode,
                      regionName: Object.values(regionNames).filter(region => region.code === regionCode)[0].name,
                      value: 0
                    };

                if (isServiceSupportedInRegion) {
                  regionSummary[regionCode].value++;
                }
              }

              serviceNames[serviceName] = parsedServiceName;
            });
          }
        }
      });
    } else {
      // Locations Table parsing
      let edgeType = 'edgeLocations';
      let rowIndex = 0;

      $(this).find('tbody tr').each(function() {
        const column = $(this);
        const columnText = $(this).text().toLowerCase().trim();

        if (columnText === 'regional edge caches') {
          edgeType = 'regionalEdgeCaches';
          rowIndex = 0;
        }

        const cells = column.find('td');

        locationsMap[edgeType].push([]);
        cells.each(function (cellIndex,cell) {
          const cellText = $(cell).text().trim();
          locationsMap[edgeType][rowIndex].push(cellText);
        });

        rowIndex++;
      });
    }
  });

  locationsMap.edgeLocations.splice(0, 3); // remove the first 3 rows ( Edge Locations, North America..., United States... )
  locationsMap.regionalEdgeCaches.shift(); // remove first item

  locationsMap.edgeLocations = transpose(locationsMap.edgeLocations);
  locationsMap.regionalEdgeCaches = transpose(locationsMap.regionalEdgeCaches);

  const addCountryNameToUsLocations = (array) => {
    return array.map((location) => {
      if (location.match(/ \(.+?\)/ig)) {
        return location.replace(/ \(.+?\)/ig, ', United States$&')
      } else {
        return location.length > 0 ? `${location}, United States` : ''
      }
    })
  };

  locationsMap.edgeLocations[0] = addCountryNameToUsLocations(locationsMap.edgeLocations[0]);
  locationsMap.regionalEdgeCaches[0] = addCountryNameToUsLocations(locationsMap.regionalEdgeCaches[0]);

  locationsMap.edgeLocations = flatten(locationsMap.edgeLocations);
  locationsMap.regionalEdgeCaches = flatten(locationsMap.regionalEdgeCaches);

  console.log('\x1b[32m%s\x1b[0m', locationsMap.edgeLocations.length + ' different AWS Edge Locations found.');
  console.log('\x1b[32m%s\x1b[0m', locationsMap.regionalEdgeCaches.length + ' different AWS Regional Edge Cache Locations found.');
  console.log('\x1b[32m%s\x1b[0m', Object.keys(services).length + ' AWS Services found.');

  return {
    regionSummary: regionSummary,
    services: services,
    serviceNames: serviceNames,
    edgeLocations: locationsMap.edgeLocations,
    regionalEdgeCaches: locationsMap.regionalEdgeCaches
  };
}

module.exports = parseAwsTable;
