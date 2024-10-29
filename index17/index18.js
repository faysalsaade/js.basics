// import { a, arr, saysomething as s } from "./index17.js";
// console.log(a);
// console.log(arr);
// console.log(s());

// import fifi, { a, arr, saysomething as s } from "./index17.js";
// console.log(a);
// console.log(arr);
// console.log(s());
// console.log(fifi());

// import * as all from "./index17.js";
// console.log(all);
// console.log(all.arr);

// const myJsonObjectFromServer = '{"Username":"faysal","Age":16}';
// console.log(typeof myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);

// const myJsonObject = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myJsonObject);
// console.log(myJsonObject);

// myJsonObject["Username"] = "Elzero";
// myJsonObject["Age"] = 40;

// const myJsonObjecttoServer = JSON.stringify(myJsonObject);
// console.log(typeof myJsonObjecttoServer);
// console.log(myJsonObjecttoServer);

// Synchronous
// console.log("mm");
// console.log("pp");
// window.alert("fifi");
// console.log("z");

// Asynchronous
// console.log("mm");
// console.log("pp");

// setTimeout(() => {
//   console.log("ooo");
// }, 1000);
// console.log("z");
// setTimeout(() => {
//   console.log("Web API");
// }, 0);
// function one() {
//   console.log("one");
// }
// function two() {
//   one();
//   console.log("two");
// }

// function three() {
//   two();
//   console.log("three");
// }
// three();

// console.log("one");
// setTimeout(() => {
//   console.log("three");
// }, 0);
// setTimeout(() => {
//   console.log("four");
// }, 0);
// console.log("two");

// setTimeout(() => {
//   console.log(myvar);
// }, 0);
// let myvar = 100;
// myvar += 100;

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

// document.write(numbersCombined);

// console.log(numbersOne);
// console.log(...(numbersOne + "," + 1));

// Request And Respond API

// let myRequest = new XMLHttpRequest();
// myRequest.open(
//   "GET",
//   "http://wanderwise.backend.wanderwise.space/api/trips?category=&stars="
// );
// myRequest.send();

// let countryList = document.getElementsByTagName("ul")[0];

// myRequest.onload = function () {
//   if (myRequest.status >= 200 && myRequest.status < 300) {
//     let objectofData = JSON.parse(myRequest.responseText);

//     let countryArray = objectofData.trips.countries;
//     console.log(countryArray);

//     // Loop through the country array and create list items
//     for (let index = 0; index < countryArray.length; index++) {
//       let country = countryArray[index];
//       countryList.innerHTML += `<li>${country}</li>`;
//     }
//   } else {
//     console.error("Request failed with status:", myRequest.status);
//   }
// };

// let myRequest = new XMLHttpRequest();
// myRequest.open(
//   "Get",
//   "http://wanderwise.backend.wanderwise.space/api/trips?category=&stars="
// );
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsdata = JSON.parse(this.responseText);
//     // console.log(jsdata);
//     for (let i = 0; i < jsdata.length; i++) {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(jsdata[i].full_name);
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   }
// };
