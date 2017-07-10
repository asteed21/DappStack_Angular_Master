'use strict'

module.exports = angular.module('dappstackApp.common.auth.register', []).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);