(function() {
  "use strict";

  angular
    .module("myFirstApp", [])

    // $scope is reserved keyword for passing data in angular
    //for passing data between view and view model

    //using arrow function

    .controller("MyFirstController", $scope => {
      //variabel
      $scope.name = "jack";
      //function
      $scope.sayHello = () => "Hello nikunj";
    });
})();
