// #Learning:
// ES Modules (import/export): Use this if you're building modern JavaScript applications and want the benefits of the ESM syntax. Set "type": "module" in your package.json or use the .mjs extension.

// CommonJS (require/module.exports): Use this for legacy support or if you're working with older Node.js projects.

// distinction between named exports and default exports in JavaScript ES Modules:
// Named Exports: You export specific elements (like functions, objects, or variables) by their names. These need to be imported using the same names.
// Default Exports: You export a single value as the default export of the module. This does not require curly braces when importing and can be named anything by the importer.
// You're importing lodash using the default import syntax import pkg from "lodash";. This syntax is typically used when a module has a default export. However, lodash doesn't have a default export, so this is a workaround supported by some bundlers like Babel or using a special Node.js setup.
//For using require you needs to maintain a commonJS mudule with .js extension but here you are using .mjs ext making it an ES module so require() doesn't work with it.



// Task-1
 import {adder} from "../13_1_functions.mjs"
//  adder(10,20)

// Task-2
 import {person} from "../13_2_object.mjs" //******** 
//  console.log(person.age);
//  console.log(person);

// Task-3
 import { subtractor, multiplier, divider} from "../13_1_functions.mjs";
//  subtractor(110, 60)
//  multiplier(25, 5)
//  divider(625, 25)

// Task-4
 import myDefault from "../13_1_functions.mjs"
//  myDefault()

// Task-5
 import myObj from "../13_3_multiple.mjs"
//  console.log(myObj.ten);
//  myObj.myFun1()
//  myObj.myFun2()
//  console.log(myObj);

// Task-6
 import pkg from "lodash"

//  import { chunk } from "lodash" //Not supported due to lodash being a CommonJS module

//  const _ = require(`lodash`)
//  const { chunk } = require(`lodash`) //********** */
 const myarr = [1,2,3,4,5,6]
 console.log(pkg.chunk(myarr,2));
 console.log(pkg.drop(myarr, 3));

// Task-7
 import axios from "axios"
 async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1',{
            timeout: 10000,
        });
        console.log(response.data); // Logs the data received from the server
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData()

// Task-8


