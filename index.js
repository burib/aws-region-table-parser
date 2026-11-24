// Data is regenerated daily from AWS and bundled with the package, so no network or dependencies are needed.
const data = () => require('./data/service_info.json');

// AWS China (cn-north-1, cn-northwest-1) comes from amazonaws.cn and uses its own service names.
const EMPTY_CHINA = { regionCodes: [], servicesCount: 0, services: {} };
const china = () => { try { return require('./data/china.json'); } catch { return EMPTY_CHINA; } };
const isChinaRegion = (regionCode) => china().regionCodes.includes(regionCode);

const normalize = (name) => String(name).trim().toLowerCase();
const withoutVendor = (name) => normalize(name).replace(/^(aws|amazon)\s+/, '');

// Exact name (ignoring case) wins; otherwise "Lambda" matches "AWS Lambda" when that is unambiguous.
function match(names, query) {
  const exact = names.find((n) => normalize(n) === normalize(query));
  if (exact) return { name: exact };
  const loose = names.filter((n) => withoutVendor(n) === withoutVendor(query));
  return loose.length === 1 ? { name: loose[0] } : { candidates: loose };
}

const chinaRegionsOf = (serviceName) => {
  const { name } = match(Object.keys(china().services), serviceName);
  return name ? china().services[name] : [];
};

// Finds a service in the global data; throws a helpful error for unknown names.
function findService(serviceName) {
  const services = Object.values(data().services);
  const { name, candidates } = match(services.map((s) => s.name), serviceName);
  if (name) return services.find((s) => s.name === name);
  const hint = candidates.length > 1 ? ` Did you mean one of: ${candidates.join(', ')}?` : '';
  throw new Error(`Unknown AWS service "${serviceName}".${hint} See getServiceNames() for all names.`);
}

const sorted = (list) => [...new Set(list)].sort((a, b) => a.localeCompare(b));

module.exports = {
  // { servicesCount, services, serviceNames, regionCodes, regionsCount } (global regions)
  get: () => Promise.resolve(data()),

  // { source, regionCodes: ["cn-north-1", "cn-northwest-1"], servicesCount, services: { "Amazon S3": ["cn-north-1", ...] } }
  getChina: () => Promise.resolve(china()),

  // { "us-east-1": "US East (N. Virginia)", ... }
  getRegionCodeToNameMap: () => Promise.resolve(require('./region_code_to_name_map.json')),

  // ["AD Connector", "AWS Lambda", ...] (global names)
  getServiceNames: async () => sorted(Object.values(data().services).map((s) => s.name)),

  // getRegionsForService('AWS Lambda') -> ["af-south-1", ..., "cn-north-1", ...]
  // China regions are included when AWS China lists the service under the same name.
  getRegionsForService: async (serviceName) => {
    const chinaRegions = chinaRegionsOf(serviceName);
    try {
      return sorted([...findService(serviceName).regions, ...chinaRegions]);
    } catch (error) {
      if (chinaRegions.length) return sorted(chinaRegions); // a name only AWS China uses
      throw error;
    }
  },

  // getServicesInRegion('eu-central-2') -> ["AD Connector", ...]; AWS China names for cn-* regions; [] for an unknown region
  getServicesInRegion: async (regionCode) => (isChinaRegion(regionCode)
    ? sorted(Object.keys(china().services).filter((n) => china().services[n].includes(regionCode)))
    : sorted(Object.values(data().services).filter((s) => s.regions.includes(regionCode)).map((s) => s.name))),

  // isServiceAvailable('AWS Lambda', 'eu-central-2') -> true; for cn-* regions, matched against AWS China's names
  isServiceAvailable: async (serviceName, regionCode) => (isChinaRegion(regionCode)
    ? chinaRegionsOf(serviceName).includes(regionCode)
    : findService(serviceName).regions.includes(regionCode)),
};
