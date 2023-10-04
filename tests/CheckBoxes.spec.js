import { test, expect } from '@playwright/test';

test('CheckBoxes', async ({page})=>{

    await page.goto('https://testpages.eviltester.com/styled/basic-html-form-test.html')

    // Sigle checkBoxes
    await page.locator("input[value='cb1']").check();

    expect(page.locator("input[value='cb1']")).toBeChecked();

    expect(page.locator("input[value='cb1']").isChecked()).toBeTruthy();

    await page.locator("input[value='cb1']").uncheck();

    expect(page.locator("input[value='cb1']")).not.toBeChecked();

    // expect(page.locator("input[value='cb1']").isChecked()).toBeFalsy(); // ---> ??

    // Check and uncheck multiple checkboxes.
    const checkBoxes = ["input[value='cb1']", "input[value='cb2']", "input[value='cb3']"];

    for(const checkBox of checkBoxes){

        await page.locator(checkBox).check();

    };

    await page.waitForTimeout(2000);


     for(const checkBox of checkBoxes){


        if(page.locator(checkBox).isChecked){

        await page.locator(checkBox).uncheck();

        }
    };

    await page.waitForTimeout(2000);





});