class LoginPage {
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

  async fillLoginForm(userName, password) {
    await this.userNameField.addValue(userName)
    await this.passwordField.addValue(password)
  }

  async clickLoginBtn() {
    await this.loginBtn.click()
  }

  
}

export default new LoginPage()
