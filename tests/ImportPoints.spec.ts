import { test, expect } from '@playwright/test';
import { Console,log } from 'console';
test.use({  
   ignoreHTTPSErrors: true,
   screenshot: 'only-on-failure',
   });

test.skip(' import point functionality', async ({ page }) => {
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

// Data Import/Export
 const dataImportExport = page.locator('#dataImportExport_ahref');
 await expect(dataImportExport).toBeVisible({ timeout: 60000 });
 await dataImportExport.click();
 console.log('Data Import/Export clicked successfully!');
//Import Points
const importPoints = page.locator('#mat-expansion-panel-header-2 > span.mat-content.ng-tns-c123-29 > mat-panel-title'); 
await importPoints.waitFor({ state: 'visible', timeout: 60000 });
await importPoints.click();
console.log('Import Points clicked successfully!');

await page.locator('#cdk-accordion-child-2 > div > app-import-point-xy > div > div.mb-2 > div > span > a').click();  ////*[@id="cdk-accordion-child-2"]/div/app-import-point-xy/div/div[1]/div/span/a
const submit= page.locator('#cdk-accordion-child-2 > div > app-import-point-xy > div > div.mb-3.fs-9.mb-3 > button');
await submit.waitFor({ state: 'visible', timeout: 60000 });
await submit.click();
console.log('Data extract clicked successfully!');

});