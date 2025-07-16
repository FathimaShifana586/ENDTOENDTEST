
import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Property locator functionality', async ({ page }) => {
  test.setTimeout(120000);

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
  
// Open Property Locator
await page.locator('[id="\\35 _property_locator"]').click({ timeout: 5000 });
console.log('Property Locator opened.');

// Fill Property ID
await page.locator('div').filter({ hasText: /^Property ID:$/ }).getByRole('spinbutton').click({ timeout: 5000 });
await page.locator('div').filter({ hasText: /^Property ID:$/ }).getByRole('spinbutton').fill('1010', { timeout: 5000 });
console.log('Property ID filled.');

// Fill Entity Name
await page.locator('div').filter({ hasText: /^Entity Name:$/ }).getByRole('textbox').click({ timeout: 5000 });
await page.locator('div').filter({ hasText: /^Entity Name:$/ }).getByRole('textbox').fill('1', { timeout: 5000 });
console.log('Entity Name filled.');

// Fill Street Name
await page.locator('div').filter({ hasText: /^Street Name:$/ }).getByRole('textbox').click({ timeout: 5000 });
await page.locator('div').filter({ hasText: /^Street Name:$/ }).getByRole('textbox').fill('1', { timeout: 5000 });
console.log('Street Name filled.');

// Fill Floor Count
await page.locator('div').filter({ hasText: /^Floor Count:$/ }).getByRole('spinbutton').click({ timeout: 5000 });
await page.locator('div').filter({ hasText: /^Floor Count:$/ }).getByRole('spinbutton').fill('1', { timeout: 5000 });
console.log('Floor Count filled.');

// Fill Built Up Area
await page.locator('div').filter({ hasText: /^Built Up Area:$/ }).getByRole('textbox').click({ timeout: 5000 });
await page.locator('div').filter({ hasText: /^Built Up Area:$/ }).getByRole('textbox').fill('1', { timeout: 5000 });
console.log('Built Up Area filled.');

// Fill Heritage Value
await page.locator('div').filter({ hasText: /^Heritage Value:$/ }).getByRole('textbox').click({ timeout: 5000 });
await page.locator('div').filter({ hasText: /^Heritage Value:$/ }).getByRole('textbox').fill('1', { timeout: 5000 });
console.log('Heritage Value filled.');

// Click first Select button
await page.locator('.c-btn').first().click({ timeout: 5000 });
console.log('First dropdown opened.');

// Select All from first dropdown
await page.getByText('Select AllUnSelect All').first().click({ timeout: 5000 });
console.log('Select All clicked from first dropdown.');

// Click additional dropdowns
await page.locator('div:nth-child(9) > .row > .col-sm-1').click({ timeout: 5000 });
console.log('9th child dropdown opened.');

await page.locator('div:nth-child(8) > .row > .col-sm-10 > .border-0 > .cuppa-dropdown > .selected-list > .c-btn').click({ timeout: 5000 });
console.log('8th child dropdown opened.');

await page.getByText('Select AllUnSelect All').nth(1).click({ timeout: 5000 });
console.log('Select All clicked from second dropdown.');

await page.locator('div').filter({ hasText: /^Street Name:$/ }).click({ timeout: 5000 });
console.log('Street Name dropdown clicked.');

await page.locator('div').filter({ hasText: /^Select$/ }).nth(1).click({ timeout: 5000 });
console.log('Select clicked from Heritage Classification.');

await page.getByText('Select AllUnSelect All').nth(2).click({ timeout: 5000 });
console.log('Select All clicked from third dropdown.');

await page.locator('div').filter({ hasText: /^Heritage Classification:SelectSelect AllUnSelect AllNAHeritageModern$/ }).nth(1).click({ timeout: 5000 });
console.log('Heritage Classification section clicked.');

await page.locator('div').filter({ hasText: /^Select$/ }).nth(1).click({ timeout: 5000 });
console.log('Select dropdown opened.');

await page.locator('li').filter({ hasText: /^Heritage$/ }).click({ timeout: 5000 });
console.log('Heritage option selected.');

// Click Highlight button
await page.getByRole('button', { name: 'Highlight' }).click({ timeout: 5000 });
console.log('Highlight button clicked.');

// Click on Advanced Search
await page.getByText('Advanced Search', { exact: true }).click({ timeout: 5000 });
console.log('Advanced Search clicked.');

// Select layer type
await page.locator('#mat-select-value-47').click({ timeout: 5000 });
console.log('Layer type dropdown opened.');

await page.getByRole('option', { name: 'Historical Property' }).locator('span').click({ timeout: 5000 });
console.log('Historical Property option selected.');

// Select filter field
await page.locator('#mat-select-value-49').click({ timeout: 5000 });
console.log('Filter field dropdown opened.');

await page.getByRole('option', { name: 'Property ID' }).locator('span').click({ timeout: 5000 });
console.log('Property ID filter selected.');

// Click to open operator dropdown
await page.getByLabel('Advanced Search').locator('app-gis-filter span').first().click({ timeout: 5000 });
console.log('Operator dropdown opened.');

// Select spatial method
await page.getByRole('combobox', { name: 'Please Select' }).locator('div').nth(2).click({ timeout: 5000 });
console.log('Spatial method dropdown opened.');

await page.getByRole('option', { name: 'Map Extent' }).locator('span').click({ timeout: 5000 });
console.log('Map Extent selected.');

// Click on Search button
await page.getByRole('button', { name: 'Search' }).click({ timeout: 5000 });
console.log('Search button clicked.');




});