// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/operationresults/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview',
  'x-ms-request-id': 'f200a0c4-c68a-4ecd-9d6c-4251180b1f76',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '65d049f4-47fa-47aa-b27c-7050d9d875e1',
  'x-ms-routing-request-id': 'WESTUS:20160427T202630Z:65d049f4-47fa-47aa-b27c-7050d9d875e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:26:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/operationresults/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview',
  'x-ms-request-id': 'f200a0c4-c68a-4ecd-9d6c-4251180b1f76',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '65d049f4-47fa-47aa-b27c-7050d9d875e1',
  'x-ms-routing-request-id': 'WESTUS:20160427T202630Z:65d049f4-47fa-47aa-b27c-7050d9d875e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:26:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '36c0a1f2-45c8-4975-adc4-3e58d2ee5499',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '06bc2d01-226f-438a-ad25-0ea83e4da225',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T202731Z:06bc2d01-226f-438a-ad25-0ea83e4da225',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:27:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '36c0a1f2-45c8-4975-adc4-3e58d2ee5499',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '06bc2d01-226f-438a-ad25-0ea83e4da225',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T202731Z:06bc2d01-226f-438a-ad25-0ea83e4da225',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:27:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5bc4acd3-663b-4156-aa0c-0f9f580d99cb',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': '46ae254a-d07e-4bd3-8029-7c88c802dc1d',
  'x-ms-routing-request-id': 'WESTUS:20160427T202832Z:46ae254a-d07e-4bd3-8029-7c88c802dc1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:28:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5bc4acd3-663b-4156-aa0c-0f9f580d99cb',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': '46ae254a-d07e-4bd3-8029-7c88c802dc1d',
  'x-ms-routing-request-id': 'WESTUS:20160427T202832Z:46ae254a-d07e-4bd3-8029-7c88c802dc1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:28:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1921ab76-2095-4e86-a85d-f99a2ad3f937',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': 'f3b416a6-0b81-4b50-a9de-da60215ba30d',
  'x-ms-routing-request-id': 'WESTUS:20160427T202935Z:f3b416a6-0b81-4b50-a9de-da60215ba30d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:29:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1921ab76-2095-4e86-a85d-f99a2ad3f937',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': 'f3b416a6-0b81-4b50-a9de-da60215ba30d',
  'x-ms-routing-request-id': 'WESTUS:20160427T202935Z:f3b416a6-0b81-4b50-a9de-da60215ba30d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:29:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6392d5f5-b72c-4cca-8732-69401807061f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '92c295ac-b28b-49ab-8bac-52f2ea16d5ab',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T203036Z:92c295ac-b28b-49ab-8bac-52f2ea16d5ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:30:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6392d5f5-b72c-4cca-8732-69401807061f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '92c295ac-b28b-49ab-8bac-52f2ea16d5ab',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T203036Z:92c295ac-b28b-49ab-8bac-52f2ea16d5ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:30:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '519dd7ce-788e-4d58-9e38-3e810e2029fe',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14888',
  'x-ms-correlation-request-id': '98f81a8d-79db-4e3b-973b-0c617ca15519',
  'x-ms-routing-request-id': 'WESTUS:20160427T203138Z:98f81a8d-79db-4e3b-973b-0c617ca15519',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:31:38 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '519dd7ce-788e-4d58-9e38-3e810e2029fe',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14888',
  'x-ms-correlation-request-id': '98f81a8d-79db-4e3b-973b-0c617ca15519',
  'x-ms-routing-request-id': 'WESTUS:20160427T203138Z:98f81a8d-79db-4e3b-973b-0c617ca15519',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:31:38 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7a04efe1-bcc5-4741-8285-2d06e5d4bfaf',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': '8a527d03-4fac-4f3a-b7df-3e87fb6818fa',
  'x-ms-routing-request-id': 'WESTUS:20160427T203239Z:8a527d03-4fac-4f3a-b7df-3e87fb6818fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:32:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/53075b66-786b-4a43-8e1c-0266c9e55e30-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7a04efe1-bcc5-4741-8285-2d06e5d4bfaf',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': '8a527d03-4fac-4f3a-b7df-3e87fb6818fa',
  'x-ms-routing-request-id': 'WESTUS:20160427T203239Z:8a527d03-4fac-4f3a-b7df-3e87fb6818fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:32:38 GMT',
  connection: 'close' });
 return result; }]];