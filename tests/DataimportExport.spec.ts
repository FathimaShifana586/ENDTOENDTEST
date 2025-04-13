import { test, expect } from '@playwright/test';

test.skip('test property locator functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('jhd-fathima');
  await passwordField.fill('1234');
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
 const selectedLayer = page.locator('#rightsection_ahref');  
  await expect(selectedLayer).toBeVisible({ timeout: 10000 });  
  await selectedLayer.click();  
  console.log('Selected layer clicked!');

  const layerIsSelected = page.locator('#rightsection_ahref.active');
  console.log('Layer is successfully selected!');
  
   //Select the "Expropriation list" layer
  const expropiationlayer = page.locator(
    '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(1) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
  );

  await expect(expropiationlayer).toBeVisible({ timeout: 10000 }); 
  await expropiationlayer.click(); 
  console.log('"Expropriation layer" selected successfully!');

  /// Select the "Private Assets" layer

  const privateAssetsCheckbox = page.locator('#mat-checkbox-1 > label');       
  await expect(privateAssetsCheckbox).toBeVisible({ timeout: 60000 }); 
  await privateAssetsCheckbox.click(); 
  console.log('"Private Assets" layer checkbox clicked!');
// Data Import/Export
 const dataImportExport = page.locator('#dataImportExport_ahref');
 await expect(dataImportExport).toBeVisible({ timeout: 60000 });
 await dataImportExport.click();
 console.log('Data Import/Export clicked successfully!');

// Data Extract
   const dataExtract = page.locator('#mat-expansion-panel-header-0 > span.mat-content.ng-tns-c123-22 > mat-panel-title');  //#mat-expansion-panel-header-0 > span.mat-content.ng-tns-c123-22 > mat-panel-title //#mat-expansion-panel-header-0 > span.mat-content.ng-tns-c123-22 > mat-panel-title
   await expect(dataExtract).toBeVisible({ timeout: 60000 });
   await dataExtract.click();
   console.log('Data Extract clicked successfully!'); 

   const ExtractFile = page.locator('#mat-select-30');  
   await ExtractFile.waitFor({ state: 'visible', timeout: 60000 }); 
   await ExtractFile.click();
   console.log('Extract file clicked successfully!');   
   const KMLOption = page.locator('#mat-option-48');  
   await KMLOption.waitFor({ state: 'visible', timeout: 60000 });
   await KMLOption.click();
   console.log('KML type file selected successfully!');

  const Dataextract= page.locator('#cdk-accordion-child-0 > div > app-data-extract > div:nth-child(4) > button');
  await Dataextract.waitFor({ state: 'visible', timeout: 60000 });
  await Dataextract.click();
  console.log('Data extract clicked successfully!');

  


//await page.locator('#sub-sideMenu > div > div > app-sub-side-menu > app-data-import-export > div > div > div.cardheader.gold-h-bg.d-flex.justify-content-between.px-3.py-2.align-items-center.montserrat-smeibold > div.d-flex.align-items-center > button:nth-child(3)').click();
//console.log('Close the data extract successfully!');

//Data Import

 const dataImport = page.locator('#mat-expansion-panel-header-1 > span.mat-content.ng-tns-c123-26 > mat-panel-title');
 await expect(dataImport).toBeVisible({ timeout: 60000 });
 await dataImport.click();
 console.log('Data import clicked successfully!');

 const importFile = page.locator('#mat-select-34');  //#mat-select-34
 await importFile.waitFor({ state: 'visible', timeout: 60000 }); // #mat-select-34
 await importFile.click();
 console.log('Import file clicked successfully!');
 const kmlOption = page.locator('#mat-option-58');  //#mat-option-58
 await kmlOption.waitFor({ state: 'visible', timeout: 60000 });
 await kmlOption.click();
 console.log('KML type file selected successfully!');
 // await page.getByLabel('Data Import').getByText('open_in_browserBrowse File').click();
 // await page.getByLabel('Data Import').getByText('open_in_browserBrowse File').setInputFiles('gpDataFile_28750.zip');
 // await page.getByLabel('Data Import').getByText('ios_shareSubmit').click();

const Submit= page.locator('#cdk-accordion-child-1 > div > app-data-import > div:nth-child(4) > button');
await Submit.waitFor({ state: 'visible', timeout: 60000 });
await Submit.click();
console.log('Data extract clicked successfully!');

 //Import Points
const importPoints = page.locator('#mat-expansion-panel-header-2 > span.mat-content.ng-tns-c123-29 > mat-panel-title'); 
await importPoints.waitFor({ state: 'visible', timeout: 60000 });
await importPoints.click();
console.log('Import Points clicked successfully!');

await page.locator('#cdk-accordion-child-2 > div > app-import-point-xy > div > div.mb-2 > div > span > a').click();
const submit= page.locator('#cdk-accordion-child-2 > div > app-import-point-xy > div > div.mb-3.fs-9.mb-3 > button');
await submit.waitFor({ state: 'visible', timeout: 60000 });
await submit.click();
console.log('Data extract clicked successfully!');
//draw feature
//settings
const settings = page.locator('body > app-root > div > app-base > div > div:nth-child(3) > app-map-main-tools > div.position-absolute.bottom-0.end-0 > div.toolbox-2.tb-withbtn.m-4.mb-2.white-bg.rounded-5.shadow-custom > button');
await expect(settings).toBeVisible({ timeout: 60000 });
await settings.click();
console.log('Settings clicked successfully!');

// Draw Feature
const drawFeature = page.locator('//*[@id="1_draw"]');
await expect(drawFeature).toBeVisible({ timeout: 60000 });
await drawFeature.click();
console.log('Draw Feature clicked successfully!');
//Draw Point
const drawPoint = page.locator('//*[@id="0_point"]');
await expect(drawPoint).toBeVisible({ timeout: 60000 });
await drawPoint.click();
console.log('Draw Point clicked successfully!');
//KML Export
const KMLExport = page.locator('#mat-expansion-panel-header-3 > span.mat-content.ng-tns-c123-31 > mat-panel-title');
await KMLExport.waitFor({ state: 'visible', timeout: 60000 });
await KMLExport.click();
console.log('KML Export clicked successfully!');
await page.locator('#cdk-accordion-child-3 > div > app-graphic-export > div > button').click();




});