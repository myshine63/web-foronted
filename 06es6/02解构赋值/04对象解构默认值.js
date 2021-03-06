/*对象解构赋值默认值都是等号*/
{
    let {a = 1, b} = {b: 2};//a=1,b=2
    let {a: c = 1, d = 2} = {a: 3, d: 4};//c=3,d=4;
}
/*null可以作为变量值,undefined不可以*/
{
    let {a = 1, b = 2} = {a: null, b: undefined};//a=null,b=2;
}
/*解构赋值时,如果左边模式的值是一个对象,右边找不奥模式与之匹配,则会报错*/
{
    let {a: b} = {c: 1};//不会报错,b=undefined;
    let {e: {f}} = {c: 1};//报错,因为模式e的值是对象
}
