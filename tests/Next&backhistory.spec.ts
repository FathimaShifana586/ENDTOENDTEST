
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

  // const propertyLocator = page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button');
  // await page.waitForSelector('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button', { state: 'visible' });

  // await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  // console.log('Property Locator is visible');
  await page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button').click();

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!'); 
//settings

const settings = page.locator('body > app-root > div > app-base > div > div:nth-child(3) > app-map-main-tools > div.position-absolute.bottom-0.end-0 > div.toolbox-2.tb-withbtn.m-4.mb-2.white-bg.rounded-5.shadow-custom > button');
await expect(settings).toBeVisible({ timeout: 60000 });
await settings.click();
console.log('Settings clicked successfully!');
//Next History
await page.locator('//*[@id="7_next_history"]').click();
// const nextHistory = page.locator('//*[@id="7_next_history"]');
// await expect(nextHistory).toBeVisible({ timeout: 60000 });
// await nextHistory.click();
console.log('Next History clicked successfully!');
 //Back History
 const backHistory = page.locator('//*[@id="8_back_history"]');
 await expect(backHistory).toBeVisible({ timeout: 60000 });
 await backHistory.click();
 console.log('Back History clicked successfully!');
});