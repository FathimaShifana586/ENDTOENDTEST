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

  const propertyLocator = page.locator('.panel-heading.lang-panel-header-tools');
  await page.waitForSelector('.panel-heading.lang-panel-header-tools', { state: 'visible' });

  await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  console.log('Property Locator is visible');

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!');

 //Select the Layer
//  const selectedLayer = page.locator('#rightsection_ahref');  
//   await expect(selectedLayer).toBeVisible({ timeout: 10000 });  
//   await selectedLayer.click();  
//   console.log('Selected layer clicked!');

//   const layerIsSelected = page.locator('#rightsection_ahref.active');
//   console.log('Layer is successfully selected!');
  
   //Select the "Expropriation list" layer
//   const expropiationlayer = page.locator(
//     '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(1) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
//   );

//   await expect(expropiationlayer).toBeVisible({ timeout: 10000 }); 
//   await expropiationlayer.click(); 
//   console.log('"Expropriation layer" selected successfully!');

  /// Select the "Private Assets" layer

//   const privateAssetsCheckbox = page.locator('#mat-checkbox-1 > label');       
//   await expect(privateAssetsCheckbox).toBeVisible({ timeout: 60000 }); 
//   await privateAssetsCheckbox.click(); 
//   console.log('"Private Assets" layer checkbox clicked!');
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

// await page.locator('#mat-expansion-panel-header-2').click();
// const downloadPromise = page.waitForEvent('download');
// await page.getByLabel('Import Point (XY)').getByText('Download').click();
// const download = await downloadPromise;
// await page.getByLabel('Import Point (XY)').getByText('open_in_browserBrowse File').click();
// await page.getByLabel('Import Point (XY)').getByText('open_in_browserBrowse File').setInputFiles('Point_XY_Template (13).txt');
// await page.locator('#mat-select-value-47').click();
// await page.getByRole('option', { name: 'P', exact: true }).locator('span').click();
// await page.locator('#mat-select-value-49').click();
// await page.getByRole('option', { name: 'Y' }).locator('span').click();
// await page.locator('#mat-select-value-51').click();
// await page.getByRole('option', { name: 'X' }).locator('span').click();
// await page.getByLabel('Import Point (XY)').getByText('ios_shareSubmit').click();


await page.locator('#cdk-accordion-child-2 > div > app-import-point-xy > div > div.mb-2 > div > span > a').click();  ////*[@id="cdk-accordion-child-2"]/div/app-import-point-xy/div/div[1]/div/span/a
const submit= page.locator('#cdk-accordion-child-2 > div > app-import-point-xy > div > div.mb-3.fs-9.mb-3 > button');
await submit.waitFor({ state: 'visible', timeout: 60000 });
await submit.click();
console.log('Data extract clicked successfully!');
// await page.waitForTimeout(20000); // Pauses for 10 seconds (10000 milliseconds)

// await page.getByLabel('Import Point (XY)').getByText('open_in_browserBrowse File').click();
// await page.getByLabel('Import Point (XY)').getByText('open_in_browserBrowse File').setInputFiles('Point_XY_Template (13).txt');


// await page.locator('#mat-select-value-47').click();
// await page.getByRole('option', { name: 'P', exact: true }).locator('span').click();
// await page.locator('#mat-select-value-49').click();
// await page.getByRole('option', { name: 'Y' }).locator('span').click();
// await page.locator('#mat-select-value-51').click();
// await page.getByRole('option', { name: 'X' }).locator('span').click();
// await page.getByLabel('Import Point (XY)').getByText('ios_shareSubmit').click();


});