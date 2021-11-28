const prompt =require("prompt-sync")();
let a = parseInt(prompt("Enter First Number: "))
let b = parseInt(prompt("Enter Second Number: "))

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
console.log("Addition: ",add(a,b));
console.log("Substraction: ",sub(a,b));
console.log("Multiplication: ",mul(a,b));
console.log("Division: ",div(a,b));