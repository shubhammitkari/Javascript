const prompt = require("prompt-sync")();
var n = prompt("Enter Number: ");

let pre=0,cur=1,temp;
for(let i=1;i<=n;i++){
    temp=cur;
    cur=pre+cur;
    pre=temp;
    console.log(cur);
}