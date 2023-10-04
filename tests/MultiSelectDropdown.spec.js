import { test, expect } from '@playwright/test';


test('MultiSelectDropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption("#colors",['Blue', 'Yellow', 'Green']);

    // Assertions

    // 1) Check the number of options

    // const options = page.locator("#colors option");
    // await expect(options).toHaveCount(5);

    const options02 = page.$$("#colors option"); // return array--> that ıs object
    // await expect(options02).toHaveCount(5); // doesnt work because tohaveCount() works with locator().
    console.log("number of options :", (await options02).length);

    expect((await options02).length).toBe(5);

    // Check the presence of the value in the dropdown

    const content02 = await page.locator("#colors").textContent();
    expect((await options02).includes('Blue')).toBeTruthy; // toBeTruthy() ?

    // Negative Assertion
    expect((await options02).includes('DarkBlue')).toBeFalsy; // toBeFalsy() ?


})