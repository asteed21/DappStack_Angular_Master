'use strict'

require('./dapp-results-panel/dapp-results-panel.module');
require('./dapp-search-panel/dapp-search-panel.module');

module.exports = angular.module('dappstackApp.components.dappCatalog', [
    'dappstackApp.components.dappCatalog.dappResultsPanel',
    'dappstackApp.components.dappCatalog.dappSearchPanel'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);