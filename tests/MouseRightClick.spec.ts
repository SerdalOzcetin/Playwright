import { test, expect } from '@playwright/test';

test("MouseRightClick", async ({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const rightclick = page.locator(".context-menu-one.btn.btn-neutral");
    await rightclick.click({button: "right"});
    
    await page.waitForTimeout(2000);

})