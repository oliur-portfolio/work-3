// Search Field Visible Effect
$(document).ready(function () {
    $(".search-area a").click(function () {
        $(".search-field").addClass("search-visible");
        $("body").addClass("overflow");
    });
});

// Search Field Remove Effect
$(document).ready(function () {
    $(".position-cross a").click(function () {
        $(".search-field").removeClass("search-visible");
        $("body").removeClass("overflow");
    });
});

// Animated Hamburger Icon
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change");
    });
});

// Mobile Menu Visible
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".mobile-menu").toggleClass("menu-visible");
        $("main").toggleClass("main-hidden");
        $("footer").toggleClass("menu-overflow1");
    });
});

// Mobile Menu DropDown Visible
$(document).ready(function () {
    $(".mobile-menu .dropdown-hover").click(function () {
        $(".mobile-drop").toggleClass("mobile-drop-visible");
    });
});
