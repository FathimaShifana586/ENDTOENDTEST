
import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Basemap functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');


  await page.getByRole('button').first().click({ timeout: 10000 });
  console.log('Property Locator closed successfully!');

  await page.locator('.toolbox-3 > .mat-tooltip-trigger').click({ timeout: 10000 });
  console.log('Basemap button clicked successfully!');

  await page.locator('#app-base-map-switcher a').first().click({ timeout: 10000 });
  console.log('Basemap option selected successfully!');

  await page.locator('#app-base-map-switcher a').nth(3).click({ timeout: 10000 });
  console.log('Blank Basemap selected successfully!');

  await page.locator('#app-base-map-switcher a').nth(1).click({ timeout: 10000 });
  console.log('Baladgeryorthopohoto Basemap selected successfully!');

  await page.getByRole('button').nth(1).click({ timeout: 10000 });
  console.log('Basemap closed successfully!');

  await page.close();
  console.log('Page closed successfully!');
  console.log('Test completed successfully!');
});
