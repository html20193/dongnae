$(document).ready(function () {
	$(window).on("scroll", scrollMove);

	function scrollMove () {
        var scrollX=$(window).scrollLeft();
        console.log(scrollX);

        if (scrollX>=$('.pos250').offset().left+120) $('.change_bg').removeClass("night").addClass("evening");
        if (scrollX>=$('.pos400').offset().left+120) {
            $('.change_bg').removeClass("evening").addClass("night");
            $('#cnt4').addClass("c_white");
        } else { $('#cnt4').removeClass("c_white");}
        if (scrollX<$('.pos250').offset().left) $('.change_bg').removeClass("evening night");

        if (scrollX>=$('#cnt2').offset().left+50) {$('.about_whale').animate({bottom : '27vh', left : '135vw', height : '50vh', width : '120vw'}, 1500);}
    }
});