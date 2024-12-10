import { Product } from "src/types";
import { products } from "../utils/constants";
import { Offers } from "../repositories/offers";
export class Checkout {
  private items: Map<string, number>;

  constructor() {
    this.items = new Map();
  }

  // create purchased items map to maintain the scanned product
  scan(item: string): void {
    // returns either matched product or undefined on unmatched product
    const product: Product | undefined = products.get(item);
    // when matching product not found, should throw error
    if (!product) {
      throw new Error("Scanned product not found");
    }

    // map the product by id, if already present increment counter
    this.items.set(item, (this.items.get(item) || 0) + 1);
  }

  /**
   *
   * @returns {string} - Total amount of the cart
   */
  total(): string {
    let total: number = 0;
    for (const [item, count] of this.items.entries()) {
      const product: Product | undefined = products.get(item);
      const offer = new Offers(item, count, product!.price!);

      const finalPrice = offer.applyOffer();
      total += finalPrice;
    }
    return `$${total.toFixed(2)}`;
  }
}
