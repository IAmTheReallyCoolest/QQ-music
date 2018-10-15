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
		$ul1.animate({left:-num*1200},200)
		$ol1li.eq(num==4?0:num).css("background","#fff").siblings().css("backgroundColor","#6c6c6c");
	})
	//点击banner 左侧按钮的事件
	$("#banner .anniul").click(function(){
		if(num<=0){
			$ul1.css("left",-4800);
			num=4;
		};
		count=num;
		num--;
		$ul1.animate({left:-num*1200},200)
		$ol1li.eq(num==4?0:num).css("backgroundColor","#fff").siblings().css("backgroundColor","#6c6c6c");
	})
	var count;
	$ol1li.click(function(){
		$(this).css("backgroundColor","#fff").siblings().css("backgroundColor","#6c6c6c");
		count=$(this).index();
		num=count;
		$ul1.animate({left:-count*1200},200)
	})
	//移入banner的li事件
	var num1;
	var $pic1=$("#banner .keshi1 .pic1");
	var $lis=$("#banner .keshi1 li");
	var $imgxia=$("#banner .keshi1 .imgxia");
	var $bofang=$("#banner .keshi1 .bofang");
	
	$lis.mouseenter(function(){
		num1=$(this).index();
		$pic1.eq(num1).stop().css("opacity",0.9).animate({
			width:320,
			height:320,
			left:-10,
			top:-10
		},200)
		$imgxia.eq(num1).css("backgroundColor","#31c27c");
		$bofang.eq(num1).stop().fadeIn(200);
	})
	//----移出banner的li事件
	$lis.mouseleave(function(){
		num1=$(this).index();
		$bofang.stop().eq(num1).fadeOut(200);
		$pic1.eq(num1).stop().css("opacity",1).animate({
			width:300,
			height:300,
			left:0,
			top:0
		},200)
		$imgxia.eq(num1).css("backgroundColor","rgba(0,0,0,0.7)");
		$bofang.eq(num1).stop().fadeOut(200);
	})
});

















