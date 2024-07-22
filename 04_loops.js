// #Learnings : 
//we can use process.stdout.write() method to print to console without trailing newline.The process object is global so it can be used without using require() method.

//Task-1
for (let i = 1; i < 11; i++) {
    // console.log(i);
    
}

//Task-2
console.log(`Multiplication table of 5:`);
for (let i = 1; i < 11; i++) {
    // console.log(`5 * ${i} = ${i*5}`);
    
}

//Task-3
let sum = 0
let i = 1
while (i<11) {
    sum += i;
    i++;
}
console.log(`sum = ${sum}`);

 //Task-4
while (i>0) {
    i--;
    if(i===0) break;
    // console.log(i);
}

 //Task-5
 i=0
do {
    i++;
    // console.log(i);
} while (i<5);

 //Task-6 --ONHOLD
 let myNum = 6
 let factorial = 1
 do {
    factorial *= myNum
    myNum--;
 } while (myNum>0);
 console.log(`Factorial = ${factorial}`);

 //Task-7
 i = 0
 for (let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++){
        process.stdout.write(`*`)
    }
    console.log(``)
 }

 //Task-8
 for (let k = 1; k < 11; k++) {
    if (k===5) continue ;
    // console.log(k);
 }

 //Task-9
 for (let k = 1; k < 11; k++) {
    if (k===7) break ;
    // console.log(k);
 }