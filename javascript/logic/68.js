const prompt=require("prompt-sync")();
let nTerms = parseInt(prompt("Enter Number of items: "));
var arr=[];
let sum=0;
for(let i=0;i<=nTerms;i++){
    arr[i]=parseInt(prompt("Enter a number: "));
    
}


// var lodash = require('lodash');
// var arr = [3, 6, 1, 5, 8];
// sum = lodash.sum(arr);
// console.log(sum); 

for(let j=0;j<arr.length;j++){
    sum=sum+arr[j]
}

console.log("Sum",sum);  