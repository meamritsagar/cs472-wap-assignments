/**
 * Assignment 10: WebApp
 * person.js
 */
"use srict";
// JavaScript ES6 Class
export class Person {
    #name = null;
    #dateOfBirth = null;

    constructor(name, dateOfBirth) {
        this.#name = name;
        this.#dateOfBirth = dateOfBirth;
    }
    getName() {
        return this.#name;
    }
    getDateOfBirth() {
        return this.#dateOfBirth;
    }
    setName(name) {
        this.#name = name;
    }
    setDateOfBirth(dob) {
        this.#dateOfBirth = dob;
    }
    toString() {
        const formatDate = this.#dateOfBirth.getFullYear() + "-" +
        (this.#dateOfBirth.getMonth()+1) + "-" + this.#dateOfBirth.getDate();
        return `{ Name: ${this.#name}, DateOfBirth: ${formatDate} }`;
    }
}