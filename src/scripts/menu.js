import $ from "jquery";

$(function () {
    const $menu = $(".mob-menu ");
    const $btn = $(".menu__btn");

    $(window).on('resize', function () {
        if ($(this).width() > 1150) {
            $menu.css('display', 'block')
        }
        else if (!$(".menu__burger").hasClass('burger-position')){
            $menu.css('display', 'none')
        }
    });

    $($btn).on("click", function (e) {
        $(".menu__burger").toggleClass("burger-position");
        $(".menu__burger:eq(0)").toggleClass("burger-top");
        $(".menu__burger:eq(1)").toggleClass("burger-middle");
        $(".menu__burger:eq(2)").toggleClass("burger-bottom");
        $menu.toggle(500);

    });
});
