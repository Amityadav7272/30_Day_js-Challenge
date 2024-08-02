// #Learning:
//Using closures, we can create a private scope for our module and expose only the methods needed to interact with our data, ensuring encapsulation and preventing external interference.
//We'll use an Immediately Invoked Function Expression (IIFE) to create a closure that encapsulates the collection of items. We'll expose methods to add, remove, and list items through the module.
//The module returns an object with references to the methods that are intended to be public. This is the interface through which external code can interact with the module.
//Using split method to remove element from array 1st parameter defines index and 2nd** defines no. of values to remove




// Task-1
 function calPri(){
    let sum;
    sum = 45+55
    function printSum(){
        console.log(`Sum = ${sum}`);
    }
    printSum()
 }
//  calPri()

// Task-2
 function measure(){
    let _counter = 0

    function increamento(){
        _counter++;
    }
    function moreFun(){
        increamento()
        increamento()
        increamento()
    }
    increamento()
    moreFun()
    return _counter
 }
//  console.log(measure());
 
// Task-3
 let idList = []

 function idGenerator(){
    let id = Math.floor(Math.random()*100);
    let match = 0
    idList.forEach((ele)=>{
        if(id === ele){
            match = 1
        }
    })
    if(match === 1){
        // console.log(id);
        idGenerator()
    }
    if(match ===0){

        // console.log(id);
        idList.push(id)
        // console.log(idList);
    }

    function lastId(){
        let latestId = id;
        console.log(`Last Id was = ${latestId}`);
    }
    lastId()
 }
//  idGenerator()
//  idGenerator()
//  idGenerator()
//  console.log(idList);

// Task-4
 function captureName(_name){
    return function(){
        console.log(`Hi ${_name}, We Welcome you in this world of CODE`);
    }
 }
 const greetMe = captureName("Amit")
//  greetMe()

// Task-5
 const funArr = []
 for(let i = 0; i<6; i++){
    const printIn = ()=>{
        console.log(`my index is ${i}`);
    }
    funArr.push(printIn)
 }
//  funArr[3]();
//  funArr[5]();
//  funArr[0]();

// Task-6
 const itemController = (function(){
    let items = []
    
    function addItem(_item){
        if(!items.includes(_item))
        items.push(_item)
        console.log(`Item added succesfully`);
    }
    function removeItem(_item){
        if(items.includes(_item)){
            let remIndex = items.indexOf(_item)
            items.splice(remIndex, 1)
            console.log(`Deleted`);
        }
    }
    function listItem(){
        console.log(items);
    }

    return {addItem,removeItem,listItem}
 })();
 
//  itemController.addItem("Potato")
//  itemController.addItem("Onion")
//  itemController.addItem("Pea")

//  itemController.listItem()
//  itemController.removeItem("Pea")
//  itemController.listItem()

// Task-7

let resultRecord = []
 function squarer(_num){
    let res = _num*_num
    function prevResults(){
        resultRecord.push(res)
    }
    prevResults()
    console.log(`Result = ${res}`);
}
// squarer(5)
// squarer(6)
// squarer(10)
// squarer(15)
// console.log(`Previous computations = ${resultRecord}`);

// Task-8(!!takes time but enjoyed it)
 function factorial(_num){
    let curNum = _num;
    let decreNum = --_num;
    while(decreNum != 1){

        let result = curNum * decreNum
        
        function prevComp(){
            curNum = result
        }
        decreNum = --decreNum
        prevComp()
    }
    console.log(`Factorial = ${curNum}`);

 }
 factorial(5)
 factorial(7)