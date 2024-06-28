// const reg = /(\w+) \(\s* (\w+) \s*\)/
const reg = /(\w+)\(\s*(\w*\.?\w*)\s*\)/
const str = 'scale( 1.2 )';

console.log(reg.test(str));
console.log(str.match(reg));

const str1 = 'rotate(90deg)';
console.log(str1.match(reg));

const str3 = 'translateX(100px)';
console.log(str3.match(reg));
