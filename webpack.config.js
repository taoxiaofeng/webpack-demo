const path  = require('path');

module.exports = {
  entry: "./src/index.js",
  output:{
    filename:'bundle.js',
    path: path.resolve(__dirname, './dist'), // __dirname:获取到配置文件所在的物理路径, 基于这个路径找到 “./dist”;
  },
  mode:"none",
};