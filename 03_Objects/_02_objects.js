//const InstagramUser=new Object()

const InstagramUser = {}
InstagramUser.id = "123abc"
InstagramUser.name = "Saksham"
InstagramUser.isLoggedIn = false
console.log(InstagramUser);

const regularUser = {
    email: "sakshamsinghrathore1304@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Saksham",
            lastname: "Singh Rathore"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { obj1, obj2 };
console.log(obj3);
const obj4 = Object.assign(obj1, obj2)
console.log(obj4);
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5);
const obj6 = { 5: "e", 6: "f" }
const obj7 = Object.assign({}, obj1, obj2, obj6)
console.log(obj7);
const obj8 = { ...obj1, ...obj2 }
console.log(obj8);

console.log(InstagramUser);
console.log(Object.keys(InstagramUser));
console.log(Object.values(InstagramUser));
console.log(Object.entries(InstagramUser));

console.log(InstagramUser.hasOwnProperty('isLoggedIn'));
console.log(InstagramUser.hasOwnProperty('isLogged'));
