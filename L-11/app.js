(() => {
  "use strict";

  const MsgController = $scope => {
    $scope.name = "nikunj";
    $scope.color = "red";

    $scope.sayMessage = () => "Nikunj likes react js";

    $scope.choose = () => {
      $scope.color = "blue";
    };
  };

  MsgController.$inject = ["$scope"];
  angular.module("MsgApp", []).controller("MsgController", MsgController);
})();
