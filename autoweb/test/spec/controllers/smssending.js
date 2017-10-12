'use strict';

describe('Controller: SmssendingCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var SmssendingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SmssendingCtrl = $controller('SmssendingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SmssendingCtrl.awesomeThings.length).toBe(3);
  });
});
