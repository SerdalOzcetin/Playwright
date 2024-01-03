import { test, expect } from '@playwright/test';


test('Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // total frames

    const allframes = page.frames();
    console.log('Number of frames : ', allframes.length);


    
    const parentFrame = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await parentFrame.locator("//input[@name='mytext3']").fill("welcome");

    const childFrames = parentFrame.childFrames();
    await childFrames[0].locator("//label[@for='i5']//div[@id='i5']").check();

    await page.waitForTimeout(2000);

   
})