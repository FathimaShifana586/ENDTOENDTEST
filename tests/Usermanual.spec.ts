import { test, expect } from '@playwright/test';
import { Console, time } from 'console';
test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('UserManual functionality', async ({ page }) => {
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
   //profile
   const profile = page.locator('//*[@id="profileMenu-btn"]');
   await expect(profile).toBeVisible({ timeout: 60000 });
   await profile.click();
   console.log('Profile clicked successfully!');
   //user manual
const userManual = page.locator('//*[@id="profileMenu"]/a[4]');
await expect(userManual).toBeVisible({ timeout: 60000 });
await userManual.click();
console.log('User Manual clicked successfully!');
//close the user manual
//await page.locator('#app-pdf-reader14718 > app-pdf-reader > div > div.cdk-drag.cdk-drag-handle.cursor-move.cardheader.gold-h-bg.d-flex.justify-content-between.px-3.py-2.align-items-center.montserrat-smeibold > div.d-flex.align-items-center > button.mat-tooltip-trigger.lh-0.cleanbtn.close-btn.ms-2.w-1.rounded-2').click();
console.log('User Manual closed successfully!');
});