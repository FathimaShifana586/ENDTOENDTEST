

import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});



test.skip('Layer Order functionality', async ({ page }) => {
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
  
//settings
const settings = page.locator('body > app-root > div > app-base > div > div:nth-child(3) > app-map-main-tools > div.position-absolute.bottom-0.end-0 > div.toolbox-2.tb-withbtn.m-4.mb-2.white-bg.rounded-5.shadow-custom > button');
await expect(settings).toBeVisible({ timeout: 60000 });
await settings.click();
console.log('Settings clicked successfully!');


//Layer Order
const layerOrder = page.locator('//*[@id="4_navMenu_layerOrder"]');
await expect(layerOrder).toBeVisible({ timeout: 60000 });
await layerOrder.click();
console.log('Layer Order clicked successfully!');
//Close Layer Order
const closeLayerOrder = page.locator('//*[@id="app-layer-order"]/app-layer-order/div/div[1]/div[2]/button[2]');
await expect(closeLayerOrder).toBeVisible({ timeout: 60000 });
await closeLayerOrder.click();
console.log('Close Layer Order clicked successfully!');

});