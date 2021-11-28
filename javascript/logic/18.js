const prompt=require("prompt-sync")();
let no = parseInt(prompt("Enter First Number "));

if(no%5==0){
    console.log("No is divisible by 5")
}else{
    console.log("No is Not divisible by 5")
}