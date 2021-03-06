/*in运算,判断某个对象是否还有某个属性*/
let ob = {
  name: 'tom',
  age: 14,
  say() {
    console.log('hello word')
  }
};
console.log('name' in ob);  //true
/*has方法拦截属性是否是对象内部属性,改拦截子对in运算符有用*/
let obj = {
  name: 'tom',
  _age: 15
};
let proxy = new Proxy(obj, {
  has(target, key) {
    if (key.startsWith("_")) {
      return false;
    } else
      return key in target;
  }
});
console.log('name' in proxy);//true
console.log('_age' in proxy);//false
