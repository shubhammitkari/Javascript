const prompt=require("prompt-sync")();
let no = parseInt(prompt("Enter First Number "));

if(no<10){
    console.log("No is less than 10");
}else if(no>10){
    console.log("No is greater than 10");
}else {
    console.log("No is equal to 10");
}

