import { appTitle, appURL } from "../constants";

describe("URL tests", function () {
  it("Check Title on the main page", async function () {
    await browser.url(appURL);

    await expect(browser).toHaveTitle(appTitle);
  });

  it("Check History page URL", async function () {
    await browser.url(`${appURL}/feed/history`);

    await expect(browser).toHaveUrl(`${appURL}/feed/history`);
  });

  it("Proceed to Explore page, click Trenging and check a part of URL", async function () {
    await browser.url(appURL);

    // Click Explore on mini guide panel
    await $(
      "ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:nth-child(2)"
    ).click();

    // Click Trending
    await $(
      "#destination-buttons ytd-destination-button-renderer:first-child"
    ).click();

    await expect(browser).toHaveUrlContaining("/trending");
  });

  it("Proceed to Explore page, click Trenging and go back. URL shouln't contain /trending", async function () {
    await browser.url(appURL);

    // Click Explore on mini guide panel
    await $(
      "ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:nth-child(2)"
    ).click();

    // Click Trending
    await $(
      "#destination-buttons ytd-destination-button-renderer:first-child"
    ).click();

    // Click logo
    await $("#container ytd-topbar-logo-renderer #logo").click();

    await expect(browser).not.toHaveUrlContaining("/trending");
  });
});
