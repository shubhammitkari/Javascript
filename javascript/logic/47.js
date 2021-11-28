const prompt = require("prompt-sync")();
var n = prompt("Enter Number: ");
let fact=1;
for(let i=1;i<=n;i++){
    fact*=i;
}
console.log(fact);