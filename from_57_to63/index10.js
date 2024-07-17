// function sayhello(username) {
//   console.log(`hi ${username}`);
// }

// sayhello("fifi");
// sayhello("foufi");
// sayhello("fafi");
// sayhello("foufou");
// function sayhello(name, age) {
//   if (age < 20) {
//     console.log(`app is not suitable for you`);
//   } else {
//     console.log(`hello ${name} you age is ${age}`);
//   }
// }
// sayhello("fifi", 38);
// sayhello("fafi", 14);
// sayhello("foufou", 30);
// function generateyears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }
// generateyears(2005, 2025, 2021);

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i === 15) {
//       return `interruptting`;
//     }
//     console.log(i);
//   }
// }
// generate(10, 20);

// function sayhello(name = "fifi", age = "16") {
//   return `hello ${name} your age is ${age}`;
// }
// console.log(sayhello());

// function calc(...numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return `final result is ${result}`;
// }
// console.log(calc(10, 50, 20, 90, 79, 11, -60, -100));

// function showinfo(us = "un", ag = "un", rt = 0, show = "yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>welcome, ${us}</h2>`);
//   document.write(`<p>age: ${ag}</p>`);
//   document.write(`<p>hour rate: $${rt}</p>`);
//   if (show === "yes") {
//     if (sk.length > 0) {
//       document.write(`<p>skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>skills: no skills</p>`);
//     }
//   } else {
//     document.write(`<p>skills is hidden </p>`);
//   }
//   document.write(`</div>`);
// }
// showinfo();

// function sayHello(theName, theGender = 0) {
//   if (theGender === "Male") {
//     document.write(`hello Mr ${theName}`);
//     document.write(`<br></br>`);
//   } else if (theGender === "Female") {
//     document.write(`hello Miss ${theName}`);
//     document.write(`<br></br>`);
//   } else {
//     document.write(`hello ${theName}`);
//   }
// }

// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// function calculate(firstNum, secondNum, operation) {
//   if (!secondNum) {
//     document.write(`<p>Second Number Not Found</p>`);
//   } else if (!operation) {
//     document.write(firstNum + secondNum);
//     document.write(`<br></br>`);
//   } else if (operation === "add") {
//     document.write(firstNum + secondNum);
//     document.write(`<br></br>`);
//   } else if (operation === "subtract") {
//     document.write(firstNum - secondNum);
//     document.write(`<br></br>`);
//   } else if (operation === "multiply") {
//     document.write(firstNum * secondNum);
//   }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, "subtract"); // -10
// calculate(20, 30, "multiply"); // 600

// function ageInTime(theAge) {
//   document.write(`${theAge * 12}` + " " + "Months");
//   document.write(`<br></br>`);
//   document.write(`${theAge * 52}` + " " + "weeks");
//   document.write(`<br></br>`);
//   document.write(`${theAge * 365}` + " " + "days");
//   document.write(`<br></br>`);
//   document.write(`${theAge * 8760}` + " " + "hours");
//   document.write(`<br></br>`);
//   document.write(`${theAge * 525600}` + " " + "minutes");
//   document.write(`<br></br>`);
//   document.write(`${theAge * 3.154e7}` + " " + "secondes");
//   document.write(`<br></br>`);
// }

// ageInTime(67); // Months Example => 456 Months

// function checkStatus(a, b, c) {
//   if (a === true || b === true || c === true) {
//     document.write(`"Hello Osama, Your Age Is 38, You Are Available For Hire"`);
//     document.write(`<br></br>`);
//   } else {
//     document.write(
//       `"Hello Osama, Your Age Is 38, You Are Not Available For Hire"`
//     );
//   }
// }
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
