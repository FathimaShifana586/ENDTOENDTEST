import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Inspection assessment functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });
  console.log('Navigated to login page');

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();
  console.log('Login submitted');

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');
  console.log('Logged in successfully, landed on main page');
  const propertyLocator = page.locator('.panel-heading.lang-panel-header-tools');
  await page.waitForSelector('.panel-heading.lang-panel-header-tools', { state: 'visible' });

  await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  console.log('Property Locator is visible');

  const menuButton = page.locator('#header-toggle-menu-open');
  await menuButton.waitFor({ state: 'visible', timeout: 10000 });
  await menuButton.click();
  console.log('Menu button clicked!');

  // Inspection assessment
  const selectedInspectionAssessment = page.locator('//*[@id="sub-sideMenu-a"]/div[1]/a[5]');
  await selectedInspectionAssessment.waitFor({ state: 'visible', timeout: 60000 });
  await selectedInspectionAssessment.click();
  console.log('Selected inspection assessment clicked!');

  // Open the inspection assessment
  const inspectionButton = page.locator('//*[@id="mat-tab-content-2-0"]/div/div/table/tbody/tr[1]/td[5]/button');
  await inspectionButton.waitFor({ state: 'visible', timeout: 15000 });
  await inspectionButton.click();
  console.log('Inspection assessment opened successfully');

  const openRequestButton = page.locator('//*[@id="mat-menu-panel-4"]/div/button');
  await openRequestButton.waitFor({ state: 'visible', timeout: 10000 });
  await openRequestButton.click();
  console.log('Open the Request clicked successfully');

  const closeNewAssessmentButton = page.locator('//*[@id="app-new-assessment-request"]/app-new-assessment-request/div/div/div[1]/button');
  await closeNewAssessmentButton.waitFor({ state: 'visible', timeout: 10000 });
  await closeNewAssessmentButton.click();
  console.log('New assessment request dialog closed');

  // Add the new inspection request
  const addButton = page.locator('//*[@id="app-requests"]/app-requests/div/div[1]/div[2]/button[1]').filter({ hasText: 'add' });
  await addButton.waitFor({ state: 'visible', timeout: 10000 });
  await addButton.click();

  await page.getByRole('menuitem', { name: 'New Inspection Request' }).waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('menuitem', { name: 'New Inspection Request' }).click();
  console.log('New Inspection Request selected');

  await page.getByPlaceholder('Title').waitFor({ state: 'visible', timeout: 10000 });
  await page.getByPlaceholder('Title').fill('test');

  await page.getByText('Select Employee').waitFor({ state: 'visible', timeout: 10000 });
  await page.getByText('Select Employee').click();

  await page.getByRole('option', { name: 'JHD-Waleed' }).locator('span').waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('option', { name: 'JHD-Waleed' }).locator('span').click();

  await page.getByPlaceholder('Property Id ').waitFor({ state: 'visible', timeout: 10000 });
  await page.getByPlaceholder('Property Id ').fill('1010');

  await page.getByPlaceholder('Description').waitFor({ state: 'visible', timeout: 10000 });
  await page.getByPlaceholder('Description').fill('test');

  const addRequestInfoButton = page.getByLabel('Request Information').locator('button').filter({ hasText: 'add' });
  await addRequestInfoButton.waitFor({ state: 'visible', timeout: 10000 });
  await addRequestInfoButton.click();

  const saveSaveButton = page.getByRole('button', { name: 'save Save' });
  await saveSaveButton.waitFor({ state: 'visible', timeout: 10000 });
  await saveSaveButton.click();

  const saveCreateRequestButton = page.getByRole('button', { name: 'save Create Request' });
  await saveCreateRequestButton.waitFor({ state: 'visible', timeout: 10000 });
  await saveCreateRequestButton.click();

  console.log('Inspection request created successfully');

  const closeInspectionRequestButton = page.locator('.cdk-drag > .d-flex > button:nth-child(4)');
  await closeInspectionRequestButton.waitFor({ state: 'visible', timeout: 10000 });
  await closeInspectionRequestButton.click();
  console.log('Inspection request closed successfully');
});

