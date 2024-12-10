export class Checkout {
  private items: Map<string, number>;

  constructor() {
    this.items = new Map();
  }

  scan(item: string) {
    console.log("scan item", item);
    this.items.set(item, (this.items.get(item) || 0) + 1);
  }

  total(): number {
    let total: number = 0;
    for (const [item, count] of this.items.entries()) {
      console.log("item", item);
      console.log("count", count);
      total += count;
    }
    return total;
  }
}
