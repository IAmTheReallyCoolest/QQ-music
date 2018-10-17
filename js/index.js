$(function () {
	$dwlid = $('#nav ol li');
	//固定定位
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$dwlid.eq(0).show();
		} else {
			$dwlid.eq(0).hide();
		}
	});
	//第一个轮播图效果
	$("#banner").mouseenter(function () {
		$("#banner .anniul").stop().animate({
			left: -75
		}, 400)
	});
	$("#banner").mouseenter(function () {
		$("#banner .anniur").stop().animate({
			right: -75
		}, 400)
	})
	$("#banner").mouseleave(function () {
		$("#banner .anniul").stop().animate({
			left: -143
		}, 400)
	})
	$("#banner").mouseleave(function () {
		$("#banner .anniur").stop().animate({
			right: -143
		}, 400)
	})
	//移入和移出banner 左侧  按钮的动画
	$("#banner .anniul").mouseenter(function () {
		$(this).stop().animate({
			width: 80
		}, 400).css("backgroundColor", "#31c27c");
	})
	$("#banner .anniul").mouseleave(function () {
		$(this).stop().animate({
			width: 68
		}, 400).css("backgroundColor", "rgba(255, 255, 255, 0.2)")
	})
	//移入和移出banner右侧 按钮的动画
	$("#banner .anniur").mouseenter(function () {
		$(this).stop().animate({
			width: 80
		}, 400).css("backgroundColor", "#31c27c")
	})
	$("#banner .anniur").mouseleave(function () {
		$(this).stop().animate({
			width: 68
		}, 400).css("backgroundColor", "rgba(255, 255, 255, 0.2)")

	})
	// 点击banner 右侧按钮的事件
	//获取keshi1的ul
	var $ul1 = $("#banner .xia ul");
	var $ol1 = $("#banner .xia ol");
	var $ol1li = $("#banner .xia ol li");
	$ol1li.eq(0).css("backgroundColr", "#fff");
	var num = 0;
	$("#banner .anniur").click(function () {
		if (num > 3) {
			$ul1.css("left", 0);
			num = 0;
		};
		count = num;
		num++;
		$ul1.animate({
			left: -num * 1200
		}, 200)
		$ol1li.eq(num == 4 ? 0 : num).css("background", "#fff").siblings().css("backgroundColor", "#6c6c6c");
	})
	//点击banner 左侧按钮的事件
	$("#banner .anniul").click(function () {
		if (num <= 0) {
			$ul1.css("left", -4800);
			num = 4;
		};
		count = num;
		num--;
		$ul1.animate({
			left: -num * 1200
		}, 200)
		$ol1li.eq(num == 4 ? 0 : num).css("backgroundColor", "#fff").siblings().css("backgroundColor", "#6c6c6c");
	})
	var count;
	$ol1li.click(function () {
		$(this).css("backgroundColor", "#fff").siblings().css("backgroundColor", "#6c6c6c");
		count = $(this).index();
		num = count;
		$ul1.animate({
			left: -count * 1200
		}, 200)
	})
	//移入banner的li事件
	var num1;
	var $pic1 = $("#banner .keshi1 .pic1");
	var $lis = $("#banner .keshi1 li");
	var $imgxia = $("#banner .keshi1 .imgxia");
	var $bofang = $("#banner .keshi1 .bofang");

	$lis.mouseenter(function () {
		num1 = $(this).index();
		$pic1.eq(num1).stop().css("opacity", 0.9).animate({
			width: 320,
			height: 320,
			left: -10,
			top: -10
		}, 200)
		$imgxia.eq(num1).css("backgroundColor", "#31c27c");
		$bofang.eq(num1).stop().fadeIn(200);
	})
	//----移出banner的li事件
	$lis.mouseleave(function () {
		num1 = $(this).index();
		$bofang.stop().eq(num1).fadeOut(200);
		$pic1.eq(num1).stop().css("opacity", 1).animate({
			width: 300,
			height: 300,
			left: 0,
			top: 0
		}, 200)
		$imgxia.eq(num1).css("backgroundColor", "rgba(0,0,0,0.7)");
		$bofang.eq(num1).stop().fadeOut(200);
	})
});

//精彩推荐
//移入jingcai后两次按钮的动画
$("#jingCai").mouseenter(function () {
	$("#jingCai .anniul").stop().animate({
		left: -75
	}, 400)
});
$("#jingCai").mouseenter(function () {
	$("#jingCai .anniur").stop().animate({
		right: -75
	}, 400)
});
$("#jingCai").mouseleave(function () {
	$("#jingCai .anniul").stop().animate({
		left: -143
	}, 400)
});
$("#jingCai").mouseleave(function () {
	$("#jingCai .anniur").stop().animate({
		right: -143
	}, 400)
})

