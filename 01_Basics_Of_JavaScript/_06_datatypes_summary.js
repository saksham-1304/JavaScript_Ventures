//Datatypes Summary 

/*
Primtitve Datatypes
7 Types:Strings,Number,Boolean,null,undefined,Symbol,BigInt
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;  //this is ->  let userEmail=undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 333333333333343434444444444n  //

/*
Reference (Non Primitive) Datatypes
Array,Objects,Functions
*/

const names = ["saksham", "singh", "rathore"]

let myObj = {
    name: "Saksham",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World!");
}

console.log(typeof scoreValue)
console.log(typeof outsideTemp)
console.log(typeof bigNumber)
console.log(typeof myFunction)
console.log(typeof anotherId)

