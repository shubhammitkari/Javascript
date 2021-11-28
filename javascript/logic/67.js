const prompt=require("prompt-sync")();
let nTerms = parseInt(prompt("Enter Number of items: "));
var arr=[];
for(let i=0;i<=nTerms;i++){
    arr[i]=prompt("Enter a number: ");
    
}
for(i=arr.length;i>0;i--){
    console.log(i+1,arr[i]);
}

// var result=arr.split("").reverse().join("")
//console.log(arr);  