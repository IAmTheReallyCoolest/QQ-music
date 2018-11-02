//树叶飘落
window.onload = function () {
	var leafScene = function (el) {
		this.viewport = el;
		this.world = document.createElement('div');
		this.leaves = [];
		this.options = {
			numLeaves: 20,
			wind: {
				magnitude: 1.2,
				maxSpeed: 12,
				duration: 300,
				start: 0,
				speed: 0
			},

		};
		this.width = this.viewport.offsetWidth;
		this.height = this.viewport.offsetHeight;
		//animation helper
		this.timer = 0;
		this._resetLeaf = function (leaf) {

		}
	}
}



$(function () {
	//-----top头部导航 start
	//-----top头部导航end
	//-----电梯按钮 start----
	var eleColor = ["#fae901", "#fb2292", "#4df5be", "#56f900", "#df0df9"]
	for (var i = 0; i < eleColor.length; i++) {
		$("#elevator .eleDot li").eq(i).css({
			backgroundColor: eleColor[i],
			boxShadow: "1px 1px 10px" + eleColor[i] + ", -1px -1px 10px" + eleColor[i]
		});
		$("#elevator .eletitle li").eq(i).css({
			backgroundColor: eleColor[i],
			boxShadow: "1px 1px 5px " + eleColor[i] + ", -1px -1px 5px" + eleColor[i]
		});
	}
	$(window).scroll(function () {
		var $elevator = $("#elevator");
		var minHeight = $("#top").height() + $("#banner").height() - 150;
		var maxHeight = $("#top").height() + $("#banner").height() + $("#main").height() - 350;
		if ($(this).scrollTop() > minHeight && $(this).scrollTop() < maxHeight) {
			//设置导航盒子定位
			$elevator.css({
				display: "block",
				position: "fixed"
			});
		} else {
			$elevator.css("display", "none");

		}
	})
	 $("#elevator .eletitle li").css("width", 0);
    $("#elevator .eleDot span").mouseenter(function () {
        var index = $(this).index;
        $("#elevator .eletitle li").eq(index).css({display: "block"}).animate({width: "70px"});
});


//banner 横幅
	
	
 //banner 右侧轮播图
    var nowimg = 1;

    $(".banner_left_pic").prepend("<div class='maoni'></div>");

    for (var i = 0; i <= 24; i++) {
        $(".maoni").append("<p></p>");
        $(".maoni p").eq(i).css("top", parseInt(i / 5) * 86);
        $(".maoni p").eq(i).css("left", i % 5 * 168);
        $(".maoni p").eq(i).css("background-position", (i % 5 * -168) + "px " + parseInt(i / 5) * -86 + "px");

    }

    $(".banner_left_lis li").click(
        function () {

            if (nowimg < 5) {
                nowimg++;
            } else {
                nowimg = 1;
            }
            $(".banner_left_pic  img").attr("src", "images/banner1" + nowimg + ".jpg");

            $(".maoni p").css("transition", "all 1s ease 0s");
            $(".banner_left_pic").addClass("fei");

            //添加飞的方向：
            $(".maoni p").each(
                function () {
                    $(this).css("-webkit-transform", "rotateX(" + -parseInt(Math.random() * 90) + "deg) rotateY(" + parseInt(Math.random() * 100) + "deg) translateZ(500px)")
                }
            );


            setTimeout(function () {
                $(".baozha").removeClass("fei");
                $(".maoni p").css("transition", "none");
                $(".maoni p").css("background-image", "url(images/banner1" + nowimg + ".jpg)");

                $(".maoni p").css("-webkit-transform", "none");
            }, 1000);
        }
    );











