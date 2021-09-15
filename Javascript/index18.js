console.log(document.getElementsByClassName("header"));
document.querySelector(".header").innerHTML = "hello world";
console.log(document.getElementsByClassName("header"));

//query selector takes only first element only
// for all we use querySelectorAll  

// document.querySelector().src;

const childname = document.createElement("div");
childname.classList.add("mystyle");
document.querySelector(".header").appendChild(childname);