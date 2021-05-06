/*!
* Start Bootstrap - Agency v6.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on('click', function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).on('scroll', navbarCollapse);

})(jQuery); // End of use strict

var get_bgcolor = function(obj) {
    var real = obj.css('background-color');
    var none = 'rgba(0, 0, 0, 0)';
    if (real === none) {
        return obj.parents().filter(function() {
            return $(this).css('background-color') != none
        }).first().css('background-color');
    } else {
        return real
    }
}

$(document).ready(function(){       
    var scroll_pos = 0;
    maxwidth = $('html').css('max-width');

    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(maxwidth > 1000) {
            if(scroll_pos > 0) {
                $("nav a").css('color', 'white');
                $("nav").css('background-color', 'black');
            } else {
                $("nav").css('background-color', 'transparent');
                $("nav a").css('color', 'black');
                
            }
        }
        else {
            if(scroll_pos > 0) {
                $("nav a").css('color', 'white');
            } else {
                $("nav a").css('color', 'black');
                
            }
        } 
        
    });
});

