const prompt = require("prompt-sync")();
var n = prompt("Enter Number: ");
let avg,sum=0;
for(let i=1;i<=n;i++){
    sum=sum+i;
}
avg=sum/n;
console.log(avg);
