class FormPage {
  open() {
    return browser.url("http://localhost:3000");
  }

  get userForm() {
    return $("#user");
  }

  get userNameField() {
    return $("#user #name");
  }

  get userAgeField() {
    return $("#user #age");
  }

  get userAboutField() {
    return $("#user #about");
  }

  get submitBtn() {
    return $('#user button[type="submit"]');
  }

  get successAlert() {
    return $("#success");
  }

  async pupulateForm(name, age, about) {
    await this.userNameField.addValue(name);
    await this.userAgeField.addValue(age);
    await this.userAboutField.addValue(about);
  }
}

export default new FormPage();
