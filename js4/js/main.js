

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
