const prompt=require("prompt-sync")();
let a = prompt("Enter First Number ");
let b = prompt("Enter Second Number ");
[a, b] = [b, a];
console.log("a: ",a,"b: ",b);
