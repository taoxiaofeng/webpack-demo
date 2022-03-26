require(['./requirejs/add.js', './requirejs/minus.js'],function(add, minus) {
  // 调用引用模块的方法
  console.log(add(4,5));
  console.log(minus(10,5));
})