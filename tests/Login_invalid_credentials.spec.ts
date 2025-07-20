import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Login validation: weak password', async ({ page }) => {
  test.setTimeout(30000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await expect(nameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeVisible();

  await nameField.fill('VW'); // invalid username
  await passwordField.fill('...'); // weak password for testing
  await loginButton.click();

  // Wait for toast error (adjust selector to match actual DOM)
  const toast = page.locator('.toast-message'); // You might need to adjust this
  await expect(toast).toBeVisible({ timeout: 5000 });

  const errorText = await toast.textContent();
  console.log(`❌ Login failed with message: "${errorText?.trim()}"`);

  // Optional assertion
  expect(errorText).toContain('Password is weak');
});
