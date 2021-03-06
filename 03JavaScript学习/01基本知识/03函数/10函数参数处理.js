//函数是值传递，当传入的参数是基础变量时，不会变传入参数的值。
let age = 14;//定义一个变量
function f(age) {
  age++
}

f(age);//14

//当传入的变量时一个对象时，可以改变对象的属性，但是不会把改对象变量指向别的变量
let obj = {name: 'tom', age: 24};

function person(obj) {
  obj.name = 'jerry';
  obj.age = 24;
  obj = {//试图让obj指向别的对象，但是不会生效
    name: 'bob',
    age: 15
  }
}

person(obj);
console.log(obj);//{name: "jerry", age: 24}
