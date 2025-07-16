
import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Next and Back History functionality', async ({ page }) => {
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
  console.log('Closed the Property Locator')


await page.locator('[id="\\30 _zoomIn"]').click({ timeout: 5000 });
console.log('Zoom In button clicked successfully!');

await page.locator('[id="\\31 _zoomOut"]').click({ timeout: 5000 });
console.log('Zoom Out button clicked successfully!');

await page.locator('[id="\\38 _back_history"]').click({ timeout: 5000 });
console.log('Back History button clicked successfully!');

await page.locator('[id="\\37 _next_history"]').click({ timeout: 5000 });
console.log('Next History button clicked successfully!');

await page.locator('[id="\\38 _back_history"]').click({ timeout: 5000 });
console.log('Back History button clicked again successfully!');

await page.locator('[id="\\37 _next_history"]').click({ timeout: 5000 });
console.log('Next History button clicked again successfully!');
});