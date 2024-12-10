export interface Product {
  id: string;
  name: string;
  price: number;
}

interface OfferRules {
  quantity?: number;
  discountedQuantity?: number;
  discountedPrice?: number;
}

type OfferType = "bulkPurchase" | "discount";

export interface Offer {
  type: OfferType;
  rule: OfferRules;
}
