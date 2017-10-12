'use strict';

describe('Service: ussdlog', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var ussdlog;
  beforeEach(inject(function (_ussdlog_) {
    ussdlog = _ussdlog_;
  }));

  it('should do something', function () {
    expect(!!ussdlog).toBe(true);
  });

});
