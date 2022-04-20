class InventoryPage {
  open() {
    return browser.url("https://www.saucedemo.com/inventory.html")
  }

  get inventoryListConteiner() {
    return $("#inventory_container")
  }
}

export default new InventoryPage()
