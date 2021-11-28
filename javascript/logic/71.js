const prompt=require("prompt-sync")();
let nTerms = parseInt(prompt("Enter Number of items: "));
var arr=[];
let pos='';
let neg='';
for(let i=0;i<=nTerms;i++){
    arr[i]=parseInt(prompt("Enter a number: "));    
}

// for(let j=0;j<arr.length;j++){
//     if(arr[j]%2==0){
//         pos[j]=arr[j];
//     }else{
//         neg[j]=arr[j]
//     }
// }


for(let j=0;j<arr.length;j++){
    if(arr[j]>0){
        pos+=arr[j];             
    }    
}
for(let j=0;j<arr.length;j++){
    if(arr[j]<0){
        neg+=arr[j];        
    }    
}
console.log("Positive Number",pos); 
console.log("Negative Number",neg);


