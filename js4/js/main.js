

// An Integer is a whole number.
const myNumber = 42;

console.log(myNumber);

// A number with a decimal point is a float which references the "floating point".
const myFloat = 42.01;
console.log(myFloat);

const myString = "42";
console.log(myString);

console.log(myNumber === myFloat); // false
console.log(myNumber === myString); // false          

console.log(myString + 3); // 423
console.log(Number(myString) + 3); // 45
console.log(Number(myString) === myNumber); // true

console.log(Number("Dave")); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1 
console.log(Number(false)); // 0

// Number methods

// The Number.isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myNumber)); // true
console.log(Number.isInteger(myFloat)); // false
console.log(Number.isInteger(myString)); // false

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

console.log(Number.parseFloat(myString)); // 42
console.log(Number.parseFloat(myFloat)); // 42
console.log(Number.parseFloat(myNumber)); // 42
const newString = "42.132abc"
console.log(Number.parseFloat(newString)); // 42.132

// The toFixed() method formats a number according to how many decimal points you provide as a parameter.

console.log(Number.parseFloat(newString).toFixed(2)); // 42.13

// The Number.parseInt() method parses a string argument and returns an integer.
console.log(Number.parseInt(myFloat)); // 42

// The toString() method returns a string representing the number.

console.log(myFloat.toString()); // 42.01
console.log(typeof(myFloat.toString())); // string 

// Chaining = using several methods chained together

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

// NaN is an acronym for Not a Number
console.log(Number("Dave")); // NaN

// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.
console.log(Number.isNaN("Dave")); // false
console.log(Number.isNaN(Number("Dave"))); // true

// The global isNaN() function determines whether a value is NaN or not.
console.log(isNaN("Dave")); // true









