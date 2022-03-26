// 模块1 add.js
const add = (x, y) => {
  return x + y;
}

define([], function() {
  return add;
})