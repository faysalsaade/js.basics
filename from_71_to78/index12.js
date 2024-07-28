let mynums = [1,2,3,4,5,6];
let newarray = [];
for (let index = 0; index < mynums.length; index++) {
    newarray.push(mynums[index] + mynums[index])
}
console.log(newarray);
// let addself =mynums.map(function(element,index,arr){
//     console.log(`current element  => ${element}`);
//     console.log(`current index => ${index}`);
//     console.log(`array => ${arr}`);
//     console.log(`this => ${this}`);
//     return element + element
// },10);

// let addself = mynums.map((a) => a + a);
// console.log(addself);


// function add(ele) {
//     return ele + ele
// }
// let addition = mynums.map(add);
// console.log(addition);

// let swappingCases = "elZERo";
// let invertednumbers = [1,-10,-20,15,100,-30];
// let ignorenumbers = "Elz123er4o";

// let sw = swappingCases
// .split("")
//     .map(function(ele)  {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// })
// .join("");    
// console.log(sw);
// let inv = invertednumbers.map(function(ele){
//     return -ele;
// });
// console.log(inv);

// ==> arrow function
// let sw = swappingCases
// .split("")
// .map((a) => ( a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
// .join("");    
// console.log(sw);



// let inv = invertednumbers.map(function(ele){
//     return -ele;
// });
// console.log(inv);

// let ign = ignorenumbers 
// .split("")
// .map(function(ele){
//     return isNaN(parseInt(ele)) ? ele : "";
// })
// .join("");
// console.log(ign); 

// let friends = ["fif","eof","eaf","euf","fef","frf"]
// let filterfriends = friends.filter(function(ele){
//     return ele.startsWith("f")
    
// });
// console.log(filterfriends);
// let numbers = [10,20,4,31,66,16 ]
// let evennumbers = numbers.filter(function(ele){
//     return ele % 2 === 0 ? true : false
    
// });
// console.log(evennumbers);