import { join } from "path";
import AllureReporter from "@wdio/allure-reporter";

import UploadPage from "../pages/upload-page";

describe("Upload", function () {
  before(async () => {
    await UploadPage.open();
    await UploadPage.setBreakPointMD();
  });
  // beforeEach(async () => {});
  // after(async () => {});
  // afterEach(async () => {});

  it("Select file and submit the form", async function () {
    AllureReporter.addFeature("File uploading feature");
    AllureReporter.addDescription(
      "Remove a class from input to make it visiible and upload the file. After check an alert"
    );

    if (browser.capabilities.browserName === "firefox") {
      this.skip();
    }
    const filePath = join(__dirname, "..", "data", "Freez.jpg");
    const uploadedFile = await browser.uploadFile(filePath);
    await browser.execute(
      'document.querySelector("#file").classList.remove("hidden")'
    );
    await $("#file").setValue(uploadedFile);
    await $('#upload [type="submit"]').click();

    await expect($("#success")).toHaveText("Freez.jpg");
  });

  it("Iframe", async function () {
    await browser.switchToFrame(await $("#frame"));

    await expect($("#player")).toBeExisting();
  });
});
