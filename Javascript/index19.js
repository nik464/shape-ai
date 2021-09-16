var [one, two, three, four, five] = [1, 2, 3, 4];
console.log(three);
console.log(five);


console.log("get score function");

function getscores() {
    return [10, 12];
}


let [x, y, z] = getscores();
console.log(x);
console.log(y);
console.log(z);

const obj = {
    name: "Nikhil Chaudhary",
    email: "nikhil18chaudhary@gmail.com",
    age: 22
}

console.log(obj.email);

let { name, email, age } = obj;
console.log(age);

//let{age, firstname, lastname , middlename=""}; default
console.log("arrow operator");
let add = (x, y) => x + y;

console.log(add(10, 30));


console.log("this operator");
const mine = {
    count: 0,
    next: function() {
        return ++(this.count);
    }
}
console.log(mine.next());