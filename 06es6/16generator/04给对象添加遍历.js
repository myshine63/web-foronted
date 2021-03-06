/*遍历对象属性方法1*/
function* o(obj) {
    let props = Reflect.ownKeys(obj);
    for (let i of props) {
        yield [i, obj[i]];
    }
}

let obj = {name: 'tom', age: 15};
for (let [prop, value] of o(obj)) {
    console.log('prop:' + prop, 'value:' + value);
}

/*给对象添加遍历器函数*/
function* f2() {
    let props = Object.ownkeys(this);
    for (let prop of props) {
        yield [prop, this[prop]];
    }
}

let obj1 = {name: 'tom', age: 15};
obj1[Symbol.iterator] = f2;
for (let [prop, value] of o(obj)) {
    console.log('prop:' + prop, 'value:' + value);
}
