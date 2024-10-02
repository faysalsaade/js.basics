// let serials = "s100s s3000s s50000s s950000s";
// console.log(serials.match(/s\d{3}s/gi));
// console.log(serials.match(/s\d{4,5}s/gi));
// console.log(serials.match(/s\d{4,}s/gi));

// let mystring = "we love programming";
// let names = "10samaZ 2AhmedZ 3Mohammed 4MoustafaZ 5Gamalz";
// console.log(/ing$/gi.test(mystring));
// console.log(/^we/gi.test(mystring));
// console.log(/lz$/gi.test(names));
// console.log(/^\d/gi.test(names));
// console.log(names.match(/\d\w{5}(?=z)/gi));
// console.log(names.match(/\d\w{8}(?!z)/gi));

// let txt = "we love programming and @ because @ is amazing";
// console.log(txt.replace("@", "javascript"));
// console.log(txt.replaceAll("@", "javascript"));
// let re = /@/gi;
// console.log(txt.replaceAll(re, "javascript"));
// console.log(txt.replaceAll(/@/gi, "javascript"));

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phonere = /\(\d{4}\)\s\d{3}-\d{4}/gi;
  let validtionResult = phonere.test(phoneInput);
  if (validtionResult === false) {
    return false;
  }
  return false;
};
