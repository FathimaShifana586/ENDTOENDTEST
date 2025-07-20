import { test, expect } from '@playwright/test';
import {Console, log} from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Change detection property locator functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });   // use current url

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

  const propertyLocator = page.locator('.panel-heading.lang-panel-header-tools');
  await page.waitForSelector('.panel-heading.lang-panel-header-tools', { state: 'visible' });

  await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  console.log('Property Locator is visible');

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!'); 

// Change Detection 
// Navigate to Change Detection
await page.locator('//*[@id="sub-sideMenu-a"]/button').click();
console.log('Change Detection button clicked successfully!');

// Change Detection Link
await page.locator('//*[@id="change_detection_period_ahref"]').click();
console.log('Change Detection link clicked successfully!');

// Delete Button
const deleteButton = page.getByRole('button', { name: 'Delete' });
await deleteButton.waitFor({ state: 'visible', timeout: 60000 });
await deleteButton.click();
console.log('Delete button clicked successfully!');
await page.locator('//*[@id="mat-select-48"]').click();
const vegetationChangeOption = page.locator('text=Vegetation Change');
await vegetationChangeOption.waitFor({ state: 'visible', timeout: 60000 });
await vegetationChangeOption.click();
console.log('Vegetation Change option selected successfully!');

//Enable the change comparison
await page.locator('.mat-slide-toggle-bar').click();

// Close the Change Detection
await page.locator('#sub-sideMenu > div > div > app-sub-side-menu > change-detection-period > div > div > div.cardheader.gold-h-bg.d-flex.justify-content-between.px-3.py-2.align-items-center.montserrat-smeibold > div.d-flex.align-items-center > button.mat-tooltip-trigger.mat-menu-trigger.lh-0.cleanbtn.close-btn.rounded-4.text-white').click();
await page.getByRole('menuitem', { name: 'Close' }).click();
console.log('Close the Change Detection');

//Statistics

  await page.locator('#sec-dep > a:nth-child(2)').click();
  await page.locator('#mat-select-value-57').getByText('Please Select').click();
  const BuildingChangeOption = page.locator('text=Building Change');
  await BuildingChangeOption.waitFor({ state: 'visible', timeout: 60000 });
  await BuildingChangeOption.click();
  console.log('Building Change option selected successfully!');

// Search functionality
const SearchButton = page.locator('#app-change-detection-statistic-dialog > app-change-detection-statistic-dialog > div > div.container.dialogContent.content.white-bg.px-3.py-3.overflow-auto.position-relative.dialog > div.row > div.col-sm-3.mb-2.mt-4 > button');
await SearchButton.click();
console.log('Search button clicked successfully!');
// Click on the second button (assuming it's needed)
await page.locator('#app-change-detection-statistic-dialog > app-change-detection-statistic-dialog > div > div.cdk-drag.cdk-drag-handle.cursor-move.cardheader.gold-h-bg.d-flex.justify-content-between.px-3.py-2.align-items-center.montserrat-smeibold > div.d-flex.align-items-center > button.mat-tooltip-trigger.lh-0.cleanbtn.ms-2.w-1.h-1.rounded-2').click();
console.log('Second button clicked successfully!');
});
