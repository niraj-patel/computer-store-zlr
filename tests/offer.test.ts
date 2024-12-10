import { Offers } from "../src/repositories/offers";

describe("Offers", () => {
  it("should apply bulkpurchase offer", () => {
    const offers = new Offers("atv", 3, 109.5);
    expect(offers.applyOffer()).toBe(219);
  });

  it("should apply discount offer", () => {
    const offers = new Offers("ipd", 5, 549.99);
    expect(offers.applyOffer()).toBe(2499.95);
  });

  it("should not apply bulkpurchase offer when not applicable", () => {
    const offers = new Offers("atv", 1, 109.5);
    expect(offers.applyOffer()).toBe(109.5);
  });

  it("should not apply discount offer when not applicable", () => {
    const offers = new Offers("ipd", 1, 549.99);
    expect(offers.applyOffer()).toBe(549.99);
  });

  it("should calculate without applying offers when no offer found", () => {
    const offers = new Offers("vga", 1, 30.0);
    expect(offers.applyOffer()).toBe(30.0);
  });
});
