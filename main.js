"use strict";
//🚀 Day 44 Challenge: Start Coding! 🚀
/*Question 130: Explain how to export a function from one JavaScript file and import it into another file.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions from mathFunctions.ts
var mathFunctions_1 = require("./mathFunctions");
// Now you can use the imported functions
console.log((0, mathFunctions_1.add)(5, 3)); // Output: 8
console.log((0, mathFunctions_1.subtract)(10, 4)); // Output: 6
/* Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.*/
// Import the Person class from person.ts
var person_1 = require("./person");
// Create an instance of Person
var Asad = new person_1.Person('Asad', 40);
// Call the greet method of the Person instance
Asad.greet();
