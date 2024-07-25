// # Learnings:
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//[a, b, ...rest] = [10, 20, 30, 40, 50]
// The expression to extract the name property value using object destructuring is the following:
// const { name } = user;
// console.log(name);
// Object destructuring: https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/
// spread operator: Used to expand an iterable into individual elements and Can be used anywhere in an array literal or function call
//Rest Operator: Used in function parameters to gather arguments and Must be the last parameter in a function’s parameter list
//Both are denoted by (...)

//Object literals make it easy to quickly create objects with properties inside the curly braces. To create an object, we simply notate a list of key: value pairs delimited by comma. ES6 makes the declaring of object literals concise and thus easier. Three major ways it does this are :
// It provides a shorthand syntax for initializing properties from variables.
// It provides a shorthand syntax for defining function methods.
// It enables the ability to have computed property names in an object literal definition.
//Object literals: https://medium.com/@narenss/es6-enhanced-object-literals-bbae848e1750
//Set Dynamic Object Properties using Computed Property Names || The Computed Property Names feature in ES6 allows you to set property names dynamically – that is, property names will be expressions that evaluate to a value.
//This feature is useful for property names that you do not know ahead of time. Such an expression can be a concatenation, function call, or a conditional expression, to name a few.
// const key1 = "language"
// const key2 = "isStudent"

// const obj = {
//   name: "dillion",
//   age: 1000,
//   [key1]: "javascript",
//   [key2]: true
// }


// Task-1
 const person = {
    name: "Amit",
    age: 22,
    isHavingFun: true
 }
 console.log(`Hi! My name is ${person.name} and my age is ${person.age}`);

// Task-2
 console.log(`This is first line and,
    this is the second line`);

// Task-3
 let myArr = [1,2,3,4,5,6]
 let [a, b, ...remain] = myArr //*********
 console.log(a,b,remain);

// Task-4
//  const {age, isHavingFun: enjoying} = person
//  console.log(enjoying);
//  console.log(age);
const book = {
    title: "Black Beauty",
    author: "Anna Sewell",
    year: 1877
 }
 const {title, author} = book
 console.log(title,author);

// Task-5
 const myNewArr = [...myArr,7,8,9,10]
 console.log(myNewArr);

// Task-6
 function sumUp(..._all){
    sum = 0
    for (let i = 0; i < _all.length; i++) {
        sum += _all[i];
    }
    return sum;
 }
 console.log(`Sum = ${sumUp(1,2,3,4,5)}`);
 console.log(`Sum = ${sumUp()}`);

// Task-7
 const producter = (_num1, _num2=1)=>_num1*_num2
 console.log(producter(5,2));
 console.log(producter(5));

// Task-8
 const username = "amit123"
 const email = "amit123@gmail.com"
 const pass = "abc123"
 const printMe = function(){
    console.log(`Username = ${this.username}`)
 }
 const myObj = {username, email, pass, printMe}
 console.log(myObj);
 myObj.printMe();
//  console.log(pass);

// Task-9 ***********************
 function myDivider(_num1, _num2){
   return _num1%_num2
 }

 let key1 = `Divisible`
 let key2 = `Not divisible`
 let remainder = myDivider(100,6)
//  let remainder = myDivider(100,5)
 const divide = {
   divident: 100,
   [remainder===0?key1: key2]: true,
 }
 console.log(divide);
