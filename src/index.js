module.exports = function reverse (n) {
let num;
if ( n < 0 ) {
    num = Math.abs(n)
} else { 
    num = n;
}
let str = num.toString();
let newStr = '';
for (let i = str.length-1; i >= 0; i--)
{
    newStr = newStr + str[i];
}
return Number(newStr);
}
