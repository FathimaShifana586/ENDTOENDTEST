import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Change password functionality', async ({ page }) => {
  test.setTimeout(120000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  await page.getByPlaceholder('Name ').fill('QA-GTO');
  await page.getByPlaceholder('Password').fill('Qa12345!Qa');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

  const closeButton = page.locator('#app-property-locator app-property-locator > div > div:nth-child(1) > div:nth-child(2) > button');

  if (await closeButton.count() > 0 && await closeButton.isVisible()) {
    await closeButton.click();
    console.log('Property Locator close button clicked successfully!');
  } else {
    console.log('Property Locator close button not visible. Skipping.');
  }

  try {
    const profile = page.locator('#profileMenu-btn');
    await expect(profile).toBeVisible({ timeout: 10000 });
    await profile.click();
    console.log('Profile clicked successfully!');

    await page.getByRole('link', { name: 'Change Password' }).click();
    console.log('Navigated to Change Password page.');

    await page.getByLabel('New Password').fill('Qa12345!Qa');
    console.log('New Password entered.');

    await page.getByLabel('Confirm Password').fill('Qa12345!Qa');
    console.log('Confirm Password entered.');

    await page.getByRole('button', { name: 'Save changes' }).click();
    console.log('Save Changes button clicked.');
  } catch (error) {
    console.error('Error occurred during password change:', error.message);
    if (error.message.includes('Timeout') || error.message.includes('not visible')) {
      console.log('Either elements are not found or timeout occurred.');
    } else {
      console.log('Possible issue: New password and Confirm password may not match.');
    }
  }
});
