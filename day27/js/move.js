var move = (function() {
	//tween方法
	var str = "全局变量";
	console.log(Tween);
	//返回闭包函数名
	return function(objEle, pro, t, b, c, d, success) {
		clearInterval(objEle.timerID);

		objEle.timerID = setInterval(function() {
			//时间累加，如果累加不能等于d，会超出最终位置
			t += 3;
			//只有Linear()可以直接调用:
			var value = Tween.Linear(t, b, c, d);
			console.log(value);
			//判断是否要加单位
			var _value = pro === "opacity" ? "" : "px";
			objEle.style[pro] = value + _value;
			//判断是否加到了d
			if(t >= d) {
				clearInterval(objEle.timerID);
				//防止超出:设置最终的位置:开始位置+变化量
				objEle.style[pro] = b + c + _value;
				//动画完成
				success ? success() : null;
			}
		}, 20);
	}
	//匿名函数自身调用结束
})();