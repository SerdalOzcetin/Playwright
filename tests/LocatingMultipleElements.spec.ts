import {test, expect} from '@playwright/test';

test('Locatıng multıple elements', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    /*

    const links = await page .$$('a');

    for(const link of links){

        const LinkText = await link.textContent();
        console.log(LinkText);

    }

    */

    await page.waitForSelector("//div[@id='contcont']//div//h4/a"); // to wait the elements uploading !!!

    const products = await page.$$("//div[@id='contcont']//div//h4/a");

    for(const product of products){

        const textProduct = await product.textContent();
        console.log(textProduct);
    };

});