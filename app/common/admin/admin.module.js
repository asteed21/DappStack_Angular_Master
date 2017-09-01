'use strict'

require('./manage-dapps/manage-dapps.module');
require('./add-dapp/add-dapp.module');
require('./manage-users/manage-users.module');

module.exorts = angular.module('dappstackApp.common.admin', [
    'dappstackApp.common.admin.manageDapps',
    'dappstackApp.common.admin.addDapp',
    'dappstackApp.common.admin.manageUsers'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);