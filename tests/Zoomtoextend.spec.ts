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
  console.log('Menu button clicked!');  //

  const selectedLayer = page.locator('#rightsection_ahref');  
  await expect(selectedLayer).toBeVisible({ timeout: 10000 });  
  await selectedLayer.click();  
  console.log('Selected layer clicked!');

  const layerIsSelected = page.locator('#rightsection_ahref.active');
  console.log('Layer is successfully selected!'); 
//   //select the zoom to extend button
//   const zoomToExtendButto1= page.locator(
//     '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(5) > li > ul > mat-tree-node:nth-child(3) > li > div > div.row.d-flex.justify-content-between.align-items-center > div.col-xl-4.d-flex.align-items-center > button:nth-child(1)'
//   );

//   // Wait for the button to be attached to the DOM
//   await page.waitForSelector(
//     '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(5) > li > ul > mat-tree-node:nth-child(3) > li > div > div.row.d-flex.justify-content-between.align-items-center > div.col-xl-4.d-flex.align-items-center > button:nth-child(1)', 
//     { state: 'attached', timeout: 30000 }
//   );

//   // Scroll into view to ensure the button is interactable
//   await zoomToExtendButto1.scrollIntoViewIfNeeded();

//   // Check visibility before clicking
//   await expect(zoomToExtendButto1).toBeVisible({ timeout: 10000 });

//   // Click the button
//   await zoomToExtendButto1.click();
//   console.log('"Zoom to Extend" button clicked successfully!');

  //Select the "MyLayer"
 const MyLayer=page.locator(
    '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(6) > li > div > div'
   );
  await expect(MyLayer).toBeVisible({ timeout: 10000 });
  await MyLayer.click();
  console.log('"MyLayer" selected successfully!');
  await page.evaluate(() => window.scrollBy(0, -100));
  
  //select "my drawing layer"
  const MyDrawingLayer = page.locator('#mat-checkbox-15 > label');
  await expect(MyDrawingLayer).toBeVisible({ timeout : 60000});
  console.log('"MyDrawing Layer" layer checkbox clicked!');
  //wait for the map changes after selecting "My Drawing Layer"
  const MyDrawingLayerChange= page.locator('.map-container .mydrawinglayer-layer-changed');
  console.log('map changes reflected after selecting the "My Drawing Layer"');
  
  //Select the "Infrastructure"
  const Infrastructure=page.locator(
    '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(7) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
   );
  await expect(Infrastructure).toBeVisible({ timeout: 10000});
  await Infrastructure.click();
  console.log('"Infrastructure" selectde successfully');
  //Select the "Telecommunication" as Layer
  const Telecommunication = page.locator('#mat-checkbox-26 > label');
  await expect(Telecommunication).toBeVisible({timeout: 60000});
  console.log('"Telecommunication" Layer checkbox clicked');
  //wait for the map changes after selecting the "Telecommunication"
  const TelecommunicationChange =page.locator('.map-container .mydrawinglayer-layer-changed');
  console.log('map changes reflected after selecting the "Telecommunication"');
  //Select the "MasterPlan"
  const Masterplan=page.locator(
    '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(8) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
   );
  await expect(Masterplan).toBeVisible({timeout : 10000});         
  await Masterplan.click();
  console.log('"Infrastructure" selectrd successfully');
  //Select the "Roads_polygon" as Layer
  const RoadsPolygon = page.locator('#mat-checkbox-75 > label');
  await expect(RoadsPolygon).toBeVisible({timeout: 60000});
  console.log('"RoadsPolygon" Layer checkbox clicked');
  // wait for the map changes after selecting the "RoadsPolygon"
  const RoadsPolygonChange= page.locator ('.map-container .RoadsPolygon-layer-changed');
  console.log('map changes reflected after selecting the "RoadsPolygon"');
  
  // Select the Extracted Buildings
  const ExtractedBuildings=page.locator('#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(9) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
  );
  await expect(ExtractedBuildings).toBeVisible({timeout : 10000});
  await ExtractedBuildings.click();
  console.log('"ExtractedBuildings" Selected Successfully');
  //Select the "Extracted Building" as Layer
  const ExtractedBuilding = page.locator('#mat-checkbox-76 > label');
  await expect(ExtractedBuilding).toBeVisible({timeout: 60000});
  console.log('map changes reflected aftre selecting the "Extracted Builidng"');
  //wait for the map changes after selecting he extracted Building
  const ExtractedBuildingChange= page.locator('.map-conatainer .ExtractedBuildings-layer-changed');
  console.log('map changes refelected after selecting the "extracted Building"');

   /// Select the "Zoom to Extend" button
   const zoomToExtendButton = page.locator(
    '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(9) > li > ul > mat-tree-node > li > div > div.row.d-flex.justify-content-between.align-items-center > div.col-xl-4.d-flex.align-items-center > button:nth-child(1)'
  );

  // Wait for the button to be attached to the DOM
  await page.waitForSelector(
    '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(9) > li > ul > mat-tree-node > li > div > div.row.d-flex.justify-content-between.align-items-center > div.col-xl-4.d-flex.align-items-center > button:nth-child(1)', 
    { state: 'attached', timeout: 30000 }
  );

  // Scroll into view to ensure the button is interactable
  await zoomToExtendButton.scrollIntoViewIfNeeded();

  // Check visibility before clicking
  await expect(zoomToExtendButton).toBeVisible({ timeout: 10000 });

  // Click the button
  await zoomToExtendButton.click();
  console.log('"Zoom to Extend" button clicked successfully!');
  await page.getByRole('button').first().click();

});