$(document).ready(function() {
    $('.nav-mobile__burger').click(function() {
        $('.nav-mobile__menu').fadeIn(300);
        $('.info-section, .video-section').removeClass('blur-out');
        $('.info-section, .video-section').addClass('blur-in');
    })
    $('.nav-mobile__close').click(function () {
        $('.nav-mobile__menu').fadeOut(300);
        $('.info-section, .video-section').removeClass('blur-in');
        $('.info-section, .video-section').addClass('blur-out');
    })
})