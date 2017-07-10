'use strict'

require('./nav-bar/nav-bar.module');
require('./footer/footer.module');
require('./search/search.module');
require('./auth/auth.module')

module.exports = angular.module('dappstackApp.common', [
    'dappstackApp.common.navBar',
    'dappstackApp.common.footer',
    'dappstackApp.common.auth',
    'dappstackApp.common.search'
]);

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);