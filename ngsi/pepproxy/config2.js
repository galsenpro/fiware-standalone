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
config.account_host = 'http://192.168.99.104:8000';

//config.keystone_host = 'cloud.lab.fiware.org';
//config.keystone_port = 4731;
config.keystone_host = '192.168.99.104';
config.keystone_port = 5000;


//config.app_host = 'www.google.es';
//config.app_port = '80';
config.app_host = '192.168.99.104';
config.app_port = '4041';
// Use true if the app server listens in https
config.app_ssl = false;

// Credentials obtained when registering PEP Proxy in Account Portal
config.username = 'pep_proxy_a770ed3283014c028d9fa9eef21914f2';
config.password = 'cb16b672e40645d99db7cbebf9be6315';

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
    host: 'auth.lab.fiware.org',
    port: 6019,
    custom_policy: undefined // use undefined to default policy checks (HTTP verb + path).
};

// list of paths that will not check authentication/authorization
// example: ['/public/*', '/static/css/']
config.public_paths = [];

// options: oauth2/keystone
config.tokens_engine = 'oauth2';

config.magic_key = undefined;

module.exports = config;
