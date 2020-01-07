$(document).ready(function () {

    var $gnb = $('#gnb');
    //메뉴열기 클릭
    $('#hamburger').on('click', function () {
        if ($(this).hasClass('activate')) { //닫기
            $gnb.stop().animate({
                marginLeft : '-120vw',
                opacity : 0
            }, 700, 'easeInOutQuint', function () {
                $(this).css({
                    visibility: 'hidden'
                })
            });

            $(this).removeClass('activate').find('.sr-only').text('메뉴 열기');
        } else {
            scrollL = $(this).scrollLeft();
            var scrollMove = scrollL; //click시 스크롤을 저장
            console.log(scrollMove);

            $(this).addClass('activate').find('sr-only').text('메뉴 닫기');

            var $first = $gnb.find('[data-link="first"]');
            var $last = $gnb.find('[data-link="last"]');

            $gnb.css({
                visibility: 'visible'
            }).stop().animate({
                marginLeft : 0,
                opacity : 1
            }, 700, 'easeInQuart', function () {
                $first.focus(); //대상 엘리먼트에 포커스를 강제로 이동
            });

            //첫번째 a 태그에서 shift+tab을 눌러 header의 영역으로 포커스가 이동하지 못하게 제한
            $first.on('keydown', function (e) {
                console.log(e.keyCode);
                if (e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $last.focus();
                }
            });

            $last.on('keydown', function (e) {
                if (!e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $('#hamburger').focus();
                }
            });
        };
    });
    //top버튼
    $('#footer .back_head').on('click', function () {
        $("html, body").stop().animate({
            scrollLeft: 0
        });
    });
});