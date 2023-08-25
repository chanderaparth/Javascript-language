let str1 = '20';

console.log(str1.padStart(5, '0'));


const fullname = 'parth';
const last4Digits = fullname.slice(5);
const maskedNumber = last4Digits.padStart(fullname.length, '*');

console.log(maskedNumber);