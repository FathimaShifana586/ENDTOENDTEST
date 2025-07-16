import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('My Request functionality', async ({ page }) => {
  test.setTimeout(120000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

 
// Click on the nav button
await page.locator('#nav-part1').getByRole('button').click({ timeout: 5000 });
console.log('Navigation part1 button clicked.');

// Click "Request For Data" link
await page.getByRole('link', { name: 'Request For Data' }).click({ timeout: 5000 });
console.log('"Request For Data" link clicked.');

// Click add button
await page.locator('#request-for-data-list button').filter({ hasText: 'add' }).click({ timeout: 5000 });
console.log('Add button clicked.');

// Click "New Data Request" from menu
await page.getByRole('menuitem', { name: 'New Data Request' }).click({ timeout: 5000 });
console.log('"New Data Request" menu item clicked.');

// Select data format from dropdown
await page.locator('#mat-select-value-47').click({ timeout: 5000 });
console.log('Data format dropdown opened.');

await page.getByRole('option', { name: 'File Geodatabase - GDB - .gdb' }).locator('span').click({ timeout: 5000 });
console.log('GDB file format selected.');

// Fill the description textbox
await page.locator('#app-request-for-data app-request-for-data app-data-extract textarea').click({ timeout: 5000 });
await page.locator('#app-request-for-data app-request-for-data app-data-extract textarea').fill('test', { timeout: 5000 });
console.log('Description textarea filled with "test".');


// Click the "Request" button
await page.getByRole('button', { name: 'Request' }).click({ timeout: 5000 });
console.log('"Request" button clicked.');

// Click close or final action button
await page.locator('.cdk-drag > .d-flex > button:nth-child(4)').click({ timeout: 5000 });
console.log('Close button clicked.');

});


