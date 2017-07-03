define(function(require,exports,module){
	var add=function(){
		var v1=document.querySelector("#key1").value;
		var v2=document.querySelector("#key2").value;
		return (v2-0)+(v1-0);
	}
	exports.add=add;
})