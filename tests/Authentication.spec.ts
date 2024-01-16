import { test } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/admin.json' });

test('admin test', async ({ page }) => {

    await page.goto("https://github.com/");
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.getByLabel('Open user account menu').click();

});

test.describe("Describe Block",() => {

  test.use({ storageState: 'playwright/.auth/admin.json' });

  test('Admin test02', async ({ page }) => {

    await page.goto("https://github.com/");
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.getByLabel('Open user account menu').click();

  });
});