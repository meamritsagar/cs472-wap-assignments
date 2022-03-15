/**
 * calculator.js
 * Simple Calculator
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-14
 */
"use strict";

module.exports = function(first, second, operation) {
    let result = 0.00;
    // Switch Case for Calculation
    switch(operation) {
        case 'add':
            result = parseFloat(first) + parseFloat(second);
            break;
        case 'subtrat':
            result = parseFloat(first) - parseFloat(second);
            break;
        case 'multiply':
            result = parseFloat(first) * parseFloat(second);
            break;
        case 'divide':
            if(parseFloat(second) == 0) {
                throw new Error("Division by 0 is not Possible");
            } else {
                result = parseFloat(first) / parseFloat(second);
            }
            break;
        default:
            result;
    }
    return result;
}