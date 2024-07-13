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
function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `interruptting`;
    }
    console.log(i);
  }
}
generate(10, 20);
