import { test, expect } from '@playwright/test';

test('Softassertions', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    // soft assertıons 
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page.locator("#nava")).toBeVisible();


    // hard assertıons
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE123');
    await expect(page.locator("#nava")).toBeVisible();

   

});