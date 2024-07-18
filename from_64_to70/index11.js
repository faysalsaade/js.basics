// let calculator = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(calculator(10, 3));

// function sayhello() {
//   console.log("hello fifi");
// }
// document.getElementById("fafi").onclick = sayhello;
// setTimeout(function () {
//   console.log("the king faysal");
// }, 6000);
// example 1
// function saymessage(fname, lname) {
//   let message = `hello`;
//   function concatmsg() {
//     message = `${message} ${fname} ${lname}`;
//   }
//   concatmsg();
//   return message;
// }
// console.log(saymessage("faysal", "saadeh"));
//
//
//
// example 2
// function saymessage(fname, lname) {
//   let message = `hello`;
//   function concatmsg() {
//     return `${message} ${fname} ${lname}`;
//   }
//   return concatmsg();
// }
// console.log(saymessage("faysal", "saadeh"));
//
//
//
//
//
// example 3
// function saymessage(fname, lname) {
//   let message = `hello`;
//   function concatmsg() {
//     function getfullname() {
//       return `${fname} ${lname}`;
//     }
//     return `${message} ${getfullname()} `;
//   }
//   return concatmsg();
// }
// console.log(saymessage("faysal", "saadeh"));

// let print = function () {
//   return 10;
// };
// let print = () => 10;

// let print = function (num) {
//   return num;
// };
// console.log(print(10));

// let print = num => num;
// let print = function (num1, num2) {
//   return num1 + num2;
// };

let print = (num1, num2) => num1 + num2;
console.log(print(7, 6));
