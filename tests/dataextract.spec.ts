import { test, expect } from '@playwright/test';
import { Console, log } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('test property locator functionality', async ({ page }) => {
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

//zoomin
 
  const zoomIn = page.locator('//*[@id="0_zoomIn"]');
  await expect(zoomIn).toBeVisible({ timeout: 60000 });
  await zoomIn.click();
  console.log('Zoom In clicked successfully!');   
//extract file
   const ExtractFile = page.locator('#mat-select-30');  
   await ExtractFile.waitFor({ state: 'visible', timeout: 60000 }); 
   await ExtractFile.click();
   console.log('Extract file clicked successfully!');   
   const KMLOption = page.locator('#mat-option-48');  
   await KMLOption.waitFor({ state: 'visible', timeout: 60000 });
   await KMLOption.click();
   console.log('KML type file selected successfully!');


  const downloadPromise = page.waitForEvent('download');
  await page.getByText('archiveData Extract').click();
  const download = await downloadPromise;

  await page.locator('//*[@id="app-Extracted-data-results"]/app-extracted-data-results/div/div[1]/div[2]/button[2]').click();

//   const Dataextract= page.locator('#cdk-accordion-child-0 > div > app-data-extract > div:nth-child(4) > button');  //
//   await Dataextract.waitFor({ state: 'visible', timeout: 60000 });
//   await Dataextract.click();
//   console.log('Data extract clicked successfully!');
});