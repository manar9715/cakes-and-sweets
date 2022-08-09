///////////////// Scroll

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("header").addClass("scrolled");

    } else {
        $("header").removeClass("scrolled");

    }
});