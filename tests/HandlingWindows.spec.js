import { test, expect, chromium } from '@playwright/test';


test("Handle Pages/Windows", async ()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page01 = await context.newPage();
    const page02 = await context.newPage();

    const allPages = context.pages();
    console.log("Number of Pages created : ", allPages.length)


    await page01.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page01).toHaveTitle("OrangeHRM");

    await page02.goto("https://www.orangehrm.com/");
    await expect(page02).toHaveTitle("OrangeHRM HR Software | OrangeHRM");

})

test.only("Handle Multiple Pages/Windows", async ()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page01 = await context.newPage();

    await page01.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page01).toHaveTitle("OrangeHRM");

    const pagePromise = context.waitForEvent("page");
    await page01.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("OrangeHRM HR Software | OrangeHRM");

    await page01.waitForTimeout(2000);
    await newPage.waitForTimeout(2000);


    await browser.close();
})