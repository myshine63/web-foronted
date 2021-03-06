console.log(Number(123));//123
console.log(Number("0b10"));//2
console.log(Number(0b10));//2
console.log(Number("0o10"));//8
console.log(Number("0x10"));//16
console.log(Number("010"));//10
console.log(Number("123"));//123
console.log(Number("123.00"));//123
console.log(Number("123.5"));//123.5
console.log(Number(""));//0
console.log(Number(null));//0
console.log(Number("x123"));//nan
console.log(Number("aaa"));//nan
console.log(Number("123x"));//nan
console.log(Number("null"));//nan
console.log(Number(undefined));//NaN
console.log(Number("undefined"));//NaN

let a = 5 / 3;
console.log(a);
console.log(Number.isFinite(a));
console.log(Number.isNaN(a));
console.log(Number.isInteger(a));
console.log(a.toFixed(2));// 保留2位小数
console.log(a.toPrecision(2)); // 2位有效数字；
console.log(a.toString(16));
