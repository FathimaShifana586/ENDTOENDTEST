import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Login functionality', async ({ page }) => {
  test.setTimeout(30000);

  // Catch console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error(`Console error: ${msg.text()}`);
    }
  });

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await expect(nameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeVisible();

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa'); // Incorrect password for testing

  await loginButton.click();

  // ✅ Wait briefly for login response (not navigation)
  await page.waitForTimeout(2000);

  const loginError = page.locator('.toast-message'); // or use actual error selector

  if (await loginError.isVisible()) {
    const errorText = await loginError.textContent();
    console.error(`❌ Login failed with message: ${errorText}`);
  } else {
    // Check successful login by URL
    await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');
    console.log('✅ Login successful!');
  }
});
