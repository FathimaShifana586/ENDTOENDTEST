
import { test, expect } from '@playwright/test';
import { Console, log } from 'console';
test.use({  
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
});

test.skip('Draw Feature functionality', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.gto-portal.com/Geoportal-JHD/login', { waitUntil: 'networkidle' });

  const nameField = page.getByPlaceholder('Name ');
  const passwordField = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await nameField.fill('QA-GTO');
  await passwordField.fill('Qa12345!Qa');
  await loginButton.click();

  await expect(page).toHaveURL('https://www.gto-portal.com/Geoportal-JHD/');

  const propertyLocator = page.locator('.panel-heading.lang-panel-header-tools');
  await page.waitForSelector('.panel-heading.lang-panel-header-tools', { state: 'visible' });

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!'); 
//settings
const settings = page.locator('body > app-root > div > app-base > div > div:nth-child(3) > app-map-main-tools > div.position-absolute.bottom-0.end-0 > div.toolbox-2.tb-withbtn.m-4.mb-2.white-bg.rounded-5.shadow-custom > button');
await expect(settings).toBeVisible({ timeout: 60000 });
await settings.click();
console.log('Settings clicked successfully!');

// Draw Feature
const drawFeature = page.locator('//*[@id="1_draw"]');       
await expect(drawFeature).toBeVisible({ timeout: 60000 });
await drawFeature.click();
console.log('Draw Feature clicked successfully!');
//Draw Point
const drawPoint = page.locator('//*[@id="0_point"]');
await expect(drawPoint).toBeVisible({ timeout: 60000 });
await drawPoint.click();
console.log('Draw Point clicked successfully!');

// Coordinates for the point
const point = { x: 21.477901, y: 39.163094 };

// Simulate a mouse click to draw the point
await page.mouse.click(point.x, point.y);

// Keep the browser open for observation
await page.waitForTimeout(5000);


//Draw Line
const drawLine = page.locator('//*[@id="1_line"]');
await expect(drawLine).toBeVisible({ timeout: 60000 });
await drawLine.click();
console.log('Draw Line clicked successfully!');

 // Coordinates for the line
 const startPoint = { x: 150, y: 150 };
 const endPoint = { x: 300, y: 300 };

 // Simulate mouse interactions to draw the line
 await page.mouse.move(startPoint.x, startPoint.y);
 await page.mouse.down(); // Start drawing
 await page.mouse.move(endPoint.x, endPoint.y);
 await page.mouse.up(); // Finish drawing

 // Keep the browser open for observation
 await page.waitForTimeout(5000);

//Draw Polygon
const drawPolygon = page.locator('//*[@id="2_polygon"]');
await expect(drawPolygon).toBeVisible({ timeout: 60000 });
await drawPolygon.click();
console.log('Draw Polygon clicked successfully!');
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

// Keep the browser open for observation
await page.waitForTimeout(5000);

// modify Feature
const modifyFeature = page.locator('//*[@id="3_modify"]');
await expect(modifyFeature).toBeVisible({ timeout: 60000 });
await modifyFeature.click();
console.log('Modify Feature clicked successfully!');

// Text
const text = page.locator('//*[@id="4_addText"]');
await expect(text).toBeVisible({ timeout: 60000 });
await text.click();
console.log('Text clicked successfully!');
//Close Draw Feature
const closeDrawFeature = page.locator('//*[@id="app-draw-vector"]/app-draw-vector/div/div[1]/div[2]/button[2]');
await expect(closeDrawFeature).toBeVisible({ timeout: 60000 });
await closeDrawFeature.click();
console.log('Close Draw Feature clicked successfully!');
});