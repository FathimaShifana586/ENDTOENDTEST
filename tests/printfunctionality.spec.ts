import { test, expect } from '@playwright/test';

test.skip('test property locator functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://dev-gis-web01.jeddahalbalad.sa/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('jhd-fathima');
  await passwordField.fill('1234');
  await loginButton.click();

  await expect(page).toHaveURL('https://dev-gis-web01.jeddahalbalad.sa/Geoportal-JHD/');

  const propertyLocator = page.locator('.panel-heading.lang-panel-header-tools');
  await page.waitForSelector('.panel-heading.lang-panel-header-tools', { state: 'visible' });

  await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  console.log('Property Locator is visible');

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!');
  
  //Print
const Print = page.locator('#printFeatures_ahref'); ////*[@id="printFeatures_ahref"]
await expect(Print).toBeVisible({ timeout: 60000 });
await Print.click();
console.log('print clicked successfully!');

const downloadPromise = page.waitForEvent('download');
await page.getByText('download Download').click();
const download = await downloadPromise;
await page.getByText('print Print').click();
  
await page.locator('app-print button').nth(1).click();  //#app-pdf-reader18466 > app-pdf-reader > div > div.cdk-drag.cdk-drag-handle.cursor-move.cardheader.gold-h-bg.d-flex.justify-content-between.px-3.py-2.align-items-center.montserrat-smeibold > div.d-flex.align-items-center > button.mat-tooltip-trigger.lh-0.cleanbtn.close-btn.ms-2.w-1.rounded-2



 });
