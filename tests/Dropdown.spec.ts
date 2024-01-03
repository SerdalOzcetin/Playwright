import { test, expect } from '@playwright/test';

test('Dropdown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // multıple optıon the dropdown 

    await page.locator('#country').selectOption({label: 'Canada'}); // label visible text

    await page.locator('#country').selectOption('Japan'); // visible text

    await page.locator('#country').selectOption({value: 'uk'}); // Value

    await page.locator('#country').selectOption({index: 7}); // Index

    await page.selectOption('#country', 'India'); // by text

    // Assertions
    // Check the number of options in dropdown

    // 1. way
    const options = page.locator('#country option');
    await expect(options).toHaveCount(10);

    // 2. way
    const options02 = await page.$$('#country option');
    console.log("Number of options :", options02.length);
    expect(options02.length).toBe(10);

    // check the presence of value ın the drpdown
    // 1. way
    const content = await page.locator('#country').textContent();
    expect(content.includes('India')).toBeTruthy();

    // 2. way
    // const options03 = await page.$$('#country option');
    // let status = false;

    // for(const option of options03){

    //     console.log(await option.textContent());

    //     let value = await option.textContent();
    //     if(value.includes('France')){

    //         status = true;
    //         break;

    //     }

    // }

    // expect(status).toBeTruthy();

    // Select option from deopdown using loop

    const options04 = await page.$$('#country option');

    for(const option of options04){

        let value = await option.textContent();
        if(value.includes('France')){

            await page.selectOption('#country', value);

            break;

        }

    }




    


});