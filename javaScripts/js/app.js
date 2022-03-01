// app.js
// JavaScript for Assignment
"use strict";

// 1. Function max() to find largest among two numbers.
// /*
// console.log("Question-1: Max of Two");
alert("Question-1: Max of Two Numbers");
let num1, num2, num3;
num1 = parseFloat(prompt("Enter First Number: "));
num2 = parseFloat(prompt("Enter Second Number: "));
num3 = parseFloat(prompt("Enter Third Number: "));
function max(num1, num2) {
    let z = 0;
    if (num1 > num2) {
        z = num1;
    } else {
        z = num2;
    }
    return (z + " is Largest amoung " + num1 + ", " + num2);
}
// console.log(max(x, y));
document.getElementById("Q1").value = max(num1, num2);
// */

// 2. Function maxOfThree() to find largest of them.
// /*
alert("Question-2: Max of Three Numbers");
// console.log("Question-2: Max of Three");
function maxOfThree(num1, num2, num3) {
    let num = 0;
    if (num1 >= num2 && num1 >= num3) {
        num = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        num = num2;
    } else {10

        num = num3;
    }
    return (num + " is Largest among " + num1 + ", " + num2 + ", " + num3);
}
// console.log(maxOfThree(num1, num2, num3));
document.getElementById("Q2").value = maxOfThree(num1, num2, num3);
// */

// 3. Function isVowel() takes a char and returns true/false.
// /*
let charVowel;
alert("Question-3: Input Character is Vowel True/false");
// console.log("Question-3: Input Character is Vowel True/false");

function charInput() {
    do {
        charVowel = prompt("Enter the Character: ");
        if (!/^[A-Za-z]$/.test(charVowel)) {
            alert("The input must be a single letter Characters.");
        }
    }
    while (!/^[A-Za-z]$/.test(charVowel)) {

    }
    return charVowel;
}

function isVowel(c) {
    let equal = (c.toUpperCase() === "A" || c.toUpperCase() === "E" || c.toUpperCase() === "I" ||
        c.toUpperCase() === "O" || c.toUpperCase() === "U");
    return (charVowel + " is vowel: " + equal);
}
// console.log(isVowel(charInput()));
document.getElementById("Q3").value = isVowel(charInput());
// */

// 4. sum() and multiply() from input array
// console.log("Question-4: Sum and Multiply from input Array");
alert("Question-4: Sum and Multiply from input Array");
// Input Array
// /*
let array = [];
// Reused in Question 8, 9, 10, 11 & 12
function inputArray() {
    let arraySize;
    let array = [];
    arraySize = parseFloat(prompt("Enter the size of Array: "));

    for (let i = 0; i < arraySize; i++) {
        array[i] = parseFloat(prompt("Enter the Number Array " + (i+1)));
    }
    return array;
}

// Sum
function sum(inpArray) {
    let sum = 0;
    for(let j = 0; j < inpArray.length; j++) {
        sum += inpArray[j];
    }
    return sum;
}

array = inputArray();
// console.log("The Sum of Array " + array + " is: " + sum(array));
document.getElementById("Q4Sum").value = ("The Sum of Array " + array + " is: " + sum(array));

// Multiply
function multiply(inpArray) {
    let mul = 1;
    for(let j = 0; j < inpArray.length; j++) {
        mul *= inpArray[j];
    }
    return mul;
}
// console.log("The Multiplications of Array " + array + " is: " + multiply(array));
document.getElementById("Q4Multiply").value = ("The Multiplications of Array " + array + " is: " + multiply(array));
// */

// 5. reverse() Function for reversal of String.
// console.log("Question-5: Reversal of Input String");
alert("Question-5: Reversal of Input String");
// /*
let inpString = prompt("Enter the String to be Reversed: ");

function reverse(rev) {
    let resString ="";
    for(let i = rev.length - 1; i >= 0; i--) {
        resString += rev[i];
    }
    return resString;
}
// console.log("The reversal of String \"" + inpString + "\" is: " + reverse(inpString));
document.getElementById("Q5").value = ("The reversal of String \"" + inpString + "\" is: " + reverse(inpString));
// */

//6. findLongestWord() from Array of words and return length of longest word.
// console.log("Question-6: Longest Word From String Array");
alert("Question-6: Longest Word From String Array");
// /*
// Reused in Question 7
let inpStringArray = inputStringArray();
function inputStringArray() {
    let arraySize;
    let array = [];
    arraySize = parseFloat(prompt("Enter the size of String Array: "));

    for (let i = 0; i < arraySize; i++) {
        array[i] = prompt("Enter String Array " + (i+1));
    }
    return array;
}

function findLongestWord(strArray) {
    let longestWordLength = 0;
    for (let i = 0 ; i < strArray.length; i++) {
        if (longestWordLength < strArray[i].length) {
            longestWordLength = strArray[i].length;
        }
    }
    return longestWordLength;
}
// console.log(findLongestWord(inpStringArray));
document.getElementById("Q6").value = ("The Longest Word length in Array " + inpStringArray + " is: " + findLongestWord(inpStringArray));

// */

