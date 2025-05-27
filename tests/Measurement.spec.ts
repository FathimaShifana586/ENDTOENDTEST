import { test, expect } from '@playwright/test';

test.skip('test property locator functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://dev-gis-web01.jeddahalbalad.sa/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('jhd-fathima');
  await passwordField.fill('1234');
  await loginButton.click();

  await expect(page).toHaveURL('https://dev-gis-web01.jeddahalbalad.sa/Geoportal-JHD/');

  const propertyLocator = page.locator('.panel-heading.lang-panel-header-tools');
  await page.waitForSelector('.panel-heading.lang-panel-header-tools', { state: 'visible' });

  await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  console.log('Property Locator is visible');

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!'); 
//settings
const settings = page.locator('body > app-root > div > app-base > div > div:nth-child(3) > app-map-main-tools > div.position-absolute.bottom-0.end-0 > div.toolbox-2.tb-withbtn.m-4.mb-2.white-bg.rounded-5.shadow-custom > button');
await expect(settings).toBeVisible({ timeout: 60000 });
await settings.click();
console.log('Settings clicked successfully!');
//Measurement
const measurement = page.locator('//*[@id="0_measure"]'); ////*[@id="0_measure"]
await expect(measurement).toBeVisible({timeout: 60000 });  
await measurement.click();
console.log('Measurement clicked successfully!');
//Line Measurement
const lineMeasurement = page.locator('//*[@id="app-measure"]/app-measure/div/div[2]/div[1]/div[1]/button');  ////*[@id="app-measure"]/app-measure/div/div[2]/div[1]/div[1]/button
await expect(lineMeasurement).toBeVisible({ timeout: 60000 });
await lineMeasurement.click();
console.log('Line Measurement clicked successfully!');
const startPoint = { x: 21.488204, y: 39.158039 };
const endPoint = { x: 21.494114, y: 39.158932 };

// Simulate mouse interactions to draw the line
await page.mouse.move(startPoint.x, startPoint.y);
await page.mouse.down(); // Start drawing
await page.mouse.move(endPoint.x, endPoint.y);
await page.mouse.up();

//Area Measurement
const areaMeasurement = page.locator('//*[@id="app-measure"]/app-measure/div/div[2]/div[1]/div[2]/button');
await expect(areaMeasurement).toBeVisible({ timeout: 60000 });
await areaMeasurement.click();
console.log('Area Measurement clicked successfully!');
const polygonPoints = [
  { x: 100, y: 100 },
  { x: 200, y: 100 },
  { x: 200, y: 200 },
  { x: 100, y: 200 },
  { x: 100, y: 100 }, // Closing the polygon
];

// Simulate mouse interactions to draw the polygon
await page.mouse.move(polygonPoints[0].x, polygonPoints[0].y);
await page.mouse.down(); // Start drawing
for (const point of polygonPoints) {
  await page.mouse.move(point.x, point.y);
  await page.mouse.click(point.x, point.y); // Click to place vertices
}
await page.mouse.up(); // Finish drawing

//Point Measurement
const pointMeasurement = page.locator('//*[@id="app-measure"]/app-measure/div/div[2]/div[1]/div[3]/button');
await expect(pointMeasurement).toBeVisible({ timeout: 60000 });
await pointMeasurement.click();
console.log('Point Measurement clicked successfully!');
const point = { x: 21.477901, y: 39.163094 };

// Simulate a mouse click to draw the point
await page.mouse.click(point.x, point.y);
//Close the Measurement
const closeMeasurement = page.locator('//*[@id="app-measure"]/app-measure/div/div[1]/div[2]/button[2]'); 
await expect(closeMeasurement).toBeVisible({ timeout: 60000 });  
await closeMeasurement.click();
console.log('Close Measurement clicked successfully!');


});