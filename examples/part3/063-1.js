function verifyinteger(n) {
    if(!Number.isInteger(n)) return 0;
    return n;
}
const num1 = verifyinteger(15);
const num2 = verifyinteger(Infinity);
const num3 = verifyinteger(0.05);
console.log(num1, num2, num3);