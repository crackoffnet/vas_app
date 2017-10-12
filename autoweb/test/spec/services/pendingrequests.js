'use strict';

describe('Service: pendingRequests', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var pendingRequests;
  beforeEach(inject(function (_pendingRequests_) {
    pendingRequests = _pendingRequests_;
  }));

  it('should do something', function () {
    expect(!!pendingRequests).toBe(true);
  });

});
