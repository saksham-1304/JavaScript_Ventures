//01_Arrays

const myArr = [0, 1, 2, 3, 4, 5]

const names = ["saksham", "singh", "rathore", "opener"]
const newArr2 = new Array(1, 2, 3, 4)
console.log(myArr[4]);
console.log(names[2]);
myArr.push(6);
console.log(myArr);
myArr.push(7);
console.log(myArr);
myArr.pop()
console.log(myArr.length)
console.log(myArr);
myArr.unshift(9)
console.log(myArr.length)
console.log(myArr);
myArr.shift()
console.log(myArr.length)
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.includes(4));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)


//slice ,splice

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr)//splice change the original array


