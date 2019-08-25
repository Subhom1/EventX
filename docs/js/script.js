$(document).ready(function () {


    // var waypoints = $('#handler-first').waypoint(function (direction) {
    //     notify(this.element.id + ' hit 25% from top of window')
    // }, {
    //         offset: '25%'
    //     })

    $('#topheader .navbar-nav a').on('click', function () {
        $('#topheader .navbar-nav').find('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    /* Scroll on buttons */
    $('.js--scroll-to-home').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-home').offset().top }, 1000);
    });
    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-about').offset().top }, 1000);
    });
    $('.js--scroll-to-speakers').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-speakers').offset().top }, 1000);
    });
    $('.js--scroll-to-schedule').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-schedule').offset().top }, 1000);
    });

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-contact').offset().top }, 1000);
    });

/* For the sticky navigation */
    $('nav').removeClass('sticky');
    $('.js--buyticket').waypoint(function (direction) {
        
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        });
});