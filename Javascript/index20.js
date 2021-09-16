let ranks = [1, 2, 3, 4, 5];

console.log(
    ranks.map((e, index) => {
        return e + 1
    })
);

console.log("FILTER");
console.log(
    ranks.filter(
        (e, index) => {
            if ((e % 2) == 0)
                return e;
        }
    )
);


let concert = true;
let attendconcert = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("Bob attended the concert");
        } else {
            reject("Bob didnt attend the concert");

        }
    }, 2000);
});

console.log(attendconcert);
attendconcert.then((data) => console.log(data));
attendconcert.catch((error) => console.log(error));

attendconcert.then((data) => console.log(data)).catch((error) => console.log(error));