angular.module('loginModal', [])
.controller('ModalController', function ($scope, $uibModal, $log) {

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceController',
      size: size
    });

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}

})

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

.controller('ModalInstanceController', function ($scope, $uibModalInstance) {

  $scope.ok = function () {
  // get rid of this and just have the login factory
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});