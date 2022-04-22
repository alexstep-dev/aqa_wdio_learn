describe("Login flow", function () {
  beforeEach(async function () {
    await browser.url("http://zero.webappsecurity.com")
  })

  it("Bad creds", async function () {
    const login = ""
    const passw = ""
    const alertText = "Login and/or password are wrong."

    await $("#signin_button").click()
    const loginForm = $("#login_form")
    await loginForm.waitForDisplayed({
      timeoutMsg: "No login form",
    })
    await $("#user_login").setValue(login)
    await $("#user_password").setValue(passw)
    await loginForm.$('input[type="submit"]').click()
    const alert = $("#login_form .alert")
    await alert.waitForDisplayed({
      timeoutMsg: "No alert element",
    })

    await expect(alert).toHaveText(alertText)
  })

  it("Reset password", async function () {
    const email = "test@test.test"

    await $("#signin_button").click()
    await $('[href="/forgot-password.html"]').click()
    const recoveryForm = $("#send_password_form")
    await recoveryForm.waitForDisplayed({
      timeoutMsg: "No recovery password form",
    })
    await recoveryForm.$("#user_email").setValue(email)
    await recoveryForm.$('input[type="submit"]').click()

    await expect(browser).toHaveUrlContaining("/forgotten-password-send.html")
  })
})
