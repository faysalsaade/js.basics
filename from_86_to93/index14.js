// let myelement = document.createElement("div") ;
// let myattr = document.createAttribute ("data-custom"    )
// let mytext = document.createTextNode("fifi")
// let mycomment = document.createComment("this is div")


// myelement.className = "product";
// myelement.setAttributeNode(myattr);
// myelement.setAttribute("data-test","testing")  


// //append comment to element 
// myelement.appendChild(mycomment);


// //append text to element
// myelement.appendChild(mytext)


// //append element to body 
// document.body.appendChild(myelement)




// let mymainelement = document.createElement("div")
// let myheading = document.createElement("h1")
// let myparagraph = document.createElement("p")

// let myheadingtext = document.createTextNode('product title');
// let myparagraphtext = document.createTextNode('product description');

// myheading.appendChild(myheadingtext);
// mymainelement.appendChild(myheading);

// myparagraph.appendChild(myparagraphtext);
// mymainelement.appendChild(myparagraph)

// mymainelement.className = "product";
// document.body.appendChild(mymainelement)


// let myelement = document.querySelector("div")
// console.log(myelement);
// console.log(myelement.children);
// console.log(myelement.children[1]);
// console.log(myelement.childNodes);
// console.log(myelement.childNodes[2]);
// console.log(myelement.firstChild);
// console.log(myelement.lastChild);
// console.log(myelement.firstElementChild);
// console.log(myelement.lastElementChild);
// let mybtn = document.getElementById("btn")
// mybtn.onmouseleave= function () {
//     console.log("gg");   
// }
// window.onscroll = function () {
//     console.log("scroll");
// }
// let userinput = document.querySelector('[name = "username"]');
// let ageinput = document.querySelector("[name ='age']");

// document.forms[0].onsubmit = function (e) {
//     let uservalid = false ; 
//     let agevalid = false ;

//     if (userinput.value !== "" && userinput.value.length <= 10) {
//         uservalid = true;
//     }

//    if (ageinput.value !== "") {
//     agevalid = true;
// }

//  if (uservalid === false || agevalid === false) {
//     e.preventDefault();
//  }
// }; 

// document.links[0].onclick = function (event) {
//     console.log(event);
//     event.preventDefault();  
// };



// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByName("js")[0]);
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementsByTagName("div")[0]);


// console.log(document.querySelector("div"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector("div.element"));
// console.log(document.querySelector("#elzero"));


// console.log(document.querySelectorAll("div")[0]);
// console.log(document.querySelectorAll(".element")[0]); 
// console.log(document.querySelectorAll("div.element")[0]);
// console.log(document.querySelectorAll("body > div")[0]);




// let faa = document.querySelectorAll("img");
// console.log(faa);

// for (let index = 0; index < faa.length; index++) {
// faa[index].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
// faa[index].alt="Elzero Logo";
// }



// let ff = document.querySelector("input");
// ff.oninput=  function()  {
//        let number = document.getElementById("myInput").value;
//     let number2 = number * 15.6
//      document.getElementById("demo").innerHTML = number  +  "USD Dollar = " +  number2.toFixed(2) +" Egyptian Pound";
// }




// document.querySelector(`[title="two"]`).textContent = document.querySelector(`[title="one"]`).getAttribute("title");


// document.querySelector(`[title="one"]`).textContent = document.querySelector(`[title="two"]`).getAttribute("title");


//     document.querySelector(`[title="two"]`).title = document.querySelector(`[title='two']`).textContent
//     ;document.querySelector(".two").title = document.querySelector(".two").className;

for (let i = 0; i < document.getElementsByTagName("img").length; i++) {
    if (document.getElementsByTagName("img").length[i].hasAttribute("alt")) {
       console.log(333);
    }
    }

console.log(document.getElementsByTagName("img").length);



