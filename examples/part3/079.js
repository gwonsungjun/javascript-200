const str = '12345678';

const distributeedArr = Array.from(str);
console.log(distributeedArr);

const modifiedArr = Array.from(distributeedArr, e1 => e1 * 2);
console.log(modifiedArr);