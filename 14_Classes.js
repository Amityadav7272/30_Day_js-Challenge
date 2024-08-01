// Learnings: 
// To add a new method in a class use prototype
//Why this Doesn't Work in Arrow Functions:

// Arrow Functions and this: Arrow functions capture the this value from their enclosing lexical context at the time they are defined, not at the time they are called. In the code below, this inside greetMe refers to the global object (window in browsers, global in Node.js) because that's the lexical context where the arrow function is defined.

// Lack of Own this: Arrow functions are typically used for short functions where you want to preserve the this value from the surrounding context, not for object methods where you expect this to refer to the instance of the object.

//Static Method: The static method getCount() provides an alternative way to access the instance count, which is useful for encapsulating the logic or if you want to perform additional operations when retrieving the count.
//Private fields are declared using a # prefix before the field name.



// Task-1
 class Person {
    constructor(firstName, age, lastName = 'kumar'){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    greetMe(){
        return `Good Morning ${this.firstName}`
    }
    static greeting(){
        return `Welcome! You are in class of Person`
    }
    get fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
    set fullName(name){
        const parts = name.split(' ')
        if(parts.length === 2){
            this.firstName = parts[0]
            this.lastName = parts[1]
        }
    }
 }

 const myPerson = new Person("Amit", 22)
//  console.log(myPerson);
//  console.log(myPerson.greetMe());

// Task-2
 Person.prototype.updateAge = function(_age){
    this.age = _age
    console.log(`Updated age = ${this.age}`);
 }
//  myPerson.updateAge(23)

// Task-3
 class Student extends Person {
    static counter = 0
    constructor(firstName, age, studentId){
        super(firstName, age)
        Student.counter++;
        this.studentId = studentId
    }
    getId(){
        return this.studentId
    }
    static getCount(){
        console.log(`No. of students = ${Student.counter}`);
    }
 }
 const myStudent = new Student("Ramesh", 15, 101)
//  console.log(myStudent.getId());
//  console.log(myStudent.greetMe());//you can't use overridden greet before defining it
 
 
 // Task-4
 Student.prototype.greetMe = function(){ //****here you can't use arrow fuction as this in arrow function refer to their enclosing lexical context
    return `Hello ${this.firstName}, your Id is ${this.studentId}`
}
const student2 = new Student("Suresh", 16, 102)
//  console.log(myStudent.greetMe());
//  console.log(student2.greetMe());
//  console.log(myPerson.greetMe());

// Task-5
//  console.log(Person.greeting());

// Task-6
//  console.log(Student.counter);
//  Student.getCount();

// Task-7
//  myPerson.fullName;
//  myStudent.fullName;

// Task-8
//  myPerson.fullName("Amit Yadav")  //fullName is not a function here
//  myPerson.fullName = "Amit Yadav"
//  myPerson.fullName = "Amit"
//  myPerson.fullName;
 
// Task-9
 class Account {
    // _balance = 100
    #balance
    constructor(balance = 0){
        if (balance<0)
            throw new Error(`Balance can't be in negatives`)
        this.#balance = balance
    }
    deposit(_amount){
        if(_amount > 0){
            this.#balance += _amount
            console.log(`Deposited Successfully`);
        }
        else
            throw new Error `Amount should be in positive`
    }
    withdraw(_amount){

        if(_amount > this.#balance){
            console.log(`Insufficient balance!!`);
        }
        if(_amount <= this.#balance){
            this.#balance -= _amount
            console.log(`withdrawal successful`);
        }
    }
    get getBalance(){
        console.log(`Balance in your account = ${this.#balance}`);
    }
    
 }

// Task-10
 const myAccount = new Account()
 myAccount.getBalance
 myAccount.withdraw(500)
 myAccount.deposit(500)
 myAccount.getBalance

 const vijaymalyaAcc = new Account(1000)
 vijaymalyaAcc.getBalance
 vijaymalyaAcc.withdraw(5000)
 vijaymalyaAcc.withdraw(100)
 vijaymalyaAcc.getBalance
// console.log( Account.#balance)

// const myAccount2 = new Account(-500)
// myAccount2.getBalance
