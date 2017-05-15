var path=require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	//entry webpack打包的入口
    entry:'./src/app.js',
    output:{
    	filename:'js/[name].bundle.js',
        path:path.join(__dirname,'./dist')//两杠的dirname
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:[
                 path.resolve(__dirname, './node_modules/'),
                ],  //打包排除的范围
                include:[
                 path.resolve(__dirname, './src/'),
                ],
                query:{
                    presets:['env']
                }
            }
        ]
    },
    plugins:[
    	new htmlWebpackPlugin({
    		filename:'index.html',//声明文件的名称
    		template:'index.html',
    		inject:'body'//指定脚本所放的位置
    	})
    ]
}