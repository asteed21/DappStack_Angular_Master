'use strict'

module.exports = angular.module('dappstackApp.common.search', []).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);