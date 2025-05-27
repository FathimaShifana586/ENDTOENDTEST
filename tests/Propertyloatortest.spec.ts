
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

  // const propertyLocator = page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button');
  // await page.waitForSelector('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button', { state: 'visible' });

  // await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  // console.log('Property Locator is visible');
  //await page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button').click();

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!');
   //Property Locator
   const PropertyLocator = page.locator('//*[@id="5_property_locator"]');
   await expect(PropertyLocator).toBeVisible({ timeout: 60000 });
   await PropertyLocator.click();
   console.log('Property Locator clicked successfully!');
   
 
   await page.locator('div').filter({ hasText: /^Property ID:$/ }).getByRole('spinbutton').click();
   await page.locator('div').filter({ hasText: /^Property ID:$/ }).getByRole('spinbutton').fill('1010');
   await page.locator('div').filter({ hasText: /^Entity Name:$/ }).getByRole('textbox').click();
   await page.locator('div').filter({ hasText: /^Entity Name:$/ }).getByRole('textbox').fill('a');
   await page.locator('div').filter({ hasText: /^Street Name:$/ }).getByRole('textbox').click();
   await page.locator('div').filter({ hasText: /^Street Name:$/ }).getByRole('textbox').fill('1');
   await page.locator('div').filter({ hasText: /^Floor Count:$/ }).getByRole('spinbutton').click();
   await page.locator('div').filter({ hasText: /^Floor Count:$/ }).getByRole('spinbutton').fill('1');
   await page.locator('div').filter({ hasText: /^Area:$/ }).getByRole('textbox').click();
   await page.locator('div').filter({ hasText: /^Area:$/ }).getByRole('textbox').fill('1');
   await page.locator('div').filter({ hasText: /^Built Up Area:$/ }).getByRole('textbox').click();
   await page.locator('div').filter({ hasText: /^Built Up Area:$/ }).getByRole('textbox').fill('1');
   await page.locator('div').filter({ hasText: /^Heritage Value:$/ }).getByRole('textbox').click();
   await page.locator('div').filter({ hasText: /^Heritage Value:$/ }).getByRole('textbox').fill('1');
   await page.locator('.c-btn').first().click();
   const propertyType = page.locator('text=Building');
   await propertyType.click();
   console.log('Property Type clicked!');
  

  await page.locator('//*[@id="mat-tab-content-1-0"]/div/div/div[1]/div[9]/div/div[1]/angular2-multiselect/div/div[1]/div').click();
  const PropertyUse = page.locator('text=Health');
  await PropertyUse.click();
  console.log('Property Use clicked!');
  
  await page.locator('//*[@id="mat-tab-content-1-0"]/div/div/div[1]/div[10]/div/div[1]/angular2-multiselect/div/div[1]/div').click();
  const Expropriation = page.locator('text=None');
  await Expropriation.click();
 
  console.log('Expropriation clicked!');
  
await page.locator('//*[@id="mat-tab-content-1-0"]/div/div/div[1]/div[11]/div/div[1]/angular2-multiselect/div/div[1]/div').click();
 const HeritageClassification = page.locator('text=Modern');
 await HeritageClassification.click();
 console.log('Heritage Classification clicked!');
 await page.getByRole('button', { name: 'Highlight' }).click();

 //print
 const Print = page.locator('#printFeatures_ahref'); ////*[@id="printFeatures_ahref"]
await expect(Print).toBeVisible({ timeout: 60000 });
await Print.click();
console.log('print clicked successfully!');

const downloadPromise = page.waitForEvent('download');
await page.getByText('download Download').click();
const download = await downloadPromise;
await page.getByText('print Print').click();
  
await page.locator('app-print button').nth(1).click(); 


});