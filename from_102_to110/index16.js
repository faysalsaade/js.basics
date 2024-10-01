// window.document.title = "fifi saa";
// let confirmMsg = confirm("do you love fifi");
// console.log(confirmMsg);
// if (confirmMsg === true) {
//   console.log("thank you");
// } else {
//   console.log("you are donkey");
// }
// let promptMsg = prompt("do you love fifi", "sure");
// console.log(promptMsg);

// setTimeout(saymsg, 2000, "fifi", 16);
// function saymsg(user, age) {
//   console.log(`i am msg from (${user})   his age is : ${age}`);
// }

// let counter = setTimeout(saymsg, 4000);
// function saymsg() {
//   console.log(`i am msg `);
// }
// let btn = document.querySelector("button");
// btn.onclick = function () {
//   clearTimeout(1);
// };

// setInterval(function () {
//   document.write("<p>dd</p>");
// }, 2000);

// setInterval(saymsg, 2000);
// function saymsg() {
//   console.log(`i am msg `);
// }0 0.

// setInterval(saymsg, 2000, "fifi", 16);
// function saymsg(user, age) {
//   console.log(`i am msg from (${user})   his age is : ${age}`);
// }

// let div = document.querySelector("div");
// function down() {
//   div.innerHTML -= "1";
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }
// down();
// let counter = setInterval(down, 2000);
// console.log(location);
// console.log(location.href);

// location.href = "https://google.com";
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.hash);
// location.replace();
// location.assign();

// setTimeout(function () {
//   window.open(
//     "https://google.com",
//     "_blank",
//     "width=400,height=400,left=500,top=100"
//   );
// }, 2000);
// console.log(history);
// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
// window.scrollTo({
//   left: 1200,
//   top: 1500,
//   behavior: "smooth",
// });

// let btn = document.querySelector("button");

// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };
// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// };
// set
// window.localStorage.setItem("color", "#f00");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

//get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

//remove
// window.localStorage.removeItem("color");

// clear all
// window.localStorage.clear();
//get key
// console.log(window.localStorage.key(0));

//set color in page
// document.body.style.backgroundColor = window.localStorage.getItem("color");
// console.log(window.localStorage);
// console.log(typeof window.localStorage);
// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//   window.localStorage.setItem("input.name", this.value);
// };

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let myfr = ["did", "do", "does", "fifi"];
// [a = "fff", b, c, d, e = "ffi"] = myfr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// let [x, y, z] = myfr;
// console.log(x);
// console.log(y);
// console.log(z);

// let myfr = ["did", "do", "does", ["dd", "ss", ["ww", "aa"]]];
// let [, , , [a, , [, b]]] = myfr;
// console.log(a);
// console.log(b);

// let book = "video";
// let video = "book";

// let stash = book;
// book = video;
// video = stash;
// [book, video] = [video, book];
// console.log(book);
// console.log(video);

// const user = {
//   theName: "faysal",
//   theAge: 16,
//   theTitle: "Fifi",
//   theCountry: "lebanon",
//   theColor: "black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };
// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "red",
//   skills: { html, css },
// } = user;
// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`my html skills progress is ${html}`);
// console.log(`my css skills progress is ${css}`);

// const user = {
//   theName: "faysal",
//   theAge: 16,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };
// showDetails(user);
// function showDetails(obj) {
//   console.log(`your name is ${obj.theName}`);
//   console.log(`your age is ${obj.theAge}`);
//   console.log(`your skills is ${obj.skills.css}`);
// }

// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`your name is ${n}`);
//   console.log(`your age is ${a}`);
//   console.log(`your skills is ${c}`);
// }

// const user = {
//   theName: "faysal",
//   theAge: 16,
//   skills: ["html", "css", "javascript"],
//   addresses: {
//     egypt: "cairo",
//     ksa: "riyadh",
//   },
// };
// const {
//   addresses: { egypt: e },
// } = user;
// console.log(`${e}`);

