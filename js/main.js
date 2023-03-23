$(function () {



    $('.main_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 900) {
            var scroll = $(window).scrollTop() - 900;
            var scale = 1 + scroll / 1000;
            $(".image").css({
                "transform": "scale(" + scale + ")"
            });
        }
    });

})