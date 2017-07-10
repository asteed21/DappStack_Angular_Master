'use strict'

require('./login/login.module');
require('./register/register.module');

module.exports = angular.module('dappstackApp.common.auth', [
    'dappstackApp.common.auth.login',
    'dappstackApp.common.auth.register'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);