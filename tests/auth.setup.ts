import { test as setup, expect } from "@playwright/test";

const adminFile = 'Playwright/.auth/admin.json';

setup("authentication as admin",async ({page}) => {

    const username:any = process.env.MY_USERNAME;
    const password:any = process.env.MY_PASSWORD;

    await page.goto("https://github.com/login");
    await page.getByLabel("Username or email address").fill(username);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForURL('https://github.com/');

    await page.context().storageState({ path: adminFile });

})
