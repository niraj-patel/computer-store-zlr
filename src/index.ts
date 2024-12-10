import { Checkout } from "./services/checkout";

const checkout = new Checkout();

checkout.scan("atv");
checkout.scan("atv");
checkout.scan("atv");
checkout.scan("vga");
console.log("total", checkout.total());
