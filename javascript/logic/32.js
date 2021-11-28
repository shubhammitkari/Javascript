const prompt = require("prompt-sync")();
var c = prompt("Enter Number: ");
for(let i=1;i<=10;i++){
    console.log(`${c} * ${i} = ${i*c}`);
}
