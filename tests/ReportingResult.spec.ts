import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Reporting Result functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');


  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!'); 

  // Reporting Result
const reportResult = page.locator('#sub-sideMenu-a > div:nth-child(1) > a:nth-child(6)');
await expect(reportResult).toBeVisible({ timeout: 60000 });
await reportResult.click();
console.log('Report Result clicked successfully!');
await page.locator('a').filter({ hasText: 'Reporting Result' }).click();
//await page.getByRole('row', { name: 'Property List Report PDF 144607091134009005 09/01/2025 11:34 AM' }).getByRole('button').first().click();   // whenever needs to view a report it is used.

//await page.locator('//*[@id="app-pdf-reader11354"]/app-pdf-reader/div/div[1]/div[2]/button[2]').click();

await page.locator('.cdk-drag > .d-flex > button:nth-child(3)').click();
console.log('Report Result closed successfully');

});