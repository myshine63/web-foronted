/*扩展运算可以把类似于数组的解构，变成真正的字符串*/

/*把dom对象转变成数组*/
var divs=document.getElementsByTagName('div');//divs只是类似于数组，但不是数组
let divarr=[...divs];//转变成数组
console.log(divs);
console.log(divarr);

/*把类似于数组的转换成数组*/
let arrayLike = {
'0': 'a',
'1': 'b',
'2': 'c',
length: 3
};
// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
