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
available : false,
addresses : {
  ksa : "riyadh",
  egypt: {
    one : "cAIRO",
    two : "giza",
  },
},
checkav :function () {
  if (available === true) {
    return `free for work`;
  }else{
    return `not free`;
  }
}
};