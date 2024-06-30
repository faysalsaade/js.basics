let myfriends = ["Ahmed", "Mohamed", "Sayed", ["marwan", "ali"]];

console.log(`hello ${myfriends[0]}`);
console.log(`hello ${myfriends[2]}`);
console.log(`${myfriends[1][2]}`);
console.log(`${myfriends[3][1][2]}`);

console.log(myfriends);
myfriends[1] = "gamal";
console.log(myfriends);
myfriends[3] = ["sameh", "ameer"];
console.log(myfriends);

console.log(Array.isArray(myfriends));
