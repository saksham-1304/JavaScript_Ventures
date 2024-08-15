function sayName() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("0");
}

sayName()

/*function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}*/
function addTwoNumbers(number1, number2) {
    return (number1 + number2)
}

addTwoNumbers(3, 4)
addTwoNumbers(3, "4")
addTwoNumbers("3", "4")
addTwoNumbers(3, "a")
const result = addTwoNumbers(3, 5)
console.log(result);


function loginUserMessage(username = "rathore") {
    //if (username === undefined) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("saksham"))
console.log(loginUserMessage())


function calculateCarPrice1(...num1) {//rest
    return num1
}
function calculateCarPrice2(val1, val2, ...num1) {//rest
    return num1
}

console.log(calculateCarPrice1(200, 400, 500));
console.log(calculateCarPrice2(200, 400, 500, 2000));

const user = {
    username: "Saksham",
    price: 2000
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleObject(user)
handleObject({
    username: "sam",
    price: 400
})

const myNewArray=[2000,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
} 

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
