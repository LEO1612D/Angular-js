(() => {
  "use strict";

  const CounterController = $scope => {
    //COUNTER VARIABLES
    $scope.onceCounter = 0;
    $scope.incCounter = 0;

    //FUNCTION TO WATCH
    $scope.showNumberOfWatchers = () =>
      console.log("# watchers", $scope.$$watchersCount);

    //FUNCTIONS TO CHANGE
    $scope.countOnce = () => ($scope.onceCounter = 1);

    $scope.incOnce = () => $scope.incCounter++;

    //DIGEST LOOP:
    $scope.$watch(() => console.log("Digest loop fired !"));

    // WATCHERS
    // $scope.$watch("onceCounter", (newValue, oldValue) => {
    //   console.log("once old value", oldValue);
    //   console.log("once old value", newValue);
    // });

    // $scope.$watch("incCounter", (newValue, oldValue) => {
    //   console.log("Increment old value", oldValue);
    //   console.log("Increment old value", newValue);
    // });
  };

  angular
    .module("CounterApp", [])
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope"];
})();
