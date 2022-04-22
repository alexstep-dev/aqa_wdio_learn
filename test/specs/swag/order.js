import { faker } from "@faker-js/faker"

import LoginPage from "../../pages/swaglabs/login-page"
import InventoryPage from "../../pages/swaglabs/inventory-page"

describe("Products ordering flow", function () {
  before(async function () {
    await browser.setWindowSize(1040, 768)
    await LoginPage.open()
  })

  it("Login and buy 2 items", async function () {
    await LoginPage.fillLoginForm()
    await LoginPage.clickLoginBtn()
    const firtst2Items = await InventoryPage.inventoryItems.slice(0, 2)
    for (const item of firtst2Items) {
      await item.$("button=Add to cart").click()
    }
    await $("#shopping_cart_container").click()
    await $("#checkout").click()
    const checkOutForm = $("#checkout_info_container form")
    await checkOutForm.$("#first-name").setValue(faker.name.firstName())
    await checkOutForm.$("#last-name").setValue(faker.name.lastName())
    await checkOutForm.$("#postal-code").setValue(faker.address.zipCode())
    await $("#continue").click()
    await $("#finish").click()
    await expect($(".complete-header")).toHaveText("THANK YOU FOR YOUR ORDER")
  })
})
