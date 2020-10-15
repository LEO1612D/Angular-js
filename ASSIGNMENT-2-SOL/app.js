(() => {
  "use strict";

  //SERVICE_________________________________________________________________
  function ShoppingListCheckOffService() {
    let service = this;

    const items = [
      {
        name: "cookies",
        quantity: 12
      },
      {
        name: "cookies",
        quantity: 12
      },
      {
        name: "cookies",
        quantity: 12
      },
      {
        name: "cookies",
        quantity: 12
      },
      {
        name: "cookies",
        quantity: 12
      }
    ];

    const BoughtItems = [];

    // GET ITEMS
    service.getItems = () => items;

    service.getBoughtItems = () => BoughtItems;

    // REMOVE ITEM
    service.removeItem = (itemIndex, itemName, quantity) => {
      items.splice(itemIndex, 1);
      const item = {
        name: itemName,
        quantity: quantity
      };
      BoughtItems.push(item);
    };
  }

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    let Buyitem = this;

    Buyitem.items = ShoppingListCheckOffService.getItems();

    Buyitem.Bought = (itemIndex, name, quantity) =>
      ShoppingListCheckOffService.removeItem(itemIndex, name, quantity);
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    let Buyitem = this;
    Buyitem.message = "";
    Buyitem.items = ShoppingListCheckOffService.getBoughtItems();
  }
  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
})();
