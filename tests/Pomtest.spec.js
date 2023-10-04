import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

test("Test",async ({page})=>{

    // Login

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("serdar","öz");
    await page.waitForTimeout(2000);

    // Home

    const homePage = new HomePage(page);
    await homePage.addProductToCart('Nexus 6')
    await page.waitForTimeout(2000);
    await homePage.gotoCart();

    // Cart

    const cart = new CartPage(page);
    await page.waitForTimeout(2000);
    const status = await cart.checkProductIncart('Nexus 6');
    expect(status).toBe(true);



})