// const {
//   theName: n,
//   theAge: a,
//   skills: [one, two, three],
//   addresses: { egypt: e },
// } = user;
// console.log(`your name is ${n}`);
// console.log(`your age is ${a}`);
// console.log(`your skills is : ${one},${two},${three}`);
// console.log(`your live in ${e}`);

// let mydata = [1, 1, 1, 2, 3, "A"];
// // let myUniquedata = new Set([1, 1, 1, 2, 3]);
// // let myUniquedata = new Set([mydata]);
// // let myUniquedata = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniquedata = new Set();

// myUniquedata.add(1).add(1).add(1);
// myUniquedata.add(2).add(3).add("A");
// console.log(`is set has => A (${myUniquedata.has("a".toUpperCase())})`);

// console.log(mydata);
// console.log(myUniquedata);
// console.log(myUniquedata.size);
// console.log(mydata[0]);
// console.log(myUniquedata[0]);

// // myUniquedata.delete(2);
// console.log(myUniquedata.delete(2));
// console.log(myUniquedata);
// console.log(myUniquedata.size);

// myUniquedata.clear();
// console.log(myUniquedata);
// console.log(myUniquedata.size);

// let myset = new Set([1, 1, 1, 2, 3, "A", "A", "A"]);
// console.log(myset);
// console.log(`numbers of elements inside  Set is ${myset.size}`);
// let iterator = myset.keys();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// console.log(myset);

// console.log(myset.keys());
// myset.forEach((el) => console.log(el));
// console.log("#".repeat(20));

// let myws = new WeakSet([{ a: 1, b: 2 }]);
// console.log(myws);

// let myMap = new Map([
//   [10, "number"],
//   ["fifi", 16],
//   ["false", true],
// ]);
// myMap.set(10, "number");
// myMap.set("fifi", 16);
// console.log(myMap);
// console.log(myMap.get(10));
// console.log(myMap.get("fifi"));
// console.log(myMap.get("false"));
// console.log("$$$$$$$$$$$$$$ $$$$$$$$$$$$$$$$");
// console.log(myMap.has("false"));
// console.log("##############################");

// console.log(myMap.size);
// console.log(myMap.delete("false"));
// console.log(myMap.size);
// myMap.clear();
// console.log(myMap.size);

// let mapUser = { thename: "fifi" };
// let mymap = new Map();
// mymap.set(mapUser, "object value");
// mapUser = null;
// console.log(mymap);
// console.log("###################################");
// let wMapUser = { thename: "faysal" };
// let myWeakMap = new Map();
// myWeakMap.set(wMapUser, "value");
// wMapUser = null;
// console.log(myWeakMap);

// console.log(Array.from("faysal"));
// console.log(
//   Array.from("12345", function (n) {
//     return +n + +n;
//   })
// );
// console.log(Array.from("12345", (n) => +n + +n));
// let myarray = [1, 1, 1, 2, 3];
// let newset = new Set(myarray);
// console.log(newset);

// function af() {
//   return Array.from(arguments);
// }
// console.log(af("fff", "3333", 2, 22, 1));

// let myarray = [10, 20, 30, 40, 50, "a", "b"];
// myarray.copyWithin(3);
// myarray.copyWithin(4, 6);
// myarray.copyWithin(4, -1);
// myarray.copyWithin(1, -2);
// myarray.copyWithin(1, -2, -1);
// console.log(myarray);
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let fifi = 4;
// let check = nums.some(function (e) {
//   console.log("test");
//   return e > 5;
// });
// let check = nums.some(function (e) {
//   return e > this;
// }, fifi);
// let check = nums.some((e) => e > 5);
// console.log(check);
// function checkvalues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkvalues(nums, 20));
// console.log(checkvalues(nums, 10));
// let range = {
//   min: 10,
//   max: 20,
// };
// let checkNumbersInRange = nums.some(function (e) {
//     console.log(this.min);
//     console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range);
// console.log(checkNumbersInRange);
// const locations = {
//   15: "Lebanon",
//   20: "German",
//   30: "France",
//   40: "Egypt",
// };
// let mainLocation = 15;

