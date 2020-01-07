$(document).ready(function () {
	/* indicator 메뉴 슬라이딩 */
	var $menu=$("#indicator ul li");
    var $cnt=$("#content article");
    
    $menu.eq(0).addClass("on");

	//1) click
	$menu.children().on("click",function  () {
		//class 제어
		$(this).parent().addClass("on").siblings().removeClass("on");
		//animate
		var tg=$(this).attr("href");
		var posX=$(tg).offset().left;
		console.log(tg, posX);

		$(window).off("scroll");
		$("html, body").animate({scrollLeft:posX}, 400, function  () {
			$(window).on("scroll", scrollMove);
		});
		
		return false;
	});

	//2) scroll
	$(window).on("scroll", scrollMove);

	function scrollMove () {
		var scrollX=$(window).scrollLeft();
		console.log(scrollX);

		$cnt.each(function  (idx) {
			if (scrollX>=$(this).offset().left) $menu.eq(idx).addClass("on").siblings().removeClass("on");
			else if (scrollX == $(document).width()-$(window).width()) $menu.eq(-1).addClass("on").siblings().removeClass("on");
    });
        
		if (scrollX>=$('.star_motion').offset().left - 80) $menu.parent().addClass("op");
		else if (scrollX<$('.star_motion').offset().left) $menu.parent().removeClass("op");
		
		/* bg change edit */
		if (scrollX  < $('#cnt3').offset().left) {
			$('#scrollX').removeClass().addClass('change_bg');
			$('#cnt4').removeClass("c_white");
		} else if (scrollX  < $('#cnt4').offset().left) {
			$('#scrollX').removeClass().addClass('evening');
			$('#cnt4').removeClass("c_white");
		} else {
			$('#scrollX').removeClass().addClass('night');
			$('#cnt4').addClass("c_white");
		}
				/* 
				if (scrollX>=$('.pos250').offset().left) $('.change_bg').removeClass("night").addClass("evening");
        if (scrollX>=$('.pos400').offset().left) {
            $('.change_bg').removeClass("evening").addClass("night");
            $('#cnt4').addClass("c_white");
        } else { $('#cnt4').removeClass("c_white");}
        if (scrollX<$('.pos250').offset().left) $('.change_bg').removeClass("evening night"); */
    }
});