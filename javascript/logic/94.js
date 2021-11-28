let flag=0;
function validatePalin(str) {  
    const len = string.length;  
    
    for (let i = 0; i < len / 2; i++) {  
  
        if (string[i] !== string[len - 1 - i]) {  
              flag=1;
        }  
    }
    if(flag==1){
        console.log( 'It is not a palindrome');
    }else{
        console.log( 'It is a palindrome');
    }    
} 

const prompt=require("prompt-sync")(); 
const string = prompt('Enter a string or number: ');  
validatePalin(string);