// let locationArray = Object.keys(locations);
// console.log(locationArray);
// let locationArrayNumbers = locationArray.map((n) => +n);
// console.log(locationArrayNumbers);
// let check = locationArrayNumbers.every(function (e) {
//   return e > this;
// }, mainLocation);
// console.log(check);

// console.log("faysal");
// console.log(..."faysal");
// console.log([..."faysal"]);
// let myarray1 = [1, 2, 3];
// let myarray2 = [4, 5, 6];
// let myarrays = [...myarray1, ...myarray2];
// console.log(myarrays);
// let copiedarray = [...myarray1];
// console.log(copiedarray);
// let allfri = ["ff", "gg", "ee"];
// let somefri = ["dd", "qq", "ss"];
// // allfri.push(...somefri);
// allfri = [...allfri, ...somefri];
// console.log(allfri);
// let mynums = [10, 2, -22, 132, -3333, 424];
// console.log(Math.max(...mynums));
// let objone = {
//   a: "?",
//   b: "@",
// };
// let objtwo = {
//   c: "#",
//   d: "&",
// };

// console.log({ ...objone, ...objtwo, f: "%" });
// let str1 = "10 20 1011 2200";
// let str2 = "os1 os23 os123 os122os os12os323";

// let mystring = "faysal saadeh Faysal";
// let regex = /faysal/gi;
// console.log(mystring.match(regex));

// let tld = "com Net org Info Code Io";
// let tldRe = /(info|org|io)/gi;
// console.log(tld.match(tldRe));

// let nums = "12345678910";
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));

// let notNums = "12345678910";
// let notNsRe = /[^0-2]/g;
// console.log(notNums.match(notNsRe));

// let specialNums = "1!2@3#4$5%6&789";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

// let practice = "os1 os1os os2 os8 os8os";
// let practiceRe = /os[5-9]os/g;
// console.log(practice.match(practiceRe));

// let mystring = "AaBbcdefG123!234%^&*";
// let aTOzSmall = /[a-z]/g;
// let NotaTOzSmall = /[^a-z]/g;
// let aTOzCapital = /[A-Z]/g;
// let NotAtoZCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let fif = /[a-z]/gi;
// let LettersCapsAndSmall = /[a-zA-Z]/g;
// let NumsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-z0-9]/gi;

// console.log(mystring);

// console.log(mystring.match(aTOzSmall));
// console.log(mystring.match(NotaTOzSmall));

// console.log(mystring.match(aTOzCapital));
// console.log(mystring.match(NotAtoZCapital));

// console.log(mystring.match(aAndcAnde));
// console.log(mystring.match(NotaAndcAnde));

// console.log(mystring.match(fif));
// console.log(mystring.match(LettersCapsAndSmall));
// console.log(mystring.match(NumsAndSpecials));

// console.log(mystring.match(specials));

// let email = "o@@@g...com o@g.com o@g.net A@Y.com O-g.com o@s.org 1@1.com";
// let dot = /./g;
// let SmaWord = /\w/g;
// let capWord = /\W/g;
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot));
// console.log(email.match(SmaWord));
// console.log(email.match(capWord));
// console.log(email.match(valid));

// let names = "sayed 1spam 2spam 3spam spam4 spam5 osama ahmed wspamd";
// let re = /(\bspam|spam\b)/gi;
// console.log(names.match(re));
// console.log(re.test(names));
// console.log(/(\bspam|spam\b)/gi.test(names));
// console.log(/(\bspam|spam\b)/gi.test("fifi"));
// console.log(/(\bspam|spam\b)/gi.test("spam4"));

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@gmail.ru";
// let mailsre = /\w+@\w+.(com|net)/gi;
let mailsre = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsre));

let nums = "0110 10 150 05120 0560 350 00";
let numsRe = /0\d*0/gi;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com";
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));
