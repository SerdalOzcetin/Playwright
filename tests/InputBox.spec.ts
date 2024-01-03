import { test, expect } from '@playwright/test';

test('Handle Input box', async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

    await page.locator("#login2").click();

    await expect(page.locator("#loginusername")).toBeVisible();
    await expect(page.locator("#loginusername")).toBeEmpty();
    await expect(page.locator("#loginusername")).toBeEditable();
    await expect(page.locator("#loginusername")).toBeEnabled();
    

    await page.locator("#loginusername").fill("Serdar");
    // await page.fill("#loginusername", "Serdar");

    await page.waitForTimeout(3000);

});
