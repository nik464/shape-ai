//** exponential sign

console.log("class 15");
var x = 20;

var y = "20";
console.log(x == y);
console.log(x === y);


console.log(x != y);
console.log(x !== y);


console.log("LOGICAL OPERATOR");
console.log(true && false);
console.log(true || false);

console.log("IF- ELSE");

if (x === y) {
    console.log("this is true");

} else if (x >= y) {
    console.log("first is false, i am true");

} else {
    console.log("this is false");

}


console.log("SWITCH CASE");
var n1 = 50;
var n2 = 20;
var oper = '-';

switch (oper) {
    case "+":
        console.log(n1 + n2);
        break;

    case "-":
        console.log(n1 - n2);
        break;

    default:
        console.log("none of these");

}


console.log("FOR-LOOP");
var sum = 0;
var initial = 1;
var final = 3;

for (var i = initial; i <= final; i++) {
    sum = sum + i;
}

console.log("SUM =", sum);



var sum = 0;
var start = 1;
var final = 3;
var i = start;

do {
    sum = sum + i;
    i++;
} while (i <= final);
console.log("do-while SUM =", sum);

//console.log("10"+20);  //30
//console.log("10"-20);  //-10