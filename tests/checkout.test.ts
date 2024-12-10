import { Checkout } from "../src/services/checkout";

describe("Checkout", () => {
  let checkout: Checkout;

  beforeEach(() => {
    checkout = new Checkout();
  });

  it("should calculate total correctly", () => {
    checkout.scan("ipd");
    checkout.scan("atv");
    checkout.scan("vga");
    expect(checkout.total()).toBe("$689.49");
  });

  it("should throw error when scanned product is not present", () => {
    expect(() => {
      checkout.scan("dummy");
    }).toThrow("Scanned product not found");
  });
});
