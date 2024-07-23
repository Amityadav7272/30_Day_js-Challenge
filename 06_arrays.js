// # Learnings: 


// Task-1
 const myArr = [1,2,3,4,5]
 console.log(myArr);
 
 // Task-2
 console.log(`First element is ${myArr[0]}`);
 console.log(`Last element is ${myArr[4]}`);

// Task-3
 myArr.push(6,7)
 console.log(myArr);

// Task-4
 myArr.pop()
 myArr.pop()
 console.log(myArr);
 
 // Task-5
 myArr.shift()
 console.log(myArr);
 
 // Task-6
 myArr.unshift(0,1)
 console.log(myArr);

// Task-7
 console.log(myArr.map((val)=>val*2))

// Task-8
//  console.log(myArr)
 console.log(myArr.filter((val)=> val%2 === 0))
//  console.log(myArr.filter((val)=> val%2 !== 1))

// Task-9
 let sumer = myArr.reduce((acc, cur)=> acc += cur, 0)  
 console.log(`Sum = ${sumer}`);

// Task-10
 for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
 }

// Task-11
 myArr.forEach(element => {
    // console.log(element);
 });

// Task-12
 let matrix = [[1,2],[3,4]]
 console.log(matrix);

// Task-13
 console.log(`Element at (1,1) is ${matrix[1][1]}`);
 console.table(matrix);