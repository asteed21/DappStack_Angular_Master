'use strict'

module.exports = angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion.comments.comment', []).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);