(() => {
  "use strict";
  const DIController = ($scope, $filter, $injector) => {
    $scope.name = "Nikunj";
    $scope.upper = () => {
      const upCase = $filter("uppercase");
      $scope.name = upCase($scope.name);
    };

    //System bind and instantiate functions
    console.log($injector.annotate(DIController));
  };

  const Ann = (name, job, blah) => "blah";

  console.log(Ann);

  angular.module("DIApp", []).controller("DIController", DIController);
})();

// ANYTHING IN ANGULAR WITH $ SIGN REFERS TO SERVICE
