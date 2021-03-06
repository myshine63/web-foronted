/*对象的解构赋值生成对象,只对可遍历属性起作用.注意:1.解构赋值是浅复制 2.c必须放在最后*/
let {a, b, ...c} = {a: 1, b: 2, c: 3, d: 4};
console.log(a, b, c);//1,2,c={c:3,d:4};
/*obj=Object.create(proto),相当于obj继承了proto的属性,方法
* 扩展运算不会复制继承的属性*/
let obj = Object.create({a: 1, b: 2});
console.log(obj);//{},__proto__={a:1,b:2}
obj.c = 3;//给对象添加自身属性
let {...d} = obj;
console.log(d);//{c:3},
