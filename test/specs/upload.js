const appURL = "http://localhost:3000";

describe("Upload", function () {

  it("Iframe", async function () {
    await browser.url(appURL);
    await browser.switchToFrame(await $("#frame"));

    expect($("#player")).toExist();
  });
});
