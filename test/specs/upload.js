import { join } from "path"

// import UploadPage from "../pages/upload-page"

describe("Upload", function () {
  // before(async () => {
  //   await UploadPage.setBreakPointMD()
  //   await UploadPage.open()
  // })
  beforeEach(async () => {
    await browser.url("https://the-internet.herokuapp.com/upload")
  })
  // after(async () => {});
  // afterEach(async () => {});

  xit("Select file and submit the form", async function () {
    if (browser.capabilities.browserName === "firefox") {
      this.skip()
    }
    const filePath = join(__dirname, "..", "data", "Freez.jpg")
    const localFile = await browser.uploadFile(filePath)
    await browser.execute(
      'document.querySelector("#file").classList.remove("hidden")'
    )
    await $("#file").setValue(localFile)
    await $('#upload [type="submit"]').click()

    await expect($("#success")).toHaveText("Freez.jpg")
  })

  xit("Iframe", async function () {
    await browser.switchToFrame(await $("#frame"))

    await expect($("#player")).toBeExisting()
  })

  it("Heroku upload Freez", async function () {
    const fileName = "Freez.jpg"
    await browser.uploadFileInHerokuService(fileName)

    // await expect($("#uploaded-files")).toHaveText(fileName)
    await expect(await browser.waitUploadingResult()).toBe(fileName)
  })

  it("Heroku upload Sunflowers", async function () {
    const fileName = "Sunflowers.jpg"
    await browser.uploadFileInHerokuService(fileName)

    await expect(await browser.waitUploadingResult()).toBe(fileName)
  })
})
