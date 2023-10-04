import { test, expect } from '@playwright/test';

test('AutoSuggestDropdon', async ({page})=>{

    await page.goto('https://www.obilet.com/');
    await page.locator('#origin-input').fill('İzmir'); 
    await page.waitForTimeout(2000);

    // //ob-select[@id='origin']//div//ul//li[contains(.,'İzmir Adnan')]
    // //ob-select[@id='origin']//div//ul//li

    const fromCities = await page.$$("//ob-select[@id='origin']//div//ul//li");
    await page.waitForTimeout(2000);

    for(let frmcities of fromCities){

        const value = await frmcities.textContent();
        console.log("From cities : ", value);

        // const destination = await page.locator(" //ob-select[@id='origin']//div//ul//li[contains(.,'İzmir Adnan')]").textContent();

        if(value.includes('İzmir Adnan')){
            
            await frmcities.click();
            break;

        }
    }

    await page.waitForTimeout(2000);

    // //ob-select[@id='destination']//div//ul//li[contains(.,'Yayla')]

    await page.locator("#destination-input").fill("Muğla");
    await page.waitForTimeout(2000);

    const destinationCities = await page.$$("//ob-select[@id='destination']//div//ul//li");
    await page.waitForTimeout(2000);

    for(let dstCities of destinationCities){

        const valueOfdstCities = await dstCities.textContent();
        console.log("Destination cities : ", valueOfdstCities)

        if(valueOfdstCities.includes('Maglaj')){
            
            await dstCities.click();
            break;

        }

    }

    await page.waitForTimeout(2000);


    




})