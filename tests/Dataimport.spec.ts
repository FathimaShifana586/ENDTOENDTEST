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
  // Data Import/Export
 const dataImportExport = page.locator('#dataImportExport_ahref');
 await expect(dataImportExport).toBeVisible({ timeout: 60000 });
 await dataImportExport.click();
 console.log('Data Import/Export clicked successfully!');
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


  //await page.getByRole('option', { name: 'Keyhole Markup Language .kml' }).locator('span').click();
  await page.getByLabel('Data Import').getByText('open_in_browserBrowse File').click();
  await page.waitForTimeout(20000); // Pauses for 10 seconds (10000 milliseconds)

  await page.getByLabel('Data Import').getByText('open_in_browserBrowse File').setInputFiles('gpDataFile_29137.zip');
  await page.getByLabel('Data Import').getByText('ios_shareSubmit').click();

const Submit= page.locator('#cdk-accordion-child-1 > div > app-data-import > div:nth-child(4) > button');
await Submit.waitFor({ state: 'visible', timeout: 60000 });
await Submit.click();
console.log('Data extract clicked successfully!');
});