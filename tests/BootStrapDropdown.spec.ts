import { test, expect } from '@playwright/test';


test('BootStrapDropdown',async ({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator(".multiselect.dropdown-toggle.btn.btn-default").click();

    // 1. way

    const options = page.locator("//ul/li//label/input");
    await expect(options).toHaveCount(11);

    // 2. way

    const options02 = await page.$$("//ul/li//label/input");
    expect(options02.length).toBe(11);

    // Select options from dropdown

    const options03 = await page.$$("//ul/li//label");
    for(let option of options03){

        const value = await option.textContent();
        console.log("value is :",value);
                
    }

    const options04 = await page.$$("//ul/li//label/input");
    for(let option of options04){

        const value =await option.textContent();
        
        if(value.includes('Angular') || (value.includes('Java'))){

            await option.click();

        }

    }


    await page.waitForTimeout(2000);
})