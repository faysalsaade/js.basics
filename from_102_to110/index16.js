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

const user = {
  theName: "faysal",
  theAge: 16,
  skills: ["html", "css", "javascript"],
  addresses: {
    egypt: "cairo",
    ksa: "riyadh",
  },
};

// const {
//   addresses: { egypt: e },
// } = user;
// console.log(`${e}`);

const {
  theName: n,
  theAge: a,
  skills: [one, two, three],
  addresses: { egypt: e },
} = user;
console.log(`your name is ${n}`);
console.log(`your age is ${a}`);
console.log(`your skills is : ${one},${two},${three}`);
console.log(`your live in ${e}`);
