define(function(require,exports,module){
	//引入add.js模块
	var obj=require("./add.js");
	//将方法暴露
	exports.add=obj.add;
});