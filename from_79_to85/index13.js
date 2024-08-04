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
// let user = {
// name : "faysal",
// age : 16,
// skills : ["html","css","javascript"],
// available : true,
// addresses : {
//   ksa : "riyadh",
//   egypt: {
//     one : "cAIRO",
//     two : "giza",
//   },
// },
// checkav :function () {
//   if (user.available === true) {
//     return `free for work`;
//   }else{
//     return `not free`;
//   }
// }
// };

// console.log(user.name);

// console.log(user.age);

// console.log(user.skills);

// console.log(user.skills.join(" | "));

// console.log(user.skills[2]);

// console.log(user.addresses.ksa);

// console.log(user.addresses.egypt.one);

// console.log(user["addresses"].egypt.one);

// console.log(user["addresses"]["egypt"]);

// console.log(user["addresses"]["egypt"]["one"]);

// console.log(user.checkav());


// let user = {
//   age:20,
// };


// // console.log(user);
// user.age = 92
// user["country"] = "flfa"
// user.sayfifi = function () {
//   return `fifi`
// }

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayfifi());

// console.log(this);
// console.log(this === window);


// myvar = 100;

// console.log(window.myvar);
// console.log(this.myvar);
// function sayhello() {
//   console.log(this);
// }
// sayhello()

// console.log(sayhello() === window);
// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };


// let user = {
//   age : 38,
//   ageindays : function (){
//     console.log(this);
// return this.age * 365
//   },
// };
// console.log(user.age);
// console.log(user.ageindays());

// let user =  {
//   age : 40,
//   doubleage : function () {
//     return this.age * 2
//   },
// };
// console.log(user);
// console.log(user.age);
// console.log(user.doubleage());

// let obj = Object.create(user);
// obj.age = 100;
// console.log(obj);
// let copyobj = Object.create(user);
// copyobj.age = 50 ;
// console.log(copyobj);
// console.log(copyobj.age);
// console.log(copyobj.doubleage());

// let obj1 = {
//   prop1 : 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };


// let obj2 = {
//   prop1 : 2,
//   meth1: function () {
//     return this.prop1;
//   },
// };


// let obj3 = {
//   prop1: 3,
//   meth1: function () {
//     return this.prop1;
//   },
// };



// let targetobject = {
//     prop1 : 100,
//     prop3 : 3,

// };
// let finalobject = Object.assign(targetobject,obj1,obj2);


// finalobject.prop1 = 200;
// finalobject.prop3 = 4;
// console.log(finalobject);

// let newobject = Object.assign({},obj1,{prop5 : 5,prop6 : 6})
// console.log(newobject);

// Create Your Object Here
// let member = {
//   name : "elzero",
//   age : 38,
//   country : "egypt",
//   fullDetails : function () {
//     return `my name is  ${member.name} my age is ${member.age} I live in  ${member.country}`
//   }
// }
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt



// let objMethodOne = {
//   property : "method one",
// }

// console.log(objMethodOne.property); // "Method One"



//    let objMethodTwo  = Object.assign({property   : "method two"})

// console.log(objMethodTwo.property); // "Method Two



// let user = {
//   property  : "fff",
// }
// let objMethodThree = Object.create(user);
// objMethodThree.property = "method three";

// console.log(objMethodThree.property); // "Method Three"
// let objMethodFour= {
// property : 'ddd'
// }

// objMethodFour.property = function () {
//   return `method four`
// }
  

// console.log(objMethodFour.property()); // "Method Four"


// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };
//   let finalObject  = Object.assign({a : 1},threeNums,twoNums)
// console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/