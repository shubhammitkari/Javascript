const prompt=require("prompt-sync")();
var str1=prompt("Enter first string: ");
var str2=prompt("Enter second string: ");

let result=str1.localeCompare(str2);
console.log(result)