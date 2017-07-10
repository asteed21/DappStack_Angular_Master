'use strict'

require('./dapp-dialog/dapp-dialog.module');
require('./dapp-list-item/dapp-list-item.module');

module.exports = angular.module('dappstackApp.components.dapps', [
    'dappstackApp.components.dapps.dappDialog',
    'dappstackApp.components.dapps.dappListItem'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);