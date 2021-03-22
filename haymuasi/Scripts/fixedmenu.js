$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
         $('.fixedmenu').addClass('fix');
    } else {
         $('.fixedmenu').removeClass('fix');
    }
});