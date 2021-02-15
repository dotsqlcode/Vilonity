import $ from 'jquery';
import 'magnific-popup';

$(document).ready(function() {
    $('.tabs').parent().hide();

    $('.offer-section__type-card').each(function() {
        $(this).click('on', function(e) {
            e.preventDefault();
            $('.offer-section__sub-title').hide();
            let category = $(this).attr('data-category');
            let items = $('.tab-container .col-xl-3');
            let buttons = $('.tab-button');
            let buttonCategory;
            items.each(function() {
                $(this).hide();
                if(category == $(this).attr('data-item')) {
                    $(this).show();
                }
                if(category == 'all') {
                    $(this).show();
                }
            })
            buttons.each(function() {
                buttonCategory = $(this).attr('data-category');
                if(category == buttonCategory) {
                    $(this).find('.button').addClass('button--offer-active');
                }
            })
            
            $('.offer-section__container').hide();
            $('.tabs').parent().fadeIn(1000);
        })
    })

    if($('#try-free').length != 0) {
        $('#try-free').magnificPopup({
            items: {
                src: '#popup',
                type: 'inline'
            },
            callbacks: {
                open: function() {
                    $('.main').removeClass('blur-out');
                    $('.main').addClass('blur-in');
                },
                close: function() {
                    $('.main').removeClass('blur-in');
                    $('.main').addClass('blur-out');
                }
              }
        })
    }

    if($('.macros-section__plan-buttons').length != 0) {
        let items = $('.macros-section__plan-buttons .button');
        $('.macros-section__price-sum span').text($('.macros-section__plan-buttons .button:first-child').attr('data-price') + ' RUB')
        items.each(function() {
            $(this).on('click', function() {
                items.each(function() {
                    $(this).removeClass('button--offer-active');
                })
                $(this).addClass('button--offer-active');
                $('.macros-section__price-sum span').text($(this).attr('data-price') + ' RUB')
            })
        })
    }
 

    $('.popup__close').on('click', function() {
        $.magnificPopup.close();
    })

    $('.video-card').each(function() {
        let src = $(this).attr('data-src');
        $(this).magnificPopup({
            items: {
                src: '#video-popup',
                type: 'inline',
            },
            callbacks: {
                open: function() {
                    $('.main').removeClass('blur-out');
                    $('.main').addClass('blur-in');
                },
                close: function() {
                    $('.main').removeClass('blur-in');
                    $('.main').addClass('blur-out');
                },
                beforeOpen: function() {
                    $('#video-popup iframe').attr('src', src);
                },
            }
        })
    })

    

})
