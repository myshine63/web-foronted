//标准形式
let a = (a, b) => {
  console.log(a, b)
};
//当只有一参数时,可以省略括号
let b = a => {
  console.log(a)
};
//当没有参数时
let c = () => {
  console.log('hello word');
};
//当只有一个返回语句时,可以省略大括号和return
let d = a => a;//相当于function(a){return a};
