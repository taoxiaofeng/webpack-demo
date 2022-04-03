const path = require('path');

// 解决打包生成的文件自动引入资源，需要引入插件
const HtmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'), // __dirname:获取到配置文件所在的物理路径, 基于这个路径找到 “./dist”;
    clean: true, // 在生成文件之前清空 output 目录
    assetModuleFilename: 'images/[contenthash][ext]', // 自定义输出文件名
  },

  // 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。string = 'production': 'none' | 'development' | 'production'
  mode: "development",
  devtool: "inline-source-map", // 此选项控制是否生成，以及如何生成 source map。  


  // 引入插件
  plugins: [
    // 插件需要使用，必须实例化一下
    new HtmlWebpackPlugins({
      template: "./src/index.html", // 配置模板加载器
      filename: "app.html", // 配置打包完成的模板文件名称
      inject: "body",  // 配置JavaScript资源放的位置
    })
  ],

  // 通过 webpack-dev-server 的这些配置，能够以多种方式改变其行为
  devServer: {
    static: './dist'
  },

  // 处理项目中不同类型的模块
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: { // 自定义输出文件名 (生成资源路径与文件名)
          filename: 'images/[contenthash][ext]'
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',  // 所有 .svg 文件都将作为 data URI 注入到 bundle 中。
      },
      {
        test: /\.txt$/,
        type: 'asset/source',  // ‘asset/source’类型用于导出资源的源代码， 所有 .txt 文件将原样注入到 bundle 中
      }
    ]
  },
};