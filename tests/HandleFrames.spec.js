import { test, expect } from '@playwright/test';


test('Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // total frames

    const allframes = page.frames();
    console.log('Number of frames : ', allframes.length);


    //Approaches 01
    // const frame01 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // await frame01.fill("input[name='mytext1']","Hello");

    // await page.waitForTimeout(2000);

    //Approaches 02
    const inputBox = page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");
    inputBox.fill("Hello");

    await page.waitForTimeout(2000);
})