// 7. filterLongWords() returning the array longer than i characters.
// console.log("Question-7: Returning Array Longer than Input Characters length");
alert("Question-7: Returning Array Longer than Input Characters length");
// /*
let iChar = parseFloat(prompt("Enter the length of character i: "));
// Using Imperative Programming
function filterLongWords(iArray) {
    let resArray = [];
    let j = 0;
    for (let i = 0 ; i < iArray.length; i++) {
        if (iArray[i].length > iChar) {
            resArray[j] = iArray[i];
            j++;
            // resArray.push(iArray[i]); //"(Push) command" To add an element to Array
        }
    }
    return resArray;
}

// Using Functional Programmin
// const filterLongWordsFunc = (iArray, iChar) => iArray.filter(w => w.length > iChar);

// console.log(filterLongWords(inpStringArray));
document.getElementById("Q7").value = ("Array longer than " + iChar + " in a Array " + inpStringArray + " is: " + filterLongWords(inpStringArray));
// */

// 8. computeSumOfSquares(), input an array and return sum of each squares.
// console.log("Question-8: Sum of Squares");
alert("Question-8: Sum of Squares");
// /*
function computeSumOfSquares(arr) {
    let sum = 0,
        i = arr.length;
    while (i--) {
      sum += Math.pow(arr[i], 2);
    }
    return sum;
  }
//   console.log(computeSumOfSquares(array));
  document.getElementById("Q8").value = ("The Sum of squares of Array " + array + " is: " + computeSumOfSquares(array));
// */

// 9. printOddNumbersOnly(), take input an array and prints numbers which are odd.
// console.log("Question-9: Print Odd Numbers from input Array");
alert("Question-9: Print Odd Numbers from input Array");
// /*
function printOddNumbersOnly(arr) {
    let resOddArray = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            resOddArray[j] = arr[i];
            j++;
        }
    }
    return resOddArray;
}
// console.log(printOddNumbersOnly(array));
document.getElementById("Q9").value = ("The odd numbers in Array " + array + " are: " + printOddNumbersOnly(array));
// */

// 10. computeSumOfSquaresOfEvensOnly(), take input an array and return sum of squares of even numbers
// console.log("Question-10: Sum of squares of even nmber from input array");
alert("Question-10: Sum of squares of even number from input array");
// /*
function computeSumOfSquaresOfEvensOnly(arrEven) {
    let sumSquareEven = 0;
    for (let i = 0; i < arrEven.length; i++) {
        if (arrEven[i] % 2 === 0) {
            sumSquareEven += Math.pow(arrEven[i], 2);
        }
    }
    return sumSquareEven;
}
// console.log(computeSumOfSquaresOfEvensOnly(array));
document.getElementById("Q10").value = ("The sum of squares of even in Array " + array + " is: " + computeSumOfSquaresOfEvensOnly(array));
// */

// 11. Re-implement sum and multiply using reduce function define in Question 4
// console.log("Question-11: Re-implement Sum and Multiply using Reduce");
alert("Question-11: Re-implement Sum and Multiply using Reduce");
// /*
// SumReduce
function sum(inpArray) {
    let sumReduce = inpArray.reduce(function(x, y) {
        return x + y;
    });
    return sumReduce;
}

// console.log("The Sum of Array using reduce function " + array + " is: " + sum(array));
document.getElementById("Q11Sum").value = ("The Sum of Array using reduce function " + array + " is: " + sum(array));

// MultiplyReduce
function multiply(inpArray) {
    let mulReduce = inpArray.reduce(function(x, y) {
        return x * y;
    });
    return mulReduce;
}
// console.log("The Multiplications of Array using reduce function " + array + " is: " + multiply(array));
document.getElementById("Q11Multiply").value = ("The Multiplications of Array using reduce function " + array + " is: " + multiply(array));
// */

// 12. findSecondBiggest(), takes input an array and return second biggest in array
// console.log("Question-12: Find Second Biggest from input number Array");
alert("Question-12: Find Second Biggest from input number Array");
// /*
function findSecondBiggest(arr) { 
    let max = Math.max.apply(null, arr), maxi = arr.indexOf(max);
    arr[maxi] = -Infinity;
    var secondMax = Math.max.apply(null, arr);
    arr[maxi] = max;
    return secondMax;
}


// console.log("The Second biggest among array " + array + " is: " + findSecondBiggest(array));
document.getElementById("Q12").value = ("The Second biggest among array " + array + " is: " + findSecondBiggest(array));
// */

// 13. printFibo(), take input, a given length and two starting numbers
// console.log("Question-13: Print Fibonaci of length n starting with a and b");
alert("Question-13: Print Fibonaci of length n starting with a and b");
// /*
let n, a, b;

n = parseFloat(prompt("Enter the length for Fibonacci Series n: "));
a = parseFloat(prompt("Enter the First Begining Number a: "));
b = parseFloat(prompt("Enter the First Begining Number b: "))

function printFibo(n, a, b) {
    let fiboArray = [], nextFibo = 0;
    for (let i = 1; i <= n; i++) {
        fiboArray[i-1] = a;
        nextFibo = a + b;
        a = b;
        b = nextFibo;
    }
    return fiboArray;
}
// console.log("Fibonaci Series: " + printFibo(n, a, b));
document.getElementById("Q13").value = ("Fibonaci Series: " + printFibo(n, a, b));
// */