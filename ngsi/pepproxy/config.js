'use strict';

var config = {};

// Used only if https is disabled
//config.pep_port = 80;
config.pep_port = 8081;

// Set this var to undefined if you don't want the server to listen on HTTPS
config.https = {
    enabled: false,
    cert_file: 'cert/cert.crt',
    key_file: 'cert/key.key',
    port: 443
};

//config.account_host = 'https://account.lab.fiware.org';
config.account_host = 'http://horizon:8000';

//config.keystone_host = 'cloud.lab.fiware.org';
//config.keystone_port = 4731;
config.keystone_host = 'keyrock';
config.keystone_port = 5000;


//config.app_host = 'www.google.es';
//config.app_port = '80';
config.app_host = 'orion';
config.app_port = '1026';
// Use true if the app server listens in https
config.app_ssl = false;

// Credentials obtained when registering PEP Proxy in Account Portal
//Username
// pep_proxy_6f8182d068574be0ac5121b41430123f

// Password
// 5d7a556f7e454fb58763c6381b9a28bd
config.username = 'pep_proxy_6f8182d068574be0ac5121b41430123f';
config.password = '5d7a556f7e454fb58763c6381b9a28bd';

// in seconds
config.cache_time = 300;

// if enabled PEP checks permissions with AuthZForce GE.
// only compatible with oauth2 tokens engine
//
// you can use custom policy checks by including programatic scripts
// in policies folder. An script template is included there
config.azf = {
	enabled: false,
	protocol: 'https',
    host: 'authzforce',
    port: 8080,
    custom_policy: undefined // use undefined to default policy checks (HTTP verb + path).
};

// list of paths that will not check authentication/authorization
// example: ['/public/*', '/static/css/']
config.public_paths = [];

// options: oauth2/keystone
config.tokens_engine = 'oauth2';

config.magic_key = undefined;

module.exports = config;
