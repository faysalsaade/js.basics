// for (let i = 0; i < 10; i = i + 2) {
//   console.log(i);
// }
// let myfriends = ["fifi", "fofo", "fafi", "foufou", "fafa"];
// let onlynames = [];
// for (let i = 0; i < myfriends.length; i++) {
//   if (typeof myfriends[i] === "string") {
//     onlynames.push(myfriends[i]);
//   }
// }
// console.log(onlynames);

// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let colors = ["red", "green", "black"];
// let models = [2020, 2021];
// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15));
//   console.log(`${"colors:"}`);
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log(`${"models:"}`);
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }
// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let colors = ["red", "green", "black"];

// mainloop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedloop: for (let j = 0; j < products.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "green") {
//       break mainloop;
//     }
//   }
// }
// let products = ["keyboard", "mouse", "pen", "pad", "monitor", "fifi"];
// let i = 0;
// for (;;) {
//   console.log(products[i]);
//   i++;
//   if (i === products.length) break;
// }
let products = ["keyboard", "mouse", "pen", "pad", "monitor", "fifi"];
let colors = ["red", "green", "blue"];
let showcount = 3;
document.write(`<h1>show ${showcount} products</h1>`);
for (let i = 0; i < showcount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>  `);
}
