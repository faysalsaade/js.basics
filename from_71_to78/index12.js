    // let mynums = [1,2,3,4,5,6];
// let newarray = [];
// for (let index = 0; index < mynums.length; index++) {
//     newarray.push(mynums[index] + mynums[index])
// }
// console.log(newarray);
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
// let sentence = "i love foood code too playing much";
// let smallwords = sentence
// .split(" ")
// .filter(function(ele){
// return ele.length <= 4 ;
// })
// .join(" ");
// console.log(smallwords);


// let ignorenumbers = "fa8y49s2s3a2l9"
// let ign = ignorenumbers.split("").filter(function(ele){
// return isNaN(parseInt(ele))}).join("");
// console.log(ign); 


// let mix = "a123be83l";
// let mixedcontent = mix.split("").filter(function(ele) {
//     return !isNaN(parseInt(ele))
// }).map(function(ele){
//    return ele * ele;
// })
// .join("")
// console.log(mixedcontent);
    


// let nums = [10,20,30,90];
// let add = nums.reduce(function(acc,current,index,arr){
//     console.log(`acc => ${acc}`);
//     console.log(`current element => ${current}`);
//     console.log(`current element index=> ${index}`);
//     console.log(`array => ${arr}`);
//     console.log(acc + current);
//     console.log(`##############`);
//     return acc + current
// },-4);
// console.log(add);

let thebiggest = ["bla","propaganda","other","aaa","battery","test",""]
 let check = thebiggest.reduce(function(acc,current){
     console.log(`acc => ${acc}`);
     console.log(`current element => ${current}`);
     console.log(acc.length > current.length ? acc:current);    
    console.log(`##############`);
    return acc.length > current.length ? acc:current
 });
 console.log(check);
let removechars = ["e","@","l","z","@","@","e","r","@","o"];  
let finalstring = removechars.filter(function(ele){
    return !ele.startsWith("@")
}).reduce(function(acc,current){
return acc+current;
}); 
console.log(finalstring);