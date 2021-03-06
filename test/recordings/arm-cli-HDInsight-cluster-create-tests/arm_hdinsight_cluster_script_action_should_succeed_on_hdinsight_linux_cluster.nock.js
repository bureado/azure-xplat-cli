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
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/executeScriptActions?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/executeScriptActions/operationresults/25e6a457-e1c5-4eee-ad2c-ed278f7ec024-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/executeScriptActions/azureasyncoperations/25e6a457-e1c5-4eee-ad2c-ed278f7ec024-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '794e9c4d-f4fe-4107-892b-d32e5227b243',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '86b0cc11-c3bd-4e8a-b035-5766ebf2e5bc',
  'x-ms-routing-request-id': 'WESTUS:20160518T011812Z:86b0cc11-c3bd-4e8a-b035-5766ebf2e5bc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:18:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/executeScriptActions?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/executeScriptActions/operationresults/25e6a457-e1c5-4eee-ad2c-ed278f7ec024-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/executeScriptActions/azureasyncoperations/25e6a457-e1c5-4eee-ad2c-ed278f7ec024-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '794e9c4d-f4fe-4107-892b-d32e5227b243',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '86b0cc11-c3bd-4e8a-b035-5766ebf2e5bc',
  'x-ms-routing-request-id': 'WESTUS:20160518T011812Z:86b0cc11-c3bd-4e8a-b035-5766ebf2e5bc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:18:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/executeScriptActions/azureasyncoperations/25e6a457-e1c5-4eee-ad2c-ed278f7ec024-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '18f308ac-72ab-4304-ac5f-4279f0b1cc29',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14853',
  'x-ms-correlation-request-id': 'f26ef047-e491-429a-aa11-b45fbbc13d15',
  'x-ms-routing-request-id': 'WESTUS:20160518T011913Z:f26ef047-e491-429a-aa11-b45fbbc13d15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:19:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/executeScriptActions/azureasyncoperations/25e6a457-e1c5-4eee-ad2c-ed278f7ec024-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '18f308ac-72ab-4304-ac5f-4279f0b1cc29',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14853',
  'x-ms-correlation-request-id': 'f26ef047-e491-429a-aa11-b45fbbc13d15',
  'x-ms-routing-request-id': 'WESTUS:20160518T011913Z:f26ef047-e491-429a-aa11-b45fbbc13d15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:19:12 GMT',
  connection: 'close' });
 return result; }]];