/**
 * Assignment 8 - Check
 */
// Question 6:
 var count = (function() {
    let counter = 0;
    add = function() {
        return counter += 1;
    }
    reset = function() {
        return counter = 0;
    }
    return {
        add: add,
        reset: reset
    };
})();

console.log(count.add());
console.log(count.add());
console.log(count.reset());
console.log(count.add());


// Question 8:
const make_adder = (function (inc) {
    let counter = 0;
    return function () {
        return counter += inc;
    }
})

add5 = make_adder(5);
console.log(add5());
console.log(add5());
console.log(add5());

add7 = make_adder(7);
console.log(add7());
console.log(add7());
console.log(add7());

// Question 10:
var employee = (function() {
    let name = null;
    let age = null;
    let salary = null;

    getAge = function() {
        return age;
    }

    getSalary = function() {
        return salary;
    }

    getName = function() {
        return name;
    }

    setAge = function(newAge) {
        age = newAge;
    }

    setSalary = function(newSalary) {
        salary = newSalary;
    }

    setName = function(newName) {
        name = newName;
    }

    increaseSalary = function(percentage) {
        let incSalary = getSalary() + (percentage * getSalary())/100; 
        setSalary(incSalary);
    }

    incrementAge = function() {
        let incAge = getAge() + 1;
        setAge(incAge);
    }

    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        getSalary: getSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
})();
employee.setSalary(200);
employee.increaseSalary(10)
console.log(getSalary());

// Question 11:
// var employee = (function() {
//     let name = null;
//     let age = null;
//     let salary = null;

//     getAge = function() {
//         return age;
//     }

//     getSalary = function() {
//         return salary;
//     }

//     getName = function() {
//         return name;
//     }

//     setAge = function(newAge) {
//         age = newAge;
//     }

//     setSalary = function(newSalary) {
//         salary = newSalary;
//     }

//     setName = function(newName) {
//         name = newName;
//     }

//     increaseSalary = function(percentage) {
//         let incSalary = getSalary(); + percentage * getSalary(); 
//         setAge(incSalary);
//     }

//     incrementAge = function() {
//         let incAge = getAge(); + 1;
//         setAge(incAge);
//     }

//     return {
//         setAge: setAge,
//         setSalary: setSalary,
//         setName: setName,
//         increaseSalary: increaseSalary,
//         incrementAge: incrementAge,
//     }
// })();

employee.address = (function() {
    let address = null;
    getAddress = function() {
        return address;
    }
    setAddress = function(newAddress) {
        address = newAddress;
    }
    return {
        getAddress: getAddress,
        setAddress: setAddress
    }
})();
employee.address.setAddress("1000 N 4th Street");
console.log(employee.address.getAddress());