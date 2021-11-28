const prompt =require("prompt-sync")();
let n = parseInt(prompt("Enter Number: "))
let rem;
let string='';
while(n>0){
    rem=n%10;
    switch(rem){
        case 0 :
            string+="Zero";
            break;
        case 1 : 
            string+="One";
            break;
        case 2 : 
            string+="Two";
            break;
        case 3 : 
            string+="Three";
            break;
        case 4 : 
            string+="Four";
            break;
        case 5 : 
            string+="Five";
            break;
        case 6 : 
            string+="Six";
            break;
        case 7 : 
            string+="Seven ";
            break;
        case 8 : 
            string+="Eigth ";
            break;
        case 9 : 
            string+="Nine ";
            break;
    }
    n=parseInt(n/10);
}
// let str=string.reverse()
console.log(str);

