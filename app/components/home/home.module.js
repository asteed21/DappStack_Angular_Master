'use strict'

require('../dapps/dapps.module')

module.exports = angular.module('dappstackApp.components.home', [
    'dappstackApp.components.dapps',
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);