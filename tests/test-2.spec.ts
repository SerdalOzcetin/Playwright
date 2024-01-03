import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Ara', { exact: true }).click();
  await page.getByLabel('Ara', { exact: true }).fill('news');
  await page.keyboard.press("Enter");
  await page.getByRole('link', { name: 'BBC News Türkçe - Haberler' }).click();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Bilim' })).toBeVisible();
  await expect(page.getByRole('navigation')).toContainText('Teknoloji');
  await page.getByRole('navigation').getByRole('link', { name: 'Türkiye' }).click();
});