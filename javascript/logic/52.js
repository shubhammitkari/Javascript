const prompt = require("prompt-sync")();
var n = prompt("Enter Number: ");
let fact=1,sum=0;
for(let i=1;i<=n;i++){
    fact=1;
    for(j=1;j<=i+1;j++){
      fact=fact*j;
    }
  sum=sum+i/fact;
}
console.log(sum);