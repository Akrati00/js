// strings
const myVariable = "Mathematics"; //not using keyword let beacuse we don't want to reassign the value of variable

// The length property
console.log(myVariable.length); // length property return the number of characters in a string
console.log("Every good boy does fine".length);

// String Methods
console.log(myVariable.charAt(0));

console.log(myVariable.indexOf("Math")); // 0
console.log(myVariable.indexOf("mat")); // 5
// lastIndexOf() returns the index of the first occurrence of a specified value in a string.

console.log(myVariable.lastIndexOf("at")); // 6 
console.log(myVariable.lastIndexOf("ath")); // 1
// lastIndexOf() returns the index of the last occurrence of a specified value in a string.

console.log(myVariable.slice(5,8)); // mat
// it return the characters from starting position to the ending position but don't include ending position and if ending position is not provided then it return upto the end.

console.log(myVariable.toUpperCase()); // MATHEMATICS
// return the string in all upper case
console.log(myVariable.toLowerCase()); // mathematics
// return the string in all lower case

console.log(myVariable.includes("div")); // false
console.log(myVariable.includes("mat")); // true
// returns the boolean data , true if the character or group of character is present in a string , false if not present 




