'use strict';

describe('Service: smsSendingLog', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var smsSendingLog;
  beforeEach(inject(function (_smsSendingLog_) {
    smsSendingLog = _smsSendingLog_;
  }));

  it('should do something', function () {
    expect(!!smsSendingLog).toBe(true);
  });

});
