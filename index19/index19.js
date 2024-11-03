const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("i am the good promise ");
  }, 3000);
});

// async function readData() {
//   console.log("before promise");
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`reason: ${reason}`);
//   } finally {
//     console.log("After promise");
//   }
// }
// readData();

async function readData() {
  console.log("before promise");
  try {
    console.log(await myPromise);
  } catch (reason) {
    console.log(`reason: ${reason}`);
  } finally {
    console.log("After promise");
  }
}
readData();
