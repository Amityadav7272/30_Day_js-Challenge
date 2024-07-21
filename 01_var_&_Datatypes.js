// #Learnings: 
//  If you check data type of array it will be object behind the scenes 

var firstNum = 99;
console.log(firstNum);

let firstString = "Meghalya"
// console.log(firstString);

const firstBool = true
// console.log(firstBool);

const myNumber = 22
const myString = "Amit"
const myBoolean = false
const myObject = {username: "Amit", age: 22}
const myArray = [11,12,13,14,15]

// console.table([typeof myNumber, typeof myString, typeof myArray, typeof myObject, typeof myBoolean]);


//Reassigning variables

let myValue = 55
// console.log(myValue);
myValue = 100-myValue
// console.log(myValue);

// myBoolean = false

function square() {
    firstNum = firstNum*2
}
square()
console.log(firstNum);

console.log(+55 + 45+"abcd");