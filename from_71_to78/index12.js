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

let swappingCases = "elZERo";
let invertednumbers = [1,-10,-20,15,100.-30];
let ignorebooleans = "Elz123er4o";

let sw = swappingCases
.split("")
    .map(function(ele)  {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
})
.join("");    
console.log(sw);


