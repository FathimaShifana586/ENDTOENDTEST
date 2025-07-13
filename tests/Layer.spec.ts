import { test, expect } from '@playwright/test';
import { Console,log } from 'console';
test.use({  
   ignoreHTTPSErrors: true,
   screenshot: 'only-on-failure',
   });

test.skip('Layer  functionality', async ({ page }) => {
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

  await expect(propertyLocator).toBeVisible({ timeout: 10000 });
  console.log('Property Locator is visible');

  const menuButton = page.locator('#header-toggle-menu-open'); 
  await expect(menuButton).toBeVisible({ timeout: 10000 });  
  await menuButton.click();  
  console.log('Menu button clicked!');

  const selectedLayer = page.locator('#rightsection_ahref');  
  await expect(selectedLayer).toBeVisible({ timeout: 10000 });  
  await selectedLayer.click();  
  console.log('Selected layer clicked!');

  const layerIsSelected = page.locator('#rightsection_ahref.active');
  console.log('Layer is successfully selected!');
  
   //Select the "Expropriation list" layer
  const expropiationlayer = page.locator(
    '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(1) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
  );

  await expect(expropiationlayer).toBeVisible({ timeout: 10000 }); 
  await expropiationlayer.click(); 
  console.log('"Expropriation layer" selected successfully!');

  /// Select the "Private Assets" layer

  const privateAssetsCheckbox = page.locator('#mat-checkbox-1 > label');       
  await expect(privateAssetsCheckbox).toBeVisible({ timeout: 60000 }); 
 await privateAssetsCheckbox.click(); 
  console.log('"Private Assets" layer checkbox clicked!');
 

  /// Wait for map changes after selecting "Private Assets"
//  const privateAssetsLayerChange = page.locator('.map-container .private-assets-layer-changed'); 
//  await expect(privateAssetsLayerChange).toBeVisible({ timeout: 60000}); 
//   console.log('Map changes reflected after selecting "Private Assets" layer.');

      
//   /// Select the "JHD Assets" layer
//  const jhdAssetsCheckbox = page.locator('#mat-checkbox-2 > label');
//   await expect(jhdAssetsCheckbox).toBeVisible({ timeout: 60000 }); 
// await jhdAssetsCheckbox.click(); 
// console.log('"JHD Assets" layer checkbox clicked!');

//   /// Wait for map changes after selecting "JHD Assets"
//  const jhdAssetsLayerChange = page.locator('.map-container .jhd-assets-layer-changed'); 
 
//   await expect(jhdAssetsLayerChange).toBeVisible({ timeout: 10000 }); 
//   console.log('Map changes reflected after selecting "JHD Assets" layer.');

//   /// Select the "BDC to JHD Assets" layer 
//  const bdcToJhdAssetsCheckbox = page.locator('#mat-checkbox-3 > label');
//   await expect(bdcToJhdAssetsCheckbox).toBeVisible({ timeout: 60000 }); 
//  await bdcToJhdAssetsCheckbox.click(); 
//  console.log('"BDC to JHD Assets" layer checkbox clicked!');

//   /// Wait for map changes after selecting "BDC to JHD Assets"
//   const bdcToJhdAssetsLayerChange = page.locator('.map-container .bdc-to-jhd-assets-layer-changed'); 
//   console.log('Map changes reflected after selecting "BDC to JHD Assets" layer.');

//   // Select the "Public Assets" layer
//  const publicAssetsCheckbox = page.locator('#mat-checkbox-4 > label');
//   await expect(publicAssetsCheckbox).toBeVisible({ timeout: 60000 });
//  await publicAssetsCheckbox.click();
// console.log('"Public Assets" layer checkbox clicked!');

//   // Wait for map changes after selecting "Public Assets"
//   const publicAssetsLayerChange = page.locator('.map-container .public-assets-layer-changed');
// console.log('Map changes reflected after selecting "Public Assets" layer.');

//   //Select the "BDC Assests" layer
//   const bdcAssestsCheckbox = page.locator('#mat-checkbox-5 > label');
//   await expect(bdcAssestsCheckbox).toBeVisible({ timeout: 60000 });
// console.log('"BDC Assests" layer checkbox clicked!');

//   //Wait for map changes after selecting "BDC Assests"
//  const bdcAssestsLayerChange = page.locator('.map-contaier .bdc-assets-layer-changed');
//  console.log('Map changes reflected after selecting "BDC Assests" layer.');

  // Select the "Heritage Classification" layer
  const HeritageLocator = page.locator(
    '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(2) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
  );

  await expect(HeritageLocator).toBeVisible({ timeout: 10000 }); 
  await HeritageLocator.click(); 
  console.log('"HeritageLocator Layer " selected successfully!');

  
  //Select the "non heritage" layer
  const nonheritageCheckbox= page.locator('#mat-checkbox-6 > label');
  await expect(nonheritageCheckbox).toBeVisible({ timeout: 60000 });
  console.log('"Non heritage" layer checkbox clicked!');

  //Wait for map changes after selecting "Non heritage "
  const nonheritageLayerChange = page.locator('.map-contaier .nonheritage-layer-changed');
  console.log('Map changes reflected after selecting "Non Heritage " layer.');
  // Select the "Asset Type" layer
  const AssetType = page.locator(
    '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(3) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
  );

  await expect(AssetType).toBeVisible({ timeout: 10000 }); 
  await AssetType.click(); 
  console.log('"AssetType " selected successfully!');

// //Select the "Land" Layer
const LandCheckbox = page.locator('#mat-checkbox-8 > label');
await expect(LandCheckbox).toBeVisible({timeout : 60000});
console.log('"Land" Layer checkbox clicked!');

//Wait for map changes after selecting "land"
const LandLayerChange= page.locator('.map-container .land-layer-changed');
console.log('Map changes reflected after selecting "land" layer.');

// select the Building Layer
const BuildingCheckbox = page.locator ('#mat-checkbox-9 > label');
await expect(BuildingCheckbox).toBeVisible({timeout : 60000});
console.log('"Building " Layer checkbox clicked successfully');

// wait for map changes after selecting "building"
const BuildingLayerChange=page.locator('.map-container .building-layer-changed');
console.log('map changes reflected after selecting "buiding" layer.');

 // Select the "JHD owned assets" layer
 const JHDownedAssets = page.locator(
  '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(4) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
 );
await expect(JHDownedAssets).toBeVisible({ timeout: 10000 }); 
await JHDownedAssets.click(); 
console.log('"JHDownedAssets " selected successfully!');

//select the JHD 143 Assets 
const JHD143Assests = page.locator ('#mat-checkbox-10 > label');
await expect(JHD143Assests).toBeVisible({timeout : 60000});
console.log ('"JHD143Assets" layer checkbox clicked successfully');
//wait for the mp changes after selecting "JHD143Assests"
const JHD143AssestsLayerChange=page.locator('.map-container .jhd143assests-layer-changed');
console.log('map changes reflected after selecting "JHD143Assets" layer.');

// Select the "HistoricalEntitiesLayer" layer
 const HistoricalEntitiesLayer = page.locator(
  '#sub-sideMenu > div > div > app-sub-side-menu > app-layers > div.expandablediv.ng-star-inserted > mat-tree > mat-nested-tree-node:nth-child(5) > li > div > div > div.mat-tooltip-trigger.col-xl-10.montserrat-smeibold.text-nowrap.text-uppercase.cursor-pointer > div'
 );
await expect(HistoricalEntitiesLayer).toBeVisible({ timeout: 10000 }); 
await HistoricalEntitiesLayer.click(); 
console.log('"HistoricalEntitiesLayer " selected successfully!');
//select the Historical Property Layer
const HistoricalProperty = page.locator('#mat-checkbox-11 > label');
await expect(HistoricalProperty).toBeVisible({timeout : 60000});
console.log('"Historical Property" layer checkbox clicked!');

//wait for the map changes after selecting "Historical property"
const HistoricalPropertyLayerChange= page.locator('.map-container .historicalproperty-layer-changed');
console.log('map changes reflected after selecting the "Historical Property" layer');
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
   
});