const prompt=require("prompt-sync")();
let a = parseInt(prompt("Enter First Number "));
let b = parseInt(prompt("Enter Second Number "));
let c = parseInt(prompt("Enter Third Number "));

if((a>=b) && (a>=c)){
    if(b>=c){
        console.log("Descending Order: ",a,b,c)
        console.log("Ascending Order: ",c,b,a)
    }
    else{
        console.log("Descending Order: ",a,c,b)
        console.log("Ascending Order: ",b,c,a)
    }
}else if((b>=a) && (b>=c)){
    if(a>=c){
        console.log("Descending Order: ",b,a,c)
        console.log("Ascending Order: ",c,a,b)
    }else{
        console.log("Descending Order: ",b,c,a)
        console.log("Ascending Order: ",a,c,b)
    }
}else if((c>=a) && (c>=b)){
    if(a>=b){
        console.log("Descending Order: ",c,a,b)
        console.log("Ascending Order: ",b,a,c)
    }else{
        console.log("Descending Order: ",c,b,a)
        console.log("Ascending Order: ",a,b,c)
    }
}
