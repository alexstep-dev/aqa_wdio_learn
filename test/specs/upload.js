const appURL = "http://localhost:3000";

describe("Upload", function () {
  it("Iframe", async function () {
    await browser.url(appURL);
    await browser.switchToFrame(await $("#frame"));

    // eslint (wdio/await-expect) should emmit an error here
    expect($("#player")).toExist();
  });
});
