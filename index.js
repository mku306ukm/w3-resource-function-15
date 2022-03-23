//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function computePower(num, exponent) {
    var result = 1;
    for (i = 0; i < exponent; i++) {
    result *= num;
    }
    return result;
} 
console.log(computePower(5, 3));

