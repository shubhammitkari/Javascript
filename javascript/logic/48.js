const prompt = require("prompt-sync")();
var n = prompt("Enter Number: ");
let flag=0;
for(let i=2;i<=n/2;i++){
    if(n%i==0){
        flag=1;
    }  
}
if (flag==1){
    console.log("Number is not prime number");
}else{
    console.log("Number is prime number");
}
