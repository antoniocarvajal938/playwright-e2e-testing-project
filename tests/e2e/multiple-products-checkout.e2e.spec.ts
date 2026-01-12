import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import users from "../../fixtures/users.json";

test.describe("E2E - Multiple products checkout", () => {
  test("User can complete checkout with multiple products", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await productsPage.addProductToCart("Sauce Labs Backpack");
    await productsPage.addProductToCart("Sauce Labs Bike Light");
    await productsPage.goToCart();

    expect(await cartPage.getCartItemCount()).toBe(2);

    await cartPage.goToCheckout();

    await checkoutPage.fillCheckoutInformation("John", "Doe", "12345");

    await checkoutPage.continue();
    await checkoutPage.finish();

    expect(await checkoutPage.isConfirmationVisible()).toBe(true);
  });
});
