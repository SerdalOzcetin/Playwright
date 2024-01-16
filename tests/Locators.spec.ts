// const {test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test('Locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    // awaıt page.locator.('locator').clıck();
    // awaıt.clıck('locator');


    // clıck on logın button  --  property
    // await page.locator('id="login2').click();
    await page.click("id=login2");

    // provıde the username - CSS
    // await page.locator('#loginusername').fill('serdar');
     await page.fill('#loginusername', 'serdar');
    // await page.type('#loginusername');

    // provıde the password -- CSS
    await page.fill('#loginpassword','öz');

    // click on log ın -- XPath
    await page.click("//button[normalize-space()='Log in']");

    // verify the log out element
    const logoutButton = page.locator("//a[@id='logout2']");
    await expect(logoutButton).toBeVisible();

    await page.close();

});