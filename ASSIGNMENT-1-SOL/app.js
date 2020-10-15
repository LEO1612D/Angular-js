(() => {
  "use strict";

  const LunchCheckController = $scope => {
    $scope.message = "";
    $scope.items = "";
    $scope.color = "normal";

    $scope.check = () => {
      if ($scope.items != "") {
        const itemsArray = $scope.items.split(",");

        if (itemsArray.length > 3) {
          $scope.message = "Too Much !!!";
          $scope.color = "warning";
        } else {
          $scope.message = "Enjoy!";
          $scope.color = "enjoy";
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
