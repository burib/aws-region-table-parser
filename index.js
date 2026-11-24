// Data is regenerated daily from AWS and bundled with the package, so no network or dependencies are needed.
module.exports = {
  // { servicesCount, services, serviceNames, regionCodes, regionsCount }
  get: () => Promise.resolve(require('./data/service_info.json')),

  // { "us-east-1": "US East (N. Virginia)", ... }
  getRegionCodeToNameMap: () => Promise.resolve(require('./region_code_to_name_map.json')),
};
