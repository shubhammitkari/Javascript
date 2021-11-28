const prompt=require("prompt-sync")();
let nTerms = parseInt(prompt("Enter Number of items: "));
var arr=[];
for(let i=0;i<=nTerms;i++){
    arr=arr+[prompt("Enter a number: ")];
    
}
console.log(arr);  