$(document).ready(function() {
    $('.lang-switch__button').on('click', function() {
        $(this).addClass('lang-switch__button--active');
        $('.lang-switch__languages').fadeIn(300); 
        $('.close-overlay').show();
    })
    $('.close-overlay').on('click', function() {
        $('.lang-switch__button').removeClass('lang-switch__button--active');
        $('.lang-switch__languages').fadeOut(300);
        $(this).hide();
    })
})

