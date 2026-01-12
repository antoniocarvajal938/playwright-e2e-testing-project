import { Page, Locator } from "@playwright/test";

export class CartPage {
  private readonly page: Page;
  private readonly cartItems: Locator;
  private readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async isCartItemVisible(): Promise<boolean> {
    return await this.cartItems.first().isVisible();
  }

  async getCartItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  async removeItem(productName: string): Promise<void> {
    const productId = productName.toLowerCase().replace(/\s+/g, "-");
    const removeButton = this.page.locator(`[data-test="remove-${productId}"]`);
    await removeButton.click();
  }

  async goToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
