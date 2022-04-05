const appURL = "http://localhost:3000";

describe("Upload", function () {
  it("Iframe", async function () {
    await browser.url(appURL);
    await browser.pause(5000);
    await browser.debug();

    await expect($("#player")).toExist();
  });
});
