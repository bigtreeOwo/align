// 导入express库
var express=require("express");
var app=express();
app.use(express.static(__dirname + "/src"));

// 使用9090端口创建nodejs服务器
app.listen(9090,()=>{
	console.log("服务器启动成功！请查看浏览器");
})
