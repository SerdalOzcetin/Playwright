import { test, expect } from '@playwright/test';

test('Alerts',async ({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');



    /**
     * Enabling alert handling, Dialog window handle
     * @param
     */
    page.on('dialog', async (dialog)=>{

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

    })

    await page.click("button[onclick='myFunctionAlert()']");
    await page.waitForTimeout(3000);

});


test('Confirmation Dialog', async ({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');



    /**
     * Enabling alert handling, Dialog window handle
     * @param
     */
    page.on('dialog', async (dialog)=>{

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); // --> close by using OK button
        //await dialog.dismiss(); // --> close by using cancel

    })

    await page.click("button[onclick='myFunctionConfirm()']");
    await page.waitForTimeout(3000);

})



test('Prompt Dialog', async ({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');



    /**
     * Enabling alert handling, Dialog window handle
     * @param
     */
    page.on('dialog', async (dialog)=>{

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept('Serdar');

    })

    await page.click("button[onclick='myFunctionPrompt()']");
    await page.waitForTimeout(3000);

})