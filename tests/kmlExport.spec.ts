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
// Data Import/Export
const dataImportExport = page.locator('#dataImportExport_ahref');
await expect(dataImportExport).toBeVisible({ timeout: 60000 });
await dataImportExport.click();
console.log('Data Import/Export clicked successfully!');

//KML Export
const KMLExport = page.locator('#mat-expansion-panel-header-3 > span.mat-content.ng-tns-c123-31 > mat-panel-title');
await KMLExport.waitFor({ state: 'visible', timeout: 60000 });
await KMLExport.click();
console.log('KML Export clicked successfully!');
await page.locator('#cdk-accordion-child-3 > div > app-graphic-export > div > button').click();
});