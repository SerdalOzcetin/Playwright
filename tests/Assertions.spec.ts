import { test, expect } from '@playwright/test';

test('Assertions', async ({page})=>{

    await page.goto("https://www.nopcommerce.com/en/register");

    /*
                         toHaveURL
                Added in: v1.20
                Ensures the page is navigated to the given URL.

                Usage

                await expect(page).toHaveURL(/.*checkout/);

*/

    await expect(page).toHaveURL('https://www.nopcommerce.com/en/register');

    /*

                        toHaveTitle
                Added in: v1.20
                Ensures the page has the given title.

                Usage

                await expect(page).toHaveTitle(/.*checkout/);

    */

    await expect(page).toHaveTitle("Register - nopCommerce");

    /*

                        toBeVisible
                Added in: v1.20
                Ensures that Locator points to an attached and visible DOM node.

                Usage

                await expect(page.getByText('Welcome')).toBeVisible();

    */

    const element = page.locator("div[class='page-title'] h1");

    await expect(element).toBeVisible();

    /*

                        toBeEnabled
                Added in: v1.20
                Ensures the Locator points to an enabled element.

                Usage

                const locator = page.locator('button.submit');
                await expect(locator).toBeEnabled();

    */

    const inputelement = page.locator("#FirstName");
    await expect(inputelement).toBeEnabled();

    /*

                        toBeChecked
                Added in: v1.20
                Ensures the Locator points to a checked input.

                Usage

                const locator = page.getByLabel('Subscribe to newsletter');
                await expect(locator).toBeChecked();

    */

    const newsletterCheckbox = page.locator("label[for='Newsletter']");
    await expect(newsletterCheckbox).toBeChecked();

    /**
                      toHaveAttribute
                Added in: v1.20
                Ensures the Locator points to an element with given attribute.

                Usage

                const locator = page.locator('input');
                await expect(locator).toHaveAttribute('type', 'text');
     */

    const registerButton = page.locator("#register-button");
    await expect(registerButton).toHaveAttribute('type','submit');

    /**
                     * toHaveText
                Added in: v1.20
                Ensures the Locator points to an element with the given text. You can use regular expressions for the value as well.

                Usage

                const locator = page.locator('.title');
                await expect(locator).toHaveText(/Welcome, Test User/);
                await expect(locator).toHaveText(/Welcome, .*_/);
     */

    const registerText = page.locator(".page-title h1");
    await expect(registerText).toHaveText("Register");

    /**
                    * toContainText
                Added in: v1.20
                Ensures the Locator points to an element that contains the given text. You can use regular expressions for the value as well.

                Usage

                const locator = page.locator('.title');
                await expect(locator).toContainText('substring');
                await expect(locator).toContainText(/\d messages/);
     */
await expect(registerText).toContainText("Regi");

/**
                    * toHaveValue
                Added in: v1.20
                Ensures the Locator points to an element with the given input value. You can use regular expressions for the value as well.

                Usage

                const locator = page.locator('input[type=number]');
                await expect(locator).toHaveValue(/[0-9]/);
 */
const nameInputbox = page.locator("#FirstName");
nameInputbox.fill("Serdar");
await expect(nameInputbox).toHaveValue("Serdar");

/**
                * toHaveCount
            Added in: v1.20
            Ensures the Locator resolves to an exact number of DOM nodes.

            Usage

            const list = page.locator('list > .component');
            await expect(list).toHaveCount(3);
 */

const timezoonDropdown = page.locator("//select[@id='TimeZoneId']/child::option");
await expect(timezoonDropdown).toHaveCount(141);

});