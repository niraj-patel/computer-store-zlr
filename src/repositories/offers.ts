import { Offer } from "../types";
import { offers } from "../utils/constants";

export class Offers {
  private purchasedItem: string;
  private count: number;
  private itemPrice: number;

  constructor(purhasedItem: string, count: number, itemPrice: number) {
    this.count = count;
    this.purchasedItem = purhasedItem;
    this.itemPrice = itemPrice;
  }

  /*
    Calcute amount using following steps:
    Step 1: Checks if there are multiple groups possible
        For ex: when customer purchase 6 items, then 2 sets are possible as offer is 3 for 2
    Step 2: After diving the group, if any item is present which doesn't fit in the offer
        For ex: On purchasing 7 items, then according to offer, 2 sets of 3 items each and 1 single item
    Step 3: Final count on the basis of above calculation
    Step 4: Calculate the final price
  */
  private applyBulkPurchase(
    discountedQuantity: number,
    quantity: number
  ): number {
    const groups = Math.floor(this.count / quantity);
    const itemsRemaining = this.count % quantity;
    const totalCount = groups * discountedQuantity + itemsRemaining;

    return totalCount * this.itemPrice;
  }

  private applyDiscount(dicountedPrice: number, quantity: number): number {
    if (this.count > quantity) {
      return this.count * dicountedPrice;
    }
    return this.count * this.itemPrice;
  }

  applyOffer(): number {
    const offer: Offer | undefined = offers.get(this.purchasedItem);
    switch (offer?.type) {
      case "bulkPurchase":
        return this.applyBulkPurchase(
          offer.rule.discountedQuantity!,
          offer.rule.quantity!
        );

      case "discount":
        return this.applyDiscount(
          offer.rule.discountedPrice!,
          offer.rule.quantity!
        );

      default:
        return this.count * this.itemPrice;
    }
  }
}
