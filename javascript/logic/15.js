const prompt=require("prompt-sync")();
let number = parseInt(prompt("Enter First Number "));

if(number%2==0){
    console.log("Number is Positive")
}else{
    console.log("Number is Negative")
}