// #Learnings:
//"async and await make promises easier to write"
// async makes a function return a Promise and await makes a function wait for a Promise
// async and await: https://www.w3schools.com/js/js_async.asp

//const p1 = Promise.resolve(3);, is a simple yet powerful demonstration of JavaScript's Promise API. It creates a promise that is already resolved with a value of 3. 
//The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.
//The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.




// Task-1
 const promise1 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve(`Message has been resolved`);
    }, 2000)
 }).then((msg)=>{
    console.log(msg);
 })

// Task-2
 const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(`Some error occured`)
    }, 2000)
 }).catch(function(err){
    console.log(err);
 })

// Task-3
 const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(1){
            resolve(`Some response`)
        }
        else{
            reject(`Error!!`)
        }
    }, 2000)
 })
 promiseThree.then((res)=>{
    return `server response is: ${res}`
 })
 .then((res2)=>{
    console.log(res2);
 }).catch((err)=>{
    console.log(err);
 })

// Task-4
function twoSec(){
   return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve(`resolved`);
      }, 2000)
   })
}

async function functionCall(){
   console.log(`Calling...`);
   let res = await twoSec();
   console.log(res);
}
// functionCall()

// Task-5
async function fetchUser2(){
   try {
       const response = await fetch('https://randonuser.me/api/')
       const data = await response.json()
       console.log(data);
   } catch (error) {
       console.log(`Some error has occured ${error}`);
      //  console.log(error)
   }
}
// fetchUser2()

// Task-6
//  fetch(`https://api.github.com/users/amityadav7272`).then((response)=>{return(response.json());})
//  .then((res)=>{
//    console.log(res);})
//  .catch((err)=>{console.log(err);})

// Task-7
async function fetchUser(){
   try {
       const response = await fetch('https://randomuser.me/api/')
       const data = await response.json()
       console.log(data);
   } catch (error) {
       console.log(error);
   }
}
//  fetchUser();

// Task-8
const promise8 = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      resolve(8)
   },4000)
})
const promise9 = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      resolve(9)
   },4000)
})
const promise10 = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      resolve(10)
   },4000)
})
const promise11 = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      resolve(11)
   },3*1000)
})
// const promise11 = Promise.resolve(11)

Promise.all([promise8,promise9,promise10,promise11]).then((res)=>console.log(res))
.catch((err)=>console.log(`Error!!`))

// Task-9
Promise.race([promise8,promise9,promise10,promise11]).then((res)=>console.log(`Fastest = ${res}`))
.catch((err)=>console.log(`Error!!`))



