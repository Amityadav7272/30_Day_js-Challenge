// #Learning:
// The throw statement allows you to create a custom error. The throw statement throws (generates) an error.
// The technical term for this is: The throw statement throws an exception. The exception can be a JavaScript String, a Number, a Boolean or an Object:
// The throw keyword can be followed by any kind of expression, for example:
//throw error; ---Throws a previously defined value (e.g. within a catch block)
// throw new Error("Required"); --- Throws a new Error object





// Task-1
 function errFun(_num){
    const number = 5
    try{
        number = _num
    }
    catch{
        // console.log(`Looks like an error occured`);
    }
 }
 errFun(10)

// Task-2
 const divider = (_num1, _num2)=>{
    try{
        if(_num2 === 0)
            throw `Denominator can't be zero`
        let res = (_num1/_num2);
        return res
    }
    catch(err){
        return(err);
    }
 }
//  console.log((divider(5,0)))

// Task-3
 const arr = [1,2,3,4,5,6]
 const max = 5
 try{
     if(max > arr.length){
         throw (`Range Out of Bound`)
        }
        for(let i =0; i<max; i++){
        //  console.log(arr[i]);
       }
    }
    catch(e){
     console.log(e);
 }
 finally{
     console.log(`Program execution is complete`)
    }

// Task-4 --Custom Error
 function numAllocator(_name, _num){
    if(typeof(_num) !== `Number`)
        throw new Error(`Aree sambhal lenge`)
        _name = _num
    }

 let a;
 try{
        // numAllocator(a, 50)
 }
 catch(e){
    console.log(e);
 }
 
// Task-5
 function validator(_input){
    if(!_input)
        throw new Error(`Input khali hai user ko pakdo!!`)
    console.log(`Input hai`);
 }

 try{
    validator(45)
    validator(`jk`)
    // validator()
    // validator(``)
 }
 catch(e){
    console.log(e);
 }

// Task-6
//  const promiseMe = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         Math.round(Math.random()*10)>5 ?resolve(): reject()
//     }, 2*1000)
//  })
//  .then(()=>{console.log(`Promise got resolved`);})
//  .catch(()=>{console.log(`Promise got rejected`);})

// Task-7
// const promiseTwo = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         Math.round(Math.random()*10)>5 ?resolve(1): reject(`Error`)
//     }, 2*1000)
//  })

//  async function fetchData(){
//     try{
//         const res = await promiseTwo
//         console.log(res);
//     }
//     catch(e){
//         console.log(`Rejected ${e}`);
//     }
//  }
//  fetchData()

// Task-8
 fetch(`https://randonuser.me/api/`)
 .then((res)=>{
    const data = res.json()
    return data;
 })
 .then((data)=>{
    console.log(data);
 })
 .catch((e)=>{
    console.log(`Looks like the given url is invalid!!`);
 })

// Task-9
 async function fetchUser(){
    try{
        const res = await fetch(`https://api.gitpub.com/users/amityadav7272`)
        // console.log(`fetch success`);
        const data = await res.json()
        console.log(data);
    }
    catch(e){
        console.log(`Fetch failed! due to invalid link`);
    }
 }
 fetchUser()