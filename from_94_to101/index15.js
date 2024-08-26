// let one = document.querySelector(".one")
// let two = document.querySelector(".two")

// window.onload = function () {
//     two.focus();
// }
// one.onblur = function () {
//     document.links[0].click()
// }


// let element = document.getElementById("my-div")
// console.log(element.classList);
// console.log(typeof element.classList);

// console.log(element.classList.length);

// console.log(element.classList.contains("fofoi"));
// console.log(element.classList.contains("show"));

// console.log(element.classList.item(2));

// element.onclick = function () {
//     element.classList.add("fif","ofo")
// }

// element.onclick = function () {
//     element.classList.toggle("fif")
// }


// let element = document.getElementById("my-div")
// element.style.color = "blue";
// element.style.backgroundColor = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight : bold; color:green; opacity : 0.9;"

// element.style.removeProperty("color")
// element.style.setProperty("font-size","20px","important")

// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty("background-color","red");

//  let element = document.getElementById("my-div")
//  let createdp = document.createElement("p");
//  element.after("hi fifi")
//  element.prepend("Ger ")

//  element.remove();


// let span = document.querySelector(".two")
 // console.log(span.nextElementSibling.remove());
// console.log(span.parentElement);
// span.onclick = function () {
//     span.parentElement.remove()
// }


// let myp = document.querySelector("p").cloneNode(true)
// let mydiv = document.querySelector("div")

// myp.id = `${myp.id}-clone`

// mydiv.appendChild(myp)



let myp = document.querySelector("P")

// myp.onclick = one ;
// myp.onclick = two ;
// function one() {
//     console.log("message from onclick 1");
// }
// function two() {
//     console.log("message from onclick 2");
// }

// window.onload = "fifi"
// myp.addEventListener("click", function () {
//     console.log(`message from onclick 1 event`);
// })
// myp.addEventListener("click",one)
// myp.addEventListener("click",two)
// myp.addEventListener("click","string") // error 
myp.onclick = function () {
    let newp = myp.cloneNode(true);
    newp.className = "clone"
    document.body.appendChild(newp)
}

// let cloned  = document.querySelector(".clone"); //error
// cloned.onclick = function () {
//     console.log(i am cloned);
    
// }