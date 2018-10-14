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
})