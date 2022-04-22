import percySnapshot from "@percy/webdriverio"

describe("Percy", function () {
  it("Check form", async function () {
    await browser.url("http://localhost:3000")
    await expect(browser).toHaveTitle("React App")
    await browser.pause(5000)
    await percySnapshot("Form")
  })
})
