import LoginPage from "../pages/swaglabs/login-page"
import InventoryPage from "../pages/swaglabs/inventory-page"

describe("Swaglabs login", function () {
  before(async () => {
    await browser.setWindowSize(1040, 768)
    await LoginPage.open()
    // await browser.saveScreenshot("1.png")
  })

  it("Fill form, click login, check inventory list", async function () {
    await LoginPage.fillLoginForm("standard_user", "secret_sauce")
    await LoginPage.clickLoginBtn()

    await expect(InventoryPage.inventoryListConteiner).toBeExisting()
  })
})
