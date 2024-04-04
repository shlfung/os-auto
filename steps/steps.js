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
  //await expect(page).toContainText("Home");
  //await expect(page.getByText('Home')).toBeVisible();
  await expect(page.getByRole('heading', { name: keyword })).toBeVisible();
  //await expect(page.getByRole('heading', { name: 'Sign in to continue to OpenSpecimen' })).toBeVisble();
});

When('I click on the button {string}', async ({ page }, keyword) => {
  //await expect(page).toContainText("Home");
  //await expect(page.getByText('Home')).toBeVisible();
  //await expect(page.getByRole('heading', { name: keyword })).toBeVisible();
  //await expect(page.getByRole('heading', { name: 'Sign in to continue to OpenSpecimen' })).toBeVisble();
  await page.getByRole('button', { name: 'Create' }).click();
});


/* Then('I see in title {string}', async ({ page }, keyword) => {
  //await expect(page).toContainText("Home");
  //await expect(page.getByText('Home')).toBeVisible();
  await expect(page.getByRole('heading', { name: keyword })).toBeVisible();
  //await expect(page.getByRole('heading', { name: 'Sign in to continue to OpenSpecimen' })).toBeVisble();
}); */




