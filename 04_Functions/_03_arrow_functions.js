//Arrow functions

const user = {
    username: "Saksham",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome To Website`);
        console.log(this);

    }
}

/*user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()
*/
//console.log(this);

/*function coffee() {
    let username = "Saksham Singh Rathore"
    console.log(this.username)
}

coffee()
*/

const chai = () => {
    let username = "Saksham"
    console.log(this);

}

chai()

/*const addTwo=(num1,num2)=>{
    return num1+num2
}
*/

const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3, 4));


const addTwo2 = (num1, num2) => num1 + num2

console.log(addTwo2(3, 4));

const addTwo3 = (num3, num4) => ({ username: "Saksham" })

console.log(addTwo3());
