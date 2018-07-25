var path = require('path');
// var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //entry webpack打包的入口
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') //两杠的dirname
    }
}