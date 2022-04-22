import {
  Given,
  When,
  Then,
  // defineStep
} from "@wdio/cucumber-framework"

import LoginPage from "../pageObjects/Login"
import InventoryPage from "../pageObjects/Inventory"

Given(/^Set viewport size MD$/, async function () {
  await LoginPage.setWindowSizeMD()
})

Given(/^I am on the main page$/, async function () {
  await LoginPage.open()
})

When(/^I login with valid creds$/, async function () {
  await LoginPage.fillLoginForm()
  await LoginPage.clickLoginBtn()
})

When(/^I login with (\w+) and (.+)$/, async function (username, password) {
  await LoginPage.fillLoginForm(username, password)
  await LoginPage.clickLoginBtn()
})

Then(/^I should see inventory list$/, async function () {
  await InventoryPage.assertInventoryPage()
})

Then(/^I should see login failure alert$/, async function () {
  await LoginPage.assertLoginFailureAlert()
})