//---------移入和移出jingCai  左侧  按钮的动画
$("#jingCai .anniul").mouseenter(function () {
	$(this).stop().animate({
		width: 80
	}, 400).css("backgroundColor", "#31c27c");
})
$("#jingCai .anniul").mouseleave(function () {
	$(this).stop().animate({
		width: 68
	}, 400).css("backgroundColor", "rgba(0, 0, 0, 0.2)");
})
//---------移入和移出banner  右侧  按钮的动画
$("#jingCai .anniur").mouseenter(function () {
	$(this).stop().animate({
		width: 80
	}, 400).css("backgroundColor", "#31c27c");
})
$("#jingCai .anniur").mouseleave(function () {
	$(this).stop().animate({
		width: 68
	}, 400).css("backgroundColor", "rgba(0, 0, 0, 0.2)");
})

//标注了每个图片要运动到的位置
var config = [

	{
		width: 751,
		height: 300,
		top: 0,
		left: 224,
		opacity: 1,
		zIndex: 4
        }, //2
	{
		width: 608,
		height: 244,
		top: 28,
		left: 592,
		opacity: 0.9,
		zIndex: 3
        }, //3
	{
		width: 608,
		height: 244,
		top: 28,
		left: 816,
		opacity: 0,
		zIndex: 3
        }, //4
	{
		width: 608,
		height: 244,
		top: 28,
		left: 816,
		opacity: 0,
		zIndex: 3
        },
	{
		width: 608,
		height: 244,
		top: 28,
		left: -224,
		opacity: 0,
		zIndex: 3
        }, //0
	{
		width: 608,
		height: 244,
		top: 28,
		left: -224,
		opacity: 0,
		zIndex: 3
        }, //0
	{
		width: 608,
		height: 244,
		top: 28,
		left: 0,
		opacity: 0.9,
		zIndex: 3
        }, //1

]; 
console.log(config.length);
//config其实就是一个配置单 规定了每张图片的大小位置层级透明度

	//1获取元素
	var anniuLeft = $("#jingCai .anniuil")[0];
	var anniuRight = $("#jingCai .anniur")[0];
	var jcbox=document.getElementById("jcbox");
    var slide=jcbox.children[0];//可视区
	var list = slide.children[0]; //要运动的ul
	var lis = list.children; //要运动的li
	//2设置每个li的默认显示区域
	changPos();
	var flag=true;//节流阀的开关，值为true表示可以执行
	//设置五个标签的自定义属性值
	for(var i =0;i<lis.length;i++){
		lis[i].flag=true;
	}
	
	//右键点击操作
	anniuLeft.onclick=function(){
		if(flag){
			//点击按钮后，只能执行一次效果，采用变量控制的方式
			flag=false;
			for(var i=0;i<lis.length;i++){
				lis[i].flag=false;
			}
			//将数组config中的第一个元素删除掉，并添加到config的最后
			config.push(config.shift());
			//根据config中的新位置重新设置li的运动
			changePos();
		}
	};

	function changePos(){
		for(var i=0;i<config.length;i++){
			animate(lis[i],config[i],function(){
				//此处可以保证运动执行完毕
				//由于此效果中每个原色的运动位置相近，所以再设置时进行简单的判断即可，不用进行精确的判断方式
				flag=true;
			});
		
		}
	}

	function animate(element,datas,fn){
		clearInterval(element.timer);
		element.timer=setInterval(function(){
			//1 设置假设条件：假设本轮定时器执行后可以进行清除
			var flag=true;
			//先对获取到的数据进行遍历，对每一组数据进行相同操作即可
			for(var k in datas){
				//针对透明度和层级进行单独处理
				if(k=="opacity"){
					var styleName=k;
					var target=datas[k]*100;
					//opacity是c3属性，使用getstyle获取后不会出现“auto”
					//js中的小鼠进行加减计算会出现精度问题
					var current =getStyle(element,styleName)*100;
					var step=(target-current)/10;
					step=step>0? Math.ceil(step):Math.floor(step);
					current=current+step;
					//设置透明度时，除以设置过的对应倍数
					element.style[styleName]=current/100;
					
					if(current!=target){
						flag=false;
					}
				}else if(k=="zIndex"){
					//层级为整数值，所以不需要设置运动效果，直接设置为指定值即可
					element.style.zIndex=datas[k];
				}else{
					//styleName实际上是k
					//target:实际上是obj[k]
					var styleName=k;
					var target=datas[k];
					//下面这段代码可以让某一个样式运动到指定的位置
					var current=parseInt(getStyle(element,styleName))||0;
					var step=(target-current)/10;
					step=step>0?Math.ceil(step):Math.floor(step);
					current=current+step;
					element.style[styleName]=current+"px";
					//此位置原来是书写清除定时器的代码位置，但是某个样式运动完毕并不能进行清除，其他样式可能没到，使用假设成立法解决
                    //2 找到假设失败的条件：如果某个样式运动时没有到达指定位置，阻止清除
					if(current!=target){
						flag=false;
					}
				}
			}
			//需要整体检测，只有每个样式都达到了指定位置才可以设置清除
			//3验证flag的值
			if(flag){
				clearInterval(element.timer);
				if(typeof fn=="function"){
					fn();
				}
				
			}
		},5);
	}





















