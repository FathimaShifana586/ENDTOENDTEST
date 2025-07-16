import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Zoomtoextend functionality', async ({ page }) => {
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

  await page.locator('//*[@id="app-property-locator"]/app-property-locator/div/div[1]/div[2]/button').click();
  console.log('Property Locator is closed')



  await page.locator('[id="\\32 _fullExtent"]').click();
  await page.locator('[id="\\32 _fullExtent"]').click();
  
  await page.getByRole('link', { name: 'Layers' }).click();
  await page.locator('#sub-sideMenu').getByText('Heritage Classification').click();
  await page.getByRole('treeitem', { name: 'Non Heritage 1', exact: true }).getByRole('button').nth(1).click();
});