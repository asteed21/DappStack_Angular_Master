'use strict'

require('./dapp-about/dapp-about.module');
require('./dapp-discussion/dapp-discussion.module');

module.exports = angular.module('dappstackApp.components.dapps.dappDialog', [
    'dappstackApp.components.dapps.dappDialog.dappAbout',
    'dappstackApp.components.dapps.dappDialog.dappDiscussion'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);