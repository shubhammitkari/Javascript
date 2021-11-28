const prompt=require("prompt-sync")();
var str1=prompt("Enter first string: ");
var str2=prompt("Enter second string: ");
var result=str1.concat(" ",str2);

console.log(result);