'use strict'

require('../auth/login/login.module');

module.exports = angular.module('dappstackApp.common.navBar', [
    'dappstackApp.common.auth.login',
    'dappstackApp.common.auth'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);