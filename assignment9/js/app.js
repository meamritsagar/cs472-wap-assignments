/**
 * Assignment 9: Inheritance
 * Q1, Q2, and Q3
 */
"use strict";

// Question 1:
const person = {
    name: "",
    dateOfBirth: null,
    getName: function() {
        return this.name;
    },
    setName: function(newName) {
        this.name=newName;
    }
};

const john = Object.create(person);
john.setName("John");
john.dateOfBirth = new Date(1998, 11, 10);

let formatDate = john.dateOfBirth.getFullYear() + "-" +
    (john.dateOfBirth.getMonth()+1) + "-" + john.dateOfBirth.getDate();

console.log("The person's name is " + john.getName());
console.log(john.getName() + " was born on " + formatDate);

// Question 2:
const Employee = {
    salary: 0.00,
    hireDate: new Date(),
    doJob: function(jobTitle ) {
        console.log(this.getName() + " is a " + jobTitle + " who earns " +
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.salary));
    }
};

Object.setPrototypeOf(Employee, person);

const anna = Object.create(Employee);
anna.setName("Anna");
anna.salary = 249995.50;
anna.doJob("Programmer");

// console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(anna.salary));

// Question 3:
function Person(name, dateOfBirth) {
    this.name=name;
    this.dateOfBirth=dateOfBirth;
 }

 Person.prototype.toString = function() {
    let formatDate = this.dateOfBirth.getFullYear() + "-" +
    (this.dateOfBirth.getMonth()+1) + "-" + this.dateOfBirth.getDate();
    // return "{Name: " + this.name + ", DateOfBirth: " + new Intl.DateTimeFormat("en-US").format(this.dateOfBirth) + "}";
    return "{Name: " + this.name + ", DateOfBirth: " + formatDate + "}";
}

const peter = new Person("Peter", new Date(1985, 10, 10));
console.log(peter.toString());
