import AbstractPage from "./Abstract"

class LoginPage extends AbstractPage {
  open() {
    return browser.url("https://www.saucedemo.com")
  }

  get userNameField() {
    return $("#user-name")
  }

  get passwordField() {
    return $("#password")
  }

  get loginBtn() {
    return $("#login-button")
  }

  get loginFailureAlert() {
    return $('[data-test="error"]')
  }

  async fillLoginForm(userName = "standard_user", password = "secret_sauce") {
    await this.userNameField.addValue(userName)
    await this.passwordField.addValue(password)
  }

  async clickLoginBtn() {
    await this.loginBtn.click()
  }

  async assertLoginFailureAlert() {
    return await expect(this.loginFailureAlert).toBeDisplayed()
  }
}

export default new LoginPage()
