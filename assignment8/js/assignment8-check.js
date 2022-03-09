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
const Employee = (function() {
    let name = null;
    let age = null;
    let salary = null;

    const getAge = function() {
        return age;
    }

    const getSalary = function() {
        return salary;
    }

    const getName = function() {
        return name;
    }

    const setAge = function(newAge) {
        age = newAge;
    }

    const setSalary = function(newSalary) {
        salary = newSalary;
    }

    const setName = function(newName) {
        name = newName;
    }

    const increaseSalary = function(percentage) {
        let incSalary = getSalary() + (percentage * getSalary())/100; 
        setSalary(incSalary);
    }

    const incrementAge = function() {
        let incAge = getAge() + 1;
        setAge(incAge);
    }

    return {
        getName: getName,
        getAge: getAge,
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        getSalary: getSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
})();
Employee.setSalary(200);
Employee.increaseSalary(10)
console.log(Employee.getSalary());

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

Employee.address = null;
Employee.setAddress = function(newAddress) {
    this.address = newAddress;
};
Employee.getAddress = function() {
    return this.address;
};
Employee.setAddress("1000 N 4th Street");
console.log(Employee.getAddress());

// Define a new constructor funtion named, EmployeeWithAddress
function EmployeeWithAddress(address) {
    this.address = address;
};
EmployeeWithAddress.prototype = Employee;
EmployeeWithAddress.prototype.setAddress = function(newAddress) {
    this.address = newAddress;
};
EmployeeWithAddress.prototype.getAddress = function() {
    return this.address;
};
EmployeeWithAddress.prototype.toString = function() {
    return `{ Name: ${this.getName()}, Age: ${this.getAge()}, Salary: ${this.getSalary()}, Address: ${this.address}}`;
};
const empWithAddr = new EmployeeWithAddress(null);
empWithAddr.setName("Anna Lynn Smith");
empWithAddr.setAge("33");
empWithAddr.setAddress("155 Kings Lane");
console.log(empWithAddr.toString());