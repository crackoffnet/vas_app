'use strict';

/**
 * @ngdoc service
 * @name testApp.Constants
 * @description
 * # Constants
 * Factory in the testApp.
 */
angular.module('testApp')
  .factory('ConstantsVAS', function () {

    return {
      urlPrefixVas: "http://localhost:8090"

    };
  })
  .factory('ConstantsBCC', function () {

    return {

      urlPrefixBcc: "http://localhost:8091"
    };
  });
