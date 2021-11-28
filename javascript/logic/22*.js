let x,r1,r2,a=2,b=3,c=5;

x=b*b-4*a*c;
r1=(-b+x)/2*a;
r2=(-b-x)/2*a;
if(x>0){
    console.log("\nRoots are unequal...\n");
}else if(x<0){
    console.log("\nRoots are imaginary...\n");
}else{
    console.log("\nRoots are same....\n");
}    
console.log("R1 =",r1);
console.log("R2 =",r2);