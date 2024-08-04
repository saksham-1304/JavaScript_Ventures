//Strings

const name = "hitesh"
const repoCount = 50
//console.log(name+repoCount+" Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('game-online-dot-com')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName[0])
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))
console.log(gameName.indexOf('e'))

const newString = gameName.substring(0, 4)
console.log(newString)

//Negative index can be used in slice 
const anotherString = gameName.slice(-9, 10)
console.log(anotherString)

const newStringOne = "   saksham   "
console.log(newStringOne)
console.log(newStringOne.trim())//removes white space and newline characters

const url = "https://sakshamsinghrathore1304.com//sakshamsinghrathore%201304"
console.log(url.replace('%20', '-'))
console.log(url.includes('saksham'))
console.log(url.includes('opener'))
console.log(gameName.split('-'))

