console.log("hello everyone");
console.error("this will print in error");
console.warn("this will print in warning format");

var t = null;
console.log(t); //error

var ti;
console.log(ti); //undefined


console.log(12345678912); //number

var arr = ["hello", 5, 3, "bye"];
console.log(arr);
console.log(arr[0]);


var obj = {
    name: "We are dev",
    age: 100,
    bol: true,
    arr: ["hello", 5, 2, "bye"],
    "good dev": "Yes I am"
};

console.log(obj.name);
console.log(obj["good dev"]);

var var1 = "hello javascript, how are you";
console.log(var1.toUpperCase());
console.log(var1.slice(0, 4));
console.log(var1.includes("javascript")); //true or false
var newstring = "1234";

console.log(parseInt(newstring));


//toString
//toExponential
//tofixed()