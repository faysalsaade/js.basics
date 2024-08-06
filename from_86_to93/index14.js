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
let mymainelement = document.createElement("div")
let myheading = document.createElement("h1")
let myparagraph = document.createElement("p")

let myheadingtext = document.createTextNode('product title');
let myparagraphtext = document.createTextNode('product description');

myheading.appendChild(myheadingtext);
mymainelement.appendChild(myheading);

myparagraph.appendChild(myparagraphtext);
mymainelement.appendChild(myparagraph)

mymainelement.className = "product";
document.body.appendChild(mymainelement)