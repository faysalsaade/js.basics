// let user = {
//     thename: "faysal",
//     theage: 16,
  
//     sayhello: function () {
//        return `hello`;
//     },
// };
// console.log(user.thename);
// console.log(user.theage);
// console.log(user.sayhello());

// let myvar = "country";
// let user = {
//     thename: "faysal",
//     country: "france",
//       // "country of": "lebanon",
// };
// console.log(user.country);
// console.log(user.thename);
// console.log(user.myvar);
// console.log(user[myvar]);
// // console.log(user["country of"]); 
let user = {
name : "faysal",
age : 16,
skills : ["html","css","javascript"],
available : true,
addresses : {
  ksa : "riyadh",
  egypt: {
    one : "cAIRO",
    two : "giza",
  },
},
checkav :function () {
  if (user.available === true) {
    return `free for work`;
  }else{
    return `not free`;
  }
}
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);
console.log(user.checkav());