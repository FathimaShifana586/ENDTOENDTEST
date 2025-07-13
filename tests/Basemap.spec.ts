
import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Basemap functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

//   const propertyLocator = page.locator('.panel-heading.lang-panel-header-tools');
//   await page.waitForSelector('.panel-heading.lang-panel-header-tools', { state: 'visible' });

//   await expect(propertyLocator).toBeVisible({ timeout: 10000 });
//   console.log('Property Locator is visible');

//   const menuButton = page.locator('#header-toggle-menu-open'); 
//   await expect(menuButton).toBeVisible({ timeout: 10000 });  
//   await menuButton.click();  
//   console.log('Menu button clicked!');
// //Basemap
// const BaseMap = page.locator('body > app-root > div > app-base > div > div:nth-child(3) > app-map-main-tools > div.position-absolute.bottom-0.end-0 > div.toolbox-3.tb-withbtn.m-4.mt-2.shadow-custom.position-relative.rounded-5.d-none.d-sm-block.ng-star-inserted > button');
// await expect(BaseMap).toBeVisible({ timeout: 60000 });
// await BaseMap.click();
// console.log('Basemap clicked successfully!');
// const BaseMapOption = page.locator('#app-base-map-switcher > app-base-map-switcher > div > div.dialogContent.white-bg.px-4.py-3.overflow-auto.position-relative.w-100.scroll-custom-color.scrollbar > div > div > div > div:nth-child(1) > div');
// await BaseMapOption.waitFor({ state: 'visible', timeout: 60000 });
// await BaseMapOption.click();
// console.log('BaseMap option selected successfully!');
// //Blank Basemap
// const BlankBaseMap = page.locator('//*[@id="Blank"]');
// await BlankBaseMap.waitFor({ state: 'visible', timeout: 60000 });
// await BlankBaseMap.click();
// console.log('Blank Basemap selected successfully!');
// // //Baladgeryorthopohoto Basemap
// // const BaladgeryorthopohotoBaseMap = page.locator('//*[@id="BaladGeryOrthopohoto"]');
// // await BaladgeryorthopohotoBaseMap.waitFor({ state: 'visible', timeout: 60000 });
// // await BaladgeryorthopohotoBaseMap.click();
// // console.log('Baladgeryorthophoto Basemap selected successfully!');


// //Close the Basemap
// const CloseBaseMap = page.locator('//*[@id="app-base-map-switcher"]/app-base-map-switcher/div/div[1]/div[2]/button[2]');
// await CloseBaseMap.waitFor({ state: 'visible', timeout: 60000 });
// await CloseBaseMap.click();
// console.log('Basemap closed successfully!');


await page.getByRole('button').first().click({ timeout: 10000 });
console.log('Property Locator closed successfully!');

await page.locator('.toolbox-3 > .mat-tooltip-trigger').click({ timeout: 10000 });
console.log('Basemap button clicked successfully!');

await page.locator('#app-base-map-switcher a').first().click({ timeout: 10000 });
console.log('Basemap option selected successfully!');

await page.locator('#app-base-map-switcher a').nth(3).click({ timeout: 10000 });
console.log('Blank Basemap selected successfully!');

await page.locator('#app-base-map-switcher a').nth(1).click({ timeout: 10000 });
console.log('Baladgeryorthopohoto Basemap selected successfully!');

await page.getByRole('button').nth(1).click({ timeout: 10000 });
console.log('Basemap closed successfully!');

  await page.close();
  console.log('Page closed successfully!');
  console.log('Test completed successfully!');
});