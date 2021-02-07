$(document).ready(function () {
    $("#main_about").click(function () {
        var offset;
        if ($("#main_nav").hasClass('navigation')) {
            offset = 260;
        } else {
            offset = 100;
        }
        var topOfElement = document.querySelector('#about-anchor').offsetTop - offset;
        window.scroll({
            top: topOfElement,
            behavior: "smooth"
        });
    });
    $("#main_projects").click(function () {
        var offset;
        if ($("#main_nav").hasClass('navigation')) {
            offset = 5;
        } else {
            offset = 0;
        }
        var topOfElement = document.querySelector('#projects-anchor').offsetTop - offset;
        window.scroll({
            top: topOfElement,
            behavior: "smooth"
        });
    });
});
