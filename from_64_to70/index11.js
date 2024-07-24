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


// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     const myarray = zName.split(" ");
//     return myarray;
    
//   }
//  // namePattern(zName);

//   function ageW ithMessage(zAge) { 
//       const age = zAge.split(" ");
//       // console.log(`your age is ${age[0]}`);
//   }
//     ageWithMessage(zAge)
  
//   function countryTwoLetters(zCountry) {
//       // console.log(`you live in ${zCountry.slice(0,2).toUpperCase()
//       // }`);
//   }
//   countryTwoLetters(zCountry)


//   function fullDetails() {
//     return`hello ${namePattern(zName)[0]} ${namePattern(zName)[1][0]}, Your age is ${zAge.slice(0,3)},you live in ${zCountry.slice(0,2).toUpperCase()} `;
//   }
//   return fullDetails(); // Do Not Edit This
// }
// console.log(getDetails("faysal fadeh", "39 Is My Age", "egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG
// console.log(getDetails("ousamma saadeh", "22 Is The Age", "lebanon"));
// // // // Hello Ahmed A., Your Age Is 32, You Live In SY

// function itsMe() {
//     return `Iam A Normal Function`;
//   }
  
//   console.log(itsMe()); // Iam A Normal Function
//  let itsMe = () => 'Iam A Normal Function';
//   console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
//   }
  
//   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//   let  urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
  
  
//   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let checker = (zName) => (status) => (salary) => "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

  console.log(checker("Osama")("Available")(4000 )); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
