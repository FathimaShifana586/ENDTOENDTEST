
import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Settings  functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

 
// Open toolbox
await page.locator('.toolbox-2 > button').click({ timeout: 5000 });
console.log('Toolbox opened.');

// Click Measure tool
await page.locator('[id="\\30 _measure"]').click({ timeout: 5000 });
console.log('Measure tool clicked.');

// Click the second button (likely a measure option)
await page.getByRole('button').nth(1).click({ timeout: 5000 });
console.log('Second measure option clicked.');

// Click Draw tool
await page.locator('[id="\\31 _draw"]').click({ timeout: 5000 });
console.log('Draw tool clicked.');

// Click close on draw tool popup
await page.locator('.cdk-drag > .d-flex > button:nth-child(2)').click({ timeout: 5000 });
console.log('Draw tool popup closed.');

// Click Remove All Features
await page.locator('[id="\\32 _removeAllFeatures"]').click({ timeout: 5000 });
console.log('Remove All Features clicked.');

// Click Cancel
await page.getByRole('button', { name: 'Cancel' }).click({ timeout: 5000 });
console.log('Cancel button clicked.');

// Click Draw Features For Layer
await page.locator('[id="\\33 _drawFeaturesForLayer"]').click({ timeout: 5000 });
console.log('Draw Features For Layer clicked.');

// Click the first button (likely related to drawing)
await page.getByRole('button').first().click({ timeout: 5000 });
console.log('First drawing button clicked.');

// Click Layer Order
await page.locator('[id="\\34 _navMenu_layerOrder"]').click({ timeout: 5000 });
console.log('Layer Order tool opened.');

// Close the Layer Order popup
await page.locator('.cdk-drag > .d-flex > button:nth-child(2)').click({ timeout: 5000 });
console.log('Layer Order popup closed.');

// Click Zoom to XY
await page.locator('[id="\\35 _navMenu_zoomToXy"]').click({ timeout: 5000 });
console.log('Zoom to XY clicked.');

// Close the Zoom to XY popup
await page.locator('.cdk-drag > .d-flex > button:nth-child(2)').click({ timeout: 5000 });
console.log('Zoom to XY popup closed.');

// Click Bookmarks
await page.locator('[id="\\36 _bookmarks"]').click({ timeout: 5000 });
console.log('Bookmarks clicked.');

// Close the Bookmarks popup
await page.locator('.cdk-drag > .d-flex > button:nth-child(2)').click({ timeout: 5000 });
console.log('Bookmarks popup closed.');

// Close toolbox
await page.locator('.toolbox-2 > button').click({ timeout: 5000 });
console.log('Toolbox closed.');

});
