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
