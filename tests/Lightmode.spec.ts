import { test, expect } from '@playwright/test';
import { Console } from 'console';

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

  // const propertyLocator = page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button');
  // await page.waitForSelector('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button', { state: 'visible' });

  // await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  // console.log('Property Locator is visible');
  await page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button').click();

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!');
   //profile
   const profile = page.locator('//*[@id="profileMenu-btn"]');
   await expect(profile).toBeVisible({ timeout: 60000 });
   await profile.click();
   console.log('Profile clicked successfully!');
   //light mode
   const lightMode = page.locator('//*[@id="profileMenu"]/a[2]');
   await expect(lightMode).toBeVisible({ timeout: 60000 });
   await lightMode.click();
   console.log('Light Mode clicked successfully!');

   //click the save changes button
//await page.locator('#mat-dialog-1 > kt-delete-entity-dialog > div > div.dialogContent.white-bg.px-3.py-3.w-100 > div.button-direction > button:nth-child(2)').click();
  await page.locator('//*[@id="mat-dialog-0"]/kt-delete-entity-dialog/div/div[2]/div[2]/button[2]').click();
  await page.waitForTimeout(10000);
  console.log('Save changes button clicked successfully!');

});
