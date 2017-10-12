'use strict';

describe('Controller: SmsdeliveryCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var SmsdeliveryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SmsdeliveryCtrl = $controller('SmsdeliveryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SmsdeliveryCtrl.awesomeThings.length).toBe(3);
  });
});
