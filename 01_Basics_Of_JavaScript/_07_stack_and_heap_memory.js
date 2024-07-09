//Stack and Heap Memory

//Stack(Primitive),Heap(Non-Primitive)

//Stack Memory is Passed By Value
let YoutubeName = "sakshamsinghrathore"
let anothername = YoutubeName
console.log(YoutubeName)
console.log(anothername)

anothername = "developer"
console.log(YoutubeName)
console.log(anothername)

//Heap Memory Value is Passed By Reference
let userOne = {
    email: "sakshamsinghrathore1304@gmail.com",
    upi: "user457"
}

let userTwo = userOne
userTwo.email = "sakshamsinghrathore@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)


