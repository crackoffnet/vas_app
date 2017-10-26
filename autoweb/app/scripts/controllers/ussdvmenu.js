'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:UssdvmenuCtrl
 * @description
 * # UssdvmenuCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('UssdvmenuCtrl', function ($scope, $rootScope, $http, ModalService, ConstantsBCC, pendingRequests,httpService) {
    $rootScope.activePage = "ussd";

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

      httpService.get(ConstantsBCC.urlPrefixBcc + '/vta_vas/vmenu/' + msisdn + '/' + start + '/' + end).then(function (res) {
        //$log.info('Modal dismissed at: ' + new Date());
        $scope.getData = res.data;

        /*make loading spinner hidden after then data is loaded*/
        $scope.showloader = false;

        console.log($scope.getData);
      }, function (err) {
        console.log(err);
      });
    };

    $scope.selected = [];

    $scope.toggleSelection = function (item) {
      var existed = false;
      for (var i = 0; i < $scope.selected.length; i++) {
        if ($scope.selected[i].key == item.key) {
          existed = true;
          item.val.selected = false;
          $scope.selected.splice(i, 1);
          break;
        }
      }
      if (!existed) {
        $scope.selected.push(item);
      }
      console.log($scope.selected);
    };

    $scope.showModal = false;
    $scope.showLogs = function (size, parentSelector) {
      $('#myModal').modal();
    };
  });



