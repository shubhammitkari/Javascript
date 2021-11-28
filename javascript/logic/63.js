const prompt = require("prompt-sync")();
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));

console.log("Using a Temporary Variable");
let temp;
temp = a;
a = b;
b = temp;
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


console.log("Using destructuring assignment");
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

console.log("Using Arithmetic Operators");
a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

console.log("Using Bitwise XOR operator");
a = a ^ b
b = a ^ b
a = a ^ b

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

