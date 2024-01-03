import { test, expect } from '@playwright/test';

test("Double Click", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const btnDbclck = page.locator("button[ondblclick='myFunction1()']");
    await btnDbclck.dblclick();

    await page.waitForTimeout(1000);

    const field02 = page.locator("#field2");
    await expect(field02).toHaveValue("Hello World!");

    await page.waitForTimeout(1000);



})