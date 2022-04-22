describe("Search flow", function () {
  beforeEach(async function () {
    await browser.url("http://zero.webappsecurity.com")
  })

  it("Fill seach input and check a result", async function () {
    const phrase = "bank"

    await $("#searchTerm").setValue(phrase)
    await browser.keys(["Enter"])
    const resultList = $("body .wrapper > .container .top_offset > ul")
    await resultList.waitForDisplayed({
      timeoutMsg: "No search result",
    })

    await expect(await resultList.$$("li").length).toBe(2)
  })
})
