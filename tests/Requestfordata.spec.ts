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

  // Request for data
    const requestForData = page.locator('#sub-sideMenu-a > div:nth-child(1) > a:nth-child(4)');  ////*[@id="sub-sideMenu-a"]/div[1]/a[4]
    await expect(requestForData).toBeVisible({ timeout: 60000 });
    await requestForData.click();
    console.log('Request for data clicked!');
    

//My request
const myRequestButton = page.locator('#mat-tab-content-2-0 > div > div.position-relative.w-100.scroll-custom-color.p-1.scrollbar.ng-star-inserted > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-Actions.mat-column-Actions.ng-star-inserted > button');
await expect(myRequestButton).toBeVisible({ timeout: 10000 });
await myRequestButton.click();
console.log('My request clicked successfully'); //



const showComments = page.locator('//*[@id="mat-menu-panel-4"]/div/button[2]');
await showComments.click();  //
//await page.locator('#app-show-request-comment-dialog_1224633 > app-show-request-comment-dialog > div > div > div.cdk-drag.cdk-drag-handle.cursor-move.cardheader.gold-h-bg.d-flex.justify-content-between.px-3.py-2.align-items-center.montserrat-smeibold > button').click();
const MyRequestButton = page.locator('#mat-tab-content-2-0 > div > div.position-relative.w-100.scroll-custom-color.p-1.scrollbar.ng-star-inserted > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-Actions.mat-column-Actions.ng-star-inserted > button');
await expect(MyRequestButton).toBeVisible({ timeout: 10000 });
await MyRequestButton.click();
console.log('My request clicked successfully');

const show = page.locator('//*[@id="mat-menu-panel-4"]/div/button[1]');
await show.click();
console.log('Show clicked successfully');
await page.locator('//*[@id="mat-dialog-0"]/kt-delete-entity-dialog/div/div[2]/div[2]/button[2]').click();

//New Request
  await page.locator('#request-for-data-list button').filter({ hasText: 'add' }).click();
  await page.getByRole('menuitem', { name: 'New Data Request' }).click();
  await page.locator('#mat-select-value-55').click();
  await page.getByRole('option', { name: 'Keyhole Markup Language - KML' }).locator('span').click();
  await page.locator('#app-request-for-data').getByRole('textbox').click();
  await page.locator('#app-request-for-data').getByRole('textbox').fill('test');
  await page.getByRole('button', { name: 'Request' }).click()
  console.log('New Request for data created successfully');

  await page.locator('.cdk-drag > .d-flex > button:nth-child(4)').click();  
  console.log('Closed the Request for data successfully');// closed the request for data
});