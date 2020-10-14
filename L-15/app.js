(() => {
  "use strict";
  const shoppingList1 = ["milk", "donut", "cookies", "biscuits"];
  const shoppingList2 = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donut",
      quantity: "1"
    },
    {
      name: "Cookies",
      quantity: "5"
    },
    {
      name: "Biscuits",
      quantity: "7"
    },
    {
      name: "Parle",
      quantity: "2"
    },
    {
      name: "Oreo",
      quantity: "6"
    },
    {
      name: "Cheez",
      quantity: "3"
    }
  ];

  const ShoppingListController = $scope => {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addToList = () => {
      const newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };

      $scope.shoppingList2.push(newItem);
    };
  };

  ShoppingListController.$inject = ["$scope"];
  angular
    .module("ShoppingListApp", [])
    .controller("ShoppingListController", ShoppingListController);
})();
