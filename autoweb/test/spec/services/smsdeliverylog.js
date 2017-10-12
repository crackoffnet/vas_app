'use strict';

describe('Service: smsdeliverylog', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var smsdeliverylog;
  beforeEach(inject(function (_smsdeliverylog_) {
    smsdeliverylog = _smsdeliverylog_;
  }));

  it('should do something', function () {
    expect(!!smsdeliverylog).toBe(true);
  });

});
