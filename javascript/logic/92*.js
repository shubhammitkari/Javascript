const prompt=require("prompt-sync")();
var s=prompt("Enter first string: ");
let vowel=0;
for(let i=0;s.length;i++){
    // if((s[i]=='A')||(s[i]=='a') && (s[i]=='E')||(s[i]=='e') && (s[i]=='I')||(s[i]=='i') 
    // && (s[i]=='O')||(s[i]=='o') && (s[i]=='U')||(s[i]=='u')){
    //     vowel++;
    // }  
    if((s[i]=='A')||(s[i]=='a')){
        vowel++;
    }   
}
console.log("vowels",vowel);
