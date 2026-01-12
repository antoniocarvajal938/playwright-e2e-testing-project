import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";
import users from "../../fixtures/users.json";

test.describe("Smoke - Add to Cart", () => {
  test("User can add a product to the cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await productsPage.addProductToCart("Sauce Labs Backpack");
    await productsPage.goToCart();

    expect(await cartPage.getCartItemCount()).toBe(1);
  });
});
