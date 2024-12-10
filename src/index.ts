import { Checkout } from "./services/checkout";

const checkoutCase1 = new Checkout();
checkoutCase1.scan("atv");
checkoutCase1.scan("atv");
checkoutCase1.scan("atv");
checkoutCase1.scan("vga");
console.log("totalCase1", checkoutCase1.total());

const checkoutCase2 = new Checkout();
checkoutCase2.scan("atv");
checkoutCase2.scan("ipd");
checkoutCase2.scan("ipd");
checkoutCase2.scan("atv");
checkoutCase2.scan("ipd");
checkoutCase2.scan("ipd");
checkoutCase2.scan("ipd");
console.log("totalCase2", checkoutCase2.total());
