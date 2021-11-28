const prompt = require("prompt-sync")();
var c;
c = prompt("Enter Number: ");
let temp=c;
let sum=0;
while(temp>0){
    var rem = temp%10;
    console.log(rem);
    sum = sum + rem**3;
    console.log(sum);
    temp = parseInt(temp/10);
    console.log(temp);
    console.log("-----------");
}
if (sum==c){
    console.log(`${c} is Armstrong`);
}else{
    console.log(`${c} is Not Armstrong`);
}
