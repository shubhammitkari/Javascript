const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter First Number: "));
let fact;
let str = '';
function facto(n) {
    fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(`Factorial of ${n} is ${fact}`);
}
function isPrime(n) {
    let flag=0;
    for (let i = 2; i <=n/2;i++) {
        if (n % 2 == 0) {
            flag=1;
        }
    }
    if(flag==1){
        console.log(`${n} is not prime number`)
    }else{
        console.log(`${n} is prime number`)
    } 
}

function fib(n){
    let pre=0,cur=1,temp;
    for(let i=1;i<=n;i++){
        temp=cur;
        cur=pre+cur;
        pre=temp;
        console.log("Fibbonacci Series: ");
        console.log(cur);
    } 
}

facto(n);
isPrime(n);
fib(n);
