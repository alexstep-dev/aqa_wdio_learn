import { faker } from "@faker-js/faker"

describe("Feedback flow", function () {
  beforeEach(async function () {
    await browser.url("http://zero.webappsecurity.com")
  })

  it("Fill feedback form and submit", async function () {
    await $("#feedback").click()
    const form = $('[action="/sendFeedback.html"]')
    await form.waitForDisplayed({
      timeoutMsg: "No feedback form",
    })
    await form.$("#name").setValue(faker.name.firstName())
    await form.$("#email").setValue(faker.internet.email())
    await form.$("#subject").setValue(faker.music.genre())
    await form.$("#comment").setValue(faker.lorem.lines(3))
    await form.$('input[type="submit"]').click()

    await expect(browser).toHaveUrlContaining("/sendFeedback.html")
  })
})
