const appURL = "http://localhost:3000";

describe("Form", function () {
  //   it("Check URL", async () => {
  //     await browser.url(appURL);

  //     await expect(browser).toHaveUrl(appURL);
  //   });

  // !! Set waitforTimeout: 1000
  it("Populate with waiting", async function () {
    await browser.url(appURL);
    // addValue -- add the data to the field
    // setValue -- erase existing data in a field and set new value

    const form = $("#user");
    await form.waitUntil(
      async function () {
        return await this.isDisplayed();
      },
      {
        timeout: 10000,
        timeoutMsg: "Form wasn't displayed",
      }
    );

    await $("#user #name").addValue("John");
    await $("#user #age").addValue(25);
    await $("#user #about").addValue(
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    );

    const successBtn = $('#user button[type="submit"]');
    await successBtn.waitForEnabled({ timeout: 3000 });
    await successBtn.click();
    const successAlert = $("#success");

    await expect(await successAlert.isExisting()).toBe(true);
  });
});
