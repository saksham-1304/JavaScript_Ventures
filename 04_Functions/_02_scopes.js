
let a = 100000000000
const b = 20
var c = 30
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

console.log(a);
console.log(b);
console.log(c);


function one() {
    const username = "Saksham"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()

if (true) {
    const username = "saksham"
    if (username === "saksham") {
        const website = " youtube"
        console.log(username + website);

    }
    //console.log(website);

}
//console.log(username);

console.log(addOne(5))
function addOne(num) {
    return num + 1
}

console.log(addTwo(5))
const addTwo = function (num) {
    return num + 2
}
//console.log(addTwo(5))

