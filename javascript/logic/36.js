const prompt = require("prompt-sync")();
var n = prompt("Enter Number: ");
let string = "";
for(let i=1;i<=n;i++){
    for(let j=i;j<=n;j++){
        string += "* ";
    }
    string += "\n";
}
console.log(string);