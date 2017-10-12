'use strict';

describe('Controller: SmsRejectingsenderCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var SmsRejectingsenderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SmsRejectingsenderCtrl = $controller('SmsRejectingsenderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SmsRejectingsenderCtrl.awesomeThings.length).toBe(3);
  });
});
