import { test, expect } from '@playwright/test';

// import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=demo+orange+hrm&oq=demo+orange+hrm&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDk0NDVqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'OrangeHRM Demo. OrangeHRM https://opensource-demo.orangehrmlive.com' }).click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByPlaceholder('Password').press('Tab');
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  await page.getByRole('link', { name: 'My Info' }).click();
});

// npx playwright codegen --device "Moto G4" 
// npx playwright codegen --device "Pixel 5"

// Look at test generator at playwright.dev