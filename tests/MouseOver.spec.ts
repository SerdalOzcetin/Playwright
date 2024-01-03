import { test, expect } from '@playwright/test';

test('MouseOver',async({page})=>{

    await page.goto("https://demo.opencart.com/");
    const desktop = page.locator("//a[normalize-space()='Desktops']");
    const mac = page.locator("//a[normalize-space()='Mac (1)']");
    
    await desktop.hover();

    await mac.hover();

    await page.waitForTimeout(3000);


})