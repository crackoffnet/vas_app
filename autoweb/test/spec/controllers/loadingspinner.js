'use strict';

describe('Controller: LoadingspinnerCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var LoadingspinnerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoadingspinnerCtrl = $controller('LoadingspinnerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoadingspinnerCtrl.awesomeThings.length).toBe(3);
  });
});
