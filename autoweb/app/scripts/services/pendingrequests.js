'use strict';

/**
 * @ngdoc service
 * @name testApp.pendingRequests
 * @description
 * # pendingRequests
 * Service in the testApp.
 */
angular.module('testApp')
  .service('pendingRequests',function() {
    var pending = [];
    this.get = function() {
      return pending;
    };
    this.add = function(request) {
      pending.push(request);
    };
    this.remove = function(request) {
      pending = _.filter(pending, function(p) {
        return p.url !== request;
      });
    };
    this.cancelAll = function() {
      angular.forEach(pending, function(p) {
        p.canceller.resolve();
      });
      pending.length = 0;
    };
  });
