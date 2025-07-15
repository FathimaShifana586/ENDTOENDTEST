import { test, expect } from '@playwright/test';
import { Console } from 'console';

test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.only('Light & Dark Mode functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

  const profile = page.locator('//*[@id="profileMenu-btn"]');
  await expect(profile).toBeVisible({ timeout: 60000 });
  await profile.click();
  console.log('Profile clicked successfully!');

  await page.getByRole('link', { name: 'Dark Mode' }).click();         //if you want to change the dark to light mode then modify these line to dark mode 
  console.log('Light mode clicked successfully')
  await page.getByRole('button', { name: 'Save changes' }).click();
  console.log('select the save changes button successfully')
  await page.goto('https://www.gto-portal.com/Geoportal-JHD/');
  console.log('successfully completed the Test')

});
