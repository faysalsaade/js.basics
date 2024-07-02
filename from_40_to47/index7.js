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

// console.log(myfriends.length);
// myfriends[myfriends.length - 1] = "faysal";
// console.log(myfriends);
// myfriends.unshift("faysal", "fifi");
// console.log(myfriends);
// myfriends.push("fifo", "fofo");
// console.log(myfriends);
// let first = myfriends.shift();
// console.log(myfriends);
// console.log(`first name is ${first}`);
// let last = myfriends.pop();
// console.log(myfriends);
// console.log(`first name is ${last}`);

// console.log(myfriends.indexOf("ahmed"));
// console.log(myfriends.indexOf("ahmed", 2));

// console.log(myfriends.lastIndexOf("ahmed"));
// console.log(myfriends.lastIndexOf("ahmed", -2));

// console.log(myfriends.includes("ahmed"));
// console.log(myfriends.includes("ahmed", -2));

// let myfriends = [10, "sayed", "mohamed", "90", 1000, 100, 20, "10", -20, -10];
// console.log(myfriends);
// console.log(myfriends.sort());
// console.log(myfriends.reverse());
// let myfriends = ["Ahmed", "Mohamed", "Sayed", "faysal", "fifi", "foufou"];
// console.log(myfriends);
// console.log(myfriends.slice());
// console.log(myfriends.slice(1));
// console.log(myfriends.slice(1, 3));
// console.log(myfriends.slice(-3));
// console.log(myfriends.slice(1, -2));
// console.log(myfriends);
// myfriends.splice(1, 2, "fafi", "fifi");
// // console.log(myfriends);
// let myfriends = ["ahmed", "mohamed", "sayed", "faysal", "fifi", "foufou"];
// let mynewfriends = ["samer", "sameh"];
// let schoolfriends = ["ameer", "mimi"];

// console.log(myfriends);
// let allfriendes = myfriends.concat(mynewfriends, schoolfriends, "fafo", [1, 2]);
// console.log(allfriendes);
// console.log(allfriendes.join("&"));

// let myfriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myfriends.slice(0, 3)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// console.log(myfriends.slice(-4, -1)); // ["Ahmed", "Elham", "Osama"];

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here

// console.log(friends); // ["Eman", "Osama"]
// friends.splice(0, 1);
// friends.splice(2, 3);
// console.log(friends);

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(`${words.pop()[0]}`); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
console.log(needle == haystack);
// Write 3 Solutions
