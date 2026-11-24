const test = require('node:test');
const assert = require('node:assert/strict');
const parser = require('../index.js');

test('get() returns the bundled data', async () => {
  const data = await parser.get();
  assert.ok(data.servicesCount > 100);
  assert.ok(data.regionCodes.includes('us-east-1'));
});

test('getServiceNames() lists every service, sorted', async () => {
  const names = await parser.getServiceNames();
  const data = await parser.get();
  assert.equal(names.length, Object.keys(data.services).length);
  assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b)));
});

test('getRegionsForService() finds a service by name, ignoring case', async () => {
  const regions = await parser.getRegionsForService('aws lambda');
  assert.ok(regions.includes('us-east-1'));
  assert.equal(new Set(regions).size, regions.length, 'no duplicates');
  assert.deepEqual(regions, [...regions].sort());
});

test('getRegionsForService() accepts the name without "AWS"/"Amazon"', async () => {
  assert.deepEqual(await parser.getRegionsForService('Lambda'), await parser.getRegionsForService('AWS Lambda'));
});

test('getRegionsForService() throws a helpful error for an unknown service', async () => {
  await assert.rejects(parser.getRegionsForService('Lamda'), /Unknown AWS service "Lamda"/);
});

test('getServicesInRegion() lists services in a region and [] for an unknown one', async () => {
  const services = await parser.getServicesInRegion('us-east-1');
  assert.ok(services.includes('AWS Lambda'));
  assert.deepEqual(await parser.getServicesInRegion('xx-nowhere-1'), []);
});

test('isServiceAvailable() answers yes/no for a service and region', async () => {
  assert.equal(await parser.isServiceAvailable('AWS Lambda', 'us-east-1'), true);
  assert.equal(await parser.isServiceAvailable('AWS Lambda', 'xx-nowhere-1'), false);
});

test('getRegionCodeToNameMap() maps codes to names', async () => {
  const map = await parser.getRegionCodeToNameMap();
  assert.equal(map['us-east-1'], 'US East (N. Virginia)');
});

test('an exact name wins over the short form ("Security Hub" vs "AWS Security Hub" are separate services)', async () => {
  const names = await parser.getServiceNames();
  if (!names.includes('Security Hub') || !names.includes('AWS Security Hub')) return; // data changed upstream
  assert.notDeepEqual(await parser.getRegionsForService('security hub'), await parser.getRegionsForService('AWS Security Hub'));
});

test('AWS China: services in a China region use AWS China names', async () => {
  const china = await parser.getChina();
  if (!china.regionCodes.length) return; // no China data
  const services = await parser.getServicesInRegion('cn-north-1');
  assert.ok(services.length > 50);
  assert.ok(services.includes('Amazon API Gateway'));
});

test('AWS China: availability and regions for a service with the same name', async () => {
  const china = await parser.getChina();
  if (!china.services['Amazon API Gateway']) return; // data changed upstream
  assert.equal(await parser.isServiceAvailable('Amazon API Gateway', 'cn-north-1'), true);
  assert.ok((await parser.getRegionsForService('Amazon API Gateway')).includes('cn-north-1'));
  assert.equal(await parser.isServiceAvailable('Not A Real Service', 'cn-north-1'), false);
});

test('AWS China: a name only AWS China uses still returns its China regions', async () => {
  const china = await parser.getChina();
  const globalNames = new Set(await parser.getServiceNames());
  const chinaOnly = Object.keys(china.services).find((n) => !globalNames.has(n) && !n.includes('('));
  if (!chinaOnly) return;
  const regions = await parser.getRegionsForService(chinaOnly);
  assert.ok(regions.length > 0 && regions.every((r) => r.startsWith('cn-')));
});
