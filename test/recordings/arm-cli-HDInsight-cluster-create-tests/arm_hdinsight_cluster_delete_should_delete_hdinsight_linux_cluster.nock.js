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
  .delete('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427?api-version=2015-03-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/operationresults/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '6a47f578-6e41-433a-9f2e-fde1d2545281',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1df8e61d-7bfc-4c3b-ad29-7232cd76e94c',
  'x-ms-routing-request-id': 'WESTUS:20160427T211202Z:1df8e61d-7bfc-4c3b-ad29-7232cd76e94c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:12:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427?api-version=2015-03-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/operationresults/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '6a47f578-6e41-433a-9f2e-fde1d2545281',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1df8e61d-7bfc-4c3b-ad29-7232cd76e94c',
  'x-ms-routing-request-id': 'WESTUS:20160427T211202Z:1df8e61d-7bfc-4c3b-ad29-7232cd76e94c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:12:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '27e5cbd1-3f69-45e5-a42e-641daf7d2b9d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14861',
  'x-ms-correlation-request-id': 'eca13bff-131f-4419-9412-39542e8eb3fa',
  'x-ms-routing-request-id': 'WESTUS:20160427T211302Z:eca13bff-131f-4419-9412-39542e8eb3fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:13:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '27e5cbd1-3f69-45e5-a42e-641daf7d2b9d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14861',
  'x-ms-correlation-request-id': 'eca13bff-131f-4419-9412-39542e8eb3fa',
  'x-ms-routing-request-id': 'WESTUS:20160427T211302Z:eca13bff-131f-4419-9412-39542e8eb3fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:13:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aea097ef-88d0-4460-9838-561fcdd961e8',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14850',
  'x-ms-correlation-request-id': 'c3b11b0b-6841-486a-b2d0-5224b6d24251',
  'x-ms-routing-request-id': 'WESTUS:20160427T211403Z:c3b11b0b-6841-486a-b2d0-5224b6d24251',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aea097ef-88d0-4460-9838-561fcdd961e8',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14850',
  'x-ms-correlation-request-id': 'c3b11b0b-6841-486a-b2d0-5224b6d24251',
  'x-ms-routing-request-id': 'WESTUS:20160427T211403Z:c3b11b0b-6841-486a-b2d0-5224b6d24251',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '10e9b788-7c42-44ca-8407-ebac59ee0b89',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14848',
  'x-ms-correlation-request-id': 'db3fbc5a-0381-490d-b672-ea66cc2a88d0',
  'x-ms-routing-request-id': 'WESTUS:20160427T211504Z:db3fbc5a-0381-490d-b672-ea66cc2a88d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:15:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '10e9b788-7c42-44ca-8407-ebac59ee0b89',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14848',
  'x-ms-correlation-request-id': 'db3fbc5a-0381-490d-b672-ea66cc2a88d0',
  'x-ms-routing-request-id': 'WESTUS:20160427T211504Z:db3fbc5a-0381-490d-b672-ea66cc2a88d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:15:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '77a8c8f8-8f9c-417c-a5a1-da03e9ec67c5',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14916',
  'x-ms-correlation-request-id': '9f7d39a4-9c4e-4236-9202-ee42e6a53453',
  'x-ms-routing-request-id': 'WESTUS:20160427T211604Z:9f7d39a4-9c4e-4236-9202-ee42e6a53453',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:16:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '77a8c8f8-8f9c-417c-a5a1-da03e9ec67c5',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14916',
  'x-ms-correlation-request-id': '9f7d39a4-9c4e-4236-9202-ee42e6a53453',
  'x-ms-routing-request-id': 'WESTUS:20160427T211604Z:9f7d39a4-9c4e-4236-9202-ee42e6a53453',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:16:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5e713dfb-09d8-4828-801c-34d0775f5dc4',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14930',
  'x-ms-correlation-request-id': 'f1b80620-afaf-4f6a-876f-cac07affe9e0',
  'x-ms-routing-request-id': 'WESTUS:20160427T211705Z:f1b80620-afaf-4f6a-876f-cac07affe9e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:17:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5e713dfb-09d8-4828-801c-34d0775f5dc4',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14930',
  'x-ms-correlation-request-id': 'f1b80620-afaf-4f6a-876f-cac07affe9e0',
  'x-ms-routing-request-id': 'WESTUS:20160427T211705Z:f1b80620-afaf-4f6a-876f-cac07affe9e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:17:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f66a3b1-6b1e-4c88-b2d7-e8edf917c323',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': '5c0eb766-fffb-4796-b4f0-be51052fa450',
  'x-ms-routing-request-id': 'WESTUS:20160427T211806Z:5c0eb766-fffb-4796-b4f0-be51052fa450',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:18:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f66a3b1-6b1e-4c88-b2d7-e8edf917c323',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': '5c0eb766-fffb-4796-b4f0-be51052fa450',
  'x-ms-routing-request-id': 'WESTUS:20160427T211806Z:5c0eb766-fffb-4796-b4f0-be51052fa450',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:18:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aecb2671-c97d-408d-879d-bd7c68a5f5c7',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14832',
  'x-ms-correlation-request-id': '2e30a4b7-2a76-4baf-9c6f-c3f828242ed7',
  'x-ms-routing-request-id': 'WESTUS:20160427T211907Z:2e30a4b7-2a76-4baf-9c6f-c3f828242ed7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:19:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aecb2671-c97d-408d-879d-bd7c68a5f5c7',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14832',
  'x-ms-correlation-request-id': '2e30a4b7-2a76-4baf-9c6f-c3f828242ed7',
  'x-ms-routing-request-id': 'WESTUS:20160427T211907Z:2e30a4b7-2a76-4baf-9c6f-c3f828242ed7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:19:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '80eec60c-1d02-4965-9cff-f5fe2ab5089e',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14860',
  'x-ms-correlation-request-id': 'a05d8408-b2ac-49aa-89d9-3cdbd545778e',
  'x-ms-routing-request-id': 'WESTUS:20160427T212008Z:a05d8408-b2ac-49aa-89d9-3cdbd545778e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:20:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '80eec60c-1d02-4965-9cff-f5fe2ab5089e',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14860',
  'x-ms-correlation-request-id': 'a05d8408-b2ac-49aa-89d9-3cdbd545778e',
  'x-ms-routing-request-id': 'WESTUS:20160427T212008Z:a05d8408-b2ac-49aa-89d9-3cdbd545778e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:20:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '720e2ca2-fcb0-405f-8e7b-8114b19e141f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': '200a8035-cada-4757-834d-29cf3f3c8673',
  'x-ms-routing-request-id': 'WESTUS:20160427T212108Z:200a8035-cada-4757-834d-29cf3f3c8673',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:21:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '720e2ca2-fcb0-405f-8e7b-8114b19e141f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': '200a8035-cada-4757-834d-29cf3f3c8673',
  'x-ms-routing-request-id': 'WESTUS:20160427T212108Z:200a8035-cada-4757-834d-29cf3f3c8673',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:21:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd81e820e-132f-453f-8a71-da9d532d39ee',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14845',
  'x-ms-correlation-request-id': 'd62d483d-1c0a-43db-afa9-11a1ce079df7',
  'x-ms-routing-request-id': 'WESTUS:20160427T212209Z:d62d483d-1c0a-43db-afa9-11a1ce079df7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:22:09 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd81e820e-132f-453f-8a71-da9d532d39ee',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14845',
  'x-ms-correlation-request-id': 'd62d483d-1c0a-43db-afa9-11a1ce079df7',
  'x-ms-routing-request-id': 'WESTUS:20160427T212209Z:d62d483d-1c0a-43db-afa9-11a1ce079df7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:22:09 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7c0c3678-34e9-45ca-997a-3069ee62f919',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '9827b043-c19c-4949-bc55-6a0c0762f0a1',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T212310Z:9827b043-c19c-4949-bc55-6a0c0762f0a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:23:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7427/azureasyncoperations/98106871-7122-445b-b1a1-b1e439362e26-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7c0c3678-34e9-45ca-997a-3069ee62f919',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '9827b043-c19c-4949-bc55-6a0c0762f0a1',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T212310Z:9827b043-c19c-4949-bc55-6a0c0762f0a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 21:23:09 GMT',
  connection: 'close' });
 return result; }]];