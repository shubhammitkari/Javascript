let string;
for (let i = 1; i <= 80; i++) {
    string+=("*");
}
for (let i = 2; i <= 23; i++) {
    string+=("*");

    for (let j = 2; j <= 79; j++) {
        string+=(" ");
    }
    string+=("*");
}
for (let i = 1; i <= 80; i++) {
    string+=("*");
}
console.log(string);