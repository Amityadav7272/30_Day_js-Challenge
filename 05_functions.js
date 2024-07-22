// # Learnings:
// function expression: The function keyword can be used to define a function inside an expression. 
// const getRectArea = function (width, height) {
//   return width * height;
// };

// You can also define functions using the function declaration or the arrow syntax.
//Remove the body braces and word "return" — the return is implied implicitly.
// (a) => a + 100;

// Task-1
 function oddEven(_num){
     if(_num%2 === 0)
     console.log(`${_num} is Even`);
     else console.log(`${_num} is Odd`);
 }
// oddEven(5);
// oddEven(9990);

// Task-2
 function square(_num){
    return _num*_num;
 }
//  console.log(`Square = ${square(9)}`);

// Task-3
 const bigNum = function(a,b){
    console.log(a>b?`${a} is greater` :`${b} is greater`);
 }
//  bigNum(40,20)
//  bigNum(10,20)

// Task-4
 const milaap = function(str1, str2){
    return (str1+str2)
 }
//  console.log(milaap(`Hello`, `Brother`));
//  console.log(milaap(`Fun`, `ctions`));

// Task-5
 const mySummer = (num1, num2)=> num1+num2  //****** return implied implicitly
//  console.log(`Sum = ${mySummer(45, 55)}`);

// Task-6
 const strChecker = (str, char)=> str.includes(char)
//  console.log(strChecker(`Missisippi`, `M`));

// Task-7
 const myProducter = (num1 = 2, num2 = 2)=> num1*num2
//  console.log(myProducter(5,5));
//  console.log(myProducter(15));
//  console.log(myProducter());

// Task-8
 const greet = (_name, _age = 200)=> `Happy Birthday ${_name}! You have lived ${_age} years on Earth`
// console.log(greet(`Amit`, 22));
// console.log(greet(`bowhead whales`));

// Task-9
 function repeater(myfun, _num){
   for(let i = 0; i < _num; i++){
      myfun();
   }
 }
 function printMe(){
   console.log(`JavaScript`);
 }
//  repeater(printMe, 5)

// Task-10
 function alloy(_fun1, _fun2, _val){
   let res = _fun1(_val);
   _fun2(res);
 }
 function incremental(_value){
   return ++_value;
 }
 function squarer(_value){
   console.log(_value*_value);
 }
 alloy(incremental, squarer, 9)