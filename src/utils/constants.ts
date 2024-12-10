import { Offer, Product } from "src/types";

export const products: Map<string, Product> = new Map([
  ["ipd", { id: "ipd", name: "Super ipad", price: 549.99 }],
  ["mbp", { id: "mbp", name: "Macbook Pro", price: 1399.99 }],
  ["atv", { id: "atv", name: "Apple TV", price: 109.5 }],
  ["vga", { id: "vga", name: "VGA adapter", price: 30.0 }],
]);

export const offers: Map<string, Offer> = new Map([
  [
    "atv",
    { type: "bulkPurchase", rule: { quantity: 3, discountedQuantity: 2 } },
  ],
  ["ipd", { type: "discount", rule: { quantity: 4, discountedPrice: 499.99 } }],
]);
