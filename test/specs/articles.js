const appURL = "https://frontendfront.com/";

describe("Medium", function () {
  it("Articles amount should equals 12", async function () {
    await browser.url(appURL);

    const articles = await $$(".stories-list li:not(.ads-hosting)");

    await expect(articles.length).toBe(12);
  });

  it("Check first 3 domains", async function () {
    const expectedDomains = [
      "www.smashingmagazine.com",
      "css-tricks.com",
      "pineco.de",
    ];
    const actualDomains = [];

    await browser.url(appURL);

    const articles = await $$(".stories-list li:not(.ads-hosting)");

    for (const article of articles) {
      actualDomains.push(await article.$(".domain").getText());
    }

    await expect(actualDomains.slice(0, 3)).toEqual(expectedDomains);
  });

  it("Header contains HTML", async function () {
    await browser.url(appURL);

    const header = $(".stories-list li:first-child h2");

    /*
    console.log("///////////////////////////////////")
    const headerText = await header.getText();
    console.log(headerText)
    console.log("///////////////////////////////////")
    */

    await expect(header).toHaveTextContaining("HTML");
  });
});
