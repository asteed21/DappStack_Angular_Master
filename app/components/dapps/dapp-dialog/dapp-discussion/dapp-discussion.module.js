'use strict'

require('./comments/comments.module')

module.exports = angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion', [
    'dappstackApp.components.dapps.dappDialog.dappDiscussion.comments'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);