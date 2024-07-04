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

let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
let colors = ["red", "green", "black"];
let models = [2020, 2021];
for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log(`${"colors:"}`);
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log(`${"models:"}`);
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}
