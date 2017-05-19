//定义了一些文件夹的路径
var path=require('path');
var running="demo-04";
var __path={
	ENTRY: path.resolve(__dirname, 'app/'+running+'/index.js'),
	APP: path.resolve(__dirname, 'app/'),
	COMPONENT : path.resolve(__dirname, 'app/'+running+'/components/'),
	BUILD : path.resolve(__dirname, 'client/dist/'),
	OUTPUT_NAME:"bundle.js",
	PUBLIC:"/"
}

module.exports=__path;