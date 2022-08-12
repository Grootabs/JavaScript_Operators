console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
let a = 20;
let b = 4;
let add = (a + b);
let minus = (a - b);
let multiply = (a * b);
let dividing = (a / b);

console.log (a); // 20
console.log (b); // 4
console.log (add); // 24
console.log (minus); // 16
console.log (multiply); // 80
console.log (dividing); // 5

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

// num + str = 1111
// num + str2 = 11eleven
// num + isPresent = 12
// firstName + num = Frodo11
// isPresent + str = true11
// firstName + lastName = FrodoBaggins

console.log (num + str);
console.log (num + str2);
console.log (num + isPresent);
console.log (firstName + num);
console.log (isPresent + str);
console.log (firstName + lastName);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let val = 5;
let str3 = "5";
let str4 = "five";
isPresent = false;

console.log (val == str3); // true
console.log (val === str3); // false
console.log (!isPresent); // true
console.log ("eleven" == str4 && val >= str3); // false
console.log (!isPresent || isPresent); //true
console.log (0 == false); // true
console.log (0 === false); // false 
console.log (0 != false); // false
console.log (0 !== false); // true