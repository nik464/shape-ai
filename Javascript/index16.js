function ShowString() {
    console.log("this is a string");

    //not returning
}

console.log(ShowString());



function printName(name) {
    console.log(name);

}

printName("Nikhil");



function addnumbers(n1, n2) {
    console.log("sum is", n1 + n2);
    return n1 + n2;
}

var num1 = 10;
var num2 = 20;

var result = addnumbers(num1, num2);
console.log("result is", result);


var colors = ["r", 1, 2, 4, "b", "c"];
colors.push("a");
colors.shift("r");
colors.unshift("r");
console.log(colors.join("-"));
console.log("index is ", colors.indexOf("r"));

console.log("Find function:");
var age = [1, 2, 3, 4, 5];
var f = age.find(myfunc);

function myfunc(value, index, array) {
    return value > 1;
}

console.log(f);

console.log("for each");
age.forEach(function(e) {
    console.log(e);
});

console.log("alternate");
for (var e of age) {
    console.log(e);
}

console.log("objects");
var obj = { 65: "A", 66: "B", 67: "C" };

console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.entries(obj));

var objk = {
    pr1: 42
};


console.log(objk.hasOwnProperty("pr1"));


var obje = {
    name: "JS"
};

// obje.new_foo = "bar1";
var freezeobj = Object.freeze(obje);
console.log(freezeobj);