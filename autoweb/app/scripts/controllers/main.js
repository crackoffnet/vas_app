'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($rootScope) {

    /*to make sidebar section active in every section */
    $rootScope.activePage = "Balance";
  });
