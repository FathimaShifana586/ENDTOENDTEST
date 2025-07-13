

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

  // const propertyLocator = page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button');
  // await page.waitForSelector('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button', { state: 'visible' });

  // await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  // console.log('Property Locator is visible');
  //await page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button').click();

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!');
   //Identify Feature
   const identifyFeature = page.locator('//*[@id="6_identifyFeatures"]');  ////*[@id="6_identifyFeatures"]
   await expect(identifyFeature).toBeVisible({ timeout: 60000 });
   await identifyFeature.click();
   console.log('Identify Feature clicked successfully!');
   await page.locator('canvas').click({
     position: {
         x: 601,
         y: 142
     }
   });
   console.log('Identify Feature clicked successfully!');
   await page.locator('//*[@id="app-identify-result"]/app-identify-result/div/div[1]/div[2]/button[3]').click();
   //Close Identify Feature
   const closeIdentifyFeature = page.locator('//*[@id="app-identify-result"]/app-identify-result/div/div[1]/div[2]/button[4]');
   await expect(closeIdentifyFeature).toBeVisible({ timeout: 60000 });
   await closeIdentifyFeature.click();
   console.log('Close Identify Feature clicked successfully!');
});