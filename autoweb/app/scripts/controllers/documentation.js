'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:DocumentationCtrl
 * @description
 * # DocumentationCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('DocumentationCtrl', function ($rootScope){

  /*to make sidebar section active in every section */
  $rootScope.activePage = "Documentation";
  });
