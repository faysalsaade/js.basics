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

// function makeItred(e) {
//   e.target.style.color = "Red";
// }
// let p = document.querySelector("p");
// p.addEventListener("click", makeItred);

// function iamAcallback() {
//   console.log("iam A callback");
// }
// setTimeout(iamAcallback, 2000);

// setTimeout(() => {
//   console.log("I");
//   setTimeout(() => {
//     console.log("am");
//     setTimeout(() => {
//       console.log("faysal");
//       setTimeout(() => {
//         console.log("saadeh");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const myPromise = new Promise((resolvefunction, rejectfunction) => {
//   let connect = false;
//   if (connect) {
//     resolvefunction("connection Established");
//   } else {
//     rejectfunction(Error("Connection bad"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`bad ${rejectValue}`)
// );
// console.log(myPromise);

// const myPromise = new Promise((resolvefunction, rejectfunction) => {
//   let employees = [ ];
//   if (employees.length === 4) {
//     resolvefunction(employees);
//   } else {
//     rejectfunction(Error("Numbers of employees is not four "));
//   }
// });

// myPromise
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     console.log(`the better employe is ${resolveValue}`);
//   })
//   .catch((rejectReason) => console.log(rejectReason))
//   .finally(console.log("the test is finishing"));
// const getData = (apilink) => {
//   return new Promise((resolve, reject) => {});
//   let myRequest = new XMLHttpRequest();
//   myRequest.onreadystatechange = function () {
//     if ((this.readyState === 4) & (this.status === 200)) {
//       let jsData = JSON.parse(this.responseText);
//       for (let index = 0; index < jsData.length; index++) {
//         let div = document.createElement("div");
//         let repoName = document.createTextNode(jsData[index].name);
//         div.appendChild(repoName);
//         document.body.appendChild(div);
//       }
//     }

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     let myData = result.json();
//     return myData;
//   })
//   .then((full) => {
//     full.length = 10;
//     return full;
//   })
//   .then((ten) => {
//     console.log(ten[0].name);
//   });
// const getData = (apilink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("no data found"));
//       }
//     };

//     myRequest.open("GET", apilink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));
// const myfirstpromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("i am the first promise");
//   }, 5000);
// });

// const mysecondpromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("i am the second promise");
//   }, 1000);
// });

// const mythirdpromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("i am the third promise ");
//   }, 2000);
// });
// Promise.all([myfirstpromise, mysecondpromise, mythirdpromise]).then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedvalue) => console.log(`rejected: ${rejectedvalue}`)
// );

// Promise.allSettled([myfirstpromise, mysecondpromise, mythirdpromise]).then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedvalue) => console.log(`rejected: ${rejectedvalue}`)
// );

// Promise.race([myfirstpromise, mysecondpromise, mythirdpromise]).then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedvalue) => console.log(`rejected: ${rejectedvalue}`)
// );ddddddddddddddddddddddddd
