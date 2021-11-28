const prompt = require("prompt-sync")();
var n = prompt("Enter Number: ");
let flag=1;
let string="";

for(let i=2;i<=n;i++){
    flag=1;
    for(let j=2;j<=n/2;j++){
        if(i%j==0){
            flag=0;
            break;
        }
    }
    if(flag==1){
        console.log(i);
    }
}
