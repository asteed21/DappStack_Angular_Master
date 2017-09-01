'use strict'

require('./edit-dapp/edit-dapp.module');

module.exorts = angular.module('dappstackApp.common.admin.manageDapps', [
    'dappstackApp.common.admin.manageDapps.editDapp'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);