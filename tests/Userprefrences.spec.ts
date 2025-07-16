import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('UserPrefrence functionality', async ({ page }) => {
  test.setTimeout(120000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

//profile
const profile = page.locator('//*[@id="profileMenu-btn"]');
await expect(profile).toBeVisible({ timeout: 60000 });
await profile.click();
console.log('Profile clicked successfully!');

// Click on "User Preferences"
await page.getByRole('link', { name: 'User Preferences' }).click({ timeout: 5000 });
console.log('"User Preferences" clicked.');

// Click on checkbox (with safe check in case it's not visible immediately)
const checkbox = page.locator('.mat-checkbox-inner-container');
if (await checkbox.isVisible({ timeout: 3000 }).catch(() => false)) {
  await checkbox.click({ timeout: 5000 });
  console.log('Checkbox toggled.');
} else {
  console.log('Checkbox not visible. Skipping toggle.');
}

// Click on "Save" button
await page.getByRole('button', { name: 'save Save' }).click({ timeout: 5000 });
console.log('"Save" button clicked. Preferences should be saved.');


});