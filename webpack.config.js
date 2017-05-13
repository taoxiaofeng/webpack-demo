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
module.exports={
	//entry webpack打包的入口
    entry:{
        // bundle:['./src/script/main.js','./src/script/a.js'] //平行的互相依赖的文件打包到一起
        main:'./src/script/main.js',
        a:'./src/script/a.js'
    },
    output:{
        path:path.join(__dirname,'./dist/js'),
//两杠的dirname
        filename:'[name].js'
    }
}