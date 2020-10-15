(() => {
  "use strict";

  //NOTE:
  // YOU CAN'T USE ARROW FUNCTION EVERYWHERE IN ANGULAR JS , WHEN FUNCTION IS USED AS CLASS
  // AS IN THIS STATEMENT APPEARS

  //FACTORY________________________________________________________________

  function ShoppingListFactory() {
    let factory = maxItems => new ShoppingListService(maxItems);
    return factory;
  }

  //SERVICE_________________________________________________________________
  function ShoppingListService(maxItems) {
    let service = this;

    const items = [];

    // ADD ITEMS
    service.addItem = (itemName, quantity) => {
      if (
        maxItems === undefined ||
        (maxItems != undefined && items.length < maxItems)
      ) {
        const item = {
          name: itemName,
          quantity: quantity
        };
        items.push(item);
      } else {
        throw new Error(`Max Items ${maxItems}`);
      }
    };

    // GET ITEMS
    service.getItems = () => items;

    // REMOVE ITEM
    service.removeItem = itemIndex => items.splice(itemIndex, 1);
  }

  //   CONTROLLER - 1 ___________________________________________________________________
  function ShoppingListController1(ShoppingListFactory) {
    let list1 = this;

    let shoppingList = ShoppingListFactory();

    list1.items = shoppingList.getItems();

    list1.itemName = "";
    list1.itemQuantity = "";

    list1.addItem = () =>
      shoppingList.addItem(list1.itemName, list1.itemQuantity);

    list1.removeItem = () => shoppingList.removeItem(itemIndex);
  }

  ShoppingListController1.$inject = ["ShoppingListFactory"];

  //   CONTROLLER - 2 ____________________________________________________________

  function ShoppingListController2(ShoppingListFactory) {
    let list2 = this;

    let shoppingList = ShoppingListFactory(3);

    list2.items = shoppingList.getItems();

    list2.itemName = "";
    list2.itemQuantity = "";

    list2.addItem = () => {
      try {
        shoppingList.addItem(list2.itemName, list2.itemQuantity);
      } catch (error) {
        list2.errorMessage = error.message;
      }
    };

    list2.removeItem = () => shoppingList.removeItem(itemIndex);
  }

  ShoppingListController2.$inject = ["ShoppingListFactory"];

  //ANGULAR_____________________________________________________________________________
  angular
    .module("ControllerAsApp", [])
    .controller("ShoppingListController1", ShoppingListController1)
    .controller("ShoppingListController2", ShoppingListController2)
    .factory("ShoppingListFactory", ShoppingListFactory);
})();
