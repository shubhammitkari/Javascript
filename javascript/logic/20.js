const prompt=require("prompt-sync")();
let a = parseInt(prompt("Enter First Number "));
let b = parseInt(prompt("Enter Second Number "));

if(a<b){
    console.log("A is less than B");
}else if(a>b){
    console.log("A is greater than B");
}else {
    console.log("Both are equal");
}

