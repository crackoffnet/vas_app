'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    '720kb.datepicker',

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/balance.html',
        controller: 'BalanceCtrl',
        controllerAs: 'balance'
      })
      .when('/balance', {
        templateUrl: 'views/balance.html',
        controller: 'BalanceCtrl',
        controllerAs: 'balance'
      })
      .when('/ussd', {
        templateUrl: 'views/ussd.html',
        controller: 'UssdvmenuCtrl',
        controllerAs: 'ussd'
      })
      .when('/smssending', {
        templateUrl: 'views/smssending.html',
        controller: 'SmssendingCtrl',
        controllerAs: 'smssending'
      })
      .when('/smsdelivery', {
        templateUrl: 'views/smsdelivery.html',
        controller: 'SmsdeliveryCtrl',
        controllerAs: 'smsdelivery'
      })
      .when('/sms_rejectingsender', {
        templateUrl: 'views/sms_rejectingsender.html',
        controller: 'SmsRejectingsenderCtrl',
        controllerAs: 'sms_rejectingsender'
      })
      .when('/sms_rejectingreceiver', {
        templateUrl: 'views/sms_rejectingreceiver.html',
        controller: 'SmsRejectingreceiverCtrl',
        controllerAs: 'sms_rejectingreceiver'
      })
      .when('/documentation', {
        templateUrl: 'views/documentation.html',
        controller: 'DocumentationCtrl',
        controllerAs: 'documentation'
      })
      .when('/last_result_codes', {
        templateUrl: 'views/last_result_codes.html',
        controllerAs: 'last_result_codes'
      })
      .when('/sms_error_list', {
        templateUrl: 'views/sms_error_list.html',
        controllerAs: 'sms_error_list'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, SidebarActive) {
    $rootScope.activePage = SidebarActive.getActive();


  })
  .run(function ($rootScope, ModalService) {

  })

