import { chromium, expect, test } from "@playwright/test";


test("Create Lead", async () => {
    test.setTimeout(120000);

    // to Launch the browser --> creates a new browser instance 
    const browser = await chromium.launch({headless: false, channel: 'chrome'});

    // get the new browser context
    const browserContext = await browser.newContext();

    // Get a new page 
    const page = await browserContext.newPage();


    // Load the URL 
    await page.goto("https://login.salesforce.com");
 

    //Enetr username using id
    await page.fill('#username', 'mikin@testleaf.com');

    //Enter password 
    await page.locator('#password').fill('Meghashah1');

    // Click on login
    await page.click("#Login");
 
    // Click on the toggle menu button
    await page.click('.slds-icon-waffle');

    // Click on "View All" button
    await page.click("text=View All");

    // Click on "Sales" and then "Leads"
    await page.click('//p[text()="Sales"]');
    await page.click('//a[@title="Leads"]');
 
    // Click on "New" button to create a new lead
    await page.waitForSelector('//button[contains(@class, "slds-button_neutral") and contains(@class, "middleButton") and contains(@class, "actionListButton") and normalize-space(.)="New"]');
    await page.click('//button[contains(@class, "slds-button_neutral") and contains(@class, "middleButton") and contains(@class, "actionListButton") and normalize-space(.)="New"]');
    
    // Click the dropdown button
    await page.click(".slds-combobox__input"); 
    // Click the option "Mr." 
    await page.getByTitle("Mr.").click();

    // Enter lastname 
    await page.locator('.slds-input').locator('nth=2').fill('Modi');
   
    // Enter company name 
   await page.locator('.slds-input').locator('nth=4').fill('Carallon');

    // click on Save button 
   await page.click("text=Save");

   // Specify the expected text
   const expectedText = 'Mr.  Modi';

   // Use the expect function to verify the text
   await expect(page.locator('lightning-formatted-name').textContent()).resolves.toBe(expectedText);
   
    await page.waitForTimeout(10000);
});
