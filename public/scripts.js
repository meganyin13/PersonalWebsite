$(document).ready(function () {
    applyClickEvent();
    applyStickyNavigation();
});

var stickyNav;

function applyClickEvent() {
    $('a[href*="#"]').on('click', function(e)
    {
        e.preventDefault();

        if( $( $.attr(this, 'href') ).length > 0 )
        {
            $('html, body').animate(
                {
                    scrollTop: $( $.attr(this, 'href') ).offset().top
                }, 400);
        }
        return false;
    });
}

function applyTypewriter() {
    var el = $('.typewriter-none');
    $('.scroll-down').on('click', function () {
        console.log('hi');
        el.removeClass('typewriter-none');
        el.addClass('typewriter');
    });
}

function applyStickyNavigation()
{
    stickyNav = $('.header').height() + 90;

    $(window).on('scroll', function()
    {
        stickyNavigation();
    });

    stickyNavigation();
}

function stickyNavigation()
{
    if(($(window).scrollTop() > stickyNav))
    {

        $('body').addClass('fixed');
    }
    else
    {
        $('body').removeClass('fixed');
    }
}