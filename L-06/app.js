(() => {
  "use strict";
  angular
    .module("NameCalculator", [])

    .controller("NameCC", $scope => {
      $scope.name = "";
      $scope.total = 0;

      $scope.dispnum = () => {
        const totalNameValue = calcuateNumeric($scope.name);
        $scope.total = totalNameValue;
      };

      const calcuateNumeric = string => {
        let totalStringValue = 0;
        for (let i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }

        return totalStringValue;
      };
    });
})();
