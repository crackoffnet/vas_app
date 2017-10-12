'use strict';

describe('Controller: SmsRejectingreceiverCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var SmsRejectingreceiverCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SmsRejectingreceiverCtrl = $controller('SmsRejectingreceiverCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SmsRejectingreceiverCtrl.awesomeThings.length).toBe(3);
  });
});
