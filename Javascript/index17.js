var message = "global variable";

function greet() {
    var message1 = "local scope"; //need var for new declaration
    console.log(message1);
}

greet();
console.log(message);

console.log("LET");
let c = 20;
console.log(c);
if (c === 20) {
    let c = 10;
    console.log(c);
}

console.log(c);

console.log("VAR");
var d = 20;
console.log(c);
if (d === 20) {
    var d = 10;
    console.log(d);
}

console.log(d);


console.log("DEFAULT")

function say(mes = 2) {
    console.log(mes);
}

say();


console.log("SPREAD")
let array1 = [1, 2, 3, 4, 5];
let array2 = [...array1, 6, 7];
console.log(array2);

console.log("BACKSPACE LITERAL")
let mine = "this is a literal";
let terminal = `this is a 
literal`;
console.log(mine);
console.log(terminal);
console.log(`hello ${terminal} by me`);
console.log(`this is the language of "Javascript" `);