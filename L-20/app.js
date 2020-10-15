(() => {
  "use strict";

  //NOTE:
  // YOU CAN'T USE ARROW FUNCTION EVERYWHERE IN ANGULAR JS , WHEN FUNCTION IS USED AS CLASS
  // AS IN THIS STATEMENT APPEARS

  //SERVICE_________________________________________________________________
  function ShoppingListService() {
    let service = this;

    const items = [];

    // ADD ITEMS
    service.addItem = (itemName, quantity) => {
      const item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    };

    // GET ITEMS
    service.getItems = () => items;

    // REMOVE ITEM
    service.removeItem = itemIndex => items.splice(itemIndex, 1);
  }

  //   CONTROLLER___________________________________________________________________
  function ShoppingListAddController(ShoppingListService) {
    let itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = () =>
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }

  ShoppingListAddController.$inject = ["ShoppingListService"];

  function ShoppingListShowController(ShoppingListService) {
    let showList = this;
    showList.items = ShoppingListService.getItems();
    showList.removeItem = itemIndex =>
      ShoppingListService.removeItem(itemIndex);
  }

  ShoppingListShowController.$inject = ["ShoppingListService"];
  //ANGULAR_____________________________________________________________________________
  angular
    .module("ShoppingListApp", [])
    .controller("ShoppingListAddController", ShoppingListAddController)
    .controller("ShoppingListShowController", ShoppingListShowController)
    .service("ShoppingListService", ShoppingListService);
})();
