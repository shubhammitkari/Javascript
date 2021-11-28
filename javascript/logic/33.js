const prompt = require("prompt-sync")();
var n = prompt("Enter Number: ");
var sum=0;
for(let i=1;i<=n;i++){
    sum = sum + i;
}
console.log(`Sum of first ${n} numbers is: ${sum}`);