import { test, expect } from '@playwright/test';

test.skip('test property locator functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('jhd-fathima');
  await passwordField.fill('1234');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

  const propertyLocator = page.locator('.panel-heading.lang-panel-header-tools');
  await page.waitForSelector('.panel-heading.lang-panel-header-tools', { state: 'visible' });

  await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  console.log('Property Locator is visible');

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!'); 

    // Inspection assessment
    const selectedInspectionAssessment = page.locator('//*[@id="sub-sideMenu-a"]/div[1]/a[5]');
    await expect(selectedInspectionAssessment).toBeVisible({ timeout: 60000 });
    await selectedInspectionAssessment.click();
    console.log('Selected inspection assessment clicked!');

    //Open the inspection assessment
    await page.locator('//*[@id="mat-tab-content-2-0"]/div/div/table/tbody/tr[1]/td[5]/button').click();
    console.log('Inspection assessment opened successfully');
    await page.locator('//*[@id="mat-menu-panel-4"]/div/button').click();
    console.log('Open the Request clicked successfully');
    await page.locator('//*[@id="app-new-assessment-request"]/app-new-assessment-request/div/div/div[1]/button').click();
    //Add the new inspection request 
    await page.locator('//*[@id="app-requests"]/app-requests/div/div[1]/div[2]/button[1]').filter({ hasText: 'add' }).click();
    await page.getByRole('menuitem', { name: 'New Inspection Request' }).click();
    await page.getByPlaceholder('Title').click();
    await page.getByPlaceholder('Title').fill('test');
    await page.getByText('Select Employee').click();
    await page.getByRole('option', { name: 'JHD-Fathima' }).locator('span').click();
    await page.getByPlaceholder('Property Id ').click();
    await page.getByPlaceholder('Property Id ').fill('1010');
    await page.getByPlaceholder('Description').click();
    await page.getByPlaceholder('Description').fill('test');
    await page.getByLabel('Request Information').locator('button').filter({ hasText: 'add' }).click();
    await page.getByRole('button', { name: 'save Save' }).click();
    await page.getByRole('button', { name: 'save Create Request' }).click();
    console.log('Inspection request created successfully');
    await page.locator('.cdk-drag > .d-flex > button:nth-child(4)').click();
    console.log('Inspection request closed successfully');




});