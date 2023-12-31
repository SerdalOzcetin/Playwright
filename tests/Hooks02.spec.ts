import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({browser})=>{

    page = await browser.newPage();

    await page.goto("https://www.demoblaze.com/");

    //Log In

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("serdar");
    await page.locator("#loginpassword").fill("öz");
    await page.locator("//button[normalize-space()='Log in']").click();


});

test.afterEach(async ()=>{

    await page.locator("#logout2").click();

    await page.waitForTimeout(2000);

});

test("Home Page Test", async ()=>{

    
    // Home Page

    const products = await page.$$(".hrefch");
    expect(products).toHaveLength(9);

   
})

test("Add product to cart Test", async ()=>{

  
    // Add product to cart

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[@class='btn btn-success btn-lg']").click();

    page.on('dialog', async (dialog)=>{

        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();

    })

    
   
})