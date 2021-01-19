(function ($) {
    "use strict";
    $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        linkElement: ".animsition-link",
        loading: true,
        loadingParentElement: "html",
        loadingClass: "animsition-loading-1",
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ["animation-duration", "-webkit-animation-duration"],
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "html",
        transition: function (url) {
            window.location.href = url;
        },
    });
    var windowH = $(window).height() / 2;
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css("display", "flex");
        } else {
            $("#myBtn").css("display", "none");
        }
    });
    $("#myBtn").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });
    var headerDesktop = $(".container-menu-desktop");
    var wrapMenu = $(".wrap-menu-desktop");
    if ($(".top-bar").length > 0) {
        var posWrapHeader = $(".top-bar").height();
    } else {
        var posWrapHeader = 0;
    }
    if ($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass("fix-menu-desktop");
        $(wrapMenu).css("top", 0);
    } else {
        $(headerDesktop).removeClass("fix-menu-desktop");
        $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
    }
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass("fix-menu-desktop");
            $(wrapMenu).css("top", 0);
        } else {
            $(headerDesktop).removeClass("fix-menu-desktop");
            $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
        }
    });
    $(".btn-show-menu-mobile").on("click", function () {
        $(this).toggleClass("is-active");
        $(".menu-mobile").slideToggle();
    });
    var arrowMainMenu = $(".arrow-main-menu-m");
    for (var i = 0; i < arrowMainMenu.length; i++) {
        $(arrowMainMenu[i]).on("click", function () {
            $(this).parent().find(".sub-menu-m").slideToggle();
            $(this).toggleClass("turn-arrow-main-menu-m");
        });
    }
    $(window).resize(function () {
        if ($(window).width() >= 992) {
            if ($(".menu-mobile").css("display") == "block") {
                $(".menu-mobile").css("display", "none");
                $(".btn-show-menu-mobile").toggleClass("is-active");
            }
            $(".sub-menu-m").each(function () {
                if ($(this).css("display") == "block") {
                    console.log("hello");
                    $(this).css("display", "none");
                    $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
                }
            });
        }
    });
    var $topeContainer = $(".isotope-grid");
    var $filter = $(".filter-tope-group");
    $filter.each(function () {
        $filter.on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $topeContainer.isotope({ filter: filterValue });
        });
    });
    $(window).on("load", function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({ itemSelector: ".isotope-item", layoutMode: "fitRows", percentPosition: true, animationEngine: "best-available", masonry: { columnWidth: ".isotope-item" } });
        });
    });
    var isotopeButton = $(".filter-tope-group button");
    $(isotopeButton).each(function () {
        $(this).on("click", function () {
            for (var i = 0; i < isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass("how-active1");
            }
            $(this).addClass("how-active1");
        });
    });
    $(".js-show-modal1").on("click", function (e) {
        e.preventDefault();
        $(".js-modal1").addClass("show-modal1");
    });
    $(".js-hide-modal1").on("click", function () {
        $(".js-modal1").removeClass("show-modal1");
    });

    $(".js-show-modal2").on("click", function (e) {
        e.preventDefault();
        $(".js-modal2").addClass("show-modal2");
    });
    $(".js-hide-modal2").on("click", function () {
        $(".js-modal2").removeClass("show-modal2");
    });

    // item3

    $(".js-show-modal3").on("click", function (e) {
        e.preventDefault();
        $(".js-modal3").addClass("show-modal3");
    });
    $(".js-hide-modal3").on("click", function () {
        $(".js-modal3").removeClass("show-modal3");
    });
    //item3

    //item4    
    $(".js-show-modal4").on("click", function (e) {
        e.preventDefault();
        $(".js-modal4").addClass("show-modal4");
    });
    $(".js-hide-modal4").on("click", function () {
        $(".js-modal4").removeClass("show-modal4");
    });
    //item4
    //item5    
    $(".js-show-modal5").on("click", function (e) {
        e.preventDefault();
        $(".js-modal5").addClass("show-modal5");
    });
    $(".js-hide-modal5").on("click", function () {
        $(".js-modal5").removeClass("show-modal5");
    });
    //item5
    //item6    
    $(".js-show-modal6").on("click", function (e) {
        e.preventDefault();
        $(".js-modal6").addClass("show-modal6");
    });
    $(".js-hide-modal6").on("click", function () {
        $(".js-modal6").removeClass("show-modal6");
    });
    //item6
    //item7    
    $(".js-show-modal7").on("click", function (e) {
        e.preventDefault();
        $(".js-modal7").addClass("show-modal7");
    });
    $(".js-hide-modal7").on("click", function () {
        $(".js-modal7").removeClass("show-modal7");
    });
    //item7
    //item8    
    $(".js-show-modal8").on("click", function (e) {
        e.preventDefault();
        $(".js-modal8").addClass("show-modal8");
    });
    $(".js-hide-modal8").on("click", function () {
        $(".js-modal8").removeClass("show-modal8");
    });
    //item8
    //item9    
    $(".js-show-modal9").on("click", function (e) {
        e.preventDefault();
        $(".js-modal9").addClass("show-modal9");
    });
    $(".js-hide-modal9").on("click", function () {
        $(".js-modal9").removeClass("show-modal9");
    });
    //item9
    //item10    
    $(".js-show-modal10").on("click", function (e) {
        e.preventDefault();
        $(".js-modal10").addClass("show-modal10");
    });
    $(".js-hide-modal10").on("click", function () {
        $(".js-modal10").removeClass("show-modal10");
    });
	//item10
})(jQuery);
