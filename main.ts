//🚀 Day 44 Challenge: Start Coding! 🚀
/*Question 130: Explain how to export a function from one JavaScript file and import it into another file.*/

// Import the functions from mathFunctions.ts
import { add, subtract } from './mathFunctions';

// Now you can use the imported functions
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

/* Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.*/

// Import the Person class from person.ts
import { Person } from './person';

// Create an instance of Person
const Asad = new Person('Asad', 40);

// Call the greet method of the Person instance
Asad.greet();

//Question 132: Discuss the difference between default and named exports in JavaScript modules.*/
// Importing named exports:
import { utilOne, utilTwo } from "./utils";

// Importing a default export:
import calculator from "./calculator";
