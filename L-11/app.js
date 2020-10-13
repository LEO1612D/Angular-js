(() => {
  "use strict";

  const MsgController = ($scope, $filter, lovesFilter) => {
    $scope.name = "nikunj";
    $scope.color = "red";

    $scope.cookieCost = 0.45;

    $scope.sayMessage = () => {
      const msg = "Nikunj likes react js and python ";
      const output = $filter("uppercase")(msg);
      return output;
    };

    $scope.sayLoves = () => {
      const msg = "Nikunj likes react js and python ";
      const lmsg = lovesFilter(msg);
      return lmsg;
    };

    $scope.choose = () => {
      $scope.color = "blue";
    };
  };

  // CUSTOM FILTER----------------------------------
  const LovesFilter = () => input => {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };

  const TruthFilter = () => (input, target, replace) => {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  };

  MsgController.$inject = ["$scope", "$filter", "lovesFilter"];
  angular
    .module("MsgApp", [])
    .controller("MsgController", MsgController)
    .filter("loves", LovesFilter)
    .filter("truth", TruthFilter);
})();
