'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:SmsRejectingsenderCtrl
 * @description
 * # SmsRejectingsenderCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('SmsRejectingsenderCtrl', function ($scope, $rootScope, $http, ModalService, ConstantsVAS, httpService, pendingRequests) {
    $rootScope.activePage = "sms_rejectingsender";


    pendingRequests.cancelAll();

    /*make the loading of querry cancelable on rout change or on click */

    $rootScope.requests = [];
    $rootScope.$watch(function () {
      return pendingRequests.get();
    }, function (pending) {
      $rootScope.requests = pending;
    });
    $rootScope.cancelAll = function () {
      pendingRequests.cancelAll();
      $scope.showloader = false;
    };
    /* * * * * * * * * * * * * * * * * * */

    /*define loading spinner and make hidden*/
    $scope.showloader = false;
    $scope.sendData = function () {
      var msisdn = $scope.msisdn;
      var start = $scope.start;
      var end = $scope.end;

      /*make loading spinner visible when data is loading*/
      $scope.showloader = true;

      httpService.get(ConstantsVAS.urlPrefixVas + '/vta_vas/sms/error/source/374' + msisdn + '/' + start + '/' + end).then(function (res) {
        //$log.info('Modal dismissed at: ' + new Date());
        $scope.getData = res.data;

        /*make loading spinner hidden after then data is loaded*/
        $scope.showloader = false;

        console.log($scope.getData);
      }, function (err) {
        console.log(err);
      });
    };

  });
