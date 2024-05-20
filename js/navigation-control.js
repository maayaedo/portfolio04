$(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 250) {
            $("header").css('top','0');
        } else {
            $("header").css('top','-200px');
        }
    });
});