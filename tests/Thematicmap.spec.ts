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

//Thematic map
const selectedThematicMap = page.locator('#thematicMapFeature_ahref');  
await expect(selectedThematicMap).toBeVisible({ timeout: 60000 });  
await selectedThematicMap.click();  
console.log('Selected thematic map clicked!');

// const thematicMapIsSelected = page.locator('#thematicMapFeature_ahref.active');
// await expect(thematicMapIsSelected).toBeVisible({ timeout: 60000 });
// console.log('Thematic map is successfully selected!');

//select the asset type from dropdown list

await page.locator('#mat-select-value-47').click();
await page.getByRole('option', { name: 'Asset Type' }).click();

await page.locator('.mat-slide-toggle-bar').click();
await page.getByText('visibilityShow').click();
console.log('Assets clicked successfully');
await page.locator('app-thematic-feature-map button').nth(1).click();
await page.getByRole('menuitem', { name: 'Close' }).click();
console.log('close the Thematic Map');
});