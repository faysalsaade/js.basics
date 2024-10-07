// let serials = "s100s s3000s s50000s s950000s";
// console.log(serials.match(/s\d{3}s/gi));
// console.log(serials.match(/s\d{4,5}s/gi));
// console.log(serials.match(/s\d{4,}s/gi));

// let mystring = "we love programming";
// let names = "10samaZ 2AhmedZ 3Mohammed 4MoustafaZ 5Gamalz";
// console.log(/ing$/gi.test(mystring));
// console.log(/^we/gi.test(mystring));
// console.log(/lz$/gi.test(names));
// console.log(/^\d/gi.test(names));
// console.log(names.match(/\d\w{5}(?=z)/gi));
// console.log(names.match(/\d\w{8}(?!z)/gi));

// let txt = "we love programming and @ because @ is amazing";
// console.log(txt.replace("@", "javascript"));
// console.log(txt.replaceAll("@", "javascript"));
// let re = /@/gi;
// console.log(txt.replaceAll(re, "javascript"));
// console.log(txt.replaceAll(/@/gi, "javascript"));

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phonere = /\(\d{4}\)\s\d{3}-\d{4}/gi;
//   let validtionResult = phonere.test(phoneInput);
//   if (validtionResult === false) {
//     return false;
//   }
//   return false;
// };

// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }
// let userone = new User(100, "elzero", 5000);
// let usertwo = new User(101, "hassan", 6000);
// let userthree = new User(102, "sayed", 7000);

// console.log(userone.i);
// console.log(userone.u);
// console.log(userone.s);

// console.log(usertwo.i);
// console.log(usertwo.u);
// console.log(usertwo.s);

// console.log(userthree.i);
// console.log(userthree.u);
// console.log(userthree.s);

// class User {
//   constructor(id, username, salary) {
//     console.log(this);
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }
// let userone = new User(100, "elzero", 5000);
// console.log(userone.i);
// console.log(userone.u);
// console.log(userone.s);
// console.log(userone instanceof User);
// conso9le.log(userone.constructor === User);

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username || "Unknown";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `hello ${this.u} your salary is ${this.s}`;
//     };
//   }
//   writeMsg() {
//     return `hello ${this.u} your salary is ${this.s}`;
//   }
// }

// let userone = new User(100, "elzero", 5000);
// let usertwo = new User(101, "", 6000);

// console.log(userone.u);
// console.log(userone.s);
// console.log(userone.msg());
// console.log(userone.writeMsg());

// console.log(usertwo.u);
// console.log(usertwo.s);
// console.log(userone.msg);
// console.log(userone.writeMsg);

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     // console.log(this);
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }
// let userone = new User(100, "Elzero", 5000);
// // console.log(userone.u);
// userone.updateName("Faysal Saadeh");
// // console.log(userone.u);

// let strone = "Elzero";
// let strtwo = new String("Elzero");

// // console.log(typeof strone);
// // console.log(typeof strtwo);

// // console.log(strone instanceof String);
// // console.log(strtwo instanceof String);

// // console.log(strone.constructor === String);
// // console.log(strtwo.constructor === String);

//   class Sell {
//     constructor(productName, price, country, discount) {
//       this.productName = productName;
//       this.price = price;
//       this.country = country;
//       this.discount = discount;
//     }

//     makeDiscount() {
//       let priceAfterDiscount = this.price - this.discount;

//       return priceAfterDiscount;
//     }

//     displayProduct() {
//       let message = `Your Product name is ${this.productName} , main Price is ${
//         this.price
//       } but after discount it became ${this.makeDiscount()}`;

//       console.log(message);
//     }
//   }

//   let productOne = new Sell("IPHONE X", 30, "Lebanon", 2);
//   productOne.displayProduct();
// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     console.log(this);
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }
// let userone = new User(100, "Elzero", 5000);

// console.log(userone.u);
// userone.updateName("Faysal Saadeh");
// console.log(userone.u);

// let strone = "Elzero";
// let strtwo = new String("Elzero");

// console.log(typeof strone);
// console.log(typeof strtwo);

// console.log(strone instanceof String);
// console.log(strtwo instanceof String);

// console.log(strone.constructor === String);
// console.log(strtwo.constructor === String);
