"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Define a class Person
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
exports.Person = Person;
