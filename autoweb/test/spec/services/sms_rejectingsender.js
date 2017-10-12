'use strict';

describe('Service: smsRejectingsender', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var smsRejectingsender;
  beforeEach(inject(function (_smsRejectingsender_) {
    smsRejectingsender = _smsRejectingsender_;
  }));

  it('should do something', function () {
    expect(!!smsRejectingsender).toBe(true);
  });

});
