const prompt =require("prompt-sync")();
let n = prompt("Enter Number: ")
let string="";
let string1="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        string+="  ";
    }for(let k=i;k<n;k++){
        string+="* ";
    }
    for(let l=i;l<=n;l++){
        string+="* ";
    }
    string += "\n";
}
console.log(string);
