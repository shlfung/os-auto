import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';


const { Given, When, Then } = createBdd();


var CONFIG  = require('../config.json');

Given('I open url {string}', async ({ page }, url) => {
  await page.goto(url);
});

When('I fill in the username and password and click button {string}', async ({ page }, name) => {
    //await page.getByRole('link', { name }).click();
    await page.getByPlaceholder('Login Name').click();
    await page.getByPlaceholder('Login Name').fill(CONFIG.username);
    await page.getByPlaceholder('Login Name').press('Tab');
    await page.getByPlaceholder('Password').fill(CONFIG.password);
    await page.getByRole('button', { name: 'Sign In' }).click();
  });

When('I click on the side bar', async ({ page }, name) => {
  await page.getByRole('button', { name: '' }).nth(1).click();
});

When('I click on the side bar and select {string}', async ({ page }, keyword) => {
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('link', { name: keyword }).click();
});


When('I see in title {string}', async ({ page }, keyword) => {
  await expect(page.getByRole('heading', { name: keyword })).toBeVisible();
});

When('I click on the button {string}', async ({ page }, keyword) => {

  await page.getByRole('button', { name: keyword }).click();
});

/* When('I click on the radio button {string}', async ({ page }, keyword) => {
  //await page.getByRole('button', { name: keyword }).click();
  await page.getByText(keyword).click();
}); */

When('I create a new user', async ({ page }, keyword) => {
  const randomInt = Math.floor(Math.random() * 99999999);
  const firstName = 'TestFirstName' + randomInt;
  const lastName = 'TestLastName' + randomInt;
  const email = 'shlfung' + randomInt + '@live.ca';
  const userName = 'Tester' + randomInt;
  await page.locator('div').filter({ hasText: /^First Name\*$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^First Name\*$/ }).getByRole('textbox').fill(firstName);
  await page.locator('div').filter({ hasText: /^Last Name\*$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Last Name\*$/ }).getByRole('textbox').fill(lastName);
  await page.locator('form input[type="text"]').nth(2).click();
  await page.locator('form input[type="text"]').nth(2).fill(email);
  await page.locator('#pv_id_8').getByRole('combobox').click();
  await page.getByLabel('openspecimen').click();
  await page.locator('form input[type="text"]').nth(4).click();
  await page.locator('form input[type="text"]').nth(4).fill(userName);
  await page.locator('#pv_id_9').getByRole('combobox').click();
  await page.getByLabel('BC Children\'s Hospital').click();
  await page.getByRole('button', { name: 'Create' }).click();
});





