'use strict';

/**
 * @ngdoc service
 * @name testApp.httpService
 * @description
 * # httpService
 * Service in the testApp.
 */
angular.module('testApp')
  .service('httpService',  ['$http', '$q', 'pendingRequests', function($http, $q, pendingRequests) {
    this.get = function(url) {
      var canceller = $q.defer();
      pendingRequests.add({
        url: url,
        canceller: canceller
      });
      //Request gets cancelled if the timeout-promise is resolved
      var requestPromise = $http.get(url, { timeout: canceller.promise });
      //Once a request has failed or succeeded, remove it from the pending list
      requestPromise.finally(function() {
        pendingRequests.remove(url);
      });
      return requestPromise;
    }
  }]);
