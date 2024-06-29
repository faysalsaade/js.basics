let price = 100;
let discount = false;
let discountamount = 30;
let country = "lebanon";
if (discount === true) {
  price -= discountamount;
} else if (country === "spain") {
  if (student === true) {
    price -= discountamount + 30;
  } else {
    price -= 10;
  }
} else {
  price -= 50;
}
console.log(price);
