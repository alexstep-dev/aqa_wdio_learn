import { join } from "path"

import UploadPage from "../pages/upload-page"

describe("Upload", function () {
  before(async () => {
    await UploadPage.setBreakPointMD()
    await UploadPage.open()
  })

  // beforeEach(async () => {
  //   // await browser.throttle("Regular3G")
  //   await browser.url("https://the-internet.herokuapp.com/upload")
  // })
  // afterEach(async function () {
  //   if (this.currentTest.title !== "Heroku upload Sunflowers") {
  //     await browser.reloadSession()
  //   }
  // })

  // after(async () => {});

  it("Get title in 3s", async function () {
    const result = await browser.executeAsync((done) => {
      setTimeout(() => {
        done(document.title)
      }, 3000)
    })

    await expect(result).toBe("React App")
  })

  it("Select file and submit the form", async function () {
    if (browser.capabilities.browserName === "firefox") {
      this.skip()
    }
    const filePath = join(__dirname, "..", "data", "Freez.jpg")
    const localFile = await browser.uploadFile(filePath)
    await browser.execute(() => {
      document.querySelector("#file").classList.remove("hidden")
    })
    await $("#file").setValue(localFile)
    await $('#upload [type="submit"]').click()

    await expect($("#success")).toHaveText("Freez.jpg")
  })

  xit("Iframe", async function () {
    await browser.switchToFrame(await $("#frame"))

    await expect($("#player")).toBeExisting()
  })

  xit("Heroku upload Freez", async function () {
    const fileName = "Freez.jpg"
    await browser.uploadFileInHerokuService(fileName)

    // await expect($("#uploaded-files")).toHaveText(fileName)
    await expect(await browser.waitUploadingResult()).toBe(fileName)
  })

  xit("Heroku upload Sunflowers", async function () {
    const fileName = "Sunflowers.jpg"
    await browser.uploadFileInHerokuService(fileName)

    await expect(await browser.waitUploadingResult()).toBe(fileName)
  })
})
