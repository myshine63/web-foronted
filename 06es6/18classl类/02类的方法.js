/*类的方法都是定义在类的原型上的*/
class Person {
  constructor(name, age) {
    this.name = name;//类的实例属性,
    this.age = age;
  }

  getName() {//方法添加在类的原型上
    console.log(this.name);
  }
}

/*给定义好的类增加方法*/
//方法1
Person.prototype.getAge = function () {
  console.log(this.age);
};
//方法2
Object.assign(Person.prototype, {
  a() {
    console.log('hello word')
  }
});
let p = new Person('tom', 14);
p.getName();
p.getAge();
p.a();
