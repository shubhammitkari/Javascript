const prompt=require("prompt-sync")();
let base = prompt("Enter base");
let height = prompt("Enter height");

triangle = 0.5 * base * height;
console.log("Area of triangle is: ",triangle);
