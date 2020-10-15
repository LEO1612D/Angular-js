(() => {
  "use strict";

  const LunchCheckController = $scope => {
    $scope.message = "";
    $scope.items = "";

    $scope.check = () => {
      if ($scope.items != "") {
        const itemsArray = $scope.items.split(",");

        if (itemsArray.length > 3) {
          $scope.message = "Too Much !!!";
        } else {
          $scope.message = "Enjoy!";
        }
      } else {
        $scope.message = "Please enter data first";
      }
    };
  };
  LunchCheckController.$inject = ["$scope"];
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
})();
