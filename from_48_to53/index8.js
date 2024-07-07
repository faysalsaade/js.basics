// // for (let i = 0; i < 10; i = i + 2) {
// //   console.log(i);
// // }
// // let myfriends = ["fifi", "fofo", "fafi", "foufou", "fafa"];
// // let onlynames = [];
// // for (let i = 0; i < myfriends.length; i++) {
// //   if (typeof myfriends[i] === "string") {
// //     onlynames.push(myfriends[i]);
// //   }
// // }
// // console.log(onlynames);

// // let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// // let colors = ["red", "green", "black"];
// // let models = [2020, 2021];
// // for (let i = 0; i < products.length; i++) {
// //   console.log("#".repeat(15));
// //   console.log(`# ${products[i]}`);
// //   console.log("#".repeat(15));
// //   console.log(`${"colors:"}`);
// //   for (let j = 0; j < colors.length; j++) {
// //     console.log(`- ${colors[j]}`);
// //   }
// //   console.log(`${"models:"}`);
// //   for (let k = 0; k < models.length; k++) {
// //     console.log(`- ${models[k]}`);
// //   }
// // }
// // let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// // let colors = ["red", "green", "black"];

// // mainloop: for (let i = 0; i < products.length; i++) {
// //   console.log(products[i]);
// //   nestedloop: for (let j = 0; j < products.length; j++) {
// //     console.log(`- ${colors[j]}`);
// //     if (colors[j] === "green") {
// //       break mainloop;
// //     }
// //   }
// // }
// // let products = ["keyboard", "mouse", "pen", "pad", "monitor", "fifi"];
// // let i = 0;
// // for (;;) {
// //   console.log(products[i]);
// //   i++;
// //   if (i === products.length) break;
// // }
// // let products = ["keyboard", "mouse", "pen", "pad", "monitor", "fifi"];
// // let colors = ["red", "green", "blue"];
// // let showcount = 3;
// // document.write(`<h1>show ${showcount} products</h1>`);
// // for (let i = 0; i < showcount; i++) {
// //   document.write(`<div>`);
// //   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
// //   for (let j = 0; j < colors.length; j++) {
// //     document.write(`<p>${colors[j]}</p>`);
// //   }
// //   document.write(`<p>${colors.join(" | ")}</p>`);
// //   document.write(`</div>  `);
// // }
// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// 10;
// 20;
// 30;
// 50;
// 60;
// 70;
// 80;
// 90;
// 100;
// for (let i = 10; i < 110; i = i + 10) {
//   if (i === 40) {
//     continue;
//   }
//   console.log(i);
// }
// let start = 10;
// let end = 0;
// let stop = 3;

// // Output
// // 10;
// // 09;
// // 08;
// // 07;
// // 06;
// // 05;
// // 04;
// // 03;

// for (let i = 10; i > 2; i--) {
//   if (i < 10) {
//     console.log(`${end}${i}`);
//   } else if (i == start) {
//     console.log(i);
//   }
// }

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i < end + start; i++) {
//   console.log(i);
//   console.log(`--${breaker}`);
//   console.log(`--${end - breaker}`);
// }

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2 4
// 6
// -- 2
// -- 4
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");

for (let i = +false, j = +true; i < friends.length; i++) {
  if (friends[i].charAt(+false).toUpperCase() === letter.toUpperCase()) {
    continue;
  }
  console.log(`"${j++} => ${friends[i]}"`);
}
