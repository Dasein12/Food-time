
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar-nav li a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-91
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
