$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var objectSelect = $("#projects-anchor")
        var objectPosition = objectSelect.offset().top;

        if (scroll >= objectPosition - 10) {
            $("#main_nav").removeClass("navigation").addClass("navigation-alt");
            $("#main_wrap").removeClass("navigation-wrapper").addClass("navigation-wrapper-alt");
            $("#main-title").removeClass("navigation-title").addClass("navigation-title-alt");
            $("#main_anchors").removeClass("navigation-anchors").addClass("navigation-anchors-alt");


        } else {
            $("#main_nav").addClass("navigation").removeClass("navigation-alt");
            $("#main_wrap").addClass("navigation-wrapper").removeClass("navigation-wrapper-alt");
            $("#main_anchors").addClass("navigation-anchors").removeClass("navigation-anchors-alt");
        }
    });
});
