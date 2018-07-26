const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //清理 /dist 文件夹
        new HtmlWebpackPlugin({ //简化HTML文件的创建，以便为您的webpack包提供服务
            title: 'Development'
        }),
        new webpack.NamedModulesPlugin(), //当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
        new webpack.HotModuleReplacementPlugin() //此插件将导致散列基于模块的相对路径，生成四个字符的字符串作为模块ID。建议用于生产。
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: "production" //通过 "mode" 配置选项轻松切换到压缩输出
};