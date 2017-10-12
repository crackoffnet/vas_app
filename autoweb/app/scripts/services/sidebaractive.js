'use strict';

/**
 * @ngdoc service
 * @name testApp.SidebarActive
 * @description
 * # SidebarActive
 * Factory in the testApp.
 */
angular.module('testApp')
  .factory('SidebarActive', function () {

    var _active = "Home";

    // Public API here
    return {
      getActive: function () {
        return _active;
      },
      setActive: function (activeTitle) {
        _active = activeTitle;
      }
    };
  });
