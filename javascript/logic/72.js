const prompt=require("prompt-sync")();
let nTerms = parseInt(prompt("Enter Number of items: "));
var arr=[];
let i,j,temp;
for(let i=0;i<=nTerms;i++){
    arr[i]=parseInt(prompt("Enter a number: "));    
}

    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<i;j++)
            if(arr[i]<arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
    }
 
    console.log("\nAscending order....\n");
    for(i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
 
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<i;j++)
            if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
    }
 
    console.log("\nDescending order.....\n");
    for(i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }