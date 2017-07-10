'use strict'

require('../app.module');
require('./home/home.module');
require('./dapps/dapps.module');
require('./dapp-catalog/dapp-catalog.module');
require('./profile/profile.module')

module.exports = angular.module('dappstackApp.components', [
    'dappstackApp.components.home',
    'dappstackApp.components.dapps',
    'dappstackApp.components.profile',
    'dappstackApp.components.dappCatalog'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);