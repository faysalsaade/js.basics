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

// let print = (num1, num2) => num1 + num2;
// console.log(print(7, 6));

// var a = 1;
// let b = 2;
// function showtext() {
//   var a = 10;
//   let b = 20;
//   console.log(`function from local ${a} `);
//   console.log(`function from local ${b} `);
// }
// console.log(`from global ${a} `);
// console.log(`from global ${b} `);
// showtext();

// var a = 1;
// let b = 2;
// function showtext() {
//   var a = 10;
//   let b = 20;
//   console.log(`function from local ${a} `);
//   console.log(`function from local ${b} `);
// }

// console.log(`from global ${a} `);
// console.log(`from global ${b} `);
// showtext();
// var x = 10;
// if (10 === 10) {
//   let x = 50;
//   console.log(x);
// }
// console.log(x);

// function parent() {
//   let a = 10;

//   function child() {
//     console.log(a);
//     // console.log(`from child ${b}`);
//     function grand() {
//       let b = 100;
//       console.log(`from grand ${a}`);
//       console.log(`from grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();


function getDetails(zName, zAge, zCountry) {


  function namePattern(zName) {
    
    console.log(zName); 
    // let name = zName
    // const myarray = zName .split("");
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  namePattern(zName);
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

