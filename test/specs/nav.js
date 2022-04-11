import HomePage from "../pages/article-page";

describe("Articles navigation", function () {
  before(async () => {
    await HomePage.open();
  });

  it("Navigation buttons text", async () => {
    const expectedBtnsTexts = ["Front", "New", "Conf"];

    const navList = await HomePage.Nav.navMenuList;
    const actualBtnsTexts = [];
    for (const item of navList) {
      actualBtnsTexts.push(await item.getText());
    }

    await expect(actualBtnsTexts).toEqual(expectedBtnsTexts);
  });

  it("First nav btn should be selected", async () => {
    const navList = await HomePage.Nav.navMenuList;

    await expect(navList[0]).toHaveAttribute("class", "current-page");
  });
});
