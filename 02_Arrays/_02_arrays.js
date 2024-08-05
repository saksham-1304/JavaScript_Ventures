//02_Arrays


const names1 = ["saksham", "singh", "rathore"]
const names2 = ["sanjeev", "suman", "shaurya"]
//names1.push(names2)
console.log(names1);
console.log(names1.length);
console.log(names1[3]);
//console.log(names1[3][1]);

const allnames = names1.concat(names2)
console.log(allnames)


const all_names = [...names1, ...names2]
console.log(all_names);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Saksham"))
console.log(Array.from("Saksham"))
console.log(Array.from({ name: "Rathore" }));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


