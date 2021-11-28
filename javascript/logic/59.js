const prompt =require("prompt-sync")();
let a = parseInt(prompt("Enter First Number: "))
let b = parseInt(prompt("Enter Second Number: "))
let op = (prompt("Enter Operator: "))


switch(op){
  case '+' : console.log("Result : ",a+b);break;
  case '-' : console.log("Result : ",a-b);break;
  case '*' : console.log("Result : ",a*b);break;
  case '/' : console.log("Result : ",a/b);break;
  default  : console.log("Invalid operator....");
  }