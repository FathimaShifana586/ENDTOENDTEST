import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Thematic map functionality', async ({ page }) => {
  test.setTimeout(120000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

  // Close Property Locator if visible
  const propertyCloseBtn = page.locator('xpath=//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button');
  if (await propertyCloseBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await propertyCloseBtn.click({ timeout: 5000 });
    console.log('Property Locator is closed.');
  } else {
    console.log('Property Locator is not visible. Skipping close.');
  }

  //  Open Navigation Menu
  await page.locator('#nav-part1').getByRole('button').click({ timeout: 5000 });
  console.log('Navigation menu opened.');

  //  Click on Thematic Feature Map
  await page.getByRole('link', { name: 'Thematic Feature Map' }).click({ timeout: 5000 });
  console.log('Thematic Feature Map link clicked.');

  //  Open dropdown and select "Asset Type"
  await page.getByRole('combobox', { name: 'Please Select' }).click({ timeout: 5000 });
  console.log('Dropdown opened.');

  await page.getByText('Asset Type').click({ timeout: 5000 });
  console.log('"Asset Type" selected.');

  //  Toggle the slider
  await page.locator('.mat-slide-toggle-bar').click({ timeout: 5000 });
  console.log('Layer visibility toggled.');

  //  Click the "Show" button
  await page.getByRole('button', { name: 'visibility Show' }).click({ timeout: 5000 });
  console.log('"Show" button clicked.');

// await page.locator('#sub-sideMenu').getByRole('button').nth(1).click({ timeout: 5000 });
// console.log('Close button on side menu clicked.');
// Locate the close button using XPath and click it
const closeMenuBtn = page.locator('xpath=//*[@id="mat-menu-panel-3"]/div/button[2]');

if (await closeMenuBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
  await closeMenuBtn.click({ timeout: 5000 });
  console.log('Close button in mat-menu-panel-3 clicked.');
} else {
  console.log('Close button in mat-menu-panel-3 not visible. Skipping.');
}


  //  Open Navigation Menu again
  await page.locator('#nav-part1').getByRole('button').click({ timeout: 5000 });
  console.log('Navigation menu re-opened.');
});
