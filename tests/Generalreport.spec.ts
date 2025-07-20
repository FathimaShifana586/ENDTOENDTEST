import { test, expect } from '@playwright/test';
import { Console, log } from 'console';
test.use({  
   ignoreHTTPSErrors: true,
   screenshot: 'only-on-failure',
   });

test.skip('General report functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

  const closeButton = page.locator('#app-property-locator app-property-locator > div > div:nth-child(1) > div:nth-child(2) > button');

  if (await closeButton.count() > 0 && await closeButton.isVisible()) {
    await closeButton.click();
    console.log('Property Locator close button clicked successfully!');
  } else {
    console.log('Property Locator close button not visible. Skipping.');
  }

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!'); 
   //General reports

   const selectedGeneralReport = page.locator('#sub-sideMenu-a > div:nth-child(1) > a.mat-tooltip-trigger.nav-anchor.cursor-pointer.ng-star-inserted');
   await expect(selectedGeneralReport).toBeVisible({ timeout: 60000 });
   await selectedGeneralReport.click();
   console.log('Selected general report clicked!');

await page.getByLabel('Property List Report').locator('div').nth(3).click();
await page.waitForTimeout(1000);
console.log('Property List Report selected successfully!');

await page.getByRole('option', { name: 'Property List Report' }).locator('span').click();
await page.waitForTimeout(1000);
console.log('Property List Report option selected successfully!');

await page.getByPlaceholder('Property Id ').click();
await page.waitForTimeout(500);

await page.getByPlaceholder('Property Id ').fill('1010');
await page.waitForTimeout(1000);
console.log('Property Id filled successfully!');

await page.getByRole('button', { name: 'Add' }).click();
await page.waitForTimeout(1000);
console.log('Property Id added successfully!');

await page.getByRole('button', { name: 'Next' }).click();
await page.waitForTimeout(1000);
console.log('Next button clicked!');

await page.locator('.mat-checkbox-inner-container').first().click();
await page.waitForTimeout(1000);
console.log('Property Id checkbox clicked successfully!');

await page.getByRole('button', { name: 'Next' }).click();
await page.waitForTimeout(1000);
console.log('Next button clicked successfully!');

await page.getByPlaceholder('Report Title *').click();
await page.waitForTimeout(500);

await page.getByPlaceholder('Report Title *').fill('test');
await page.waitForTimeout(1000);
console.log('Report Title filled successfully!');

await page.getByRole('button', { name: 'Print' }).click();
await page.waitForTimeout(2000);
console.log('Report printed successfully');

await page.getByRole('button', { name: 'Close' }).click();
await page.waitForTimeout(1000);
console.log('Report closed successfully');

 });