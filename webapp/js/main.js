/**
 * Assignment 10: WebApp
 * main.js
 */
"use strict";
// Importing the Person and Employee Class
import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";

const persons = [
    new Person("Ana Smith", new Date(1998, 11, 15)),
    new Person("Bob Jone", new Date(1945, 10, 16)),
    new Person("Carlos Slim Helu", new Date(1976, 8, 24))
];

console.log("Assignment 10: Question 1");
persons.forEach(p => console.log(p.toString()));

const jim = new Employee("Jim Hanson", new Date(1998, 11, 15), 245990, new Date());

console.log("Assignment 10: Question 2");
console.log(jim.doJob("Software Engineer"));