import HomePage from "../pages/article-page";

describe("FrontendFront", function () {
  before(async () => {
    await HomePage.open();
  });

  it("Articles amount should equals 12", async function () {
    const articles = await HomePage.articles;

    await expect(articles.length).toBe(12);
  });

  it("Check first 3 domains", async function () {
    const expectedDomains = [
      "stackoverflow.blog",
      "blog.logrocket.com",
      "codepen.io",
    ];
    const actualDomains = [];
    const articles = await HomePage.articles;

    for (const article of articles) {
      actualDomains.push(await article.$(".domain").getText());
    }

    await expect(actualDomains.slice(0, 3)).toEqual(expectedDomains);
  });

  it("Header contains a text", async function () {
    const header = $(".stories-list li:first-child h2");

    /*
    console.log("///////////////////////////////////")
    const headerText = await header.getText();
    console.log(headerText)
    console.log("///////////////////////////////////")
    */

    await expect(header).toHaveTextContaining("Picture");
  });
});
