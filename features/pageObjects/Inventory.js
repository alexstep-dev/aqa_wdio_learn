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

  assertInventoryPage() {
    return expect(this.inventoryListConteiner).toBeDisplayed()
  }
}

export default new InventoryPage()
