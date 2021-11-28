const prompt=require("prompt-sync")();
let no = parseInt(prompt("Enter First Number "));

if(no%7==0){
    console.log("No is divisible by 7")
}else{
    console.log("No is Not divisible by 7")
}