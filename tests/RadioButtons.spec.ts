import { test, expect } from '@playwright/test';
import exp from 'constants';

test("Radio Buttons", async ({page})=>{

    await page.goto("https://testpages.eviltester.com/styled/basic-html-form-test.html");

    // Radio Button
    // await page.locator("input[value='rd2']").check();
    await page.check("input[value='rd2']");

    expect(page.locator("input[value='rd2']").isChecked).toBeTruthy();

    await page.waitForTimeout(3000);

});