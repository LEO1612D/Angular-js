(() => {
  "use strict";

  //SERVICE_________________________________________________________________
  function ShoppingListCheckOffService() {
    let service = this;

    const items = [
      {
        name: "Paint Brush",
        quantity: 12
      },
      {
        name: "Canvas",
        quantity: 1
      },
      {
        name: "Colors",
        quantity: 24
      },
      {
        name: "Drawing Book",
        quantity: 4
      },
      {
        name: "Pencils",
        quantity: 8
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
