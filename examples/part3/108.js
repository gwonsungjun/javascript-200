const bin = 1000010011
const oct = 1023
const hex = 213

const dexByBin = parseInt(bin, 2);
const dexByOct = parseInt(oct, 8);
const dexByHex = parseInt(hex, 16);
const hexByOct = parseInt(oct, 8).toString(16);

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByHex);
console.log(hexByOct);