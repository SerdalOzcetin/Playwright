import { test, expect } from '@playwright/test';

test("Keyboard Action", async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare");

    const textArea01 = page.locator("textarea[placeholder='Paste one version of the text here.']");
    await textArea01.fill("Welcome to Balkes!");

    // Cttrl + A

    await page.keyboard.press("Control+A");

    // Ctrl + C

    await page.keyboard.press("Control+C");

    // Tab

    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

    // Ctrl + V

    await page.keyboard.press("Control+V");

    await page.waitForTimeout(2000);
    


    
})