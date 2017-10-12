'use strict';

describe('Controller: LoadiingspinnerCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var LoadiingspinnerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoadiingspinnerCtrl = $controller('LoadiingspinnerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoadiingspinnerCtrl.awesomeThings.length).toBe(3);
  });
});
