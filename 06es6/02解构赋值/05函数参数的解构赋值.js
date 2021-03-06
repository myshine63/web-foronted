/*参数为数组的解构赋值*/
function f([x, y]) {
    console.log(x, y);
}

f([1, 2, 3]);//1,2
f([1, 2]);//1,2
f([1]);//1,undefined
f([]);//undefined,undefined
// f();报错,必须要传入一个数组
console.log('.......');

function f1([x = 0, y = 0]) {
    console.log(x, y)
}

f1([1, 2, 3]);//1,2
f1([1, 2]);//1,2
f1([1]);//1,0
f1([]);//0,0
console.log('.......');

// f1();报错必须传入一个参数
function f2([x, y] = [0, 0]) {
    console.log(x, y);
}

f2([1, 2, 3]);//1,2
f2([1, 2]);//1,2
f2([1]);//1 undefined
f2([]);//undefined undefined
f2();//0,0 不会报错
