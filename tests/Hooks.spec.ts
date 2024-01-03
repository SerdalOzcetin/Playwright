import { test, expect } from '@playwright/test';

test("Home Page Test", async ({page})=>{

    await page.goto("https://www.demoblaze.com/");

    //Log In

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("serdar");
    await page.locator("#loginpassword").fill("öz");
    await page.locator("//button[normalize-space()='Log in']").click();

    // Home Page

    const products = await page.$$(".hrefch");
    expect(products).toHaveLength(9);

    // Log out

    await page.locator("#logout2").click();

    await page.waitForTimeout(2000);

})

test("Add product to cart Test", async ({page})=>{

    await page.goto("https://www.demoblaze.com/");

    //Log In

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("serdar");
    await page.locator("#loginpassword").fill("öz");
    await page.locator("//button[normalize-space()='Log in']").click();

    // Home Page

    const products = await page.$$(".hrefch");
    expect(products).toHaveLength(9);

    // Add product to cart

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[@class='btn btn-success btn-lg']").click();

    page.on('dialog', async (dialog)=>{

        expect(dialog.message()).toContain("Product added.");
    })

    
    // Log out

    await page.locator("#logout2").click();

    await page.waitForTimeout(2000);

})