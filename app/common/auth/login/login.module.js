'use strict'

module.exorts = angular.module('dappstackApp.common.auth.login', []).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);