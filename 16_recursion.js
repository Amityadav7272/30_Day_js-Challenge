// # Learnings:
//Try to mainly return in recursion concepts
//To properly sum the elements of an array using recursion, you need to track the index of the current element. A common approach is to use an auxiliary parameter to keep track of the index. 
//there's a mistake in the recursive call: _arr[i+1] should instead be the result of calling arrSummer with an incremented index. arrSummer(_arr, i+1)
// you're mistakenly trying to pass _arr[i + 1] as an argument to arrSummer, which leads to the function attempting to use the number (e.g., 2) as if it were an array in the next recursive call. This results in the error when trying to access the length property of a number.
// The concat() method joins two or more strings. It does not change the existing strings as it returns a new string.




// Task-1
function factorial(_num){
    // console.log(_num);
    
    if(_num<2)
        return 1
    else{
        return _num*factorial(_num-1)
    }
}

//  console.log(`Factorial of 6 = ${factorial(6)}`);
 
// Task-2
let sum = 0
 function fibbo(_num){
    if(_num == 0)    
        return 0
    if(_num == 1)
        return 1
    if(_num == 2)
        return 1
    
    return fibbo(_num-1) + fibbo(_num-2)
 }

//  console.log(fibbo(5))
//  console.log(fibbo(30))

// Task-3
 const myArr = [1,2,3,4,5,6,7,8,9,10]
 function arrSummer(_arr, i=0){
    if(i>= _arr.length)
        return 0
    return _arr[i]+arrSummer(_arr, i+1)
 }
//  console.log(arrSummer(myArr));
//  console.log(arrSummer([1,2,3,4]));
 

// Task-4
 function maxEle(_arr, i=0){
    
    if(i>=_arr.length)
        return _arr[i-1]
    
    // console.log(i);
    const maxNum = maxEle(_arr, i+1)
    
    return Math.max(_arr[i], maxNum)
    // console.log(bigNum);
    
 }
//  console.log(`Greatest no. is ${maxEle([66,83,99])}`)
//  console.log(`Greatest no. is ${maxEle(myArr)}`)
 
 // Task-5
//  const str = "Amit"
//  let revStr = ""
//  for(let i = str.length-1; i>=0; i--) {
//     revStr = revStr.concat(`${str[i]}`)
    
//  }
//  console.log(`rev = ${revStr}`);
 
function revStr(_str, i=0){
    let tempStr = ""
    if(i >= _str.length)
        return ''
    tempStr = tempStr.concat(revStr(_str, i+1))
    return tempStr.concat(_str[i])
 }
 

//  console.log(revStr("Amit").toLowerCase());
//  console.log(revStr("malyalam"));
 
// Task-6
 function isPalindrome(_str){
    if(_str.length < 2){
        return true
    }
    if(_str[0] !== _str[_str.length-1])
        return false
    else{
        return isPalindrome(_str.slice(1,-1))
    }
 }
//  console.log(isPalindrome("mom"));
//  console.log(isPalindrome("malayalam"));
 

// Task-7
 function isPresent(_arr, tar, low=0, high=_arr.length){
    
    const mid = Math.floor((high+low)/2)
    
    if(mid == -1)
        return `Not present`
    if(mid == low && low == high && high == _arr.length)
        return `Not present `
    if(_arr[mid] == tar){
        return `Present at index = ${mid}`
    }
    if(_arr[mid] > tar)
        high = mid-1
    if(_arr[mid] < tar)
        low = mid+1

    
    return isPresent(_arr, tar, low, high)
      
 }
//  console.log(isPresent([1,2,3,4,5,6,7,8], 1))
//  console.log(isPresent([11,12,13,14,18,19,22], 1)) //-1
//  console.log(isPresent([1,2,3,4,5,6,7,8], 8)) //low = mid =high=arr.length

// Task-8
 function countTar(_arr, tar, i=0){
    let counter = 0
    if(i == _arr.length)
        return 1
    if(_arr[i] == tar)
        return 1 + countTar(_arr, tar, i+1)
    
    else    
        return countTar(_arr, tar, i+1)
 }
 console.log(countTar([1,2,1,3,5,1,9,1], 1));
 

// Task-9
// Task-10
// Task-11