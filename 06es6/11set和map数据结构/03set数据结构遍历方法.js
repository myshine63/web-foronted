/*
*keys()：返回键名的遍历器对象
*values()：返回键值的遍历器对象
*entries()：返回键值对的遍历器对象
*forEach()：使用回调函数遍历每个成员
*/
/*keys方法、values方法、entries方法返回的都是遍历器对象。
*由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），
所以keys方法和values方法的行为完全一致。*/
let set = new Set(["red", "blue", 1, 2, 3]);
for (let item of set.keys()) {
    console.log(item);
}
for (let item of set.values()) {
    console.log(item);
}
for (let item of set.entries()) {
    console.log(item);
}
for (let item of set) {
    console.log(item);
}
console.log(set.keys());
console.log(set.values());
console.log(Array.from(set.keys()))//转换成真正数组.
