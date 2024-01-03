import { test, expect } from '@playwright/test';


test("Page Screenshot", async ({page})=>{

await page.goto("https://demo.opencart.com/");

await page.screenshot({path: "tests/Screenshots/"+Date.now()+"HomePage.png"});

})

test("Full Page Screenshot", async ({page})=>{

    await page.goto("https://demo.opencart.com/");
    
    await page.screenshot({path: "tests/Screenshots/"+Date.now()+"FullPage.png", fullPage: true});
    
})

test("Web element Screenshot", async ({page})=>{

    await page.goto("https://demo.opencart.com/");
    
    await page.locator("//*[@id='content']/div[2]/div[1]").screenshot({path: "tests/Screenshots/"+Date.now()+"WebElementPage.png"});
    
    })
    
    