/* FormApp.js */
import { faker } from "@faker-js/faker"

import FormPage from "../pages/form-page"

describe("Form", function () {
  before(async () => {
    await await FormPage.open()
  })

  // !! Set waitforTimeout: 1000
  it("Populate with waiting", async function () {
    const form = FormPage.userForm
    await form.waitUntil(
      async function () {
        return await this.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: "Form wasn't displayed",
      }
    )
    await FormPage.pupulateForm(
      faker.name.firstName(),
      faker.mersenne.rand(115, 25),
      faker.lorem.sentence()
    )
    const submitBtn = FormPage.submitBtn
    await submitBtn.waitForEnabled({ timeout: 3000 })
    await submitBtn.click()
    const successAlert = FormPage.successAlert

    await expect(await successAlert.isExisting()).toBe(true)
  })
})
