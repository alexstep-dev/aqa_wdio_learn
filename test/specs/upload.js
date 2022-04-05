import { join } from "path";

const appURL = "http://localhost:3000";

describe("Upload", function () {
  xit("Select file and submit the form", async function () {
    if (browser.capabilities.browserName === "firefox") {
      this.skip();
    }

    await browser.url(appURL);
    const filePath = join(__dirname, "..", "data", "Freez.jpg");
    const uploadedFile = await browser.uploadFile(filePath);
    await browser.execute(
      'document.querySelector("#file").classList.remove("hidden")'
    );
    await $("#file").setValue(uploadedFile);
    await $('#upload [type="submit"]').click();

    await expect($("#success")).toHaveText("Freez.jpg");
  });

  xit("Iframe", async function () {
    await browser.url(appURL);
    await browser.debug();
    await browser.switchToFrame(await $("#frame"));

    await expect($("#player")).toExist();
  });
});
