const test = require('node:test');
const assert = require('node:assert/strict');
const { changelog } = require('../scripts/changelog.js');

const data = (services) => ({
  services: Object.fromEntries(Object.entries(services).map(([name, regions], i) => [`id${i}`, { name, regions }])),
});

test('lists new regions, new services and services that reached more regions', () => {
  const notes = changelog(
    data({ 'AWS Lambda': ['us-east-1'], 'Amazon S3': ['us-east-1'] }),
    data({ 'AWS Lambda': ['us-east-1', 'eu-central-2'], 'Amazon S3': ['us-east-1', 'eu-central-2'], 'AWS New Thing': ['us-east-1'] }),
  );
  assert.match(notes, /### New regions\n\n- eu-central-2 · Europe \(Zurich\)/);
  assert.match(notes, /### New services\n\n- \*\*AWS New Thing\*\* in 1 region\n/);
  assert.match(notes, /\*\*AWS Lambda\*\*: eu-central-2/);
  assert.match(notes, /\*\*3 services\*\* in \*\*2 regions\*\* \(before: 2 services in 1 region\)/);
});

test('lists removed services and regions a service left', () => {
  const notes = changelog(
    data({ 'AWS Lambda': ['us-east-1', 'us-west-2'], 'AWS Old Thing': ['us-east-1'] }),
    data({ 'AWS Lambda': ['us-east-1'] }),
  );
  assert.match(notes, /### Removed regions\n\n- us-west-2/);
  assert.match(notes, /### Removed services\n\n- \*\*AWS Old Thing\*\*/);
  assert.match(notes, /### Services no longer listed in some regions\n\n- \*\*AWS Lambda\*\*: us-west-2/);
});

test('duplicate regions in old data are not reported as changes', () => {
  const notes = changelog(
    data({ 'AWS Lambda': ['us-east-1', 'us-east-1'] }),
    data({ 'AWS Lambda': ['us-east-1'] }),
  );
  assert.match(notes, /No availability changes/);
});

test('reports AWS China changes in their own sections', () => {
  const same = data({ 'AWS Lambda': ['us-east-1'] });
  const notes = changelog(same, same,
    { services: { 'Amazon S3': ['cn-north-1'] } },
    { services: { 'Amazon S3': ['cn-north-1', 'cn-northwest-1'], 'Amazon Glacier': ['cn-north-1'] } });
  assert.match(notes, /### AWS China: New services\n\n- \*\*Amazon Glacier\*\* in 1 region/);
  assert.match(notes, /### AWS China: Services available in more regions\n\n- \*\*Amazon S3\*\*: cn-northwest-1/);
});
