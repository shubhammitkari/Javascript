const prompt=require("prompt-sync")();
let a = parseInt(prompt("Enter First Number "));
let b = parseInt(prompt("Enter Second Number "));
if(a>b){
    console.log("A is greater")
}
else{
    console.log("B is greater")
}