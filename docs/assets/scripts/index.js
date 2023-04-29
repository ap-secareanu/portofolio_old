$(document).ready(function() {

    // Scroll Fade in animation

    let screenHeight = window.innerHeight;


    $(window).on('scroll', function() {

        let currentPos = $(window).scrollTop();
        
        if(currentPos >= 700 && screenHeight <= 1000) {
            $('#about').addClass('show');
        } else if (currentPos >= 1000 && screenHeight >= 1000) {
            $('#about').addClass('show');
        } else if (currentPos >= 600 && screenHeight <= 700) {
            $('#about').addClass('show');
        } else {
            $('#about').removeClass('show');
        }

        if(currentPos >= 962 && (screenHeight <= 1000 && screenHeight >= 700)) {
            $('#exp').addClass('show');
        } else if (currentPos >= 1322 && screenHeight >= 1000) {
            $('#exp').addClass('show');
        } else if (currentPos >= 1300 && screenHeight <= 700) {
            $('#exp').addClass('show');
        } else {
            $('#exp').removeClass('show');
        }

        if(currentPos >= 2300 && (screenHeight <= 1000 && screenHeight >= 700)) {
            $('#edu').addClass('show');
        } else if (currentPos >= 2500 && screenHeight >= 1000) {
            $('#edu').addClass('show');
        } else if (currentPos >= 3000 && screenHeight <= 700) {
            $('#edu').addClass('show');
        } else {
            $('#edu').removeClass('show');
        }

        if(currentPos >= 3040 && (screenHeight <= 1000 && screenHeight >= 700)) {
            $('#contact').addClass('show');
        } else if (currentPos >= 3140 && screenHeight >= 1000) {
            $('#contact').addClass('show');
        } else if (currentPos >= 4300 && screenHeight <= 700) {
            $('#contact').addClass('show');
        }else {
            $('#contact').removeClass('show');
        }

        console.log(currentPos, screenHeight)


    })
    // Scroll Fade in animation



    // Mobile menu
    $('.hamburger').click(function() {
        if($('.hamburger').hasClass('is-active')) {
            $('.hamburger').removeClass('is-active');
            $('#nav_mobile').removeClass('come');
            $('body').css('overflow-y', 'scroll');
            $('.overlay').css('display', 'none')
        } else {
            $('.hamburger').addClass('is-active');
            $('#nav_mobile').addClass('come');
            $('body').css('overflow-y', 'hidden')
            $('.overlay').css('display', 'inline-block')
        }
    })
    
    $('#nav_mobile a').click(function() {
        if($('.hamburger').hasClass('is-active')) {
            $('.hamburger').removeClass('is-active');
            $('#nav_mobile').removeClass('come');
            $('body').css('overflow-y', 'scroll');
            $('.overlay').css('display', 'none')
        } else {
            $('.hamburger').addClass('is-active');
            $('#nav_mobile').addClass('come');
            $('body').css('overflow-y', 'hidden')
            $('.overlay').css('display', 'inline-block')
        }
    })
    // Mobile menu
    

    // Heading Dot animation
    const showDot = () => {
        $('.heading_dot').removeClass('hide')
        $('.heading_dot').addClass('show');
    };
    const hideDot = () => {
        $('.heading_dot').addClass('hide');
        $('.heading_dot').removeClass('show')
    }

    setInterval(hideDot, 500);
    setInterval(showDot, 1000);
    // Heading Dot animation




})