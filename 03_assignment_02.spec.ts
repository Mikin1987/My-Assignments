import { chromium, test} from "@playwright/test";

test("Create a new lead", async () =>{

      // to Launch the browser --> creates a new browser instance 
      const browser = await chromium.launch({headless: false, channel: 'chrome'});

      // get the new browser context
      const browserContext = await browser.newContext();
    
  
      // Get a new page 
      const page = await browserContext.newPage();
     

     // Load the URL 
     await page.goto("http://leaftaps.com/opentaps/control/main");

     //Enter username 
     await page.getByLabel('username').fill('Demosalesmanager');
    
     //Enter password 
     await page.getByLabel('password').fill('crmsfa');

     //click log in 
     await page.click(".decorativeSubmit");


     const crmsafaTxt = page.locator("test=CRM/SFA");
     //await crmsafaTxt.innerText();
     console.log(crmsafaTxt);
     //Click on CRM/SFA 
     await page.click("text = CRM/SFA");

     //click Leads
     await page.click("text = Leads");

    // click on create lead button 
     await page.click("text = Create Lead");

    //Enter Company name
     await page.locator('#createLeadForm_companyName').fill('Carallon');
    //Enter Forename
     await page.locator('#createLeadForm_firstName').fill('Mikin');
    //Enter Surname
     await page.locator('#createLeadForm_lastName').fill('Modi');
     // Click on Create Lead button 
     await page.locator('.smallSubmit').click();
     
     await page.waitForTimeout(10000);



})