// Data is regenerated daily from AWS and bundled with the package, so no network or dependencies are needed.
const data = () => require('./data/service_info.json');

const normalize = (name) => String(name).trim().toLowerCase();
const withoutVendor = (name) => normalize(name).replace(/^(aws|amazon)\s+/, '');

// Finds a service by its name, ignoring case. "Lambda" also finds "AWS Lambda" when that is unambiguous.
function findService(serviceName) {
  const services = Object.values(data().services);
  const exact = services.find((s) => normalize(s.name) === normalize(serviceName));
  if (exact) return exact;

  const loose = services.filter((s) => withoutVendor(s.name) === withoutVendor(serviceName));
  if (loose.length === 1) return loose[0];

  const hint = loose.length > 1 ? ` Did you mean one of: ${loose.map((s) => s.name).join(', ')}?` : '';
  throw new Error(`Unknown AWS service "${serviceName}".${hint} See getServiceNames() for all names.`);
}

const regionsOf = (service) => [...new Set(service.regions)].sort();

module.exports = {
  // { servicesCount, services, serviceNames, regionCodes, regionsCount }
  get: () => Promise.resolve(data()),

  // { "us-east-1": "US East (N. Virginia)", ... }
  getRegionCodeToNameMap: () => Promise.resolve(require('./region_code_to_name_map.json')),

  // ["AD Connector", "AWS Lambda", ...]
  getServiceNames: async () => Object.values(data().services).map((s) => s.name).sort((a, b) => a.localeCompare(b)),

  // getRegionsForService('AWS Lambda') -> ["af-south-1", "ap-east-1", ...]
  getRegionsForService: async (serviceName) => regionsOf(findService(serviceName)),

  // getServicesInRegion('eu-central-2') -> ["AD Connector", ...]; [] for an unknown region
  getServicesInRegion: async (regionCode) => Object.values(data().services)
    .filter((s) => s.regions.includes(regionCode))
    .map((s) => s.name)
    .sort((a, b) => a.localeCompare(b)),

  // isServiceAvailable('AWS Lambda', 'eu-central-2') -> true
  isServiceAvailable: async (serviceName, regionCode) => findService(serviceName).regions.includes(regionCode),
};
