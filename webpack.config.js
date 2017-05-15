// module.exports = {
// 	entry: ["./src/script/main.js","./src/script/a.js"] //入口文件
// 	output: {
// 		// path:__dirname+'/dist/js',
// 		// filename:'bundle.js'
// 		filename:'[name].bundle.js',
// 		chunkFilename: "[id].bundle.js"
// 	}
// }
var path=require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	//entry webpack打包的入口
    entry:{
        // bundle:['./src/script/main.js','./src/script/a.js'] //平行的互相依赖的文件打包到一起
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },
    output:{
    	filename:'js/[name]-[hash].js',
        path:path.join(__dirname,'./dist'),//两杠的dirname
        publicPath: 'http://cdn.com'//上线发布地址
    },
    plugins:[
    	new htmlWebpackPlugin({
    		filename:'a.html',//声明文件的名称
    		template:'index.html',
    		inject:false,//指定脚本所放的位置
    		title:'webpack is a.html',
            excludeChunks:['b','c']
    	}),
        new htmlWebpackPlugin({
            filename:'b.html',//声明文件的名称
            template:'index.html',
            inject:false,//指定脚本所放的位置
            title:'webpack is b.html',
            excludeChunks:['a','c']
        }),
        new htmlWebpackPlugin({
            filename:'c.html',//声明文件的名称
            template:'index.html',
            inject:false,//指定脚本所放的位置
            title:'webpack is c.html',
            excludeChunks:['a','b']
        })
    ]
}