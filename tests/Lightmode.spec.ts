import { test, expect } from '@playwright/test';
import { Console } from 'console';

test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Light & Dark Mode functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

  const closeButton = page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button');
  await expect(closeButton).toBeVisible({ timeout: 60000 });
  await closeButton.click();
  console.log('Panel closed successfully!');


  const profile = page.locator('//*[@id="profileMenu-btn"]');
  await expect(profile).toBeVisible({ timeout: 60000 });
  await profile.click();
  console.log('Profile clicked successfully!');
const themeToggleButton = page.locator('//*[@id="profileMenu"]/a[1]');
await expect(themeToggleButton).toBeVisible({ timeout: 60000 });
await themeToggleButton.click();
console.log('Dark/Light mode toggled successfully!');

                                                                      
  console.log('Light mode clicked successfully')
  await page.getByRole('button', { name: 'Save changes' }).click();
  console.log('select the save changes button successfully')
  await page.goto('https://www.gto-portal.com/Geoportal-JHD/');
  console.log('successfully completed the Test')

});
