'use strict'

module.exorts = angular.module('dappstackApp.common.admin.addDapp', []).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);