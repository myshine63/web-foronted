//1.定义的简单常量不能改变
const pi = 3.14;
//2.定义的对象常量，不能赋值成别的对象，但是可以改变对象的属性
const foo = {name: "xiaowang", age: 24};
foo.name = "xiaobai";//不会报错
// foo={};//会报错
/*完全冻结一个常量*/
const obj = Object.freeze({});
