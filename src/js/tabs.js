$('.tab-button').each(function() {
    let showCategoryAttr;
    let items;

    $(this).on('click', function() {
        showCategoryAttr    = $(this).attr('data-category');
        items               = $('.tab-container .col-xl-3');

        $('.tab-button').each(function() {
            $(this).find('.button').removeClass('button--offer-active');
        })

        $(this).find('.button').addClass('button--offer-active');

        items.each(function() {
            $(this).hide();
            if(showCategoryAttr == $(this).attr('data-item')) {
                $(this).show();
            }

            if(showCategoryAttr == 'all') {
                $(this).show();
            }
        })
    })
})