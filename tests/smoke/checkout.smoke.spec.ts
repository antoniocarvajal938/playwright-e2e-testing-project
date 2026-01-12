import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import users from '../../fixtures/users.json';

test.describe('Smoke - Checkout', () => {
    test('User can complete checkout successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.navigate();
        await loginPage.login(users.validUser.username, users.validUser.password);

        await productsPage.addProductToCart(' Sauce Labs Backpack');
        await productsPage.goToCart();

        await cartPage.goToCheckout();

        await checkoutPage.fillCheckoutInformation(
            'John',
            'Doe',
            '12345'
        );
        await checkoutPage.continue();
        await checkoutPage.finish();

        expect(await checkoutPage.isConfirmationVisible()).toBe(true);
    });
});