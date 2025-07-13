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

  const propertyLocator = page.locator('.panel-heading.lang-panel-header-tools');
  await page.waitForSelector('.panel-heading.lang-panel-header-tools', { state: 'visible' });

  await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  console.log('Property Locator is visible');

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!'); 
   //General reports

   const selectedGeneralReport = page.locator('#sub-sideMenu-a > div:nth-child(1) > a.mat-tooltip-trigger.nav-anchor.cursor-pointer.ng-star-inserted');
   await expect(selectedGeneralReport).toBeVisible({ timeout: 60000 });
   await selectedGeneralReport.click();
   console.log('Selected general report clicked!');
 
//    await page.locator('#mat-select-48').click();
//    await page.getByRole('option', { name: 'Property List Report' }).locator('span').click();
//    await page.getByPlaceholder('Property Id ').click();
//    await page.getByPlaceholder('Property Id ').fill('1010');
//    await page.getByRole('button', { name: 'Add' }).click();
//    await page.getByRole('button', { name: 'next'}).click();
//    /////const propertyId =  page.locator('.mat-checkbox-inner-container').first().click();
//    ///// const PropertyType = page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
//    ///// const buildingname =  page.locator('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
//    await page.evaluate(() => {
//      window.scrollTo(0, document.body.scrollHeight);
//    });
   
//    const nextButton = page.locator('#cdk-step-content-0-1 > div.mt-0.ng-star-inserted > button:nth-child(2)');
//    ////// await expect(nextButton).toBeVisible({ timeout: 100000 });
//    //////await page.getByRole('button', { name: 'Next' }).click();
//    await nextButton.click();
//    console.log('Next button clicked!');
//    await page.getByPlaceholder('Report Title *').click();
//    await page.getByPlaceholder('Report Title *').fill('test');
//    await page.getByRole('button', { name: 'Print' }).click();
   //console.log('Report printed successfully')

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