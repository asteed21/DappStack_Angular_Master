'use strict'

module.exorts = angular.module('dappstackApp.common.admin.manageDapps.editDapp', []).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);