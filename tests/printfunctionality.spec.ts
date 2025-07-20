import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Print functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

  await page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button').click();
  console.log('Property Locator is closed')

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!');
  
  //Print
const Print = page.locator('#printFeatures_ahref'); 
await expect(Print).toBeVisible({ timeout: 60000 });
await Print.click();
console.log('print clicked successfully!');

const downloadPromise = page.waitForEvent('download');
await page.getByText('download Download').click();
const download = await downloadPromise;
await page.getByText('print Print').click();
  
await page.locator('app-print button').nth(1).click(); 

 });
