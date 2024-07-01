// let myfriends = ["Ahmed", "Mohamed", "Sayed", ["marwan", "ali"]];

// console.log(`hello ${myfriends[0]}`);
// console.log(`hello ${myfriends[2]}`);
// console.log(`${myfriends[1][2]}`);
// console.log(`${myfriends[3][1][2]}`);

// console.log(myfriends);
// myfriends[1] = "gamal";
// console.log(myfriends);
// myfriends[3] = ["sameh", "ameer"];
// console.log(myfriends);

// console.log(Array.isArray(myfriends));

let myfriends = ["ahmed", "mohamed", "sayed", "alaa"];
// console.log(myfriends.length);
// myfriends[myfriends.length - 1] = "faysal";
console.log(myfriends);
myfriends.unshift("faysal", "fifi");
console.log(myfriends);
myfriends.push("fifo", "fofo");
console.log(myfriends);
let first = myfriends.shift();
console.log(myfriends);
console.log(`first name is ${first}`);
let last = myfriends.pop();
console.log(myfriends);
console.log(`first name is ${last}`);
