$(function(){
	$dwlid=$('#nav ol li');
	//固定定位
	$(window).scroll(function(){
		if($(this).scrollTop()>150){
			$dwlid.eq(0).show();
		}
		else{
			$dwlid.eq(0).hide();
		}
	});
	//第一个轮播图效果
	$("#banner").mouseenter(function(){
		$("#banner .anniul").stop().animate({left:-75},400)
	});
	$("#banner").mouseenter(function(){
		$("#banner .anniur").stop().animate({right:-75},400)
	})
	$("#banner").mouseleave(function(){
		$("#banner .anniul").stop().animate({left:-143},400)
	})
	$("#banner").mouseleave(function(){
		$("#banner .anniur").stop().animate({right:-143},400)
	})
	//移入和移出banner 左侧  按钮的动画
	$("#banner .anniul").mouseenter(function(){
		$(this).stop().animate({width:80},400).css("backgroundColor","#31c27c");
	})
	$("#banner .anniul").mouseleave(function(){
		$(this).stop().animate({width:68},400).css("backgroundColor","rgba(255, 255, 255, 0.2)")
	})
	//移入和移出banner右侧 按钮的动画
	$("#banner .anniur").mouseenter(function(){
		$(this).stop().animate({width:80},400).css("backgroundColor","#31c27c")
	})
	$("#banner .anniur").mouseleave(function(){
		$(this).stop().animate({width:68},400).css("backgroundColor","rgba(255, 255, 255, 0.2)")
		
	})
	// 点击banner 右侧按钮的事件
	//获取keshi1的ul
	var $ul1=$("#banner .xia ul");
	var $ol1=$("#banner .xia ol");
	var $ol1li=$("#banner .xia ol li");
	$ol1li.eq(0).css("backgroundColr","#fff");
	var num=0;
	$("#banner .anniur").click(function(){
		if(num>3){
			$ul1.css("left",0);
			num=0;
		};
		count=num;
		num++;
		
	})
});

















