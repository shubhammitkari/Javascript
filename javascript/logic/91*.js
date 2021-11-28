const prompt = require("prompt-sync")();
var str1 = (prompt("Enter first string: "));
var str2 = prompt("Enter second string: ");

// let result=str1.localeCompare(str2);

// if(str1>str2){
//     console.log("String one is greater")
// }else{
//     console.log("String second is greater")
// }
let flag = 0;
for (let i = 0; str1.length; i++) {
    if (str1[i] != str2[i]) {
        if (str1[i] > str2[i]) {
            flag = 1;
            //     console.log("String one is greater")
            // }else{
            //     console.log("String second is greater")
            // }
        }
        if (flag == 1) {
            console.log("String one is greater");
        } else {
            console.log("String second is greater");
        }

    }   
}
console.log("String are equal");


