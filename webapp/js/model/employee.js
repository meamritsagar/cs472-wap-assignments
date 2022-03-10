/**
 * Assignment 10: WebApp
 * employee.js
 */
 "use strict";
// Importing the Person Class
import { Person } from "./person.js";

 // JavaScript ES6 Class
 export class Employee extends Person {
     #salary = 0.00;
     #hireDate = null;

     constructor(name, dateOfBirth, salary, hireDate) {
         super(name, dateOfBirth);
         this.#salary = salary;
         this.#hireDate = hireDate;
     }
     doJob(jobTitle) {
        const formatSalary = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.#salary);
        return `${this.getName()} is a ${jobTitle} who earns ${formatSalary}`;
     }
 }