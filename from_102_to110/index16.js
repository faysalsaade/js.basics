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
setTimeout(saymsg, 2000, "fifi", 16);
function saymsg(user, age) {
  console.log(`i am msg from (${user})   his age is : ${age}`);
}
