import { appURL } from "../constants";

describe("Content tests", function () {
  //   it('Proceed to Explore page. First button should contain "Trending"', async () => {
  //     await browser.url(appURL);

  //     // Click Explore on mini guide panel
  //     await $(
  //       "ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:nth-child(2)"
  //     ).click();

  //     // Find Trending button
  //     const firstButton = await $(
  //       "#destination-buttons ytd-destination-button-renderer:first-child a"
  //     );
  //     //.then(res => res.getText()); // also possible to do

  //     // Get its text
  //     const firstBtnText = await firstButton.getText();

  //     await expect(firstBtnText).toEqual("Trending");

  //     // await expect(firstButton).toHaveText("Trending"); // also possible to get the text directly
  //   });

  //   it("Trending tabs list", async () => {
  //     const expectedList = ["Now", "Music", "Gaming", "Movies"];
  //     const actualList = [];

  //     await browser.url(appURL);

  //     // Click Explore on mini guide panel
  //     await $(
  //       "ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:nth-child(2)"
  //     ).click();

  //     // Click Trending
  //     await $(
  //       "#destination-buttons ytd-destination-button-renderer:first-child"
  //     ).click();

  //     // ! Doesn't works because element is appearing dynamically
  //     // const tabs = await $$(
  //     //     'ytd-browse[page-subtype="trending"] #tabsContent tp-yt-paper-tab'
  //     // );

  //     // Works!
  //     // const tabs = await $('ytd-browse[page-subtype="trending"] #tabsContent').$$(
  //     //   "tp-yt-paper-tab"
  //     // );

  //     const tabsWrapper = await $(
  //       'ytd-browse[page-subtype="trending"] #tabsContent'
  //     );
  //     // await browser.waitUntil(async () =>
  //     //   tabsWrapper.waitForExist({ timeout: 5000 })
  //     // );

  //     await tabsWrapper.waitForDisplayed({ timeout: 5000 });

  //     // expect(await tabsWrapper.isExisting()).toBe(true);

  //     const tabs = await $$(
  //       'ytd-browse[page-subtype="trending"] #tabsContent tp-yt-paper-tab'
  //     );

  //     for (const tab of tabs) {
  //       actualList.push(await tab.getText());
  //     }
  //     // console.log(actualList);
  //     await expect(expectedList.map((i) => i.toUpperCase())).toEqual(actualList);
  //   });

  //   it("Correct waits", async () => {
  //     const expectedList = ["Now", "Music", "Gaming", "Movies"];
  //     const actualList = [];

  //     await browser.url(appURL + "/feed/trending");

  //     const tabsWrapper = await $(
  //       'ytd-browse[page-subtype="trending"] #tabsContent'
  //     );

  //     await tabsWrapper.waitForDisplayed({
  //       timeout: 5000,
  //     });

  //     const tabs = await tabsWrapper.$$("tp-yt-paper-tab");

  //     for (const tab of tabs) {
  //       actualList.push(await tab.getText());
  //     }
  //     await expect(expectedList.map((i) => i.toUpperCase())).toEqual(actualList);
  //   });

  it("Correct waits with clicks", async function () {
    const expectedList = ["Now", "Music", "Gaming", "Movies"];
    const actualList = [];

    await browser.url(appURL);

    // Click Explore on mini guide panel
    await $(
      "ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:nth-child(2)"
    ).click();

    // Click Trending
    await $(
      "#destination-buttons ytd-destination-button-renderer:first-child"
    ).click();

    const tabsWrapper = await $(
      'ytd-browse[page-subtype="trending"] #tabsContent'
    );

    await tabsWrapper.waitForDisplayed({
      timeout: 5000,
    });

    const tabs = await tabsWrapper.$$("tp-yt-paper-tab");

    for (const tab of tabs) {
      actualList.push(await tab.getText());
    }
    await expect(expectedList.map((i) => i.toUpperCase())).toEqual(actualList);
  });
});
