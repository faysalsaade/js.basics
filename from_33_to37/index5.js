// let price = 100;
// let discount = false;
// let discountamount = 30;
// let country = "lebanon";
// if (discount === true) {
//   price -= discountamount;
// } else if (country === "spain") {
//   if (student === true) {
//     price -= discountamount + 30;
//   } else {
//     price -= 10;
//   }
// } else {
//   price -= 50;
// }
// console.log(price);
let thename = "ahmed";
let thegender = "male";
let theage = "30";
thegender === "male" ? console.log("mr") : console.log("mrs");
let result = thegender === "male" ? "mr" : "mrs";
document.write(result);
console.log(
  `hello ${
    thegender === "male" ? console.log("mr") : console.log("mrs")
  }  ${thename}`
);
theage < 20
  ? console.log(20)
  : theage > 20 && theage < 60
  ? console.log("20 to 60")
  : theage > 60
  ? console.log("larger than 60")
  : console.log("unknown");
