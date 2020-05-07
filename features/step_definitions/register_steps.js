const { driver } = require('../../helpers/capabilities') 

const data = require('../support/data/data_test.json')

const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const registerPage = require('../support/objects/register_page');
const element = new registerPage();

Then('I see the title register page', async () => {
  const title = await driver.elementById(element.title);
  title.click();
  await driver.setImplicitWaitTimeout(5000);
});

Then('I close the softkeyboard', async () => {
  await driver.hideDeviceKeyboard();
});

When('I fill in the username field', async () => {
  const inputUsername = await driver.elementById(element.inputUsername);
  await inputUsername.type(data.username)
  const tagName = await inputUsername.getAttribute("text");
  assert.equal(tagName, data.username);
});

When('I fill in the email field', async () => {
  const inputEmail = await driver.elementById(element.inputEmail);
  await inputEmail.type(data.username)
  const tagName = await inputEmail.getAttribute("text");
  assert.equal(tagName, data.username);
});

When('I fill in the password field', async () => {
  const inputPassword = await driver.elementById(element.inputPassword);
  await inputPassword.type(data.username)
});

When('I click the agreement', async () => {
  const input_adds = await driver.elementById(element.input_adds);
  input_adds.click();
  await driver.setImplicitWaitTimeout(5000);
});

When('I click the register button', async () => {
  const btnRegisterUser = await driver.elementById(element.btnRegisterUser);
  btnRegisterUser.click();
  await driver.setImplicitWaitTimeout(5000);
});

Then('I see the Register User button', async () => {
  const buttonRegisterUser = await driver.elementById(element.buttonRegisterUser);
  await driver.setImplicitWaitTimeout(5000);
  buttonRegisterUser.click();
});