let enterNumber = Number(prompt("enter is a need print number:"));
let cout = 0;
let number = 2;
let result = [];
function outputPrime() {
    while (cout < enterNumber) {
        if (checkIsprime(number)) {
            result.push(number);
            cout++;
        }
        number++;
    }
}
outputPrime();
document.write(result);