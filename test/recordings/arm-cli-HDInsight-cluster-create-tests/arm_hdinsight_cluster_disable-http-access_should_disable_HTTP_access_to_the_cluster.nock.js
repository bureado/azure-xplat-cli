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
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/operationresults/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '3469f530-a4e4-4b22-b233-2421b3056a58',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '00453f10-46c7-4344-a5e4-40021283fafc',
  'x-ms-routing-request-id': 'WESTUS:20160427T202022Z:00453f10-46c7-4344-a5e4-40021283fafc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:20:21 GMT',
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
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/operationresults/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '3469f530-a4e4-4b22-b233-2421b3056a58',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '00453f10-46c7-4344-a5e4-40021283fafc',
  'x-ms-routing-request-id': 'WESTUS:20160427T202022Z:00453f10-46c7-4344-a5e4-40021283fafc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:20:21 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '390707c1-e603-4b30-a72a-4e739d3facd8',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '4da22219-58e9-4ee0-8078-a74c367a6456',
  'x-ms-routing-request-id': 'WESTUS:20160427T202123Z:4da22219-58e9-4ee0-8078-a74c367a6456',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:21:23 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '390707c1-e603-4b30-a72a-4e739d3facd8',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '4da22219-58e9-4ee0-8078-a74c367a6456',
  'x-ms-routing-request-id': 'WESTUS:20160427T202123Z:4da22219-58e9-4ee0-8078-a74c367a6456',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:21:23 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f169bad-a50e-44b9-a91d-546d142df93d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14840',
  'x-ms-correlation-request-id': 'fe3e9620-2453-4349-ad62-f41fe55afe16',
  'x-ms-routing-request-id': 'WESTUS:20160427T202224Z:fe3e9620-2453-4349-ad62-f41fe55afe16',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:22:23 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f169bad-a50e-44b9-a91d-546d142df93d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14840',
  'x-ms-correlation-request-id': 'fe3e9620-2453-4349-ad62-f41fe55afe16',
  'x-ms-routing-request-id': 'WESTUS:20160427T202224Z:fe3e9620-2453-4349-ad62-f41fe55afe16',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:22:23 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f1ca6bec-2690-4a18-b407-ee7a844c5af6',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14863',
  'x-ms-correlation-request-id': 'fa07330a-2c64-4752-b698-0a1601494cee',
  'x-ms-routing-request-id': 'WESTUS:20160427T202324Z:fa07330a-2c64-4752-b698-0a1601494cee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:23:24 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f1ca6bec-2690-4a18-b407-ee7a844c5af6',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14863',
  'x-ms-correlation-request-id': 'fa07330a-2c64-4752-b698-0a1601494cee',
  'x-ms-routing-request-id': 'WESTUS:20160427T202324Z:fa07330a-2c64-4752-b698-0a1601494cee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:23:24 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '43d04bef-bead-43eb-a117-eaafc2e481c6',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14857',
  'x-ms-correlation-request-id': 'ef6af5a2-9fe5-4c8b-9eda-95b6af89886f',
  'x-ms-routing-request-id': 'WESTUS:20160427T202425Z:ef6af5a2-9fe5-4c8b-9eda-95b6af89886f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:24:24 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '43d04bef-bead-43eb-a117-eaafc2e481c6',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14857',
  'x-ms-correlation-request-id': 'ef6af5a2-9fe5-4c8b-9eda-95b6af89886f',
  'x-ms-routing-request-id': 'WESTUS:20160427T202425Z:ef6af5a2-9fe5-4c8b-9eda-95b6af89886f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:24:24 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2423511b-6b82-4033-be3c-5dc5e1f10582',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14881',
  'x-ms-correlation-request-id': '55bbb424-8115-4237-b9c4-3c8519adaafd',
  'x-ms-routing-request-id': 'WESTUS:20160427T202526Z:55bbb424-8115-4237-b9c4-3c8519adaafd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:25:26 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2423511b-6b82-4033-be3c-5dc5e1f10582',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14881',
  'x-ms-correlation-request-id': '55bbb424-8115-4237-b9c4-3c8519adaafd',
  'x-ms-routing-request-id': 'WESTUS:20160427T202526Z:55bbb424-8115-4237-b9c4-3c8519adaafd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:25:26 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c0634402-0691-436f-8012-60e886d6d1cf',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': '408c869d-1608-461b-a60d-78539688515e',
  'x-ms-routing-request-id': 'WESTUS:20160427T202627Z:408c869d-1608-461b-a60d-78539688515e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:26:26 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate195/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate378/configurations/gateway/azureasyncoperations/2e7ec86c-8b09-44b8-a55e-0753874664d1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c0634402-0691-436f-8012-60e886d6d1cf',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': '408c869d-1608-461b-a60d-78539688515e',
  'x-ms-routing-request-id': 'WESTUS:20160427T202627Z:408c869d-1608-461b-a60d-78539688515e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Apr 2016 20:26:26 GMT',
  connection: 'close' });
 return result; }]];