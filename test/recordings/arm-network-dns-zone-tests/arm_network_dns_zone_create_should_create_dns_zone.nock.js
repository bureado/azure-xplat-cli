// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-dns-zone?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-dns-zone' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '9492975e-0fb8-42f5-97fc-9beb12940592',
  'x-ms-correlation-request-id': '9492975e-0fb8-42f5-97fc-9beb12940592',
  'x-ms-routing-request-id': 'WESTEUROPE:20160224T090744Z:9492975e-0fb8-42f5-97fc-9beb12940592',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 Feb 2016 09:07:43 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-dns-zone?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-dns-zone' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '9492975e-0fb8-42f5-97fc-9beb12940592',
  'x-ms-correlation-request-id': '9492975e-0fb8-42f5-97fc-9beb12940592',
  'x-ms-routing-request-id': 'WESTEUROPE:20160224T090744Z:9492975e-0fb8-42f5-97fc-9beb12940592',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 Feb 2016 09:07:43 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-dns-zone?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone\",\"name\":\"xplat-test-dns-zone\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '24fd5987-b283-423d-81a1-7103848fb765',
  'x-ms-correlation-request-id': '24fd5987-b283-423d-81a1-7103848fb765',
  'x-ms-routing-request-id': 'WESTEUROPE:20160224T090748Z:24fd5987-b283-423d-81a1-7103848fb765',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 Feb 2016 09:07:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-dns-zone?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone\",\"name\":\"xplat-test-dns-zone\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '24fd5987-b283-423d-81a1-7103848fb765',
  'x-ms-correlation-request-id': '24fd5987-b283-423d-81a1-7103848fb765',
  'x-ms-routing-request-id': 'WESTEUROPE:20160224T090748Z:24fd5987-b283-423d-81a1-7103848fb765',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 Feb 2016 09:07:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"3dba5074-3653-4375-bab4-88f0a3064f23\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{}}", { 'cache-control': 'private',
  'content-length': '329',
  'content-type': 'application/json; charset=utf-8',
  etag: '3dba5074-3653-4375-bab4-88f0a3064f23',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '4c8e279a-4351-466a-bde8-ef29525a988c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7105b3e0-a3ef-4693-8474-75edf92529fa',
  'x-ms-routing-request-id': 'WESTEUROPE:20160224T090800Z:7105b3e0-a3ef-4693-8474-75edf92529fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 Feb 2016 09:07:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"3dba5074-3653-4375-bab4-88f0a3064f23\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{}}", { 'cache-control': 'private',
  'content-length': '329',
  'content-type': 'application/json; charset=utf-8',
  etag: '3dba5074-3653-4375-bab4-88f0a3064f23',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '4c8e279a-4351-466a-bde8-ef29525a988c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7105b3e0-a3ef-4693-8474-75edf92529fa',
  'x-ms-routing-request-id': 'WESTEUROPE:20160224T090800Z:7105b3e0-a3ef-4693-8474-75edf92529fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 Feb 2016 09:07:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"3dba5074-3653-4375-bab4-88f0a3064f23\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  etag: '3dba5074-3653-4375-bab4-88f0a3064f23',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '747fe984-102e-46f7-b20f-bec764d3a470',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '243ec310-4430-445e-8089-1eecd906e638',
  'x-ms-routing-request-id': 'WESTEUROPE:20160224T090800Z:243ec310-4430-445e-8089-1eecd906e638',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 Feb 2016 09:08:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"3dba5074-3653-4375-bab4-88f0a3064f23\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  etag: '3dba5074-3653-4375-bab4-88f0a3064f23',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '747fe984-102e-46f7-b20f-bec764d3a470',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '243ec310-4430-445e-8089-1eecd906e638',
  'x-ms-routing-request-id': 'WESTEUROPE:20160224T090800Z:243ec310-4430-445e-8089-1eecd906e638',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 Feb 2016 09:08:00 GMT',
  connection: 'close' });
 return result; }]];