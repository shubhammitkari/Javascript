const prompt = require("prompt-sync")();
var number = prompt("Enter Number: ");
var exponent = prompt("Enter exponent")

function square(number,exponent){
    console.log("square",Math.pow(number, exponent));
}

function cube(number,exponent){
    console.log("cube", Math.pow(number, exponent));
}

square(2,2);
cube(2,3);


