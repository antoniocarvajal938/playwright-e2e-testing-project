import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  private readonly page: Page;
  private readonly inventoryItems: Locator;
  private readonly cartIcon: Locator;
  private readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.cartIcon = page.locator(".shopping_cart_link");
    this.cartBadge = page.locator(".shopping_cart_badge");
  }

  async isProductListVisible(): Promise<boolean> {
    return await this.inventoryItems.first().isVisible();
  }

  async addProductToCart(productName: string): Promise<void> {
    const productID = this.formatProductName(productName);
    const addButton = this.page.locator(
      `[data-test="add-to-cart-${productID}"]`
    );
    await addButton.click();
  }

  async removeProductFromCart(productName: string): Promise<void> {
    const productId = this.formatProductName(productName);
    const removeButton = this.page.locator(`[data-test="remove-${productId}"]`);
    await removeButton.click();
  }

  async getCartBadgeCount(): Promise<number> {
    if (await this.cartBadge.isVisible()) {
      const count = await this.cartBadge.textContent();
      return Number(count);
    }
    return 0;
  }

  async goToCart(): Promise<void> {
    await this.cartIcon.click();
  }

  private formatProductName(productName: string): string {
    return productName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-");
  }
}
