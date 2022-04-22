class InventoryPage {
  open() {
    return browser.url("https://www.saucedemo.com/inventory.html")
  }

  get inventoryListConteiner() {
    return $("#inventory_container")
  }

  get inventoryItems() {
    return $$(".inventory_item")
  }
}

export default new InventoryPage()