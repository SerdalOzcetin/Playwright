import { test, expect } from '@playwright/test';

test("Record Video", async ({page})=>{

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

    await page.locator("#logout").click();

    await page.waitForTimeout(2000);

})