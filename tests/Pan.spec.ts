
import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Pan functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');


  await page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button').click();
  console.log('Property Locator is closed')


  //pan
  const pan = page.locator('//*[@id="4_pan"]');
  await expect(pan).toBeVisible({ timeout: 60000 });
  await pan.click();
  console.log('Pan clicked successfully!');

});