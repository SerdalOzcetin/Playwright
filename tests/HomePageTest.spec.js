const {test, expect} = require('@playwright/test');

test('Home Page', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = await page.title();
    console.log('page title is: ', pageTitle );

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log('Page URL :', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();

});

// npx playwright test -----> to run the all tests.
// npx playwright test MyTest.spec.js -----> to run the specific test file.
// npx playwright test MyTest.spec.js --project=chromium -----> to run on specific browser.
// npx playwright test MyTest.spec.js --project=chromium --headed -----> to run on specific browser and heded mode.
// npx playwright test MyTest.spec.js --project=chromium --headed --debug -----> to run on specific browser and heded mode with debug console.