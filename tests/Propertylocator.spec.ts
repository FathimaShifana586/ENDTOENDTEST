
import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Property locator functionality', async ({ page }) => {
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
   //Property Locator
   const PropertyLocator = page.locator('//*[@id="5_property_locator"]');
   await expect(PropertyLocator).toBeVisible({ timeout: 60000 });
   await PropertyLocator.click();
   console.log('Property Locator clicked successfully!');
 
   await page.locator('div').filter({ hasText: /^Property ID:$/ }).getByRole('spinbutton').click();
   await page.locator('div').filter({ hasText: /^Property ID:$/ }).getByRole('spinbutton').fill('1010');
   await page.getByRole('button', { name: 'Highlight' }).click();
});