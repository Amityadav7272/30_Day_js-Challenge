// # Learnings:
// You can iterate in nested objects by accesing inner obj and for-each on it.
//The JavaScript for in statement loops through the properties of an Object
//The for in loop iterates over a person object each iteration returns a key 
//Object.keys() and Object.values() returns an array of all keys and all values
//Loops on object: https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/


// Task-1 
 const book = {
    title: "Black Beauty",
    author: "Anna Sewell",
    year: 1877
 }
//  console.log(book);

// Task-2
//  console.log(book.title);
//  console.log(book.author);
//  console.log(book['title']);

// Task-3
 book.tithor = function(){
    return `${this.title}-${book.author}`
 }
// console.log(book.tithor());

// Task-4
 book.yearChange = function(_year){
    this.year = _year
 }
//  console.log(book);
 book.yearChange(2016)
//  console.log(book);

// Task-5
 let mylibrary = {
    name: "Book-Zone",
    books: [
        {title: "A Tale of Two Cities", author: "Charles Dickens", year: 1859},
        {title: "The Alchemist", author: "Paulo Coelho", year: 1988},
        {title: "Heidi", author: "Johanna Spyri", year: 1880}
    ]
 }
//  console.log(mylibrary);

// Task-6
 console.log(`Library = ${mylibrary.name}`);
 mylibrary.books.forEach((obj) => {
    // console.log(obj.title);
 });

// Task-7
//  Same as Task-3

// Task-8
 for (const key in book) {
   console.log(key);       
   // console.log(book[key]);
 }
 

// Task-9
 console.log(Object.keys(book));
 console.log(Object.values(book));

