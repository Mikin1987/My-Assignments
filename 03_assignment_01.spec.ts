import { chromium, test } from "@playwright/test";


test("Login to Salesforce", async () => {
    

    // to Launch the browser --> creates a new browser instance 
    const browser = await chromium.launch({headless: false, channel: 'chrome'});

    // get the new browser context
    const browserContext = await browser.newContext();

    // Get a new page 
    const page = await browserContext.newPage();


    // Load the URL 
    await page.goto("https://login.salesforce.com");
 

    //Enetr username using id
   // await page.locator('#username').fill('mikin@testleaf.com');
    await page.fill('#username', 'mikin@testleaf.com');

    //Enter password 
    await page.locator('#password').fill('Meghashah1');

    //Click on login  
    await page.click("#Login");

    // Wait for the title to be available
    await page.waitForLoadState('domcontentloaded');

     // Get and print the title of the page
    const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);

     // Get and print the URL of the page
    const pageURL = page.url();
    console.log('Page URL:', pageURL);

     // Close the browser
     //await browser.close();

    
    await page.waitForTimeout(10000);


})