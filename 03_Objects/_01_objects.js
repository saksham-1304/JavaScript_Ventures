//singleton
//if we declare as literals then singleton is not formed
//but if we form using constructor the singleton is formed  --> Object.create


//object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Saksham",
    "full name": "Saksham Singh Rathore",
    //mySym: "mykey1",
    [mySym]: "mykey1",//this is the correct syntax
    age: 18,
    Location: "Bhopal",
    email: "sakshamsinghrathore1304@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
//console.log(JsUser.mySym);
//console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "saksham1304@gmail.com" //Can overwrite values this way
console.log(JsUser);
//Object.freeze(JsUser)
JsUser.email = "sakshamsinghrathore@gmail.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
}
//console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    console.log(`Hello JS User,${this.name}`)
}
console.log(JsUser.greetingTwo());












