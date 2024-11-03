// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error("i am the bad promise"));
//   }, 3000);
// });
// async function readData() {
//   console.log("before promise");
//   //   myPromise.then((resolveValue) => console.log(resolveValue));
//   console.log(await myPromise.catch((err) => err));
//   console.log("after promise");
// }
// readData();

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("i am the bad promise");
//   }, 3000);
// });
// async function readData() {
//   console.log("before promise");
//   //   myPromise.then((resolveValue) => console.log(resolveValue));
//   console.log(await myPromise);
//   console.log("after promise");
// }
// readData();
