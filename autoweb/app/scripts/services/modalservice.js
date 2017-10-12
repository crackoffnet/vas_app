'use strict';

/**
 * @ngdoc service
 * @name shopFrontApp.ModalService
 * @description
 * # ModalService
 * Factory in the shopFrontApp.
 */
angular.module('testApp')
  .factory('ModalService', function($uibModal,$uibModalStack) {

    return {
      trigger: function(template,controller) {
        var modalInstance = $uibModal.open({
          templateUrl: template,
          controller: controller,
          size: 'lg'
        });
        modalInstance.result.then(function (selectedItem) {
          //$ctrl.selected = selectedItem;
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

        return modalInstance;
      },
      close: function(reason) {
        $uibModalStack.dismissAll(reason);
      }
    };
  });
