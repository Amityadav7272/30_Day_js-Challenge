// #Learnings:
//  Since return is used, it will exit the function (or script if it's at the top level), and no further code will be executed.
//If this code is placed inside a function, the return statement will cause the function to exit early, and the subsequent code won't be executed. If it is at the top level of a script (i.e., not inside a function), the return statement will cause an error because return is only valid inside functions.
//switch-case range: Since we’re checking a range, we will perform the operation in each case to check if each expression is evaluating to true then break out of the statement once the requirements for true have been satisfied.
// Leap year : we know that because the Earth rotates about 365.242375 times a year but a normal year is 365 days, something has to be done to "catch up" the extra 0.242375 days a year. 
// so check for divisibility with 4 if yes(T) then check divisibility with 100 if yes(F) then check divisibility with 400 if yes(T)


let num = 0

if (num>0) {
    if(num === 0) console.log(`Zero`);
    else console.log(`Positive`);
} 
else {
    console.log("Negative");
}

// else {
//     if(num === 0) {
//         // return console.log("Zero") ****
//     }
//     console.log("Negative");
// }


let age = 18
if (age>=18) {
    console.log(`Eligible to vote`);
} else {
    console.log(`Not eligible to vote`);
}

// Nested if-else 
let [a,b,c] = [30,10,10] ;
console.log(a,b,c);

if (a>=b) {
    if (a>=c) {
        console.log(`${a} is the biggest number`);
    } else {
        console.log(`${c} is the biggest number`);
    }
} 
else if (b>=c) {
        console.log(`${b} is the biggest number`);
    } 
else {
        console.log(`${c} is the biggest number`);
    }


//Week-day via switch-case
let dayNum = 7

switch(dayNum){
    case 1: console.log(`Mon`);
            break;
    case 2: console.log(`Tue`);
            break;
    case 3: console.log(`Wed`);
            break;
    case 4: console.log(`Thu`);
            break;
    case 5: console.log(`Fri`);
            break;
    case 6: console.log(`Sat`);
            break;
    case 7: console.log(`Sun`);
            break;
    default:console.log(`Please enter a valid Day-number`);
}


// Assigning grades via switch case
let sc = 39
console.log(sc);

switch (true) {  //**********
    case (sc>=85): console.log(`Grade-A`);
        break;
    case (sc>=75 && sc<85): console.log(`Grade-B`);
        break;
    case (sc>=65 && sc<75): console.log(`Grade-C`);
        break;
    case (sc>55 && sc<65): console.log(`Grade-D`);
        break;
    case (sc>=40 && sc<55): console.log(`Grade-E`);
        break;
    case (sc>=0 && sc<40): console.log(`Grade-F`);        
        break;
    default: console.log(`please ennter a valid number`);
        break;
}


//Odd-even using ternary

console.log((sc%2==0) ?`Even`:`Odd`);


//checking if year is a leap year or not
let myYear = 1900
console.log(myYear);
let flag = true
if(myYear % 4 === 0){
    flag = false
    if(myYear % 100 === 0){
        flag = true
        if(myYear % 400 === 0){
            flag = false
        }
    }
    if(flag == false){
        console.log(`${myYear} is a leap year`);
    }
    else{
        console.log(`${myYear} is not a leap year`);
    }
}
