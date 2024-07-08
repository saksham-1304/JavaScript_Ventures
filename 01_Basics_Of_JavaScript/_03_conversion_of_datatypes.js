//Conversion Of DataTypes 

let score1 = "33abc";
console.log(typeof score1);
console.log(typeof (score1));
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let score2 = null
console.log(typeof score2);
console.log(typeof (score2));
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3 = undefined
console.log(typeof score3);
console.log(typeof (score3));
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score4 = false
console.log(typeof score4);
console.log(typeof (score4));
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

//"33"=>33
//"33abc"=>Nan
//true=>1
//false=>0

let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

let isLoggedIn3 = "Saksham"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);

//1=>true ;0=>false
//""=>false
//"hitesh"=>true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


