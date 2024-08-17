

// <,>,<=,>=,==,!=,===,!==

const temperature = 4100
if (2 == "2") {
    console.log("executed");
}

if (temperature < 50) {
    console.log("Temp is less than 50")
}

else {
    console.log("Temp is more than 50");
}

/*
const score=300

if(score>100)
{
let power="fly"
console.log(`User power: ${power}`);

}
console.log(`User power: ${power}`);
*/

// if(balance>500)console.log("test"),console.log("test2");

const balance = 1000

/*if (balance < 500) {
    console.log("Less than 500");
    }
    
    else if (balance < 900) {
        console.log("Less than 750");
        }
        else { 
    console.log("Less than 1200"); 
}*/

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("Alowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User Logged In");

}







