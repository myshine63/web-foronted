/*复制对象,注意这是浅复制*/
let a = {a: 1, b: 2, c: {name: 'tom'}};
let b = {...a};//a和b共享c属性
/*完全克隆对象,还需要复制对象的继承属性*/
let obj = Object.create({a: 1, b: 2});
obj.c = 3;
let clone = {...obj};//浅复制
console.log(clone);//{c:3}
let deepclone = Object.assign({}, Object.getPrototypeOf(obj), obj);//复制对象所有属性,包括继承的属性
console.log(deepclone);//{a:1,b:2,c:3};
let allclone = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);//复制完全相同的对象
console.log(allclone);//{c:3},__proto__={a:1,b:2};
//自定义属性放在最后可以覆盖赋值的属性,
let obj1 = {...a, a: 5, b: 6};//{a:5,b:6,name:'tom'};
