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

// class User {
//   static m = 1;
//   static n = 2;
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;

//     console.log("mm");
//   }

//   static sum() {
//     return this.m + this.n;
//   }

//   static addTax(num) {
//     return num;
//   }
// }
// let asli = User.addTax(2);
// console.log(asli);

// console.log(userOne.addTax());

// let userTwo = new User(101, "elzero", 5000);

// console.log(userOne.u);
// console.log(userTwo.u);
// class User {
//   static count = 0;
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }
//   static sayhello() {
//     return `hello from js`;
//   }
//   static countMemb() {
//     return `${this.count} members called `;
//   }
// }
// let userOne = new User(100, "Elzero", 5000);
// let usertwo = new User(101, "FAYSAL", 5000);

// console.log(userOne.u);
// console.log(usertwo.u);
// console.log(userOne.count);
// console.log(User.count);
// console.log(User.sayhello());
// console.log(User.countMemb());

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayhello() {
//     return `hello ${this.u}`;
//   }
// }
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Faysal", 1);

// console.log(userOne.u);
// console.log(userOne.sayhello());
// console.log("#".repeat(20));
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayhello());

// class User {
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getsalary() {
//     return parseInt(this.#e);
//   }
// }
// let userOne = new User(100, "Elzero", "5000 lira");
// console.log(userOne.u);
// console.log(userOne.getsalary() * 0.2);

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayhello() {
//     return `hello ${this.u}`;
//   }
// }
// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype);
// let strone = "ffff";
// console.log(String.prototype);

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayhello() {
//     return `hello ${this.u}`;
//   }
// }
// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype);
// console.log(userOne);
// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };
// console.log(userOne.sayWelcome());
// Object.prototype.love = "faysal";
// String.prototype.addDotBeforeAndAfter = function (val) {
//   return `.${this}.`;
// };
// let mystring = "Elzero";

// const myObject = {
//   a: 1,
//   b: 2,
// };
// Object.defineProperty(myObject, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: false,
//   value: 3,
// });

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true,
//   value: 300, //Cannot redefine property
// });
// myObject.c = 100;
// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }
// console.log(myObject);

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperties(myObject, {
//   c: {
//     configurable: true,
//     value: 3,
//   },
//   d: {
//     configurable: true,
//     value: 4,
//   },
//   e: {
//     configurable: true,
//     value: 5,
//   },
// });
// console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
// console.log(Object.getOwnPropertyDescriptors(myObject));
// let dateNow = new Date();
// console.log(dateNow);

// let seconds = Date.now() / 1000;
// console.log(`secondes ${seconds}`);

// let minutes = Date.now() / 60;
// console.log(`minutes ${minutes}`);

// let hours = Date.now() / 60;
// console.log(`hours ${hours}`);

// let Days = Date.now() / 24;
// console.log(`Days ${Days}`);
// let years = Date.now() / 365;
// console.log(`years ${years}`);

// let dateNow = new Date();
// let birthday = new Date("1982-10-15");
// console.log(birthday);
// let dateDiff = dateNow - birthday;

// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());
// console.log(Date.now());

// let dateNow = new Date();
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(0);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(10000);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(35);
// console.log(dateNow);

// dateNow.setFullYear(2020, 13);
// console.log(dateNow);

// dateNow.setMonth(2020, 13);

// // console.log(dateNow);
// console.log(Date.parse("may 13 2009"));
// let date1 = new Date(0);
// console.log(date1);

// let date2 = new Date("10-25-1982");
// console.log(date2);

// let date3 = new Date("10$25$1982");
// console.log(date3);

// let date4 = new Date("1982");
// console.log(date4);

// let date5 = new Date("82");
// console.log(date5);

// let date6 = new Date("1982-10-25");
// console.log(date6);

// let date7 = new Date("1982-10");
// console.log(date7);

// let date8 = new Date(1982, 9, 25, 2, 10);
// console.log(date8);

// let date9 = new Date("1982-10-25T06:10:00Z");
// console.log(date9);

// function* generateNumbers() {
//   yield 1;
//   alert("fifi");
//   yield 2;
//   yield 3;
//   yield 4;
// }
// let generator = generateNumbers();
// console.log(typeof generator);
// console.log(generator);

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (let value of generateNumbers()) {
//   console.log(value);
// }

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C ";
// }
// function* generateALL() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [1, 2, 3];
// }
// let generator = generateALL();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// console.log(generator.return("ff"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss;
