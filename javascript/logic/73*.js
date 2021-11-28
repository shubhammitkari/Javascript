const prompt=require("prompt-sync")();
let mTerms = parseInt(prompt("Enter Number m items: "));
let nTerms = parseInt(prompt("Enter Number n items: "));
var arr=[];
let i,j,temp;
for(let i=0;i<=mTerms;i++){
    for(let j=0;j<=nTerms;j++){
        arr[i]=parseInt(prompt("Enter m number: "));
        arr[j]=parseInt(prompt("Enter n number: "));
    }        
}
for(let k=0;k<mTerms;k++)
  {
    for(let l=0;l<nTerms;l++){
        console.log(a[i][j]);
    }      
    console.log("\n");
  }