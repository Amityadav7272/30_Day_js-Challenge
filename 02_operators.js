let a =55
let b =45

const adder = function(){
    console.log(a+b);
}
const subtracter = function(){
    console.log(a-b);
}
const multiplier = function(){
    console.log(a*b);
}
const divider = function(){
    console.log(a/b);
}
const remainder = function(){
    console.log(a%b);
}

// adder()
// subtracter()
// multiplier()
// divider()
// remainder()


//Assignment operator
// console.log(a+=b); 
// console.log(a-=b);

//Comparison operator
// console.log(a>b);
// console.log(a<b);

// console.log(a=='55');
// console.log(a==='55');


//Logical operators
if (a<b || a>b) {
    console.log("Always Print");
}
if (a<b && a>b) {
    console.log("Never Print");
}
if (a!=0) {
    console.log("a is non-zero");
}


//Ternary operator
a = 0
console.log(a>=0 ?"Positive" :`Negative`)

console.log(console.log(a)+a);