$.fn.extend({
	tmp:function(){
		// 由于 该方法 是由 瀑布流容器进行调用 那么 this就是那个容器
		var $_this = this;
		
		// 瀑布流 步骤1
		/*
		 	获取一些必须知道的数据
		 * */
		// 总宽度
		// var totalWidth = $_this.width();
		var totalWidth = 344;

		// 元素的宽度 子元素 瀑布流布局容器内部的元素
		var eachWidth =$_this.children('.list').width();
		// var eachWidth =80 ;

		// 列数
		// var colNum = Math.floor(totalWidth / eachWidth);
		var colNum=3;

		// 间隙 舍去的小数位 作为 间隙 4.5
		// var margin = (totalWidth - colNum * eachWidth) / (colNum + 1);

		// 高度数组 元素的个数是几个?
		var heightArr = [];
		for(var i = 0; i < colNum; i++) {
			heightArr[i] = margin;
		}


		//		------------------------
		// 瀑布流 步骤02
		/*
		 	循环子元素 设置布局
		 * */
		var $waterFallChildren = $_this.children('.item');
		// var $waterFallChildren =350;

		// 循环子元素
		// 形参1 索引
		// 形参2 dom元素
		$waterFallChildren.each(function(index, element) {

			// 1. 找到 高度数组的最小值
			// 假设的最小索引值
			var minIndex = 0;
			// 假设的 最小 高度值
			var minHeight = heightArr[minIndex];

			for(var i = 0; i < heightArr.length; i++) {
				// 比小
				if(heightArr[i] < minHeight) {
					// 替换
					minIndex = i;
					minHeight = heightArr[i];
				}
			}

			// 2.设置位置
			// 找到 当前循环的div		
			// 通过.css方法 设置 left 跟top =miniHeight
			// left的规律 left:margin+(margin+width)*计算出来的最小索引值
			$(element).css({
				left: margin + (margin + eachWidth) * minIndex,
				top: minHeight
			});

			// 3.修改高度数组 修改哪一个索引?
			// // 获取原始值
			// var oldHeight = heightArr[minIndex];

			// // 将当前元素高度添加
			// oldHeight += $(element).height();

			// // 为了美观添加margin
			// oldHeight += margin;

			// // 赋值回数组
			// heightArr[minIndex] = oldHeight;

		})

		}
	
})