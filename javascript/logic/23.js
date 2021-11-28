const prompt=require("prompt-sync")();

let m1 = parseInt(prompt("Enter Second Number "));
let m2 = parseInt(prompt("Enter Third Number "));
let m3 = parseInt(prompt("Enter Third Number "));

let total;
var avg;

 total=m1+m2+m3;
 avg=total/3.0;
 console.log("\nTotal: ",total);
 console.log("\nAverage: ",avg);
 if(avg>=60){
    console.log("\nGrade : A");
}
else if((avg>=50)&&(avg<60)){
    console.log("\nGrade : B");
}
else if((avg>=40)&&(avg<50)){
    console.log("\nGrade : C");
}
else{
    console.log("\nGrade : F");
 }