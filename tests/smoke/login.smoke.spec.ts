import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import users from "../../fixtures/users.json";

test.describe("Smoke - Login", () => {
  test("User can login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);

    expect(await productsPage.isProductListVisible()).toBe(true);
  });
});
